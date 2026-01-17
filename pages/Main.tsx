
import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_COPY, COLORS, IMAGES } from '../constants';
import { CheckCircle, ShieldCheck, FileText, ArrowRight, Activity, Users, Settings } from 'lucide-react';

const Main: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.HERO_BG} alt="Hero Background" className="w-full h-full object-cover brightness-[0.4]" />
        </div>
        <div className="relative z-10 container mx-auto">
          <span className="inline-block bg-blue-500 text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            {SITE_COPY.hero.badge}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight whitespace-pre-line">
            {SITE_COPY.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
            {SITE_COPY.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-lg text-white shadow-xl transition-transform hover:-translate-y-1"
              style={{ backgroundColor: COLORS.secondary }}
            >
              {SITE_COPY.hero.primaryCta}
            </Link>
            <Link 
              to="/cert-guide" 
              className="w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-lg text-white border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              {SITE_COPY.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {SITE_COPY.problem.title}
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {SITE_COPY.problem.items.map((item, idx) => (
              <div key={idx} className="flex items-start p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="mr-4 mt-1 bg-red-100 p-2 rounded-full">
                  <Activity size={20} className="text-red-600" />
                </div>
                <p className="text-lg text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center max-w-3xl mx-auto">
            <p className="text-xl font-bold text-blue-900">
              {SITE_COPY.problem.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{SITE_COPY.solution.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {SITE_COPY.solution.steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col transition-all group-hover:shadow-md">
                  <span className="text-blue-600 font-bold text-xs mb-3 block">{step.step}</span>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{SITE_COPY.roadmapOverview.title}</h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">{SITE_COPY.roadmapOverview.note}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SITE_COPY.roadmapOverview.cards.map((card, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors group">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <ShieldCheck className="text-blue-600 group-hover:text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-4">{card.title}</h3>
                <ul className="space-y-3">
                  {card.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start text-sm text-gray-600">
                      <div className="mr-2 mt-1">
                        <CheckCircle size={14} className="text-green-500" />
                      </div>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Fit */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{SITE_COPY.industryFit.title}</h2>
              <div className="space-y-6">
                {SITE_COPY.industryFit.items.map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3 text-sm">0{idx + 1}</span>
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img src={IMAGES.CONSULTANT} alt="Expert Consulting" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <p className="text-lg font-medium italic">"인증은 단순한 서류 작업이 아닙니다. 기업의 성장 체력을 기르는 가장 전략적인 설계입니다."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Principles */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">{SITE_COPY.socialProof.title}</h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mb-12">
            {SITE_COPY.socialProof.items.map((principle, idx) => (
              <div key={idx} className="bg-gray-50 px-8 py-6 rounded-full border border-gray-100 flex items-center shadow-sm">
                <CheckCircle className="text-blue-600 mr-3" />
                <span className="text-lg font-semibold text-gray-800">{principle}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400">{SITE_COPY.socialProof.disclaimer}</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center">
            <div className="p-10 lg:p-16 text-white flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                {SITE_COPY.ctaSection.title}
              </h2>
              <p className="text-xl text-blue-100 mb-8">{SITE_COPY.ctaSection.desc}</p>
              <ul className="space-y-4 mb-10">
                {SITE_COPY.ctaSection.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center text-lg font-medium">
                    <span className="bg-blue-500 p-1 rounded-full mr-3">
                      <CheckCircle size={18} />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <Link 
                to="/contact" 
                className="inline-block px-10 py-5 bg-white text-blue-700 font-bold text-xl rounded-xl hover:bg-blue-50 transition-all shadow-lg"
              >
                {SITE_COPY.ctaSection.button}
              </Link>
            </div>
            <div className="w-full lg:w-1/3 h-full min-h-[400px]">
              <img src={IMAGES.ROADMAP_CHART} alt="Roadmap Visualization" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
