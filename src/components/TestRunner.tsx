import React, { useState, useEffect } from 'react';
import { Language, AnswerValue, TestResult } from '../types';
import { QUESTIONS_DATA, DIMENSIONS_CONFIG, Question } from '../data/questions';
import { I18N } from '../data/i18n';
import { calculateTestResult } from '../utils/calculator';
import { ArrowLeft, ArrowRight, CheckCircle2, Shuffle, Info, RotateCcw } from 'lucide-react';

interface TestRunnerProps {
  currentLang: Language;
  onFinish: (result: TestResult) => void;
  onCancel: () => void;
}

export const TestRunner: React.FC<TestRunnerProps> = ({
  currentLang,
  onFinish,
  onCancel,
}) => {
  const t = I18N[currentLang];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});
  const [showOriginalKorean, setShowOriginalKorean] = useState<boolean>(true);
  const [validationError, setValidationError] = useState<string | null>(null);

  const currentQ: Question = QUESTIONS_DATA[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const totalCount = QUESTIONS_DATA.length;
  const progressPercent = Math.round((answeredCount / totalCount) * 100);

  const dimensionConfig = DIMENSIONS_CONFIG[currentQ.dimension];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if typing in an input
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return;

      if (e.key === 'o' || e.key === 'O' || e.key === '1') {
        e.preventDefault();
        handleAnswer('O');
      } else if (e.key === 'x' || e.key === 'X' || e.key === '2') {
        e.preventDefault();
        handleAnswer('X');
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, answers]);

  const handleAnswer = (choice: AnswerValue) => {
    const newAnswers = { ...answers, [currentQ.id]: choice };
    setAnswers(newAnswers);
    setValidationError(null);

    // Auto-advance if not on the last question
    if (currentIndex < totalCount - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalCount - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSubmit = () => {
    if (answeredCount < totalCount) {
      const missingIndex = QUESTIONS_DATA.findIndex(q => !answers[q.id]);
      if (missingIndex !== -1) {
        setCurrentIndex(missingIndex);
        setValidationError(`还有 ${totalCount - answeredCount} 道题未作答，请先回答第 ${missingIndex + 1} 题。`);
        return;
      }
    }
    const result = calculateTestResult(answers);
    onFinish(result);
  };

  const handleQuickFillRandom = () => {
    const randomAnswers: Record<string, AnswerValue> = {};
    QUESTIONS_DATA.forEach(q => {
      randomAnswers[q.id] = Math.random() > 0.5 ? 'O' : 'X';
    });
    setAnswers(randomAnswers);
    setValidationError(null);
  };

  const handleReset = () => {
    if (window.confirm('确认清空所有已填答选项重新开始吗？')) {
      setAnswers({});
      setCurrentIndex(0);
      setValidationError(null);
    }
  };

  const currentSelection = answers[currentQ.id];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Top Bar: Progress and Counter */}
      <div className="bg-[#101217] border border-neutral-800 rounded-xl p-4 sm:p-6 mb-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-2xl font-bold text-white tracking-wider">
              {String(currentIndex + 1).padStart(2, '0')}
              <span className="text-neutral-500 text-sm font-normal"> / {totalCount}</span>
            </span>
            <div className="h-4 w-px bg-neutral-700" />
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-neutral-800 text-xs font-medium text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>{dimensionConfig.title[currentLang]}</span>
              <span className="text-neutral-500 font-mono text-[11px]">({dimensionConfig.leftKo} vs {dimensionConfig.rightKo})</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs text-neutral-400">
            <span>{t.answeredCount}: <b className="text-white font-mono">{answeredCount}</b> / {totalCount}</span>
            <button
              onClick={handleQuickFillRandom}
              className="ml-2 px-2 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded text-[11px] transition"
              title="一键随机模拟填答，快速体验计算结果"
            >
              {t.quickFillRandomBtn}
            </button>
            {answeredCount > 0 && (
              <button
                onClick={handleReset}
                className="p-1 hover:text-red-400 text-neutral-500 transition"
                title="重置测试"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-red-600 via-rose-500 to-sky-400 h-full transition-all duration-300"
            style={{ width: `${(answeredCount / totalCount) * 100}%` }}
          />
        </div>

        {/* Question Quick Jump Pills */}
        <div className="mt-4 flex flex-wrap gap-1 max-h-16 overflow-y-auto scrollbar-thin">
          {QUESTIONS_DATA.map((q, idx) => {
            const isAnswered = !!answers[q.id];
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                className={`w-6 h-6 rounded text-[11px] font-mono transition flex items-center justify-center ${
                  isCurrent
                    ? 'bg-red-600 text-white font-bold ring-2 ring-red-400/50'
                    : isAnswered
                    ? 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                    : 'bg-neutral-900 text-neutral-600 border border-neutral-800/80 hover:bg-neutral-800'
                }`}
                title={`第 ${idx + 1} 题 (${isAnswered ? '已作答' : '未作答'})`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-[#12141a] border border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-neutral-800/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase bg-neutral-900/90 border border-neutral-800 px-2.5 py-1 rounded">
            QUESTION {String(currentIndex + 1).padStart(2, '0')} · {currentQ.id.toUpperCase()}
          </span>

          {currentLang !== 'ko' && (
            <button
              onClick={() => setShowOriginalKorean(!showOriginalKorean)}
              className="text-[11px] text-neutral-400 hover:text-white flex items-center space-x-1 font-mono transition"
            >
              <Info className="w-3 h-3" />
              <span>{showOriginalKorean ? '隐藏韩语原题' : '显示韩语原题'}</span>
            </button>
          )}
        </div>

        {/* Primary Prompt Text */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-relaxed mb-6">
          {currentQ.prompt[currentLang]}
        </h2>

        {/* Side-by-side / Reference Original Korean Text */}
        {currentLang !== 'ko' && showOriginalKorean && (
          <div className="p-3.5 mb-8 rounded-lg bg-neutral-900/70 border border-neutral-800/90 text-sm text-neutral-400 leading-relaxed font-sans">
            <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">한국어 원문 (Original Korean):</span>
            {currentQ.prompt.ko}
          </div>
        )}

        {/* Choice Buttons: O vs X */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-8">
          {/* O (Agree) Button */}
          <button
            onClick={() => handleAnswer('O')}
            className={`group relative p-6 rounded-xl border text-left transition-all duration-200 ${
              currentSelection === 'O'
                ? 'bg-neutral-800/90 border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.25)] ring-1 ring-red-500'
                : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold font-mono transition ${
                  currentSelection === 'O'
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-neutral-800 text-neutral-300 group-hover:bg-neutral-700'
                }`}>
                  O
                </span>
                <div>
                  <div className="text-lg font-bold text-white tracking-wide">
                    {t.agreeBtn}
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    {t.agreeTip}
                  </div>
                </div>
              </div>

              {currentSelection === 'O' && (
                <CheckCircle2 className="w-6 h-6 text-red-500" />
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800/70 text-[11px] text-neutral-400 font-mono">
              <span>{t.agreeMeans}: </span>
              <span className="text-white font-medium">{currentQ.agreeValueKo}</span>
            </div>
          </button>

          {/* X (Disagree) Button */}
          <button
            onClick={() => handleAnswer('X')}
            className={`group relative p-6 rounded-xl border text-left transition-all duration-200 ${
              currentSelection === 'X'
                ? 'bg-neutral-800/90 border-sky-500 shadow-[0_0_25px_rgba(56,189,248,0.25)] ring-1 ring-sky-500'
                : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold font-mono transition ${
                  currentSelection === 'X'
                    ? 'bg-sky-600 text-white shadow-lg'
                    : 'bg-neutral-800 text-neutral-300 group-hover:bg-neutral-700'
                }`}>
                  X
                </span>
                <div>
                  <div className="text-lg font-bold text-white tracking-wide">
                    {t.disagreeBtn}
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    {t.disagreeTip}
                  </div>
                </div>
              </div>

              {currentSelection === 'X' && (
                <CheckCircle2 className="w-6 h-6 text-sky-400" />
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800/70 text-[11px] text-neutral-400 font-mono">
              <span>{t.disagreeMeans}: </span>
              <span className="text-white font-medium">{currentQ.oppositeValueKo}</span>
            </div>
          </button>
        </div>

        {/* Validation Warning */}
        {validationError && (
          <div className="p-3 mb-6 bg-red-950/60 border border-red-800/80 rounded-lg text-red-300 text-sm">
            {validationError}
          </div>
        )}

        {/* Navigation Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-medium transition ${
              currentIndex === 0
                ? 'text-neutral-600 cursor-not-allowed'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.prevBtn}</span>
          </button>

          <span className="text-xs text-neutral-500 hidden sm:inline-block font-mono">
            {t.keyboardTip}
          </span>

          {currentIndex === totalCount - 1 ? (
            <button
              onClick={handleSubmit}
              className="flex items-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-bold bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-900/40 transition-transform active:scale-95"
            >
              <span>{t.submitBtn}</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center space-x-1.5 px-5 py-2.5 rounded-lg text-sm font-medium bg-neutral-800 hover:bg-neutral-700 text-white transition"
            >
              <span>{t.nextBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
