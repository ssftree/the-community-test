import React from 'react';
import { Language } from '../types';
import { I18N } from '../data/i18n';
import { DIMENSIONS_CONFIG } from '../data/questions';
import { Sparkles, BookOpen, Shuffle, ShieldCheck, HeartHandshake, Users, Scale, ArrowRight } from 'lucide-react';

interface HomeHeroProps {
  currentLang: Language;
  onStartTest: () => void;
  onBrowseLibrary: () => void;
  onQuickSimulate: () => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  currentLang,
  onStartTest,
  onBrowseLibrary,
  onQuickSimulate,
}) => {
  const t = I18N[currentLang];

  const dimensionCards = [
    {
      config: DIMENSIONS_CONFIG.personal,
      icon: HeartHandshake,
      accent: 'border-amber-900/40 bg-amber-950/20 text-amber-400',
    },
    {
      config: DIMENSIONS_CONFIG.social,
      icon: Users,
      accent: 'border-sky-900/40 bg-sky-950/20 text-sky-400',
    },
    {
      config: DIMENSIONS_CONFIG.ethical,
      icon: Scale,
      accent: 'border-rose-900/40 bg-rose-950/20 text-rose-400',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-16 space-y-12">
      
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-700/80 text-red-500 text-xs font-mono tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping mr-1" />
          <span>{t.heroEyebrow}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
          {t.heroTitle}
        </h1>

        <p className="text-neutral-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {t.heroDesc}
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onStartTest}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-base tracking-wide shadow-xl shadow-red-950/60 flex items-center justify-center space-x-2 transition transform active:scale-95"
          >
            <Sparkles className="w-5 h-5 text-white" />
            <span>{t.startTestBtn}</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>

          <button
            onClick={onBrowseLibrary}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-semibold text-base border border-neutral-700 flex items-center justify-center space-x-2 transition"
          >
            <BookOpen className="w-5 h-5 text-sky-400" />
            <span>{t.browseQuestionsBtn}</span>
          </button>

          <button
            onClick={onQuickSimulate}
            className="w-full sm:w-auto px-5 py-4 rounded-xl bg-neutral-900/60 hover:bg-neutral-800/80 text-neutral-400 hover:text-white font-medium text-xs sm:text-sm border border-neutral-800 flex items-center justify-center space-x-1.5 transition"
            title="一键生成模拟答卷并查看图腾报告"
          >
            <Shuffle className="w-4 h-4 text-amber-400" />
            <span>随机模拟体验</span>
          </button>
        </div>
      </div>

      {/* 3 Dimensions Preview Cards */}
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="text-xl font-bold text-white tracking-wide">
            {t.dimensionsTitle}
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            由 37 个极具张力的社会与哲学思考实验题目交叉测算得出
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dimensionCards.map(({ config, icon: Icon, accent }) => (
            <div
              key={config.id}
              className={`rounded-2xl border p-5 sm:p-6 space-y-3 ${accent} backdrop-blur-sm transition hover:scale-[1.01]`}
            >
              <div className="flex items-center space-x-2">
                <Icon className="w-5 h-5" />
                <h3 className="font-bold text-white text-base">
                  {config.title[currentLang]}
                </h3>
              </div>
              <div className="font-mono text-xs font-semibold text-neutral-300">
                {config.leftLabel[currentLang]} ↔ {config.rightLabel[currentLang]}
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {config.intro[currentLang]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Background / Disclaimer */}
      <div className="p-6 rounded-2xl bg-[#111318] border border-neutral-800 space-y-3">
        <div className="flex items-center space-x-2 text-white font-bold text-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{t.disclaimerTitle}</span>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-xs text-neutral-400">
          {t.disclaimerItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      </div>

    </div>
  );
};
