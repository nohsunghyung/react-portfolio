const portfolioData = {
  profile: {
    name: '노성형',
    position: 'Front-end Developer',
    birth: '1987.09.19',
    links: [
      {
        name: 'email',
        url: 'noh8085@gmail.com',
      },
      {
        name: 'github',
        url: 'https://github.com/nohsunghyung',
      },
    ],
    introduce: `남을 웃기기 위해 태어났을 것 같은 <strong class="point-color">긍정적인 에너지</strong>와 
      <strong class="point-color">웃음</strong> 주는것을 좋아하며 <br/> 
      업무에 관해서 적극적이고 능동적이며 항상 고민하는 개발자로 나아가기 위해 노력하고 있습니다 :)`,
  },
  career: [
    {
      company: 'SCG LAB',
      date: '2021.06 ~ 현재',
      position: '프론트엔드 개발팀 / 대리',
      works: [
        '프레임워크(React)를 이용한 프론트개발',
        '서울도시가스 앱 서비스 구축 및 운영',
        '서울도시가스 앱 관리자 서비스 구축 및 운영',
        '서울도시가스 앱 상담채팅관리자 서비스 구축 및 운영',
      ],
    },
    {
      company: '젠나인소프트',
      date: '2018.01 ~ 2020.06',
      position: '퍼블리싱팀 / 선임연구원',
      works: [
        '웹표준/웹접근성/UI/UX를 고려한 퍼블리싱',
        'javascript / jquery를 이용한 스크립트개발',
      ],
    },
    {
      company: '예손커뮤니케이션',
      date: '2016.12 ~ 2017.12',
      position: '퍼블리싱팀 / 대리',
      works: [
        '웹표준/웹접근성/UI/UX를 고려한 퍼블리싱',
        'javascript / jquery를 이용한 스크립트개발',
      ],
    },
  ],
  project: {
    frontEnd: [
      {
        subject: '가스앱',
        summary: ['서울/인천/중부/제주 도시가스 사용자들을 위한 어플리케이션'],
        works: [
          '미니태양광 / 그린에너지 / AMI사용량 등 신규 서비스 구축',
          '기존 서울/인천 지역에서 중부,제주까지 서비스 확장에 따른 리뉴얼 작업',
          'ios / android 네이티브 개발과의 협업',
        ],
        contribution: '40%',
        images: '',
        skils: 'React / Mobx / javascript / html / sass',
      },
      {
        subject: '가스앱 관리자',
        summary: ['가스앱 운영에 필요한 관리자 사이트'],
        works: [
          '가스앱 서비스 오픈에 따른 관리자 메뉴 신축 작업',
          '메뉴 관리 및 권한 리뉴얼 작업',
          '기존 코드 리팩토링',
        ],
        contribution: '70%',
        images: '',
        skils: 'React / Mobx / javascript / html / sass',
      },
      {
        subject: '가스앱 채팅상담서비스',
        summary: ['가스앱 채팅 상담톡 서비스의 관리자 사이트'],
        works: [
          'ReChart를 이용한 통계 서비스 작업',
          '상담사들의 니즈를 반영해 주기적인 서비스 수정',
        ],
        contribution: '70%',
        images: '',
        skils: 'React / Mobx / javascript / html / sass',
      },
    ],
    publish: [
      {
        subject: 'NUNC(미샤)',
        url: 'https://www.mynunc.com/main',
        // images: require('@/assets/images/missha.jpg'),
        works: [
          '퍼블리싱 PL역할',
          '프로젝트 초기 셋팅 및 공통레이아웃작업',
          '메인/서브 퍼블리싱',
          'javascript/jquery 스크립트 개발',
        ],
        skils: 'html / sass / javascript / jquery',
      },
      {
        subject: '하우홈몰(노루표페인트)',
        url: 'https://www.howhomemall.com/main',
        // images: require('@/assets/images/missha.jpg'),
        works: [
          '프로젝트 초기 셋팅 및 공통레이아웃작업',
          '메인/서브 퍼블리싱',
          'javascript/jquery 스크립트 개발',
        ],
        skils: 'html / sass / javascript / jquery',
      },
      {
        subject: 'AK뷰티',
        url: 'https://www.akbeauty.co.kr/',
        // images: require('@/assets/images/ak.jpg'),
        works: [
          '프로젝트 공통레이아웃작업',
          'javascript/jquery 스크립트 개발',
          '메인/서브 퍼블리싱',
        ],
        skils: 'html / sass / javascript / jquery',
      },
    ],
    etc: [
      'Demers',
      'HANSKIN',
      'K CAR(SK엔카)',
      'GS리테일',
      '전국 동시 지방선거',
    ],
  },
};

export default portfolioData;
