
import React from 'react';
import { SITE_COPY, COLORS, IMAGES } from '../constants';
import { ShieldCheck, MessageCircle, XCircle, Search } from 'lucide-react';

const principles = [
  {
    icon: <XCircle className="text-red-500" />,
    title: "안 되는 건 안 된다고 말합니다.",
    desc: "현시점에서 요건이 부족하거나 가능성이 낮은 경우, 무리하게 진행을 권하지 않고 보완점을 먼저 안내합니다."
  },
  {
    icon: <ShieldCheck className="text-green-500" />,
    title: "불필요한 인증은 권하지 않습니다.",
    desc: "기업의 사업 영역과 관련 없는 '컬렉션용' 인증이 아닌, 실질적인 가점이 되는 인증에 집중합니다."
  },
  {
    icon: <MessageCircle className="text-blue-500" />,
    title: "투명하게 소통합니다.",
    desc: "진행 과정, 준비 항목, 발생 가능한 변수를 투명하게 공유하여 대표님과 경영진의 의사결정을 돕습니다."
  },
  {
    icon: <Search className="text-purple-500" />,
    title: "구조 설계형 컨설팅입니다.",
    desc: "단순 서류 대행 브로커가 아닙니다. 기업의 3~5년 성장을 고려한 최적의 인증 구조를 설계하는 파트너입니다."
  }
];

const AboutUs: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900">우리는 단순 대행사가 아닌,<br/>성장 전략의 '설계자'입니다.</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            설립 초기 5년, 가장 바쁘고 혼란스러운 시기에 기업이 겪는 '인증의 늪'을 해결하기 위해 모였습니다.
            우리의 목표는 단순히 인증 배지를 다는 것이 아니라, 기업이 건강하게 성장할 수 있는 제도적 토대를 마련하는 것입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24">
          {principles.map((p, idx) => (
            <div key={idx} className="p-10 border border-gray-100 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {React.cloneElement(p.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{p.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 text-white p-12 md:p-20 rounded-[40px] flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
          <div className="flex-1 z-10">
            <h2 className="text-3xl font-bold mb-8">전문성과 사실에 기반한 협업</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 mr-3"></div>
                <p className="text-lg">다양한 업종(제조/IT/스타트업)의 인증 실무 경험을 보유한 전문가 그룹이 함께합니다.</p>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 mr-3"></div>
                <p className="text-lg">'성공률 100%', '합격 보장' 같은 과장된 표현으로 현혹하지 않습니다. </p>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 mr-3"></div>
                <p className="text-lg">기업이 가진 고유의 기술력과 사업성을 가장 효과적으로 전달할 수 있는 '구조'를 찾아냅니다.</p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-full lg:w-1/3">
             <div className="aspect-square rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
               <img src={IMAGES.CONSULTANT} alt="Expert Professional" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
