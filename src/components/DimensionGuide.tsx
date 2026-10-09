import React from 'react';
import { Language } from '../types';
import { DIMENSIONS_CONFIG } from '../data/questions';
import { I18N } from '../data/i18n';
import { Scale, Users, HeartHandshake, ShieldCheck, HelpCircle } from 'lucide-react';

interface DimensionGuideProps {
  currentLang: Language;
}

export const DimensionGuide: React.FC<DimensionGuideProps> = ({ currentLang }) => {
  const t = I18N[currentLang];

  const dimensions = [
    {
      config: DIMENSIONS_CONFIG.personal,
      icon: HeartHandshake,
      accent: 'text-amber-400',
      badgeColor: 'border-amber-800/60 bg-amber-950/30 text-amber-300',
    },
    {
      config: DIMENSIONS_CONFIG.social,
      icon: Users,
      accent: 'text-sky-400',
      badgeColor: 'border-sky-800/60 bg-sky-950/30 text-sky-300',
    },
    {
      config: DIMENSIONS_CONFIG.ethical,
      icon: Scale,
      accent: 'text-rose-400',
      badgeColor: 'border-rose-800/60 bg-rose-950/30 text-rose-300',
    },
  ];

  const anchors = [
    {
      code: 'B2S2M2',
      label: { 'zh-CN': '理想主义倾向 2 级', 'zh-TW': '理想主義傾向 2 級', ko: '이상주의 성향 2단계', en: 'Idealist Leaning Level 2' },
      desc: { 'zh-CN': '意义 2 级 · 结构 2 级 · 原则 2 级（最强纯粹理想派）', 'zh-TW': '意義 2 級 · 結構 2 級 · 原則 2 級（最強純粹理想派）', ko: '의미 2점 · 구조 2점 · 원칙 2점', en: 'Meaning 2 · Structure 2 · Principles 2' },
      meaningCode: 'B', meaningIntensity: 2,
      agencyCode: 'S', agencyIntensity: 2,
      judgmentCode: 'M', judgmentIntensity: 2,
    },
    {
      code: 'B1S1M1',
      label: { 'zh-CN': '理想主义倾向 1 级', 'zh-TW': '理想主義傾向 1 級', ko: '이상주의 성향 1단계', en: 'Idealist Leaning Level 1' },
      desc: { 'zh-CN': '意义 1 级 · 结构 1 级 · 原则 1 级（温和理想派）', 'zh-TW': '意義 1 級 · 結構 1 級 · 原則 1 級（溫和理想派）', ko: '의미 1점 · 구조 1점 · 원칙 1점', en: 'Meaning 1 · Structure 1 · Principles 1' },
      meaningCode: 'B', meaningIntensity: 1,
      agencyCode: 'S', agencyIntensity: 1,
      judgmentCode: 'M', judgmentIntensity: 1,
    },
    {
      code: 'H1A1U1',
      label: { 'zh-CN': '现实主义倾向 1 级', 'zh-TW': '現實主義傾向 1 級', ko: '현실주의 성향 1단계', en: 'Realist Leaning Level 1' },
      desc: { 'zh-CN': '实利 1 级 · 能力 1 级 · 结果 1 级（温和现实派）', 'zh-TW': '實利 1 級 · 能力 1 級 · 結果 1 級（溫和現實派）', ko: '실리 1점 · 능력 1점 · 결과 1점', en: 'Utility 1 · Merit 1 · Results 1' },
      meaningCode: 'H', meaningIntensity: 1,
      agencyCode: 'A', agencyIntensity: 1,
      judgmentCode: 'U', judgmentIntensity: 1,
    },
    {
      code: 'H2A2U2',
      label: { 'zh-CN': '现实主义倾向 2 级', 'zh-TW': '現實主義傾向 2 級', ko: '현실주의 성향 2단계', en: 'Realist Leaning Level 2' },
      desc: { 'zh-CN': '实利 2 级 · 能力 2 级 · 结果 2 级（最强看不见的手现实派）', 'zh-TW': '實利 2 級 · 能力 2 級 · 結果 2 級（最強看不見的手現實派）', ko: '실리 2점 · 능력 2점 · 결과 2점', en: 'Utility 2 · Merit 2 · Results 2' },
      meaningCode: 'H', meaningIntensity: 2,
      agencyCode: 'A', agencyIntensity: 2,
      judgmentCode: 'U', judgmentIntensity: 2,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-mono text-red-500 uppercase tracking-widest bg-red-950/40 border border-red-900/60 px-3 py-1 rounded-full">
          THEORETICAL FRAMEWORK
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          《思想验证区域2》维度与判定机制解析
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
          揭秘节目组如何通过三大核心轴线、37 道思想实验课题，绘制出每个人的“思想象征图腾”。
        </p>
      </div>

      {/* 4 Official Anchor Totems */}
      <div className="bg-[#101217] border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex items-center space-x-2 text-white font-bold text-lg">
          <ShieldCheck className="w-5 h-5 text-red-500" />
          <span>官方思想象征图腾 4 大锚点</span>
        </div>
        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
          节目测试将受试者的倾向划分为白色（理想主义）与黑色（现实主义）。倾向性差距大于等于 25% 判定为 2 级（密集线纹），差距小于 25% 判定为 1 级。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {anchors.map((anchor) => (
            <div
              key={anchor.code}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex flex-col items-center text-center space-y-3 hover:border-neutral-700 transition"
            >
              {/* Stacked Mini Symbol */}
              <div className="w-16 p-2 bg-neutral-950 rounded-lg border border-neutral-800">
                <svg viewBox="0 0 74.3 106.84" className="w-full h-auto">
                  <image href={`/brand/season-2-symbols/${anchor.meaningCode.toLowerCase()}${anchor.meaningIntensity}.svg`} x="0" y="0" width="74.3" height="36.87" />
                  <image href={`/brand/season-2-symbols/${anchor.agencyCode.toLowerCase()}${anchor.agencyIntensity}.svg`} x="0" y="36.87" width="74.3" height="18.76" />
                  <image href={`/brand/season-2-symbols/${anchor.judgmentCode.toLowerCase()}${anchor.judgmentIntensity}.svg`} x="0" y="55.63" width="74.3" height="51.21" />
                </svg>
              </div>

              <div>
                <span className="font-mono text-sm font-bold text-white block">
                  {anchor.code}
                </span>
                <span className="text-xs text-neutral-300 font-medium block mt-0.5">
                  {anchor.label[currentLang]}
                </span>
                <span className="text-[11px] text-neutral-500 block mt-1 leading-snug">
                  {anchor.desc[currentLang]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Core Dimensions Detail */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">三大衡量维度详解</h2>

        <div className="space-y-6">
          {dimensions.map(({ config, icon: Icon, accent, badgeColor }) => (
            <div
              key={config.id}
              className="bg-[#12141a] border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-neutral-900 rounded-xl border border-neutral-800">
                    <Icon className={`w-6 h-6 ${accent}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {config.title[currentLang]}
                    </h3>
                    <span className="text-xs text-neutral-400 font-mono">
                      韩语对照: {config.groupKo} · 题量: {config.id === 'personal' ? '11 题' : '13 题'}
                    </span>
                  </div>
                </div>

                <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${badgeColor}`}>
                  {config.leftKo} ({config.leftLetter}) vs {config.rightKo} ({config.rightLetter})
                </span>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {config.intro[currentLang]}
              </p>

              {/* Opposing Stances Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Left Side */}
                <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-base">
                      {config.leftLabel[currentLang]}
                    </span>
                    <span className="font-mono text-xs text-neutral-400 bg-neutral-800 px-2 py-0.5 rounded">
                      代号 {config.leftLetter} · 理想主义
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {config.leftDesc[currentLang]}
                  </p>
                </div>

                {/* Right Side */}
                <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-base">
                      {config.rightLabel[currentLang]}
                    </span>
                    <span className="font-mono text-xs text-neutral-400 bg-neutral-800 px-2 py-0.5 rounded">
                      代号 {config.rightLetter} · 现实主义
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {config.rightDesc[currentLang]}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Academic Background & Credit */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-[#13151b] to-neutral-900 border border-neutral-800 text-sm text-neutral-400 space-y-3">
        <div className="flex items-center space-x-2 text-white font-bold">
          <HelpCircle className="w-4 h-4 text-sky-400" />
          <span>{t.disclaimerTitle}</span>
        </div>
        <ul className="list-disc pl-5 space-y-1.5 text-xs text-neutral-400">
          {t.disclaimerItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      </div>

    </div>
  );
};
