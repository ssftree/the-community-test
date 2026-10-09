import React from 'react';
import { Language } from '../types';
import { I18N } from '../data/i18n';
import { Globe, BookOpen, Compass, Award, ExternalLink } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: 'test' | 'library' | 'guide' | 'show';
  onTabChange: (tab: 'test' | 'library' | 'guide' | 'show') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  activeTab,
  onTabChange,
}) => {
  const t = I18N[currentLang];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'zh-CN', label: '简体中文', flag: '🇨🇳' },
    { code: 'zh-TW', label: '繁體中文', flag: '🇭🇰' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#090a0d]/90 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Season Badge */}
          <div className="flex items-center space-x-3 sm:space-x-4 cursor-pointer" onClick={() => onTabChange('test')}>
            <div className="flex items-center space-x-2">
              <img 
                src="/brand/the-community-wordmark.svg" 
                alt="The Community" 
                className="h-5 sm:h-6 invert opacity-90"
              />
            </div>
            <div className="h-4 w-px bg-neutral-700 hidden sm:block" />
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium tracking-wide bg-red-950/60 text-red-400 border border-red-800/60 uppercase">
              SEASON 2 · 보이지 않는 손
            </span>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => onTabChange('test')}
              className={`px-3.5 py-2 rounded-md text-xs lg:text-sm font-medium tracking-wide transition-colors flex items-center space-x-1.5 ${
                activeTab === 'test'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40'
              }`}
            >
              <Compass className="w-4 h-4 text-red-500" />
              <span>{t.navTest}</span>
            </button>

            <button
              onClick={() => onTabChange('library')}
              className={`px-3.5 py-2 rounded-md text-xs lg:text-sm font-medium tracking-wide transition-colors flex items-center space-x-1.5 ${
                activeTab === 'library'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40'
              }`}
            >
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span>{t.navLibrary}</span>
            </button>

            <button
              onClick={() => onTabChange('guide')}
              className={`px-3.5 py-2 rounded-md text-xs lg:text-sm font-medium tracking-wide transition-colors flex items-center space-x-1.5 ${
                activeTab === 'guide'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40'
              }`}
            >
              <Award className="w-4 h-4 text-emerald-400" />
              <span>{t.navGuide}</span>
            </button>

            <button
              onClick={() => onTabChange('show')}
              className={`px-3.5 py-2 rounded-md text-xs lg:text-sm font-medium tracking-wide transition-colors flex items-center space-x-1.5 ${
                activeTab === 'show'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40'
              }`}
            >
              <span>{t.navShow}</span>
            </button>
          </nav>

          {/* Language Selector Dropdown */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative flex items-center bg-neutral-900 border border-neutral-700/80 rounded-lg p-1">
              <Globe className="w-3.5 h-3.5 text-neutral-400 ml-1.5 mr-1" />
              <select
                value={currentLang}
                onChange={(e) => onLanguageChange(e.target.value as Language)}
                className="bg-transparent text-xs text-neutral-200 font-medium tracking-wide focus:outline-none cursor-pointer pr-2 py-0.5"
                aria-label="Language Selector"
              >
                {languages.map((l) => (
                  <option key={l.code} value={l.code} className="bg-neutral-900 text-neutral-100">
                    {l.flag} {l.label}
                  </option>
                ))}
              </select>
            </div>

            <a
              href="https://thecommunity.co.kr/season/2/test"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center space-x-1 text-[11px] font-mono text-neutral-400 hover:text-white px-2 py-1 rounded border border-neutral-800 hover:border-neutral-600 transition"
              title="Official Korean Website"
            >
              <span>thecommunity.co.kr</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Mobile Subnavigation */}
        <div className="md:hidden flex items-center justify-around py-2 border-t border-neutral-800/60 overflow-x-auto text-xs">
          <button
            onClick={() => onTabChange('test')}
            className={`px-2.5 py-1 rounded whitespace-nowrap ${
              activeTab === 'test' ? 'bg-neutral-800 text-white font-semibold' : 'text-neutral-400'
            }`}
          >
            {t.navTest}
          </button>
          <button
            onClick={() => onTabChange('library')}
            className={`px-2.5 py-1 rounded whitespace-nowrap ${
              activeTab === 'library' ? 'bg-neutral-800 text-white font-semibold' : 'text-neutral-400'
            }`}
          >
            {t.navLibrary}
          </button>
          <button
            onClick={() => onTabChange('guide')}
            className={`px-2.5 py-1 rounded whitespace-nowrap ${
              activeTab === 'guide' ? 'bg-neutral-800 text-white font-semibold' : 'text-neutral-400'
            }`}
          >
            {t.navGuide}
          </button>
          <button
            onClick={() => onTabChange('show')}
            className={`px-2.5 py-1 rounded whitespace-nowrap ${
              activeTab === 'show' ? 'bg-neutral-800 text-white font-semibold' : 'text-neutral-400'
            }`}
          >
            {t.navShow}
          </button>
        </div>

      </div>
    </header>
  );
};
