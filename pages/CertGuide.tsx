
import React, { useState } from 'react';
import { SITE_COPY, COLORS } from '../constants';
import { ChevronDown, ChevronUp, Check, AlertTriangle } from 'lucide-react';

const certDetails = [
  {
    name: "기업부설연구소 / 연구개발전담부서",
    summary: "기술개발 의지를 보여주는 필수 관문",
    requirements: ["독립된 연구 공간 확보", "전담 연구 요건 (중소기업 2~5명 이상)", "기본 시설 및 기자재 구비"],
    points: ["법인세/소득세 인건비의 25% 세액공제", "연구용역비 등 지출 세액공제", "병역특례업체 신청 가산점"],
    cautions: ["연구 활동 기록 및 사후 관리 필수", "상시 정원 및 자격 요건 유지", "허위 등록 시 세액 추징 가능성"]
  },
  {
    name: "벤처기업인증",
    summary: "혁신성과 기술력을 인정받은 성장 기업",
    requirements: ["혁신기술성 및 성장성 평가 (혁신성장유형)", "벤처투자유치 (투자유형)", "연구개발비 비중 (연구개발유형)"],
    points: ["법인세/소득세 50% 감면 (창업 3년 이내)", "취득세 75% 감면", "금융지원 가점 및 신용보증 한도 우대"],
    cautions: ["인증 유효기간(3년) 관리 필요", "혁신성 지표 입증을 위한 데이터 준비", "정기적인 실태조사 대응"]
  },
  {
    name: "이노비즈 (Inno-Biz)",
    summary: "기술혁신형 중소기업 인증",
    requirements: ["업력 3년 이상의 중소기업", "기술혁신 역량 평가 700점 이상", "기술성 평가(KIBO) B등급 이상"],
    points: ["정부 R&D 사업 참여 시 가점", "금융권 대출 금리 우대", "수출 지원 사업 우대 및 특허 우선심사"],
    cautions: ["재무 상태 및 기술 자립도 중점 평가", "현장 실사 대비 철저한 기술 프로세스 정리", "3년 주기 갱신 필요"]
  },
  {
    name: "메인비즈 (Main-Biz)",
    summary: "경영혁신형 중소기업 인증",
    requirements: ["업력 3년 이상의 중소기업", "경영혁신 지수 평가 600점 이상", "금융 연체 및 결격 사유 부재"],
    points: ["금융·세제 지원 및 판로 개척 우대", "홍보 및 마케팅 지원 사업 가점", "글로벌 강소기업 육성사업 연계"],
    cautions: ["시스템적 경영 관리 역량 증빙", "매출 성장세 및 재무 지표 반영", "조직 운영의 효율성 강조"]
  },
  {
    name: "ISO 인증 (9001, 14001 등)",
    summary: "글로벌 표준 품질/환경 시스템",
    requirements: ["품질/환경 매뉴얼 및 절차서 구축", "내부 심사 및 경영 검토 기록", "업종별 특수 요구사항 준수"],
    points: ["공공 입찰 및 납품 시 필수/가점 요건", "기업 이미지 제고 및 대외 신뢰도 확보", "내부 운영 프로세스의 표준화"],
    cautions: ["서류를 위한 인증이 아닌 실무 적용", "사후 심사(연 1회) 철저 관리", "갱신 심사(3년 1회) 준비"]
  }
];

const CertGuide: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-900">5대 핵심 기업인증 가이드</h1>
          <p className="text-lg text-gray-600">인증별 성격과 준비 포인트를 한눈에 확인하세요.</p>
          <div className="mt-4 inline-block bg-yellow-50 border border-yellow-100 text-yellow-800 text-sm px-4 py-2 rounded-lg">
            <AlertTriangle size={16} className="inline mr-2 -mt-1" />
            법·제도는 변동 가능하므로 상세 요건은 ‘최신 공고 기준’을 반드시 확인해야 합니다.
          </div>
        </div>

        <div className="space-y-4">
          {certDetails.map((cert, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <button 
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                  <p className="text-sm text-blue-600 mt-1">{cert.summary}</p>
                </div>
                {openIndex === idx ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
              </button>
              
              {openIndex === idx && (
                <div className="p-8 bg-gray-50 border-t border-gray-100 animate-fadeIn">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                        <span className="w-1.5 h-6 bg-blue-600 rounded-full mr-2"></span>
                        주요 요건
                      </h4>
                      <ul className="space-y-2">
                        {cert.requirements.map((req, rIdx) => (
                          <li key={rIdx} className="text-sm text-gray-600 flex items-start">
                            <Check size={14} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                        <span className="w-1.5 h-6 bg-green-500 rounded-full mr-2"></span>
                        주요 혜택
                      </h4>
                      <ul className="space-y-2">
                        {cert.points.map((pt, pIdx) => (
                          <li key={pIdx} className="text-sm text-gray-600 flex items-start">
                            <Check size={14} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                        <span className="w-1.5 h-6 bg-red-400 rounded-full mr-2"></span>
                        유의사항
                      </h4>
                      <ul className="space-y-2">
                        {cert.cautions.map((cau, cIdx) => (
                          <li key={cIdx} className="text-sm text-gray-600 flex items-start">
                            <AlertTriangle size={14} className="text-red-400 mr-2 mt-1 flex-shrink-0" />
                            {cau}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 p-10 rounded-3xl text-white text-center">
          <h2 className="text-2xl font-bold mb-4">현재 우리 회사의 인증 전략을 설계하고 싶으신가요?</h2>
          <p className="mb-8 text-blue-100">각 인증은 개별적으로 보는 것이 아니라 로드맵으로 연결될 때 힘을 발휘합니다.</p>
          <a href="#/contact" className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors">
            무료 진단 신청하기
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertGuide;
