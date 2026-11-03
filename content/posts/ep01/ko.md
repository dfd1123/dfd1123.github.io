---
title: 로봇마다 고객마다 매번 새로운 UI를 만들 순 없다
summary: 업체마다 화면을 새로 만들어 주던 시절, 사비 30만 원 들인 장표로 통합을 제안했던 이야기. 그리고 내가 로봇 소프트웨어를 웹으로 가자고 했던 이유.
---
2025년 3월에 레인보우로보틱스에 입사했다. 배정받은 곳은 사족보행 로봇이랑 모바일 로봇을 하는 사업부의 웹개발팀이었고, 내가 할 일은 로봇을 팔 수 있게 상용화용 UI를 만드는 거였다.

협동로봇은 이미 7~8년 전부터 팔고 있던 제품이었지만, 모바일 로봇은 이제 막 판매가 시작된 단계였다. 로봇은 있는데 그걸 둘러싼 소프트웨어는 아직 한참 만들어지는 중이었달까. 그리고 그때는 지금처럼 코딩 AI 에이전트가 발전하기 전이라, 웹 화면을 AI한테 통째로 맡긴다는 건 생각하기 어려웠다. 결국 사람이 만들어야 했다.

## 업체마다 원하는 화면이 다 달랐다

일을 하다 보니 바로 보이는 게 있었다. 로봇을 사 가는 업체마다 원하는 UI가 전부 달랐다.

당연한 얘기다. 같은 로봇이어도 업체마다 쓰는 용도도, 쓰는 방식도 다르니까. 문제는 그걸 대하는 방식이었다. 회사는 업체가 원하는 대로 웹개발팀이 다 맞춰서 만들어 주자는 쪽이었다.

회사 입장도 이해는 됐다. 고객이 원하는 걸 해 주는 게 맞으니까. 근데 이렇게 가면 고객이 늘어날수록 우리가 만들어야 하는 화면도 같이 늘어난다. 로봇이 잘 팔리면 잘 팔릴수록 웹개발팀이 감당할 일이 쌓이는 구조였다. 나는 이게 너무 비효율적이라고 느꼈다.

그래서 생각을 좀 바꿔 봤다. 업체 화면을 우리가 빨리 만들어 주는 게 아니라, 업체가 자기한테 맞는 화면을 직접 만들 수 있게 하면 어떨까?

원래 업체 맞춤 솔루션은 SI 부서나 팀이 하는 일이다. 그 사람들이 우리 API랑 통신 인터페이스를 가져다 훨씬 빠르게 만들 수 있게 해 주면 되지 않을까. 아니, 더 나아가서 로봇을 사 간 업체가 직접 UI를 커스텀하고 개발할 수 있게 해 주면? 회사는 비용을 줄이고, 업체는 만족도가 올라간다.

## 그러려면 로봇들이 하나로 묶여 있어야 했다

근데 여기서 막히는 게 있었다. 우리 회사는 로봇 제품군이 정말 많다. 그리고 새 로봇이 나올 때마다 UI를 다시 만들고, SDK를 다시 설계하고, 외부에 줄 문서를 다시 만드는 일이 매번 처음부터 반복되고 있었다.

이 상태에서 업체한테 "직접 만드세요" 하면, 업체는 로봇마다 다른 방식을 따로따로 배워야 한다. 누가 됐든 직접 만들 수 있게 하려면, 먼저 여러 로봇이 하나의 통합된 시스템으로 묶여 있어야 했다.

<figure class="diagram"><svg viewBox="0 0 760 420" role="img" aria-label="통합 SW를 바탕에 깔고, 필요한 화면만 그 위에 올린다" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#65716b"/></marker></defs><text x="190" y="30" font-size="15" fill="#14201e" text-anchor="middle" font-weight="700" font-family="inherit">이전</text><text x="570" y="30" font-size="15" fill="#14201e" text-anchor="middle" font-weight="700" font-family="inherit">제안</text><line x1="380" y1="15" x2="380" y2="405" stroke="#c3cabf" stroke-dasharray="3 5"/><rect x="20" y="52" width="105" height="52" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="72.5" y="75.0" font-size="12" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">고객사 1</text><text x="72.5" y="92.0" font-size="10.5" fill="#65716b" text-anchor="middle" font-weight="400" font-family="inherit">맞춤 화면 요청</text><line x1="72" y1="106" x2="72" y2="128" stroke="#65716b" stroke-width="1.4" marker-end="url(#ah)"/><rect x="135" y="52" width="105" height="52" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="187.5" y="75.0" font-size="12" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">고객사 2</text><text x="187.5" y="92.0" font-size="10.5" fill="#65716b" text-anchor="middle" font-weight="400" font-family="inherit">맞춤 화면 요청</text><line x1="187" y1="106" x2="187" y2="128" stroke="#65716b" stroke-width="1.4" marker-end="url(#ah)"/><rect x="250" y="52" width="105" height="52" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="302.5" y="75.0" font-size="12" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">고객사 3</text><text x="302.5" y="92.0" font-size="10.5" fill="#65716b" text-anchor="middle" font-weight="400" font-family="inherit">맞춤 화면 요청</text><line x1="302" y1="106" x2="302" y2="128" stroke="#65716b" stroke-width="1.4" marker-end="url(#ah)"/><rect x="20" y="132" width="335" height="44" rx="10" fill="#ff7454" stroke="#ff7454" stroke-width="1.2"/><text x="187.5" y="158.55" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="700" font-family="inherit">웹개발팀이 고객사마다 화면을 새로</text><rect x="28" y="196" width="89" height="26" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="72.5" y="212.85" font-size="11" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">UI</text><rect x="28" y="226" width="89" height="26" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="72.5" y="242.85" font-size="11" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">SDK</text><rect x="28" y="256" width="89" height="26" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="72.5" y="272.85" font-size="11" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">문서</text><rect x="20" y="318" width="105" height="44" rx="10" fill="#eef0e8" stroke="#c3cabf" stroke-width="1.2"/><text x="72.5" y="344.55" font-size="13" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">로봇 A</text><line x1="72" y1="316" x2="72" y2="290" stroke="#65716b" stroke-width="1.4" marker-end="url(#ah)"/><rect x="143" y="196" width="89" height="26" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="187.5" y="212.85" font-size="11" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">UI</text><rect x="143" y="226" width="89" height="26" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="187.5" y="242.85" font-size="11" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">SDK</text><rect x="143" y="256" width="89" height="26" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="187.5" y="272.85" font-size="11" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">문서</text><rect x="135" y="318" width="105" height="44" rx="10" fill="#eef0e8" stroke="#c3cabf" stroke-width="1.2"/><text x="187.5" y="344.55" font-size="13" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">로봇 B</text><line x1="187" y1="316" x2="187" y2="290" stroke="#65716b" stroke-width="1.4" marker-end="url(#ah)"/><rect x="258" y="196" width="89" height="26" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="302.5" y="212.85" font-size="11" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">UI</text><rect x="258" y="226" width="89" height="26" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="302.5" y="242.85" font-size="11" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">SDK</text><rect x="258" y="256" width="89" height="26" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="302.5" y="272.85" font-size="11" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">문서</text><rect x="250" y="318" width="105" height="44" rx="10" fill="#eef0e8" stroke="#c3cabf" stroke-width="1.2"/><text x="302.5" y="344.55" font-size="13" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">로봇 C</text><line x1="302" y1="316" x2="302" y2="290" stroke="#65716b" stroke-width="1.4" marker-end="url(#ah)"/><text x="190" y="392" font-size="11.5" fill="#65716b" text-anchor="middle" font-weight="400" font-family="inherit">로봇이 늘 때마다 UI·SDK·문서를 처음부터</text><rect x="410" y="52" width="160" height="52" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2" stroke-dasharray="5 4"/><text x="490.0" y="75.0" font-size="12" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">SI 팀</text><text x="490.0" y="92.0" font-size="10.5" fill="#65716b" text-anchor="middle" font-weight="400" font-family="inherit">맞춤 화면</text><rect x="580" y="52" width="160" height="52" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2" stroke-dasharray="5 4"/><text x="660.0" y="75.0" font-size="12" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">고객사</text><text x="660.0" y="92.0" font-size="10.5" fill="#65716b" text-anchor="middle" font-weight="400" font-family="inherit">직접 만든 화면</text><text x="575" y="128" font-size="11" fill="#65716b" text-anchor="middle" font-weight="400" font-family="inherit">필요한 것만 그 위에 더한다</text><rect x="400" y="140" width="350" height="128" rx="14" fill="#101b1a"/><text x="575" y="166" font-size="15" fill="#d8f36a" text-anchor="middle" font-weight="700" font-family="inherit">통합 SW</text><rect x="412" y="180" width="150" height="72" rx="10" fill="#1c2b28" stroke="#3b4b45" stroke-width="1.2"/><text x="487.0" y="213.0" font-size="12.5" fill="#ffffff" text-anchor="middle" font-weight="600" font-family="inherit">기본 UI</text><text x="487.0" y="230.0" font-size="10.5" fill="#b9c4bb" text-anchor="middle" font-weight="400" font-family="inherit">모든 로봇 공통</text><rect x="572" y="180" width="80" height="72" rx="10" fill="#1c2b28" stroke="#3b4b45" stroke-width="1.2"/><text x="612.0" y="220.375" font-size="12.5" fill="#ffffff" text-anchor="middle" font-weight="600" font-family="inherit">SDK</text><rect x="662" y="180" width="80" height="72" rx="10" fill="#1c2b28" stroke="#3b4b45" stroke-width="1.2"/><text x="702.0" y="220.375" font-size="12.5" fill="#ffffff" text-anchor="middle" font-weight="600" font-family="inherit">문서</text><rect x="410" y="318" width="100" height="44" rx="10" fill="#eef0e8" stroke="#c3cabf" stroke-width="1.2"/><text x="460.0" y="344.55" font-size="13" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">로봇 A</text><line x1="460" y1="316" x2="460" y2="272" stroke="#65716b" stroke-width="1.4" marker-end="url(#ah)"/><rect x="525" y="318" width="100" height="44" rx="10" fill="#eef0e8" stroke="#c3cabf" stroke-width="1.2"/><text x="575.0" y="344.55" font-size="13" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">로봇 B</text><line x1="575" y1="316" x2="575" y2="272" stroke="#65716b" stroke-width="1.4" marker-end="url(#ah)"/><rect x="640" y="318" width="100" height="44" rx="10" fill="#eef0e8" stroke="#c3cabf" stroke-width="1.2"/><text x="690.0" y="344.55" font-size="13" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">로봇 C</text><line x1="690" y1="316" x2="690" y2="272" stroke="#65716b" stroke-width="1.4" marker-end="url(#ah)"/><text x="575" y="392" font-size="11.5" fill="#65716b" text-anchor="middle" font-weight="400" font-family="inherit">로봇이 늘어도 바탕은 하나</text></svg><figcaption>통합 SW를 바탕에 깔고, 필요한 화면만 그 위에 올린다</figcaption></figure>


그래서 임원 회의에서 발표할 기회를 달라고 요청했다. 이 반복되고 복잡한 일들을 하나로 묶는 통합 SW를 만들자고 제안하려고.

## 사비 30만 원

발표 기회는 얻었는데, 듣는 사람이 임원들이다. 대충 만든 PPT로 그 앞에 설 순 없었다. 그래서 예전에 내 회사에 직원으로 있었던 디자이너한테 사비 30만 원을 주고 발표 자료 디자인을 맡겼다.

사실 필요하면 사비를 들여서라도 하는 건 나한테 새삼스러운 일은 아니다. 근데 이 회사에 와서는 처음이었고, 30만 원이나 쓴 건 진짜 처음이었다. 지금 생각해도 후덜덜하다.


그렇게 준비해서 발표를 했는데, 반응은 대체로 미적지근했다. "통합을 한다는 게 가능할 것 같아?" 대충 이런 느낌.

## 한 달쯤 뒤

그러고 한 달쯤 지났나. 대표님이 회의를 소집해서 SW TF를 만들라고 지시하셨고, 이 프로젝트는 그렇게 시작됐다.

내 발표가 영향이 있었는지는 모르겠다. 대표님도 그 전부터 SW 역량 강화를 생각해 오셨던 것 같다. 어쨌든 혼자 떠들던 얘기가 그때부터 진짜 일이 됐다.

## 왜 웹이었냐면

나는 처음부터 웹으로 가자고 했다.

나는 웹 에이전시 사업을 시작으로 플랫폼 외주 개발, 스타트업 IT 개발 컨설팅까지 해 왔다. 상용 SW를 기획부터 디자인, 개발까지 11년 동안 하면서 정말 많이 들은 말이 있다. 네이티브 앱이 더 좋고 빠르니까 무조건 네이티브로 만들어 달라는 거. 자기 시스템에 뭐가 맞는지 따져 보기 전에 일단 그렇게 정해 놓는 경우가 대부분이었다.

로봇 시스템에서 내가 제일 중요하게 본 건, 로봇 하나하나를 독립된 서버로 봐야 한다는 점이었다. 로봇마다 자기 버전을 갖고 있을 거고, 사람들은 PC든 모바일이든 어디서든 쉽게 접근할 수 있어야 한다. OS에 상관없이 어디서든 쉽게 붙을 수 있는 건 웹이다.

거기에 웹은 이미 생태계가 엄청 크고 공개된 라이브러리도 많다. 그리고 나는 앞으로 웹 개발이 AI로 대체될 거라고 봤다. 그렇다면 인터페이스를 웹으로 만들어 두는 게 확장하기에 훨씬 유리하다. 무엇보다 웹은 진짜 가볍다.

## 웹 서버 싫다면서요

물론 반대도 있었다. 웹으로 가자고 했을 때, SSH로도 잘 들어가고 C++ SDK를 주면 다 알아서 연동하는데 웹 API가 왜 필요하냐, 로봇 안에 웹 서버를 넣으면 무거워져서 싫다는 반응이 있었다.

그런데 얼마 뒤, 그쪽에서 다른 회사 카메라가 HTTP API로 돼 있는 걸 보고 자기들도 HTTP API를 넣겠다더니 나한테 물어보더라. "HTTP 통신하려면 웹 서버가 있어야 되는 거예요?"

결국 싫다고 반대했던 그 로봇에도 웹 서버가 들어갔다. 물론 고집까지 내려놓진 않았다. 자기가 AI로 뚝딱 만든 걸 넣었더라. 웃음밖에 안 나왔다.

<figure class="diagram"><svg viewBox="0 0 760 290" role="img" aria-label="실제로 들은 말을 거의 그대로 옮겼다" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#65716b"/></marker></defs><rect x="10" y="10" width="365" height="268" rx="12" fill="#eef0e8" stroke="#14201e" stroke-width="1.6"/><text x="24" y="34" font-size="11" fill="#65716b" text-anchor="start" font-weight="500" font-family="DM Mono, monospace">그때</text><rect x="385" y="10" width="365" height="268" rx="12" fill="#eef0e8" stroke="#14201e" stroke-width="1.6"/><text x="399" y="34" font-size="11" fill="#65716b" text-anchor="start" font-weight="500" font-family="DM Mono, monospace">얼마 뒤</text><rect x="26" y="42" width="333" height="129" rx="14" fill="#ffffff" stroke="#14201e" stroke-width="1.6"/><path d="M51,170 L56,201 L69,170" fill="#ffffff" stroke="#14201e" stroke-width="1.6" stroke-linejoin="round"/><line x1="52" y1="170.5" x2="68" y2="170.5" stroke="#ffffff" stroke-width="3"/><text x="42" y="70" font-size="12.5" fill="#14201e" text-anchor="start" font-weight="500" font-family="inherit">로봇 안에 웹 서버를 넣자고요?</text><text x="42" y="91" font-size="12.5" fill="#14201e" text-anchor="start" font-weight="500" font-family="inherit">저희는 SSH로도 잘 들어가고,</text><text x="42" y="112" font-size="12.5" fill="#14201e" text-anchor="start" font-weight="500" font-family="inherit">C++ SDK 주니까 다 알아서 연동하던데요??</text><text x="42" y="133" font-size="12.5" fill="#ff7454" text-anchor="start" font-weight="700" font-family="inherit">웹 API 필요 없습니다!!</text><text x="42" y="154" font-size="12.5" fill="#ff7454" text-anchor="start" font-weight="700" font-family="inherit">로봇 안에 넣으면 무거워져서 싫습니다!!</text><rect x="401" y="42" width="333" height="129" rx="14" fill="#ffffff" stroke="#14201e" stroke-width="1.6"/><path d="M426,170 L431,201 L444,170" fill="#ffffff" stroke="#14201e" stroke-width="1.6" stroke-linejoin="round"/><line x1="427" y1="170.5" x2="443" y2="170.5" stroke="#ffffff" stroke-width="3"/><text x="417" y="70" font-size="12.5" fill="#14201e" text-anchor="start" font-weight="500" font-family="inherit">책임님!! OO회사 캠 써 보셨어요?</text><text x="417" y="91" font-size="12.5" fill="#14201e" text-anchor="start" font-weight="500" font-family="inherit">거긴 HTTP API로 해 놨더라고요! 대박이죠?</text><text x="417" y="112" font-size="12.5" fill="#14201e" text-anchor="start" font-weight="500" font-family="inherit">저도 HTTP API 넣으려고요!</text><text x="417" y="133" font-size="12.5" fill="#14201e" text-anchor="start" font-weight="500" font-family="inherit">근데…</text><text x="417" y="154" font-size="12.5" fill="#ff7454" text-anchor="start" font-weight="700" font-family="inherit">HTTP 통신하려면 웹 서버가 있어야 되는 거예요?</text><line x1="290" y1="205.0" x2="290" y2="191.0" stroke="#14201e" stroke-width="2"/><circle cx="290" cy="188.0" r="4.0" fill="#ff7454"/><rect x="255.0" y="205.0" width="70.0" height="54.0" rx="14.0" fill="#fbfbf7" stroke="#14201e" stroke-width="2"/><rect x="263.0" y="214.0" width="54.0" height="36.0" rx="9.0" fill="#101b1a"/><circle cx="277.0" cy="231.0" r="4.5" fill="#d8f36a"/><circle cx="303.0" cy="231.0" r="4.5" fill="#d8f36a"/><line x1="665" y1="205.0" x2="665" y2="191.0" stroke="#14201e" stroke-width="2"/><circle cx="665" cy="188.0" r="4.0" fill="#ff7454"/><rect x="630.0" y="205.0" width="70.0" height="54.0" rx="14.0" fill="#fbfbf7" stroke="#14201e" stroke-width="2"/><rect x="638.0" y="214.0" width="54.0" height="36.0" rx="9.0" fill="#101b1a"/><line x1="646.0" y1="231.0" x2="658.0" y2="231.0" stroke="#d8f36a" stroke-width="3" stroke-linecap="round"/><line x1="672.0" y1="231.0" x2="684.0" y2="231.0" stroke="#d8f36a" stroke-width="3" stroke-linecap="round"/><text x="722" y="205" font-size="24" fill="#14201e" text-anchor="middle" font-weight="700" font-family="inherit">…</text></svg><figcaption>실제로 들은 말을 거의 그대로 옮겼다</figcaption></figure>


그때는 답답해서 죽는 줄 알았는데, 싸워 봤자 나만 손해라 신경 안 쓰기로 했다. 다행히 회사 안에 웹 UI가 필요하다고 느끼는 분들이 생각보다 많았다.

## 처음 웹으로 띄운 로봇

처음 웹 화면에 띄운 로봇은 물류 서빙 로봇이었다. 로봇이 맵핑한 결과를 포인트 클라우드로 보여 주고, 지금 주행 상태가 어떤지, 간단한 세팅까지 할 수 있는 UI였다.

## 그래서

기술을 고를 때 "남들이 이게 좋다더라"보다 먼저 봐야 하는 건 내 시스템이 어떻게 생겼냐는 거다. 로봇이 각자 버전을 가진 독립된 서버라면, 어디서든 열리는 웹이 맞았다.

---

처음 입사하고 일주일 뒤부터 기존에 프론트엔드 소스를 리팩토링하여 소스 구조를 다시 설계하였는데, 혼자였으면 절대 안 했을 일이다. 다음 글은 그 얘기다.
