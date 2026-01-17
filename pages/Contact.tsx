
import React, { useState } from 'react';
import { SITE_COPY, COLORS } from '../constants';
import { Send, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: "상담은 유료인가요?", a: "최초 기업 현황 진단 및 로드맵 설계 상담은 무료로 진행됩니다. 이후 구체적인 실행 지원이나 문서 고도화 단계에서 비용이 발생할 수 있습니다." },
  { q: "창업한 지 1년도 안 되었는데 신청 가능한가요?", a: "네, 가능합니다. 오히려 초기 단계에서 연구소와 벤처인증의 순서를 잘 잡는 것이 향후 세제 혜택과 자금 확보에 훨씬 유리합니다." },
  { q: "인증 획득을 보장해주시나요?", a: "저희는 '보장'이라는 표현을 쓰지 않습니다. 대신 기업의 현재 상황에서 가능한 최선의 전략을 설계하고, 보완이 필요한 부분은 명확히 가이드하여 성공 확률을 극대화합니다." },
  { q: "제조업인데 공장이 없어도 이노비즈 인증이 가능한가요?", a: "업종과 실제 영위 사업의 특성에 따라 다릅니다. 위탁생산(OEM) 비중이 높더라도 기술 개발 주도권을 증빙하면 가능한 경우가 많으니 진단을 통해 확인해보시기 바랍니다." },
  { q: "IT 스타트업인데 벤처인증이 왜 필요한가요?", a: "벤처인증은 단순한 배지가 아닙니다. 초기 법인세 감면 혜택뿐만 아니라 정부 지원 사업 가점, 신용보증기금 한도 우대 등 실질적인 경영 자원을 확보하는 가장 빠른 길입니다." }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: 'IT/SW',
    foundedYear: '',
    employeeCount: '',
    revenue: '',
    currentCerts: [],
    goal: '정책자금/R&D',
    message: '',
    agree: false
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('무료 진단 신청이 접수되었습니다. 담당자가 영업일 기준 24시간 이내에 연락드리겠습니다.');
    console.log(formData);
  };

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          
          {/* Form Side */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h1 className="text-3xl font-bold mb-2">기업인증 구조 무료 진단</h1>
            <p className="text-gray-500 mb-10">간단한 정보를 입력해 주시면 우리 기업에 맞는 로드맵을 설계해 드립니다.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">기업명 *</label>
                  <input 
                    type="text" required 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                    placeholder="회사명을 입력해주세요"
                    value={formData.companyName}
                    onChange={e => setFormData({...formData, companyName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">업종 *</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                    value={formData.industry}
                    onChange={e => setFormData({...formData, industry: e.target.value})}
                  >
                    <option>IT/SW</option>
                    <option>제조</option>
                    <option>서비스</option>
                    <option>기타 스타트업</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">설립연도 *</label>
                  <input type="number" placeholder="YYYY" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">직원 수 *</label>
                  <input type="text" placeholder="명" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">매출 구간 (선택)</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none">
                    <option>1억 미만</option>
                    <option>1억~10억</option>
                    <option>10억~50억</option>
                    <option>50억 이상</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">주요 목표 *</label>
                <div className="grid grid-cols-2 gap-3">
                  {['정책자금/R&D', '입찰/납품', '세제 혜택', '투자 유치'].map(goal => (
                    <label key={goal} className="flex items-center p-3 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                      <input 
                        type="radio" name="goal" className="mr-3" 
                        checked={formData.goal === goal}
                        onChange={() => setFormData({...formData, goal})}
                      />
                      <span className="text-sm font-medium">{goal}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">현재 고민 (상세히 적을수록 좋습니다)</label>
                <textarea 
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none min-h-[120px]"
                  placeholder="예) 연구소는 있는데 벤처인증 요건이 되는지 궁금합니다. / 입찰 가점이 필요한데 무엇부터 해야할지 모르겠습니다."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="pt-4">
                <label className="flex items-start cursor-pointer group">
                  <input 
                    type="checkbox" required className="mt-1 mr-3 rounded" 
                    checked={formData.agree}
                    onChange={e => setFormData({...formData, agree: e.target.checked})}
                  />
                  <span className="text-xs text-gray-500 leading-relaxed">
                    (필수) 개인정보 수집 및 이용에 동의합니다. 수집 목적: 무료 진단 서비스 제공 및 상담 연락. 보유 기간: 상담 종료 후 3년 또는 파기 요청 시까지.
                  </span>
                </label>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-blue-600 text-white font-bold text-xl rounded-2xl hover:bg-blue-700 transition-all shadow-xl flex items-center justify-center gap-3 group"
              >
                진단 신청 완료하기 <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <HelpCircle className="text-blue-600 mr-3" /> 자주 묻는 질문 (FAQ)
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-200 pb-4">
                    <button 
                      className="w-full flex justify-between items-center py-4 text-left font-bold text-gray-900 group"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    >
                      <span className="group-hover:text-blue-600 transition-colors">{faq.q}</span>
                      {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {openFaq === idx && (
                      <div className="py-2 text-gray-600 leading-relaxed text-sm animate-fadeIn">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-6">진단 프로세스</h3>
              <ul className="space-y-6">
                {[
                  { step: "01", title: "정보 입력 및 신청", desc: "위 폼을 통해 기업 기초 정보를 남겨주세요." },
                  { step: "02", title: "담당자 배정 및 1차 분석", desc: "영업일 24시간 이내 담당자가 배정되어 1차 데이터 분석을 진행합니다." },
                  { step: "03", title: "유선/대면 진단 상담", desc: "상세 현황 파악 및 로드맵 설계 방향을 설명해 드립니다." },
                  { step: "04", title: "로드맵 제안", desc: "기업 맞춤형 통합 인증 로드맵을 확정합니다." }
                ].map((s, idx) => (
                  <li key={idx} className="flex gap-5">
                    <span className="text-2xl font-black text-blue-100">{s.step}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{s.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
