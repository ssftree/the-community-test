import React from 'react';
import { Language, AnswerValue } from '../types';
import { QUESTIONS_DATA, DIMENSIONS_CONFIG } from '../data/questions';
import { X, CheckCircle2, XCircle } from 'lucide-react';

interface UserAnswersModalProps {
  answers: Record<string, AnswerValue>;
  currentLang: Language;
  onClose: () => void;
}

export const UserAnswersModal: React.FC<UserAnswersModalProps> = ({
  answers,
  currentLang,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#12141a] border border-neutral-800 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/60">
          <div>
            <h3 className="text-lg font-bold text-white">我的 37 题作答详情</h3>
            <span className="text-xs text-neutral-400 font-mono">
              全部完成记录 ({Object.keys(answers).length}/37)
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Scrollable list */}
        <div className="p-5 overflow-y-auto space-y-4 scrollbar-thin">
          {QUESTIONS_DATA.map((q, idx) => {
            const ans = answers[q.id];
            const config = DIMENSIONS_CONFIG[q.dimension];
            const earnedValue = ans === 'O' ? q.agreeValueKo : q.oppositeValueKo;

            return (
              <div
                key={q.id}
                className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800 space-y-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono font-bold text-red-400">
                      #{String(idx + 1).padStart(2, '0')} [{q.id.toUpperCase()}]
                    </span>
                    <span className="text-neutral-500 font-mono">
                      {config.title[currentLang]}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1.5 font-mono">
                    {ans === 'O' ? (
                      <span className="text-red-400 font-bold flex items-center space-x-1 bg-red-950/60 px-2 py-0.5 rounded border border-red-900/50">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>O · 同意</span>
                      </span>
                    ) : ans === 'X' ? (
                      <span className="text-sky-400 font-bold flex items-center space-x-1 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-900/50">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>X · 反对</span>
                      </span>
                    ) : (
                      <span className="text-neutral-500">未作答</span>
                    )}
                    <span className="text-neutral-400 ml-1">
                      → 计入: <b className="text-white">{earnedValue}</b>
                    </span>
                  </div>
                </div>

                <p className="text-neutral-200 text-sm leading-relaxed">
                  {q.prompt[currentLang]}
                </p>

                {currentLang !== 'ko' && (
                  <p className="text-[11px] text-neutral-500 font-sans">
                    원문: {q.prompt.ko}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-900/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium transition"
          >
            关闭详情
          </button>
        </div>

      </div>
    </div>
  );
};
