import React, { useState } from 'react';
import { Language, DimensionKey, AnswerValue } from '../types';
import { QUESTIONS_DATA, DIMENSIONS_CONFIG, Question } from '../data/questions';
import { I18N } from '../data/i18n';
import { Search, Filter, Layers, CheckCircle2, XCircle, Languages, Sparkles } from 'lucide-react';

interface QuestionLibraryProps {
  currentLang: Language;
  userAnswers?: Record<string, AnswerValue>;
  onStartTest: () => void;
}

export const QuestionLibrary: React.FC<QuestionLibraryProps> = ({
  currentLang,
  userAnswers = {},
  onStartTest,
}) => {
  const t = I18N[currentLang];
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedDimension, setSelectedDimension] = useState<DimensionKey | 'all'>('all');
  const [showAllLanguages, setShowAllLanguages] = useState<boolean>(false);

  // Filter questions
  const filteredQuestions = QUESTIONS_DATA.filter((q) => {
    // Dimension filter
    if (selectedDimension !== 'all' && q.dimension !== selectedDimension) {
      return false;
    }
    // Search query filter
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      const matchZh = q.prompt['zh-CN'].toLowerCase().includes(term);
      const matchZhTw = q.prompt['zh-TW'].toLowerCase().includes(term);
      const matchKo = q.prompt.ko.toLowerCase().includes(term);
      const matchEn = q.prompt.en.toLowerCase().includes(term);
      const matchId = q.id.toLowerCase().includes(term);
      return matchZh || matchZhTw || matchKo || matchEn || matchId;
    }
    return true;
  });

  const dimensionCounts = {
    all: QUESTIONS_DATA.length,
    ethical: QUESTIONS_DATA.filter((q) => q.dimension === 'ethical').length,
    social: QUESTIONS_DATA.filter((q) => q.dimension === 'social').length,
    personal: QUESTIONS_DATA.filter((q) => q.dimension === 'personal').length,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-8">
      
      {/* Header & Description */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-sky-400 text-xs font-mono tracking-wider uppercase">
          <Languages className="w-3.5 h-3.5" />
          <span>OFFICIAL MULTILINGUAL QUESTION REPOSITORY</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          {t.libraryTitle}
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
          {t.librarySubtitle}
        </p>
      </div>

      {/* Control Bar: Search & Filter Tabs */}
      <div className="bg-[#101217] border border-neutral-800 rounded-2xl p-4 sm:p-6 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 bg-neutral-900 border border-neutral-700/80 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
              >
                清空
              </button>
            )}
          </div>

          {/* Toggle Bilingual / Trilingual Comparison View */}
          <button
            onClick={() => setShowAllLanguages(!showAllLanguages)}
            className={`px-4 py-2.5 rounded-xl border text-xs font-mono font-medium tracking-wide transition flex items-center justify-center space-x-2 ${
              showAllLanguages
                ? 'bg-neutral-800 text-white border-sky-500 shadow-sm'
                : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-neutral-200'
            }`}
          >
            <Languages className="w-3.5 h-3.5 text-sky-400" />
            <span>{showAllLanguages ? '收起多语言对照' : '开启中·韩·英多语对照'}</span>
          </button>

          {/* Quick Start Test Button */}
          <button
            onClick={onStartTest}
            className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs tracking-wide shadow-md transition flex items-center justify-center space-x-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>开始全真测试</span>
          </button>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-neutral-800/80 text-xs">
          <span className="text-neutral-500 font-mono mr-1 flex items-center space-x-1">
            <Filter className="w-3 h-3" />
            <span>筛选:</span>
          </span>

          <button
            onClick={() => setSelectedDimension('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition ${
              selectedDimension === 'all'
                ? 'bg-red-600 text-white'
                : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            {t.filterAll} ({dimensionCounts.all})
          </button>

          <button
            onClick={() => setSelectedDimension('ethical')}
            className={`px-3 py-1.5 rounded-lg font-medium transition ${
              selectedDimension === 'ethical'
                ? 'bg-red-600 text-white'
                : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            {DIMENSIONS_CONFIG.ethical.title[currentLang]} ({dimensionCounts.ethical})
          </button>

          <button
            onClick={() => setSelectedDimension('social')}
            className={`px-3 py-1.5 rounded-lg font-medium transition ${
              selectedDimension === 'social'
                ? 'bg-red-600 text-white'
                : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            {DIMENSIONS_CONFIG.social.title[currentLang]} ({dimensionCounts.social})
          </button>

          <button
            onClick={() => setSelectedDimension('personal')}
            className={`px-3 py-1.5 rounded-lg font-medium transition ${
              selectedDimension === 'personal'
                ? 'bg-red-600 text-white'
                : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            {DIMENSIONS_CONFIG.personal.title[currentLang]} ({dimensionCounts.personal})
          </button>
        </div>
      </div>

      {/* Questions Count Indicator */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-400 px-1">
        <span>显示 {filteredQuestions.length} 道题目 (共 {QUESTIONS_DATA.length} 道)</span>
        {Object.keys(userAnswers).length > 0 && (
          <span className="text-emerald-400">
            ✓ 已同步你的答题记录 ({Object.keys(userAnswers).length}/{QUESTIONS_DATA.length})
          </span>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.map((q, index) => {
          const config = DIMENSIONS_CONFIG[q.dimension];
          const userAnswer = userAnswers[q.id];

          return (
            <div
              key={q.id}
              className="bg-[#12141a] border border-neutral-800/90 rounded-2xl p-5 sm:p-7 space-y-4 hover:border-neutral-700 transition"
            >
              {/* Question Top Meta */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2.5">
                  <span className="font-mono text-sm font-bold text-red-500 bg-red-950/40 border border-red-900/50 px-2.5 py-0.5 rounded">
                    #{q.id.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                    {config.title[currentLang]} ({config.leftKo} vs {config.rightKo})
                  </span>
                </div>

                {/* User Answer Badge if answered */}
                {userAnswer && (
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-neutral-800 border border-neutral-700 text-xs font-mono">
                    <span className="text-neutral-400">你的选择:</span>
                    {userAnswer === 'O' ? (
                      <span className="text-red-400 font-bold flex items-center space-x-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>O (同意 → {q.agreeValueKo})</span>
                      </span>
                    ) : (
                      <span className="text-sky-400 font-bold flex items-center space-x-1">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>X (反对 → {q.oppositeValueKo})</span>
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Primary Prompt in selected language */}
              <div className="text-base sm:text-lg font-medium text-white leading-relaxed">
                {q.prompt[currentLang]}
              </div>

              {/* Trilingual Detailed View (if toggled on or if currentLang != ko) */}
              {(showAllLanguages || currentLang !== 'ko') && (
                <div className="space-y-2 pt-2 border-t border-neutral-800/80 text-xs">
                  {currentLang !== 'ko' && (
                    <div className="p-2.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-300">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-0.5">🇰🇷 한국어 원문 (Korean Original):</span>
                      {q.prompt.ko}
                    </div>
                  )}

                  {showAllLanguages && (
                    <>
                      {currentLang !== 'zh-CN' && (
                        <div className="p-2.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-300">
                          <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-0.5">🇨🇳 简体中文 (Simplified Chinese):</span>
                          {q.prompt['zh-CN']}
                        </div>
                      )}
                      {currentLang !== 'en' && (
                        <div className="p-2.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-300">
                          <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-0.5">🇺🇸 English (Academic Translation):</span>
                          {q.prompt.en}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}

              {/* Scoring Alignment Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-neutral-800/60 text-xs font-mono">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1.5 text-neutral-400">
                    <span className="w-4 h-4 rounded bg-red-950/60 text-red-400 flex items-center justify-center font-bold text-[10px] border border-red-800/60">O</span>
                    <span>同意计入:</span>
                    <b className="text-white bg-neutral-800 px-1.5 py-0.5 rounded">{q.agreeValueKo}</b>
                  </div>

                  <div className="flex items-center space-x-1.5 text-neutral-400">
                    <span className="w-4 h-4 rounded bg-sky-950/60 text-sky-400 flex items-center justify-center font-bold text-[10px] border border-sky-800/60">X</span>
                    <span>反对计入:</span>
                    <b className="text-white bg-neutral-800 px-1.5 py-0.5 rounded">{q.oppositeValueKo}</b>
                  </div>
                </div>

                <span className="text-[11px] text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                  主题标签: {q.category}
                </span>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
