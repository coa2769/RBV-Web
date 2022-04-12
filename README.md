# 가계부 WEB

**소개 :** 가계부 앱의 WEB

## 사용 기술
- [Node.js](https://nodejs.org/ko/) **16.14.0 LTS**
- [React](https://ko.reactjs.org/) **17.0.1**
- [Typesciprt](https://www.typescriptlang.org/) **4.4.2**

### client
- [axios](https://www.npmjs.com/package/axios) **021.1**
- [React-Router](https://v5.reactrouter.com/web/guides/quick-start) **5.2.0**
- [Material-UI](https://mui.com/getting-started/templates/) **5.6.0**

## 참고 사이트
[카카오 소셜 로그인 로고](https://developers.kakao.com/docs/latest/ko/reference/design-guide)
[구글 소셜 로그인 로고](https://developers.google.com/identity/branding-guidelines?hl=ko)


## 개발 규칙

### 네이밍

- 컴포넌트 : 대문자 and 대문자

```jsx
import OneTwoThree from "./OneTwoThree";
```

- 함수 : 소문자 and 대문자

```jsx
function oneTwoThree () {
  ...
};
```

- 변수 : 소문자 and 대문자

```jsx
const oneTwoThree;
```

### CSS 적용

- .css 및 .scss 파일의 클래스 스타일 적용

### 폴더 구조

```text
src
├── Asset (프로젝트에서 사용될 이미지 파일들 저장)
├── components
|   ├── common ( 2개 이상의 컴포넌트에 의해 참조되는 경우 )
|   |   └── ...
|   └── ... 
├── hooks (커스텀 hook들)
├── layouts (페이지의 공통 레이아웃)
|   ├── App.tsx (페이지들이 라우팅되는 곳)
|   └── ...
├── pages
|   ├── common ( 컴포넌트에서 사용되는 style에 적용하기 위한 css변수 )
|   |   └── ...
|   ├── fonts ( 사이트에 적용된 fonts )
|   |   └── ...
|   └── ...
├── utils (tjs 모듈들이 담긴 폴더)
|   └── ...
├── client.tsx (프로젝트 시작점)
├── package.json
└── README.md
```

### 트러블 슈팅
- 웹에서 애플로그인 관련 찾아보기


### 화면 페이지 및 라우트명
1. 웹 페이지

```text
로그인(login)
메인(main)
├── 장부(cog)
|    ├── 기간내 가계내역(Household History)
|    ├── 지출 그래프(cog spending graph)
|    ├── 수입 그래프(cog income graph)
|    ├── 지출(cog spending)
|    |    ├── 지출 추가(add cog spending)
|    |    └── 지출 편집(edit cog spending)
|    ├── 수입(cog income)
|    |    ├── 수입 추가(add cog income)
|    |    └── 수입 편집(edit cog income)
|    └── 이체(cog transfer)
|         ├── 이체 추가(add cog transfer)
|         └── 이체 편집(edit cog transfer)
└── 자산(Asset)
     ├── 자산 목록 (Asset List)
     |    ├── 자산 추가 (add Asset)
     |    └── 자산 편집 (edit Asset)
     ├── 신용카드 목록(Credit Card List)
     |    ├── 신용카드 추가(add Credit card)
     |    └── 신용카드 편집(edit Credit card)
     ├── 총자산 변동추이 그래프(Total Asset Change Graph)
     ├── 부채구성 그래프(debt graph)
     ├── 자산구성 그래프(asset graph)
     ├── 지출(Asset spending)
     |    ├── 지출 추가(add Asset spending)    
     |    └── 지출 편집(edit Asset spending)
     ├── 수입(Asset income)
     |    ├── 수입 추가 (add Asset income)
     |    └── 수입 편집 (edit Asset income)
     └── 이체(Asset transfer)
          ├── 이체 추가(add Asset transfer)
          └── 이체 편집(edit Asset transfer)
```