# :pushpin: 가계부 앱
> 기존의 가계부 기능과 웹 화면 제공.
> 팀에 추가된 사용자들과 수입,지출 상황을 쉽게 공유하고 함께 관리할 수 있도록 기능 제공.
> 해당 프로젝트에서 Web Front-End를 담당.
</br>

## 1. 제작 기간 & 참여 인원
- 2022년 04월 09일 ~ 진행중
- 팀 프로젝트 참여인원 4명

</br>

## 2. 사용 기술
#### `Back-end`
    - Spring Boot 2.6.7
    - Spring Data_JPA
    - Spring Security
    - QueryDsl 5.0.0

#### `Front-end`
  - React.js 17.0.0
  - Typescript
  - react-router 5.0.0
  - swr 1.3.0
  - Material UI
  - reacharts
  - axios

</br>

## 3. ERD 설계
URL : https://www.erdcloud.com/d/Zug9szTq7AZruYPQG

## 4. API
URL : https://documenter.getpostman.com/view/8156330/UyrHeYui

## 5. 폴더 구조
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

## 6. 화면 페이지 및 라우트명
```text
로그인(login)
메인(main)
├── 장부(book)
|    ├── 기간내 가계내역(Household History)
|    ├── 지출 그래프(book spending graph)
|    ├── 수입 그래프(book income graph)
|    ├── 지출(book spending)
|    |    ├── 지출 추가(add book spending)
|    |    └── 지출 편집(edit book spending)
|    ├── 수입(book income)
|    |    ├── 수입 추가(add book income)
|    |    └── 수입 편집(edit book income)
|    └── 이체(book transfer)
|         ├── 이체 추가(add book transfer)
|         └── 이체 편집(edit book transfer)
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

## 7. 핵심 기능
해당 프로젝트에서 가계부는 팀 단위로 공유 관리 됩니다.
웹페이지에서도 가계부의 지출, 수입, 자산을 추가, 삭제, 편집하는 것이 가능합니다.
또한 지출, 수입, 자산에 대한 그래프도 확인 가능합니다.

<details>
<summary><b>핵심 기능 설명 펼치기</b></summary>
<div markdown="1">

### 7.1. 가계부 공유 기능
사용자는 언제나 하나 이상의 팀에 소속되어 있습니다. 또한 팀은 1명 이상의 인원을 보유합니다. 

![team user](/00%20%EA%B4%80%EB%A0%A8%20%EC%9D%B4%EB%AF%B8%EC%A7%80/team%2Cuser%20ERD.png)

### 7.2. 웹 페이지 지원
앱에서 입력된 내용은 서버의 DB에 저장되므로 웹 페이지에서도 가계부의 내용을 확인, 편집 가능합니다.



-**그래프 출력** 
    - Rechars 라이브러리를 사용하여 그래프를 출력합니다.

-**Redux 대신 swr사용** :pushpin: [코드 확인]()
    - Redux대신 비동기에 더 적합한 swr을 이용하였습니다. 
    - [아래는 참고한 사이트 URL](https://min9nim.vercel.app/2020-10-05-swr-intro2/)


</div>
</details>

</br>

## 8. 핵심 트러블 슈팅
### 8.1. 



## 9. 그 외 트러블 슈팅

## 10. 회고 / 느낀점



