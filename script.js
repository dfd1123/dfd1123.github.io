const copy = {
  ko: {
    title: '김종완 Derek Kim — Robotics Middleware',
    description: '김종완 책임연구원. 레인보우로보틱스에서 여러 로봇 제품을 하나의 사용자 경험과 확장 가능한 소프트웨어 플랫폼으로 연결하는 미들웨어 시스템을 만듭니다.',
    homeLabel: '김종완 홈',
    navStory: '나의 이야기',
    navPerspective: '만드는 관점',
    navWriting: '기술 기록',
    role: '책임연구원',
    heroTitle: '로봇이 달라도,<br /><em>경험은 하나로.</em>',
    heroLead: '레인보우로보틱스에서 여러 로봇 제품을 하나의 사용자 경험과 확장 가능한 소프트웨어 플랫폼으로 연결하는 <strong>미들웨어 시스템</strong>을 만듭니다.',
    heroLink: '제가 만드는 시스템',
    scrollExplore: 'SCROLL TO EXPLORE ↓',
    whyBuild: 'WHY I BUILD',
    storyTitle: '사용자 경험을 잇는 일에서<br /><span>플랫폼을 만드는 일로.</span>',
    storyBody: '로봇마다 다른 UI와 사용 방식을 하나로 잇고 싶었습니다. 그 문제를 풀기 위해 공통 소프트웨어 기반을 만들기 시작했고, 지금은 더 많은 기능과 개발자, AI가 함께할 수 있는 생태계로 확장하고 있습니다.',
    stepOne: '01 / THE START',
    stepOneTitle: '경험을 하나로',
    stepOneBody: '서로 다른 로봇을 사용하는 사람에게 일관된 경험을 제공하는 것.',
    stepTwo: '02 / THE FOUNDATION',
    stepTwoTitle: '기반을 공통으로',
    stepTwoBody: '로봇과 기능이 달라도 함께 작동할 수 있는 소프트웨어 기반을 만드는 것.',
    stepThree: "03 / WHAT'S NEXT",
    stepThreeTitle: '생태계를 열기',
    stepThreeBody: '새로운 기능과 개발자, AI가 로봇의 능력을 확장하도록 돕는 것.',
    bigPicture: 'THE BIG PICTURE',
    manifestoQuote: '“로봇 한 대를 움직이는 것을 넘어,<br />로봇이 <em>함께 진화하는 기반</em>을 만듭니다.”',
    manifestoNote: '제품의 복잡함은 시스템 안으로. 가능성은 생태계 밖으로.',
    fieldNotes: 'NOTES FROM THE FIELD',
    writingTitle: '만들며 배운 것들.',
    writingIntro: '결과보다 판단을, 구현보다 원칙을 기록합니다.',
    topicOne: 'ORIGIN / PRODUCT THINKING',
    articleOne: '왜 로봇마다 사용자 경험이 달라야 할까',
    topicTwo: 'PLATFORM / SYSTEM DESIGN',
    articleTwo: '통합 UI를 만들다 미들웨어를 설계하게 된 이유',
    topicThree: 'FUTURE / AI & ECOSYSTEM',
    articleThree: 'AI 시대, 로봇 플랫폼은 무엇을 열어야 할까',
    publishing: '첫 번째 기록을 준비하고 있습니다',
    closingEyebrow: 'ONE EXPERIENCE. MANY POSSIBILITIES.',
    closingTitle: '다음 로봇의 가능성까지<br /><em>연결합니다.</em>',
    backTop: '처음으로',
    navLabel: '주요 메뉴',
    languageLabel: 'Switch language',
    company: '레인보우로보틱스',
  },
  en: {
    title: 'Derek Kim — Robotics Middleware',
    description: 'Derek Kim, Principal Research Engineer at Rainbow Robotics, building middleware that brings multiple robot products together through one user experience and an extensible software platform.',
    homeLabel: 'Derek Kim home',
    navStory: 'My story',
    navPerspective: 'My approach',
    navWriting: 'Writing',
    role: 'Principal Research Engineer',
    heroTitle: 'Different robots.<br /><em>One experience.</em>',
    heroLead: 'At Rainbow Robotics, I build the <strong>middleware system</strong> that connects multiple robot products through one user experience and an extensible software platform.',
    heroLink: 'What I build',
    scrollExplore: 'SCROLL TO EXPLORE ↓',
    whyBuild: 'WHY I BUILD',
    storyTitle: 'From connecting user experiences<br /><span>to building a platform.</span>',
    storyBody: 'I started with a simple goal: make robots with different interfaces and workflows feel consistent to the people using them. Solving that problem called for a shared software foundation. Today, that foundation is growing into an ecosystem for more capabilities, developers, and AI.',
    stepOne: '01 / THE START',
    stepOneTitle: 'Unify the experience',
    stepOneBody: 'Give people a consistent way to work with different robot products.',
    stepTwo: '02 / THE FOUNDATION',
    stepTwoTitle: 'Build shared foundations',
    stepTwoBody: 'Create software foundations that work across robots and capabilities.',
    stepThree: "03 / WHAT'S NEXT",
    stepThreeTitle: 'Open the ecosystem',
    stepThreeBody: 'Enable new capabilities, developers, and AI to extend what robots can do.',
    bigPicture: 'THE BIG PICTURE',
    manifestoQuote: '“Beyond moving a single robot,<br />I build foundations where robots <em>evolve together.</em>”',
    manifestoNote: 'Complexity handled by the system. Possibility opened by the ecosystem.',
    fieldNotes: 'NOTES FROM THE FIELD',
    writingTitle: 'Lessons from building.',
    writingIntro: 'I write about the decisions behind the results, and the principles behind the implementation.',
    topicOne: 'ORIGIN / PRODUCT THINKING',
    articleOne: 'Why should every robot feel different to use?',
    topicTwo: 'PLATFORM / SYSTEM DESIGN',
    articleTwo: 'How building a unified UI led me to middleware',
    topicThree: 'FUTURE / AI & ECOSYSTEM',
    articleThree: 'What should a robot platform unlock in the age of AI?',
    publishing: 'The first essay is in the works',
    closingEyebrow: 'ONE EXPERIENCE. MANY POSSIBILITIES.',
    closingTitle: 'Connecting to what robots<br /><em>can become.</em>',
    backTop: 'Back to top',
    navLabel: 'Main navigation',
    languageLabel: '언어 전환',
    company: 'Rainbow Robotics',
  },
};

const languageButton = document.querySelector('#language-toggle');
const metaDescription = document.querySelector('#meta-description');

function setLanguage(language) {
  const selectedCopy = copy[language] ?? copy.ko;
  document.documentElement.lang = language;
  document.title = selectedCopy.title;
  metaDescription.content = selectedCopy.description;
  document.querySelector('nav[aria-label]')?.setAttribute('aria-label', selectedCopy.navLabel);
  languageButton.textContent = language === 'ko' ? 'EN' : 'KO';
  languageButton.setAttribute('aria-label', selectedCopy.languageLabel);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (selectedCopy[key]) element.textContent = selectedCopy[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (selectedCopy[key]) element.innerHTML = selectedCopy[key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const key = element.dataset.i18nAria;
    if (selectedCopy[key]) element.setAttribute('aria-label', selectedCopy[key]);
  });
  document.querySelectorAll('[data-company]').forEach((company) => {
    company.textContent = selectedCopy.company;
  });

  localStorage.setItem('site-language', language);
}

languageButton.addEventListener('click', () => {
  setLanguage(document.documentElement.lang === 'ko' ? 'en' : 'ko');
});

setLanguage(localStorage.getItem('site-language') || 'ko');
