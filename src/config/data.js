import gasapp from '../resources/images/gasapp.gif';

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
    introduce: `안녕하세요. 프론트엔드 개발자 성형 안한 노성형입니다. <br/>
    남을 웃기기 위해 태어난 것 같은 <strong class="point-color">긍정적인 에너지</strong>로 항상 주변을 즐겁게 하며<br/>
    업무에 관해서 항상 적극적이고 능동적이며 스스로에 대해 질문하며 고민하는 개발자로 나아가는 중입니다 :)`,
  },
  career: [
    {
      company: 'SCG LAB',
      date: '2020.06 ~ 현재',
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
        date: '2020.06 ~ 현재',
        summary: ['서울/인천/중부/제주 도시가스 사용자들을 위한 어플리케이션'],
        works: [
          '미니태양광 / 그린에너지 / AMI사용량 등 신규 서비스 구축',
          '기존 서울/인천 지역에서 중부,제주까지 서비스 확장에 따른 리뉴얼 작업',
          'ios / android 네이티브 개발자와의 협업',
          '앱 오류 및 사용자 민원에 따른 서비스 유지보수 작업',
          '기여도 - 40%',
          'skils : React / Mobx / javascript / html / sass',
        ],
        skils: 'React / Mobx / javascript / html / sass',
        images: gasapp,
        description: `하이브리드 앱으로 제작되었으며, 서울/인천 지역으로만 시행되고 있던 서비스를 제주/중부 까지 서비스 확장 작업 하였습니다.</br> 지속적인 신규 서비스 오픈 및 유지보수에 집중한 프로젝트입니다.`,
      },
      {
        subject: '가스앱 관리자',
        date: '2020.06 ~ 현재',
        summary: ['가스앱 운영에 필요한 관리자 사이트'],
        works: [
          '가스앱 서비스 오픈에 따른 관리자 메뉴 신축 작업',
          '메뉴 관리 및 권한 리뉴얼 작업',
          '기존 코드 리팩토링 및 서비스 유지보수 작업',
          '기여도 - 80%',
          'skils : React / Mobx / javascript / html / sass',
        ],
        skils: 'React / Mobx / javascript / html / sass',
        images: gasapp,
        description:
          'React를 이용하여 제작한 관리자 사이트입니다. Style Component를 도입하여 css를 적용하였으며 Mobx로 상태관리 하였습니다.<br/> 도시가스의 신규 오픈서비스 관리 및 기존 서비스 유지보수에 집중한 프로젝트입니다.',
      },
      {
        subject: '가스앱 채팅상담서비스',
        date: '2021.02 ~ 현재',
        summary: ['가스앱 채팅 상담톡 서비스의 관리자 사이트'],
        works: [
          '서비스 구축 및 유지보수 작업',
          'ReChart를 이용한 통계 서비스 작업',
          '상담사들의 니즈를 반영해 주기적인 서비스 추가 및 수정',
          '기여도 - 70%',
          'skils : React / Mobx / javascript / html / sass',
        ],
        skils: 'React / Mobx / javascript / html / sass',
        images: gasapp,
        description: `웹소켓을 이용해 유저와 상담사간의 채팅상담을 할수 있는 관리자 사이트 입니다. 라이브러리(Rechart / antDesign 등)을 이용하여 통계 및 메뉴 관리를 하였고 상담사들의 니즈를 파악하여 지속적인 서비스를 개선을 하였습니다.`,
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
      {
        subject: 'K CAR(SK엔카)',
        url: 'https://www.kcar.com/index.do',
        // images: require('@/assets/images/ak.jpg'),
        works: [
          '프로젝트 공통레이아웃작업',
          'javascript/jquery 스크립트 개발',
          '메인/서브 퍼블리싱',
        ],
        skils: 'html / sass / javascript / jquery',
      },
    ],
    etc: ['Demers', 'HANSKIN', 'GS리테일', '전국 동시 지방선거'],
  },
};

export default portfolioData;
