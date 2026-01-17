
import React from 'react';
import { SITE_COPY, COLORS, IMAGES } from '../constants';
import { ClipboardList, Map, PenTool, CheckCircle, Rocket } from 'lucide-react';

const processData = [
  {
    icon: <ClipboardList className="text-blue-600" size={32} />,
    title: "1단계: 기업 현황 정밀 진단",
    desc: "업종, 업력, 보유 인력, 기술 스택, 최근 재무 지표를 종합적으로 분석합니다.",
    output: ["진단 레포트", "기초 요건 체크리스트"]
  },
  {
    icon: <Map className="text-green-600" size={32} />,
    title: "2단계: 인증 가능 구간 설정",
    desc: "즉시 가능한 인증, 요건 보완 후 가능한 인증, 현시점 보류 대상을 선별합니다.",
    output: ["구간별 가능성 평가표", "요건 보완 가이드"]
  },
  {
    icon: <PenTool className="text-purple-600" size={32} />,
    title: "3단계: 맞춤형 인증 순서 설계",
    desc: "정책자금, R&D, 입찰 등 비즈니스 목표에 최적화된 인증 획득 순서를 구성합니다.",
    output: ["통합 인증 로드맵 차트", "단계별 타임라인"]
  },
  {
    icon: <CheckCircle className="text-orange-600" size={32} />,
    title: "4단계: 실행 및 문서화 지원",
    desc: "신청서, 사업계획서, 연구개발보고서 등 핵심 문서 구성 방향을 밀착 가이드합니다.",
    output: ["준비 자료 목록", "대응 방향 요약서"]
  },
  {
    icon: <Rocket className="text-red-600" size={32} />,
    title: "5단계: 사후 연계 및 모니터링",
    desc: "인증 획득 후 실질적인 자금/판로 연계 전략을 안내하고 정기적 사후 관리를 돕습니다.",
    output: ["사후 관리 매뉴얼", "활용 전략 제안"]
  }
];

const RoadmapService: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">통합 인증 로드맵 서비스</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            무조건적인 인증 확보가 아닌, <span className="text-blue-600 font-bold underline underline-offset-4">기업의 성장 단계에 맞는 최적의 구조</span>를 설계합니다.
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {processData.map((proc, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-start gap-8 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative">
              <div className="bg-gray-50 p-6 rounded-2xl flex-shrink-0">
                {proc.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{proc.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{proc.desc}</p>
                
                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                  <span className="text-sm font-bold text-blue-800 mb-3 block">단계별 주요 산출물</span>
                  <div className="flex flex-wrap gap-3">
                    {proc.output.map((out, oIdx) => (
                      <span key={oIdx} className="bg-white px-3 py-1.5 rounded-lg border border-blue-200 text-sm font-medium text-blue-700">
                        {out}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-8xl font-black text-gray-100 select-none -z-10">
                0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-8">체계적인 준비가 결과의 차이를 만듭니다</h2>
          <div className="max-w-3xl mx-auto">
            <img src={IMAGES.ROADMAP_CHART} alt="Process Infographic" className="rounded-3xl shadow-2xl border-4 border-white mb-12" />
          </div>
          <a href="#/contact" className="inline-block bg-blue-600 text-white font-bold px-12 py-5 rounded-2xl text-xl hover:bg-blue-700 transition-all shadow-xl">
            우리 기업 로드맵 진단 받기
          </a>
        </div>
      </div>
    </div>
  );
};

export default RoadmapService;
