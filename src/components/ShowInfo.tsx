import React from 'react';
import { Language } from '../types';
import { Tv, Sparkles, ExternalLink, ArrowRight, Shield, Award } from 'lucide-react';

interface ShowInfoProps {
  currentLang: Language;
  onGoToTest: () => void;
}

export const ShowInfo: React.FC<ShowInfoProps> = ({ currentLang, onGoToTest }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 space-y-12">
      
      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-gradient-to-br from-[#12141a] via-[#0d0e12] to-black p-8 sm:p-12 shadow-2xl">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/80 text-red-400 text-xs font-mono tracking-wider uppercase">
            <Tv className="w-3.5 h-3.5" />
            <span>WAVVE ORIGINAL SOCIAL EXPERIMENT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            思想验证区域：The Community
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            韩国 Wavve 平台封神级高分社会生存真人秀。不同政治立场、性别观念、社会阶层与道德哲学的参与者共处同一封闭社区，在资源受限与权力竞逐中展开博弈。
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onGoToTest}
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wide shadow-lg flex items-center space-x-2 transition"
            >
              <span>立即体验第二季测试</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://thecommunity.co.kr/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-medium text-sm border border-neutral-700 flex items-center space-x-1.5 transition"
            >
              <span>韩国官方网站</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Season 1 vs Season 2 Comparison */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">两季思想坐标体系对比</h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            从第一季的“政治与身份认同”到第二季的“经济博弈与伦理抉择”
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Season 1 Card */}
          <div className="bg-[#12141a] border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-neutral-400 bg-neutral-800 px-2.5 py-1 rounded">
                SEASON 01
              </span>
              <span className="text-xs text-neutral-400">156万+ 观众参与测试</span>
            </div>
            <h3 className="text-xl font-bold text-white">第一季：思想验证区域</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              聚焦社会议题上的显性冲突。参与者在入驻前完成 4 大维度的思想坐标判定，每个轴线划分为 1~3 分的极化程度：
            </p>

            <ul className="space-y-2.5 text-xs text-neutral-300 font-mono">
              <li className="p-2.5 rounded bg-neutral-900 border border-neutral-800 flex justify-between">
                <span>政治 (POLITICS)</span>
                <b className="text-amber-400">左派 (Left) ↔ 右派 (Right)</b>
              </li>
              <li className="p-2.5 rounded bg-neutral-900 border border-neutral-800 flex justify-between">
                <span>性别 (GENDER)</span>
                <b className="text-rose-400">女权 (Feminism) ↔ 平权 (Equalism)</b>
              </li>
              <li className="p-2.5 rounded bg-neutral-900 border border-neutral-800 flex justify-between">
                <span>阶级 (CLASS)</span>
                <b className="text-sky-400">平民 (Working) ↔ 富裕 (Upper-Middle)</b>
              </li>
              <li className="p-2.5 rounded bg-neutral-900 border border-neutral-800 flex justify-between">
                <span>开放性 (OPENNESS)</span>
                <b className="text-emerald-400">开放 (Open) ↔ 传统 (Conservative)</b>
              </li>
            </ul>
          </div>

          {/* Season 2 Card */}
          <div className="bg-[#12141a] border border-red-900/40 rounded-2xl p-6 sm:p-8 space-y-4 ring-1 ring-red-500/30">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-red-400 bg-red-950/70 border border-red-800/80 px-2.5 py-1 rounded">
                SEASON 02 · NEW
              </span>
              <span className="text-xs text-red-400 font-mono">37道全真思想实验题</span>
            </div>
            <h3 className="text-xl font-bold text-white">第二季：看不见的手</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              直击更隐秘深层的经济哲学与道德困境。借用亚当·斯密“看不见的手”概念，测算个人在财富、制度与极端情境下的决策本能：
            </p>

            <ul className="space-y-2.5 text-xs text-neutral-300 font-mono">
              <li className="p-2.5 rounded bg-neutral-900 border border-neutral-800 flex justify-between">
                <span>个人维度 (PERSONAL)</span>
                <b className="text-amber-400">意义 (Meaning B) ↔ 实利 (Utility H)</b>
              </li>
              <li className="p-2.5 rounded bg-neutral-900 border border-neutral-800 flex justify-between">
                <span>社会维度 (SOCIAL)</span>
                <b className="text-sky-400">结构 (Structure S) ↔ 能力 (Ability A)</b>
              </li>
              <li className="p-2.5 rounded bg-neutral-900 border border-neutral-800 flex justify-between">
                <span>伦理维度 (ETHICAL)</span>
                <b className="text-rose-400">原则 (Principles M) ↔ 结果 (Results U)</b>
              </li>
              <li className="p-2.5 rounded bg-red-950/40 border border-red-800/60 flex justify-between text-red-300">
                <span>象征图腾 (SYMBOL)</span>
                <b>3 层建筑图腾 (屋顶 · 腰带 · 柱体)</b>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Program Highlights */}
      <div className="bg-[#101217] border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center space-x-2">
          <Award className="w-5 h-5 text-amber-400" />
          <span>为什么《思想验证区域》被誉为生存真人秀的天花板？</span>
        </h3>
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
          不同于传统撕裂对立或浅层作秀，节目没有裁判、没有预设答案。它真实呈现了当不同立场的人必须共同制定税率、选举领袖、分配有限生活金并面临匿名攻击时，人性如何在博弈中展现崇高与脆弱。
        </p>
      </div>

    </div>
  );
};
