import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Language, TestResult } from '../types';
import { I18N } from '../data/i18n';
import { ARCHETYPES } from '../data/archetypes';
import { DIMENSIONS_CONFIG, QUESTIONS_DATA } from '../data/questions';
import { SymbolTower } from './SymbolTower';
import { Share2, RotateCcw, ListFilter, Check, Layers, Sparkles, ShieldCheck } from 'lucide-react';

interface ResultViewProps {
  result: TestResult;
  currentLang: Language;
  onRetake: () => void;
  onViewAnswers: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  result,
  currentLang,
  onRetake,
  onViewAnswers,
}) => {
  const t = I18N[currentLang];
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    // Fire celebratory confetti on initial load
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ef4444', '#38bdf8', '#ffffff', '#e2e8f0'],
    });
  }, []);

  const archetype = ARCHETYPES[result.archetypeId] || ARCHETYPES['H-A-U'];

  const handleCopyShare = () => {
    const textToCopy = `【思想验证区域2 · 我的思想象征图腾】\n图腾代号: ${result.fullCode} (${result.threeLetterCode})\n类型: ${archetype.name[currentLang]} - ${archetype.title[currentLang]}\n维度判定: ${result.resultTypeKo}\n测试网址: ${window.location.href}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const axes = [
    { key: 'meaning', data: result.meaning, config: DIMENSIONS_CONFIG.personal },
    { key: 'agency', data: result.agency, config: DIMENSIONS_CONFIG.social },
    { key: 'judgment', data: result.judgment, config: DIMENSIONS_CONFIG.ethical },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-10">
      
      {/* Result Hero Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/80 text-red-400 text-xs font-mono tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.yourSymbol}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          {archetype.name[currentLang]}
        </h1>
        <p className="text-lg text-neutral-300 max-w-xl mx-auto font-medium">
          {archetype.title[currentLang]}
        </p>
      </div>

      {/* Main Symbol Presentation Stage */}
      <div className="bg-[#101217] border border-neutral-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        
        {/* Architectural Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#272a34_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          
          {/* Symbol Display */}
          <div className="p-6 bg-neutral-900/90 border border-neutral-700/60 rounded-2xl shadow-inner mb-8">
            <SymbolTower
              meaning={result.meaning}
              agency={result.agency}
              judgment={result.judgment}
              size="lg"
              showLabels={true}
            />
          </div>

          {/* Code Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 font-mono">
            <div className="px-3.5 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700 text-sm">
              <span className="text-neutral-500 mr-2">FULL CODE:</span>
              <span className="text-red-400 font-bold">{result.fullCode}</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700 text-sm">
              <span className="text-neutral-500 mr-2">3-AXIS:</span>
              <span className="text-sky-400 font-bold">{result.threeLetterCode}</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700 text-sm">
              <span className="text-neutral-500 mr-2">KOREAN:</span>
              <span className="text-white font-semibold">{result.resultTypeKo}</span>
            </div>
          </div>

          {/* Archetype Description */}
          <div className="mt-8 max-w-2xl text-center space-y-4">
            <p className="text-neutral-300 text-base leading-relaxed sm:text-lg">
              {archetype.summary[currentLang]}
            </p>

            {/* Core Values Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {archetype.coreValues[currentLang].map((val, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-800 text-neutral-200 border border-neutral-700"
                >
                  #{val}
                </span>
              ))}
            </div>

            {/* Analog character note */}
            <div className="pt-4 text-xs font-mono text-neutral-400 border-t border-neutral-800/80">
              <span className="text-neutral-500">社会角色类比：</span>
              <span>{archetype.characterAnalog[currentLang]}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Dimensional Breakdown Cards */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white tracking-wide flex items-center space-x-2">
          <Layers className="w-5 h-5 text-red-500" />
          <span>{t.dimensionBreakdown}</span>
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {axes.map(({ key, data, config }) => {
            const isLeftDominant = data.leftPercent >= data.rightPercent;
            return (
              <div
                key={key}
                className="bg-[#12141a] border border-neutral-800 rounded-xl p-5 sm:p-6 space-y-4 hover:border-neutral-700 transition"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                      {config.title[currentLang]}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      {isLeftDominant ? config.leftLabel[currentLang] : config.rightLabel[currentLang]}
                      <span className="ml-2 text-xs font-mono text-neutral-400">
                        (强度 {data.intensity} 级 · {data.intensity === 2 ? '显著偏向' : '轻度偏向'})
                      </span>
                    </h3>
                  </div>

                  <span className="text-xl font-black font-mono text-white px-3 py-1 bg-neutral-800 rounded border border-neutral-700">
                    {data.code}{data.intensity}
                  </span>
                </div>

                {/* Balance Progress Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono text-neutral-400">
                    <span>{config.leftLabel[currentLang]}: <b className="text-white">{data.leftPercent}%</b></span>
                    <span>{config.rightLabel[currentLang]}: <b className="text-white">{data.rightPercent}%</b></span>
                  </div>

                  <div className="relative w-full h-3 bg-neutral-800 rounded-full overflow-hidden flex">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-sky-500 transition-all duration-500"
                      style={{ width: `${data.leftPercent}%` }}
                    />
                    <div
                      className="h-full bg-gradient-to-r from-rose-500 to-amber-500 transition-all duration-500"
                      style={{ width: `${data.rightPercent}%` }}
                    />
                  </div>
                </div>

                {/* Explanation text */}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-neutral-800/80 pt-3">
                  {isLeftDominant ? config.leftDesc[currentLang] : config.rightDesc[currentLang]}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Density & Symbol Guide Notice */}
      <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-400 leading-relaxed space-y-1">
        <div className="font-semibold text-neutral-200 flex items-center space-x-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{t.densityGuideTitle}</span>
        </div>
        <p>{t.densityGuideDesc}</p>
      </div>

      {/* Action Buttons: Share, Retake, View Answers */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <button
          onClick={handleCopyShare}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-red-950/50 flex items-center justify-center space-x-2 transition active:scale-95"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-white" />
              <span>{t.copySuccess}</span>
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4 text-white" />
              <span>{t.shareBtn}</span>
            </>
          )}
        </button>

        <button
          onClick={onViewAnswers}
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium text-sm flex items-center justify-center space-x-2 border border-neutral-700 transition"
        >
          <ListFilter className="w-4 h-4 text-sky-400" />
          <span>{t.viewAnswersBtn}</span>
        </button>

        <button
          onClick={onRetake}
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white font-medium text-sm flex items-center justify-center space-x-2 border border-neutral-800 transition"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{t.retakeBtn}</span>
        </button>
      </div>

    </div>
  );
};
