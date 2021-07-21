import gasapp from '../resources/images/gasapp.png';
import gasappAdmin from '../resources/images/gasappAdmin.gif';
import gasTalk from '../resources/images/gasTalk.gif';
import noteApp from '../resources/images/noteApp.gif';

const portfolioData = {
  profile: {
    name: '노성형',
    position: 'Front-end Developer',
    birth: '1987.09.19',
    phone: '010-6688-8085',
    links: [
      {
        name: 'email',
        url: 'noh8085@gmail.com'
      },
      {
        name: 'github',
        url: 'https://github.com/nohsunghyung'
      }
    ],
    introduce: `<strong>React, JavaScript, Typescript, HTML, SCSS</strong> 를 활용한 프론트엔드 개발을 하고 있으며<br/>
    업무에 관해 항상 <strong>적극적</strong>, <strong>능동적</strong>이고<br/> 스스로에 대해 끊임없이 질문하며 고민하는 개발자로 나아가는 중입니다 :)`
  },
  career: [
    {
      company: 'SCG LAB',
      date: '2020.06 ~ 현재',
      position: '프론트엔드 개발팀 / 대리',
      works: [
        '라이브러리(React)를 이용한 프론트개발',
        '서울도시가스 앱 서비스 구축 및 운영',
        '서울도시가스 앱 관리자 서비스 구축 및 운영',
        '서울도시가스 앱 상담채팅관리자 서비스 구축 및 운영'
      ]
    },
    {
      company: '젠나인소프트',
      date: '2018.01 ~ 2020.06',
      position: '퍼블리싱팀 / 선임연구원',
      works: [
        '웹표준 및 웹접근성을 준수한 퍼블리싱 작업',
        '반응형 웹 제작',
        '크로스브라우징을 이용한 브라우저 최적화',
        'javascript & jquery 화면 스크립트 및 애니메이션 개발'
      ]
    },
    {
      company: '예손커뮤니케이션',
      date: '2016.12 ~ 2017.12',
      position: '퍼블리싱팀 / 대리',
      works: [
        '웹표준을 준수한 퍼블리싱 작업',
        '반응형 웹 제작',
        '크로스브라우징을 이용한 브라우저 최적화',
        'javascript & jquery 화면 스크립트 및 애니메이션 개발'
      ]
    }
  ],
  project: {
    frontEnd: [
      {
        subject: '가스앱',
        date: '2020.06 ~ 현재',
        summary: [
          '- 요금(조회,결제,자동이체), 자가검침, 각종 신청 및 문의 등 <br/>도시가스 사용자를 위한 서비스 앱',
          '- 기여도 60%'
        ],
        works: [
          '미니태양광 / 그린에너지 / AMI 사용량 등 신규 서비스 구축 및 유지보수',
          '서비스 타 지역 확장 편의를 위해 프로토타입 설계(기존 서울/인천 -> 중부/제주까지 확장)',
          '확장성을 위한 컴포넌트 세부 분리 및 렌더링 성능 최적화 작업'
        ],
        skils: 'React / Mobx / Javascript / HTML / SCSS',
        images: gasapp,
        height: 420,
        description: `- 미니태양광 / 그린에너지 / AMI 사용량 등 신규 서비스 구축 및 유지보수<br/>
        - 서비스 타 지역 확장 편의를 위해 프로토타입 설계(기존 서울/인천 -> 중부/제주까지 확장)<br/>
        - 확장성을 위한 컴포넌트 세부 분리 및 렌더링 성능 최적화 작업`
      },
      {
        subject: '가스앱 채팅상담서비스',
        date: '2021.02 ~ 현재',
        summary: ['- 가스앱 채팅상담서비스의 관리자 사이트', '- 기여도 70%'],
        works: [
          '서비스 구축 및 유지보수 작업',
          'ReChart를 이용한 통계 서비스 작업',
          '상담사들의 니즈를 반영해 주기적인 서비스 추가 및 수정',
          '기여도 - 70%',
          'skils : React / Mobx / Javascript / HTML / SCSS'
        ],
        skils: 'React / Mobx / Javascript / HTML / SCSS',
        images: gasTalk,
        height: 300,
        description: `- 서비스 리뉴얼 및 유지보수<br/>
        - Notification(Web API)를 이용한 채팅 알림서비스 제공으로 상담사 편의 향상<br/>
        - 라이브러리(Rechart / antDesign)를 이용한 통계 및 메뉴 관리<br/>
        - 상담사의 니즈를 파악, 지속적인 서비스 개선`
      },
      {
        subject: '가스앱 관리자',
        date: '2020.06 ~ 현재',
        summary: ['- 가스앱 운영을 위한 관리자 사이트', '- 기여도 80%'],
        works: [
          '가스앱 서비스 오픈에 따른 관리자 메뉴 신축 작업',
          '메뉴 관리 및 권한 리뉴얼 작업',
          '기존 코드 리팩토링 및 서비스 유지보수 작업',
          '기여도 - 80%',
          'skils : React / Mobx / Javascript / HTML / SCSS'
        ],
        skils: 'React / Mobx / Javascript / HTML / SCSS',
        images: gasappAdmin,
        height: 300,
        description: `- 레거시 코드 리팩토링 작업(성능최적화 및 중복 코드 제거)<br/>
          - 기존 css작성 코드에 Style Component 및 scss 도입<br/>
          - 회사 내부 서비스 향상을 위한 메뉴 관리,권한 서비스 제안 및 도입`
      },
      {
        subject: '메모장 앱<span>(토이프로젝트)</span>',
        date: '2021.06 ~ 2021.07',
        summary: [
          '- API 통신을 이용하여 로그인/회원가입 및 CRUD 기능의 메모장 앱'
        ],
        works: [],
        skils: 'React / Redux(Thunk) / Typescript / Javascript / HTML / SCSS',
        url: 'https://github.com/nohsunghyung/note-react-typescript',
        images: noteApp,
        height: 550,
        description: `- React + Typescript + Redux(Thunk)의 스킬 강화를 위한 서비스 제작`
      }
    ],
    publish: [
      {
        subject: 'NUNC(미샤)',
        url: 'https://www.mynunc.com/main',
        works: [
          '퍼블리싱 PL역할',
          '프로젝트 초기 셋팅 및 공통레이아웃작업',
          '메인/서브 퍼블리싱',
          'javascript/jquery 스크립트 개발'
        ],
        skils: 'html / sass / javascript / jquery'
      },
      {
        subject: '하우홈몰(노루표페인트)',
        url: 'https://www.howhomemall.com/main',
        works: [
          '프로젝트 초기 셋팅 및 공통레이아웃작업',
          '메인/서브 퍼블리싱',
          'javascript/jquery 스크립트 개발'
        ],
        skils: 'html / sass / javascript / jquery'
      },
      {
        subject: 'AK뷰티',
        url: 'https://www.akbeauty.co.kr/',
        works: [
          '프로젝트 공통레이아웃작업',
          'javascript/jquery 스크립트 개발',
          '메인/서브 퍼블리싱'
        ],
        skils: 'html / sass / javascript / jquery'
      },
      {
        subject: 'K CAR(SK엔카)',
        url: 'https://www.kcar.com/index.do',
        works: [
          '프로젝트 공통레이아웃작업',
          'javascript/jquery 스크립트 개발',
          '메인/서브 퍼블리싱'
        ],
        skils: 'html / sass / javascript / jquery'
      }
    ],
    etc: ['Demers', 'HANSKIN', 'GS리테일', '전국 동시 지방선거']
  }
};

export default portfolioData;
