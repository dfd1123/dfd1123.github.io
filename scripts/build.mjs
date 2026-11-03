// Blog build: planning/series.json (private, gitignored) + content/posts/<slug>/{ko,en}.md -> static HTML.
// Usage:
//   node scripts/build.mjs              build the public site (published episodes only)
//   node scripts/build.mjs --preview    also include drafts/<slug>/ and write everything to _preview/
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const preview = process.argv.includes('--preview');
const out = preview ? join(root, '_preview') : root;
const SITE = 'https://dfd1123.github.io';

const read = (p) => readFileSync(join(root, p), 'utf8');
const write = (p, s) => { const f = join(out, p); mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, s); };
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pad = (n) => String(n).padStart(2, '0');

const KIND = { perspective: { ko: '관점', en: 'Perspective' }, solution: { ko: '해결', en: 'Problem solving' } };
const series = JSON.parse(read('planning/series.json'));
const chapterOf = (n) => series.chapters.find((c) => c.chapter === n);

function parse(text, file) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) throw new Error(`${file}: missing front matter`);
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '');
  }
  for (const k of ['title', 'summary']) if (!meta[k]) throw new Error(`${file}: front matter needs "${k}"`);
  return { meta, html: marked.parse(m[2]) };
}

function loadPost(ep) {
  for (const base of preview ? ['drafts', 'content/posts'] : ['content/posts']) {
    const dir = join(base, ep.slug);
    if (existsSync(join(root, dir, 'ko.md')) && existsSync(join(root, dir, 'en.md'))) {
      return { ...ep, ko: parse(read(join(dir, 'ko.md')), `${dir}/ko.md`), en: parse(read(join(dir, 'en.md')), `${dir}/en.md`), draft: base === 'drafts' };
    }
  }
  return null;
}

const posts = [];
for (const ep of series.episodes) {
  const wanted = ep.status === 'published' || (preview && ['draft', 'approved'].includes(ep.status));
  if (!wanted) continue;
  const p = loadPost(ep);
  if (!p) throw new Error(`episode ${ep.ep} (${ep.status}) has no ko.md/en.md`);
  posts.push(p);
}
posts.sort((a, b) => a.ep - b.ep);

const header = (pre) => `
    <header class="site-header">
      <a class="wordmark" href="${pre}index.html" aria-label="김종완 홈" data-i18n-aria="homeLabel">D<span>.</span>K</a>
      <nav aria-label="주요 메뉴">
        <a href="${pre}index.html#story" data-i18n="navStory">나의 이야기</a>
        <a href="${pre}index.html#perspective" data-i18n="navPerspective">생각</a>
        <a href="${pre}posts/index.html" data-i18n="navWriting">연재</a>
        <button id="language-toggle" class="language-toggle" type="button" aria-label="Switch language">EN</button>
      </nav>
    </header>`;
const footer = (pre) => `
    <footer class="site-footer">
      <a class="footer-name" href="${pre}index.html">김종완 <span>Derek Kim</span></a>
      <span><span data-i18n="role">책임연구원</span> · <span data-company>레인보우로보틱스</span></span>
      <span>© ${new Date().getFullYear()}</span>
    </footer>
    <script src="${pre}script.js"></script>`;
const page = ({ pre, titleKo, titleEn, descKo, descEn, body, canonical }) => `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#101b1a" />
    <meta name="description" id="meta-description" content="${esc(descKo)}" />
    <meta property="og:title" content="${esc(titleKo)}" />
    <meta property="og:description" content="${esc(descKo)}" />
    <link rel="canonical" href="${SITE}/${canonical}" />
    <link rel="alternate" type="application/rss+xml" title="김종완 Derek Kim" href="${pre}feed.xml" />
    <title>${esc(titleKo)}</title>
    <link rel="stylesheet" href="${pre}styles.css" />
  </head>
  <body data-title-ko="${esc(titleKo)}" data-title-en="${esc(titleEn)}" data-desc-ko="${esc(descKo)}" data-desc-en="${esc(descEn)}">${header(pre)}
${body}${footer(pre)}
  </body>
</html>
`;
const bi = (ko, en) => `<span data-lang="ko">${ko}</span><span data-lang="en" lang="en">${en}</span>`;
const fmtDate = (d, lang) => {
  if (!d) return lang === 'ko' ? '발행 전' : 'Unpublished';
  const [y, m, day] = d.split('-').map(Number);
  return lang === 'ko' ? `${y}년 ${m}월 ${day}일` : new Date(Date.UTC(y, m - 1, day)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
};

// ---- episode pages
posts.forEach((p, i) => {
  const prev = posts[i - 1], next = posts[i + 1];
  const ch = chapterOf(p.chapter);
  const article = (lang) => {
    const d = p[lang];
    const meta = `EP.${pad(p.ep)} · ${p.period} · ${KIND[p.kind][lang]} · ${lang === 'ko' ? `${ch.chapter}장 ${ch.title_ko}` : `Ch.${ch.chapter} ${ch.title_en}`}`;
    const note = lang === 'ko'
      ? '개인의 경험과 관점을 담은 글이며, 회사의 공식 입장과 무관합니다. 내부 구현과 명칭은 일반화해 적었습니다.'
      : 'This is a personal account and does not represent my employer. Internal details and names have been generalized.';
    return `
      <article class="post" data-lang="${lang}" lang="${lang}">
        <div class="post-hero">
          <div class="post-wrap">
            <p class="post-meta">${esc(meta)}</p>
            <h1>${esc(d.meta.title)}</h1>
            <p class="post-summary">${esc(d.meta.summary)}</p>
            <p class="post-date">${p.draft ? (lang === 'ko' ? '초안 미리보기' : 'Draft preview') : esc(fmtDate(p.published_at, lang))}</p>
          </div>
        </div>
        <div class="post-wrap post-body">${d.html}</div>
        <p class="post-wrap post-note">${note}</p>
      </article>`;
  };
  const navLink = (q, dir) => q ? `<a href="../${q.slug}/index.html"><small>${dir === 'prev' ? bi('← 이전 화', '← Previous') : bi('다음 화 →', 'Next →')}</small>${bi(esc(q.ko.meta.title), esc(q.en.meta.title))}</a>` : '<span></span>';
  const body = `
    <main>${article('ko')}${article('en')}
      <nav class="post-wrap post-nav" aria-label="episodes">${navLink(prev, 'prev')}${navLink(next, 'next')}</nav>
      <p class="post-wrap post-all"><a href="../index.html">${bi('전체 연재 보기', 'All episodes')}</a></p>
    </main>`;
  write(`posts/${p.slug}/index.html`, page({
    pre: '../../', canonical: `posts/${p.slug}/`, body,
    titleKo: `EP.${pad(p.ep)} ${p.ko.meta.title} — 김종완`, titleEn: `EP.${pad(p.ep)} ${p.en.meta.title} — Derek Kim`,
    descKo: p.ko.meta.summary, descEn: p.en.meta.summary,
  }));
});

// ---- archive
const item = (p, pre) => `
          <a class="writing-item" href="${pre}posts/${p.slug}/index.html">
            <span class="writing-index">${pad(p.ep)}</span>
            <div><span class="writing-topic">EP.${pad(p.ep)} · ${p.period} · ${bi(KIND[p.kind].ko, KIND[p.kind].en)}</span><h3>${bi(esc(p.ko.meta.title), esc(p.en.meta.title))}</h3></div>
            <span class="writing-arrow" aria-hidden="true">↗</span>
          </a>`;
const chapters = series.chapters.map((c) => {
  const list = posts.filter((p) => p.chapter === c.chapter);
  if (!list.length) return '';
  return `
      <section class="archive-chapter">
        <div class="section-kicker"><span>${pad(c.chapter)}</span> <span>${bi(esc(c.title_ko), esc(c.title_en))} · ${esc(c.period)}</span></div>
        <div class="writing-list">${list.map((p) => item(p, '../')).join('')}
        </div>
      </section>`;
}).join('');
write('posts/index.html', page({
  pre: '../', canonical: 'posts/',
  titleKo: '연재 — 김종완', titleEn: 'Series — Derek Kim',
  descKo: '로봇 웹 앱 하나에서 플랫폼까지. 실제로 일어난 순서대로 쓰는 연재.', descEn: 'From one robot web app to a platform, told in the order it happened.',
  body: `
    <main>
      <div class="post-hero"><div class="section-wrap">
        <p class="post-meta">THE SERIES</p>
        <h1>${bi('로봇 웹 앱 하나에서 플랫폼까지.', 'From one robot web app to a platform.')}</h1>
        <p class="post-summary">${bi('실제로 일어난 순서대로, 매주 주말 4편씩 연재합니다.', 'Told in the order it happened. Four new episodes every weekend.')}</p>
      </div></div>
      <div class="section-wrap archive">${chapters || `<p class="archive-empty">${bi('1화를 쓰고 있습니다.', 'Episode 1 is being written.')}</p>`}
      </div>
    </main>`,
}));

// ---- home page: series block between markers
const homePath = 'index.html';
let home = read(homePath);
const published = posts.filter((p) => !p.draft || preview);
let block;
if (published.length) {
  const latest = [...published].reverse().slice(0, 3);
  const last = published[published.length - 1];
  block = `
        <div class="writing-list">${latest.map((p) => item(p, '')).join('')}
        </div>
        <p class="publishing-note"><span class="status-dot"></span> ${bi(`${last.ep}화까지 발행 · <a href="posts/index.html">전체 연재 보기</a>`, `Up to episode ${last.ep} · <a href="posts/index.html">All episodes</a>`)}</p>`;
} else {
  const upcoming = series.episodes.slice(0, 3);
  block = `
        <div class="writing-list">${upcoming.map((e) => `
          <article class="writing-item">
            <span class="writing-index">${pad(e.ep)}</span>
            <div><span class="writing-topic">EP.${pad(e.ep)} · ${e.period}</span><h3>${bi(esc(e.work_title_ko), esc(e.work_title_en || e.work_title_ko))}</h3></div>
            <span class="writing-arrow" aria-hidden="true">↗</span>
          </article>`).join('')}
        </div>
        <p class="publishing-note"><span class="status-dot"></span> ${bi('1화를 쓰고 있습니다', 'Episode 1 is being written')}</p>`;
}
const START = '<!-- SERIES:START -->', END = '<!-- SERIES:END -->';
if (!home.includes(START)) throw new Error('index.html is missing SERIES markers');
home = home.replace(new RegExp(`${START}[\\s\\S]*?${END}`), `${START}${block}\n        ${END}`);
write(homePath, home);

// ---- RSS
const items = [...published].reverse().map((p) => `
    <item>
      <title>${esc(`EP.${pad(p.ep)} ${p.ko.meta.title}`)}</title>
      <link>${SITE}/posts/${p.slug}/</link>
      <guid>${SITE}/posts/${p.slug}/</guid>
      ${p.published_at ? `<pubDate>${new Date(p.published_at + 'T09:00:00+09:00').toUTCString()}</pubDate>` : ''}
      <description>${esc(p.ko.meta.summary)}</description>
    </item>`).join('');
write('feed.xml', `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>김종완 Derek Kim — 로봇 소프트웨어 작업 일지</title>
    <link>${SITE}/</link>
    <description>로봇 웹 앱 하나에서 플랫폼까지, 실제로 일어난 순서대로 쓰는 연재.</description>
    <language>ko</language>${items}
  </channel>
</rss>
`);

if (preview) for (const f of ['styles.css', 'script.js']) copyFileSync(join(root, f), join(out, f));
console.log(`built ${posts.length} episode(s)${preview ? ' [preview → _preview/]' : ''}`);
