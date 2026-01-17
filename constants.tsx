
import React from 'react';

export const COLORS = {
  primary: '#0F4C81',
  secondary: '#2ECC71',
  background: '#F8F9FA',
  text: '#333333',
  accent: '#F39C12'
};

export const SITE_COPY = {
  header: {
    brand: "Cert Roadmap",
    nav: [
      { label: "홈", to: "/" },
      { label: "인증 가이드", to: "/cert-guide" },
      { label: "로드맵 프로세스", to: "/roadmap-service" },
      { label: "회사 소개", to: "/about-us" },
      { label: "무료 진단", to: "/contact" }
    ],
    headerCta: "무료 진단 받기"
  },
  hero: {
    badge: "5년 미만 제조·IT·스타트업 전용",
    title: "인증 ‘순서’ 하나로\n준비 방향이 달라집니다.",
    desc: "기업부설연구소·벤처·이노비즈·메인비즈·ISO를\n기업 현황에 맞춰 로드맵으로 설계해드립니다.",
    primaryCta: "기업인증 구조 무료 진단받기",
    secondaryCta: "5대 핵심 인증 가이드 보기"
  },
  problem: {
    title: "왜 계속 헷갈리고, 준비가 늘어질까요?",
    items: [
      "무엇부터 해야 하는지 ‘순서’가 정리되지 않았다",
      "요건(인력·기술·재무)을 확인하지 않고 진행했다",
      "인증은 받았는데 활용(자금·R&D·입찰)과 연결이 안 된다",
      "서류 보완이 반복되는데 원인을 정확히 모르겠다"
    ],
    summary: "대부분의 문제는 기업이 아니라 ‘인증 전략(순서·요건·연결)’의 부재에서 시작됩니다."
  },
  solution: {
    title: "5년 미만 기업 전용 통합 인증 로드맵 (5단계)",
    steps: [
      {
        step: "STEP 1",
        title: "기업 현황 진단",
        desc: "업종·업력·인력·기술·재무 기준으로 현재 상태를 점검합니다."
      },
      {
        step: "STEP 2",
        title: "인증 가능 구간 설정",
        desc: "지금 가능/준비 후 가능/현시점 보류를 구분합니다."
      },
      {
        step: "STEP 3",
        title: "인증 순서 설계",
        desc: "연구소→벤처→이노/메인→ISO를 기업 상황에 맞게 조합합니다."
      },
      {
        step: "STEP 4",
        title: "실행 지원",
        desc: "준비 자료 목록, 서류 구성, 대응 방향을 정리해 실행을 돕습니다."
      },
      {
        step: "STEP 5",
        title: "사후 연계",
        desc: "정책자금·R&D·입찰/납품 활용 관점에서 다음 액션을 안내합니다."
      }
    ]
  },
  roadmapOverview: {
    title: "5대 핵심 인증, 각각 역할이 다릅니다",
    cards: [
      {
        title: "기업부설연구소",
        points: [
          "기술기업의 출발점",
          "R&D/기술평가 기반 강화",
          "벤처·이노비즈 연계의 토대"
        ]
      },
      {
        title: "벤처기업",
        points: [
          "성장기업 공식 지위 확보",
          "정부지원/가점 체계 이해에 유리",
          "기업 신뢰도·대외 활용 기반"
        ]
      },
      {
        title: "이노비즈",
        points: [
          "기술혁신형 기업 지표",
          "금융·공공·사업 연계에서 활용",
          "기술/성장 스토리 정리 필요"
        ]
      },
      {
        title: "메인비즈",
        points: [
          "경영혁신형 기업 지표",
          "프로세스·운영체계 정리",
          "대외 신뢰/협력 시 활용"
        ]
      },
      {
        title: "ISO",
        points: [
          "품질·환경 등 시스템 인증",
          "납품·입찰 요건에서 요구 빈도 높음",
          "문서/프로세스 운영이 핵심"
        ]
      }
    ],
    note: "인증 제도/요건은 변동될 수 있으므로 최종 기준은 최신 공고·기관 안내를 확인해야 합니다."
  },
  industryFit: {
    title: "업종별 적용 예시",
    items: [
      {
        title: "제조기업",
        desc: "납품/품질 기준 대응을 고려해 ISO를 포함한 로드맵 설계가 중요합니다."
      },
      {
        title: "IT 기업",
        desc: "연구개발 체계 정리(연구소)와 기술 스토리(벤처/이노) 구조화가 핵심입니다."
      },
      {
        title: "스타트업(5년 미만)",
        desc: "초기 단계에서 가능한 범위부터 순서대로 쌓아가는 전략이 유리합니다."
      }
    ]
  },
  socialProof: {
    title: "신뢰를 만드는 원칙",
    items: [
      "불필요한 인증을 권하지 않습니다.",
      "현 단계에서 가능한 범위를 먼저 정리합니다.",
      "진행 과정과 준비 항목을 투명하게 안내합니다."
    ],
    disclaimer: "개별 결과는 기업의 업종·업력·인력·재무·기술 보유 현황에 따라 달라질 수 있습니다."
  },
  ctaSection: {
    title: "우리 회사는 지금 어떤 인증부터 해야 할까요?",
    desc: "현재 기업 상태 기준으로 인증 가능 범위와 우선순위를 정리해드립니다.",
    bullets: ["현황 기반 진단", "가능/보류/불가 구분", "인증 순서 로드맵 안내"],
    button: "기업인증 구조 무료 진단받기"
  },
  footer: {
    companyInfo: "Cert Roadmap | 대표: 홍길동 | 사업자등록번호: 000-00-00000 | 주소: 서울특별시 강남구 테헤란로 | Tel: 02-123-4567",
    links: ["개인정보처리방침", "이용약관"],
    legal: "본 페이지의 내용은 일반 정보 제공 목적이며, 제도/요건은 변동될 수 있습니다. 최종 적용은 최신 공고 및 관련 기관 안내를 확인하시기 바랍니다."
  }
};

export const IMAGES = {
  HERO_BG: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
  ROADMAP_CHART: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  CERT_BADGES: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
  CONSULTANT: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
};
