import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';

interface CustomLanguageMenuProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LANGUAGES: { code: Language; label: string; flag: string; short: string; native: string }[] = [
  { code: 'zh-CN', label: '中文 (简体)', flag: '🇨🇳', short: 'ZH-CN', native: '简体中文' },
  { code: 'zh-TW', label: '中文 (繁體)', flag: '🇭🇰', short: 'ZH-TW', native: '繁體中文' },
  { code: 'ko', label: '한국어', flag: '🇰🇷', short: 'KO', native: '한국어 원문' },
  { code: 'en', label: 'English', flag: '🇺🇸', short: 'EN', native: 'English' },
  { code: 'ja', label: '日本語', flag: '🇯🇵', short: 'JA', native: '日本語' },
  { code: 'es', label: 'Español', flag: '🇪🇸', short: 'ES', native: 'Español' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', short: 'FR', native: 'Français' },
];

export const CustomLanguageMenu: React.FC<CustomLanguageMenuProps> = ({
  currentLang,
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const activeLang = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="custom-lang-container" ref={menuRef}>
      <button
        type="button"
        className={`custom-lang-trigger ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="custom-lang-flag">{activeLang.flag}</span>
        <span className="custom-lang-code">{activeLang.short}</span>
        <span className="custom-lang-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="custom-lang-dropdown" role="listbox">
          <div className="custom-lang-header">
            <span>SELECT LANGUAGE</span>
          </div>
          <div className="custom-lang-list">
            {LANGUAGES.map((lang) => {
              const isSelected = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  type="button"
                  className={`custom-lang-item ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => {
                    onLanguageChange(lang.code);
                    setIsOpen(false);
                  }}
                  role="option"
                  aria-selected={isSelected}
                >
                  <span className="item-flag">{lang.flag}</span>
                  <div className="item-text">
                    <span className="item-label">{lang.label}</span>
                    <span className="item-native">{lang.native}</span>
                  </div>
                  {isSelected && <span className="item-check">✓</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
