import React, { useState, useEffect, useId, useRef } from 'react';
import { toPng } from 'html-to-image';
import { Language } from '../types';
import { SEASON_1_QUESTIONS } from '../data/season1Questions';
import {
  REPLICA_I18N,
  SEASON_1_NOTICES,
  SEASON_1_SCALE_6,
  SEASON_1_SCALE_4,
  SEASON_1_GUIDE,
} from '../data/replicaTranslations';
import {
  calculateSeason1Result,
  Season1CalculatedResult,
  Bp,
  Hp,
  Lp,
  qp,
} from '../utils/season1Calculator';
import { CustomLanguageMenu } from './CustomLanguageMenu';

interface Season1ViewProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onSwitchSeason: (season: 'season-1' | 'season-2') => void;
}

const AXIS_CONFIG = [
  { codes: 'LR', title: '정치', leftEnglish: 'LEFT', leftKorean: '좌파', rightEnglish: 'RIGHT', rightKorean: '우파', titleMap: { 'zh-CN': '政治', 'zh-TW': '政治', ko: '정치', en: 'POLITICS', ja: '政治', es: 'POLÍTICA', fr: 'POLITIQUE' }, leftMap: { 'zh-CN': '左派', 'zh-TW': '左派', ko: '좌파', en: 'LEFT', ja: '左派', es: 'IZQUIERDA', fr: 'GAUCHE' }, rightMap: { 'zh-CN': '右派', 'zh-TW': '右派', ko: '우파', en: 'RIGHT', ja: '右派', es: 'DERECHA', fr: 'DROITE' } },
  { codes: 'FE', title: '젠더', leftEnglish: 'FEMINISM', leftKorean: '페미', rightEnglish: 'EQUALISM', rightKorean: '이퀄', titleMap: { 'zh-CN': '性别', 'zh-TW': '性別', ko: '젠더', en: 'GENDER', ja: 'ジェンダー', es: 'GÉNERO', fr: 'GENRE' }, leftMap: { 'zh-CN': '女权', 'zh-TW': '女權', ko: '페미', en: 'FEMINISM', ja: 'フェミ', es: 'FEMINISMO', fr: 'FÉMINISME' }, rightMap: { 'zh-CN': '平权', 'zh-TW': '平權', ko: '이퀄', en: 'EQUALISM', ja: 'イコール', es: 'IGUALDAD', fr: 'ÉGALITÉ' } },
  { codes: 'WU', title: '계급', leftEnglish: 'WORKING', leftKorean: '서민', rightEnglish: 'UPPER-MIDDLE', rightKorean: '부유', titleMap: { 'zh-CN': '阶级', 'zh-TW': '階級', ko: '계급', en: 'CLASS', ja: '階級', es: 'CLASE', fr: 'CLASSE' }, leftMap: { 'zh-CN': '平民', 'zh-TW': '平民', ko: '서민', en: 'WORKING', ja: '庶民', es: 'TRABAJADORA', fr: 'POPULAIRE' }, rightMap: { 'zh-CN': '富裕', 'zh-TW': '富裕', ko: '부유', en: 'UPPER-MID', ja: '富裕', es: 'ACOMODADA', fr: 'AISÉE' } },
  { codes: 'OC', title: '개방성', leftEnglish: 'OPEN MINDED', leftKorean: '개방', rightEnglish: 'CONSERVATIVE', rightKorean: '전통', titleMap: { 'zh-CN': '开放性', 'zh-TW': '開放性', ko: '개방성', en: 'OPENNESS', ja: '開放性', es: 'APERTURA', fr: 'OUVERTURE' }, leftMap: { 'zh-CN': '开放', 'zh-TW': '開放', ko: '개방', en: 'OPEN', ja: '開放', es: 'ABIERTO', fr: 'OUVERT' }, rightMap: { 'zh-CN': '传统', 'zh-TW': '傳統', ko: '전통', en: 'CONSERVATIVE', ja: '伝統', es: 'TRADICIONAL', fr: 'TRADITIONNEL' } },
];

export const Season1View: React.FC<Season1ViewProps> = ({
  currentLang,
  onLanguageChange,
  onSwitchSeason,
}) => {
  const [step, setStep] = useState<'gate' | 'testing' | 'result'>('gate');
  const [displayName, setDisplayName] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [result, setResult] = useState<Season1CalculatedResult | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState<boolean>(false);
  const resultCardRef = useRef<HTMLElement>(null);

  const t = REPLICA_I18N[currentLang];
  const s1Notices = SEASON_1_NOTICES[currentLang] || SEASON_1_NOTICES['ko'];
  const maskId = useId().replaceAll(':', '');

  const currentQ = SEASON_1_QUESTIONS[currentIndex];

  // Keyboard navigation for Likert answers
  useEffect(() => {
    if (step !== 'testing' || isSubmitting) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
      const num = parseInt(e.key, 10);
      if (!isNaN(num) && num >= 1 && num <= currentQ.scale) {
        e.preventDefault();
        handleAnswer(num);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        e.preventDefault();
        setCurrentIndex((prev) => Math.max(0, prev - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step, currentIndex, isSubmitting, answers, currentQ]);

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('testing');
    setCurrentIndex(0);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleAnswer = (val: number) => {
    const nextAnswers = { ...answers, [currentQ.id]: val };
    setAnswers(nextAnswers);

    if (currentIndex < SEASON_1_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 180);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        const computed = calculateSeason1Result(nextAnswers);
        setResult(computed);
        setIsSubmitting(false);
        setStep('result');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 600);
    }
  };

  const handleQuickFillRandom = () => {
    const randomAnswers: Record<string, number> = {};
    SEASON_1_QUESTIONS.forEach((q) => {
      randomAnswers[q.id] = Math.floor(Math.random() * q.scale) + 1;
    });
    setAnswers(randomAnswers);
    setIsSubmitting(true);
    setTimeout(() => {
      const computed = calculateSeason1Result(randomAnswers);
      setResult(computed);
      setIsSubmitting(false);
      setStep('result');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 400);
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentIndex(0);
    setResult(null);
    setStep('testing');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareText = `${displayName ? `${displayName}${t.ownerSuffix}` : t.yourResult} ${result?.fourLetterCode} (${result?.resultType})`;
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${shareUrl} ${shareText}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // fallback
    }
  };

  const handleSaveImage = async () => {
    if (!resultCardRef.current || isGeneratingImage) return;
    setIsGeneratingImage(true);
    try {
      const dataUrl = await toPng(resultCardRef.current, {
        cacheBust: true,
        pixelRatio: 2.5,
        backgroundColor: '#f2f0ea',
      });
      const link = document.createElement('a');
      link.download = `the-community-s1-${result?.fourLetterCode || 'result'}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to generate image', err);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleShareTwitter = () => {
    const url = `https://thecommnutiy.online/?lang=${currentLang}#season-1`;
    const text = `${displayName ? `${displayName}${t.ownerSuffix}` : t.yourResult} ${result?.fourLetterCode} (${result?.resultType}) #TheCommunity #사상검증구역`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      '_blank',
      'width=550,height=420'
    );
  };

  const handleShareTelegram = () => {
    const url = `https://thecommnutiy.online/?lang=${currentLang}#season-1`;
    const text = `${displayName ? `${displayName}${t.ownerSuffix}` : t.yourResult} ${result?.fourLetterCode} (${result?.resultType})`;
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      '_blank',
      'width=550,height=420'
    );
  };

  // 1. GATE SCREEN (INTRO)
  if (step === 'gate') {
    return (
      <div className="shell shell--dark">
        <div className="route-wipe" aria-hidden="true">
          <i></i><i></i><i></i>
        </div>
        <header className="site-header">
          <a className="brand" href="/" aria-label="더 커뮤니티 홈" onClick={(e) => e.preventDefault()}>
            <img className="brand__wordmark" src="/brand/community-wordmark.svg" alt="" />
          </a>
          <nav>
            <a href="#broadcast">ON AIR</a>
            <a href="#season-1" className="is-active" onClick={(e) => { e.preventDefault(); onSwitchSeason('season-1'); }}>시즌 1</a>
            <a href="#season-2" onClick={(e) => { e.preventDefault(); onSwitchSeason('season-2'); }}>시즌 2</a>
            <CustomLanguageMenu currentLang={currentLang} onLanguageChange={onLanguageChange} />
          </nav>
        </header>

        <main className="gate">
          <form className="gate__form" onSubmit={handleStart}>
            <img
              className="season-lockup season-lockup--one"
              src="/brand/season-1-lockup.svg"
              alt="사상검증구역 더 커뮤니티"
            />
            <h1>{t.gateTitle}</h1>
            <label className="visually-hidden" htmlFor="season-1-name">{t.nameLabel}</label>
            <input
              id="season-1-name"
              maxLength={24}
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder={t.namePlaceholder}
              autoComplete="off"
            />
            <span className="gate__name-guide">{t.nameGuide}</span>

            <div className="test-notices" aria-label="테스트 안내">
              {s1Notices.map((item, idx) => (
                <p key={idx}>※ {item}</p>
              ))}
            </div>

            <button className="button button--black" type="submit">
              <span>{t.startBtn}</span>
              <b aria-hidden="true">↘</b>
            </button>

            <button
              type="button"
              className="random-fill-btn"
              onClick={handleQuickFillRandom}
            >
              <span>🎲 {t.quickFillRandom}</span>
            </button>
          </form>
        </main>
      </div>
    );
  }

  // 2. TESTING SCREEN
  if (step === 'testing') {
    const scaleLabels = currentQ.scale === 6
      ? (SEASON_1_SCALE_6[currentLang] || SEASON_1_SCALE_6['ko'])
      : (SEASON_1_SCALE_4[currentLang] || SEASON_1_SCALE_4['ko']);

    const selectedVal = answers[currentQ.id];

    return (
      <div className="test-shell test-shell--one">
        <header>
          <a
            className="brand"
            href="/"
            aria-label="더 커뮤니티 홈"
            onClick={(e) => {
              e.preventDefault();
              setStep('gate');
            }}
          >
            <img className="brand__wordmark" src="/brand/community-wordmark.svg" alt="" />
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <CustomLanguageMenu currentLang={currentLang} onLanguageChange={onLanguageChange} />
            <span>
              {String(currentIndex + 1).padStart(2, '0')} / {SEASON_1_QUESTIONS.length}
            </span>
          </div>
        </header>

        <div className="progress">
          <i
            style={{
              width: `${((currentIndex + 1) / SEASON_1_QUESTIONS.length) * 100}%`,
            }}
          />
        </div>

        <main className="question" aria-live="polite">
          <div className="question__meta">
            <div className="section-label">
              <span>{String(currentIndex + 1).padStart(2, '0')}</span>
              <b>{t.questionLabel}</b>
            </div>
            <span>USE KEYBOARD 1 — {currentQ.scale}</span>
          </div>

          <span className="question__ghost" aria-hidden="true">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>

          <h1>
            <span>Q.</span>
            {currentQ.prompt[currentLang] || currentQ.prompt['ko']}
          </h1>

          <div
            className={`answers answers--${currentQ.scale} answers--scale`}
            aria-label="동의 정도 선택"
          >
            {scaleLabels.map((lbl, idx) => {
              const val = idx + 1;
              const isSelected = selectedVal === val;

              return (
                <button
                  key={`${currentQ.id}-${val}`}
                  type="button"
                  className={isSelected ? 'is-selected' : ''}
                  onClick={() => handleAnswer(val)}
                  disabled={isSubmitting}
                >
                  <small className="visually-hidden">{val}점</small>
                  <svg
                    className={`scale-dot ${val === 1 || val === currentQ.scale ? 'scale-dot--endpoint' : ''}`}
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <circle className="scale-dot__disc" cx="24" cy="24" r="21" />
                    <circle className="scale-dot__center" cx="24" cy="24" r="4" />
                    <path className="scale-dot__check" d="m15 24 6 6 13-14" />
                  </svg>
                  <span>{lbl}</span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="back"
            disabled={currentIndex === 0 || isSubmitting}
            onClick={() => {
              if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
            }}
          >
            {t.prevQuestionBtn} <kbd>←</kbd>
          </button>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              type="button"
              className="random-fill-btn"
              onClick={handleQuickFillRandom}
            >
              <span>🎲 {t.quickFillRandom}</span>
            </button>
          </div>

          {isSubmitting && <div className="sending">{t.calculating}</div>}
        </main>
      </div>
    );
  }

  // 3. RESULTS SCREEN
  if (step === 'result' && result) {
    const { politics, gender, classGroup, openness } = result.axes;

    const D = politics.scoreColor;
    const A = politics.code.startsWith('L') ? '#790000' : '#002E4B';
    const H_color = gender.scoreColor;
    const V = classGroup.scoreColor;
    const Y_color = openness.scoreColor;

    const axesData = [
      { cfg: AXIS_CONFIG[0], scoreObj: politics },
      { cfg: AXIS_CONFIG[1], scoreObj: gender },
      { cfg: AXIS_CONFIG[2], scoreObj: classGroup },
      { cfg: AXIS_CONFIG[3], scoreObj: openness },
    ];

    return (
      <div className="shell shell--dark">
        <div className="route-wipe" aria-hidden="true">
          <i></i><i></i><i></i>
        </div>
        <header className="site-header">
          <a
            className="brand"
            href="/"
            aria-label="더 커뮤니티 홈"
            onClick={(e) => {
              e.preventDefault();
              setStep('gate');
            }}
          >
            <img className="brand__wordmark" src="/brand/community-wordmark.svg" alt="" />
          </a>
          <nav>
            <a href="#season-1" className="is-active" onClick={(e) => { e.preventDefault(); onSwitchSeason('season-1'); }}>시즌 1</a>
            <a href="#season-2" onClick={(e) => { e.preventDefault(); onSwitchSeason('season-2'); }}>시즌 2</a>
            <CustomLanguageMenu currentLang={currentLang} onLanguageChange={onLanguageChange} />
          </nav>
        </header>

        <main className="result-page">
          <div className="result-page__index" aria-hidden="true">
            RESULT<br /><b>COORDINATE</b>
          </div>

          <section
            ref={resultCardRef}
            className="result-card result-card--symbol result-card--season-1"
            data-result-code={result.fourLetterCode}
          >
            <div className="result-card__head">
              <div className="section-label">
                <span>01</span>
                <b>YOUR COORDINATE</b>
              </div>
              <span>{displayName ? `${displayName}${t.ownerSuffix}` : t.yourResult}</span>
            </div>

            <div className="result-symbol-stage">
              <div className="season-one-result-figure">
                <header className="season-one-result-summary">
                  <p>{displayName ? `${displayName}${t.ownerSuffix}` : t.yourResult}</p>
                  <strong>{result.fourLetterCode}</strong>
                </header>

                {/* Authentic Season 1 SVG Totem */}
                <svg
                  className="season-one-result-symbol"
                  viewBox="0 0 197 276"
                  role="img"
                  aria-label="사상검증구역 결과 심볼"
                >
                  <path d="M98.55 120.97H98.53H.74V198.4H196.36V120.97H98.55Z" fill={V} />
                  <g style={{ mixBlendMode: 'multiply' }} opacity=".5">
                    <path d="M.74 198.3H196.34V192.44V121.06" fill="#000" />
                  </g>
                  <path d="M196.36 275.64V198.2L.74 198.22V275.64H196.36Z" fill={Y_color} />
                  <path opacity=".5" d="M196.36 275.64H98.54V249.57H131.96V224.95H164.13V198.2H196.36" fill="#000" />
                  <circle opacity=".5" cx="49.64" cy="236.92" r="29.8" fill="#000" />
                  <path d="M98.55 0h-.04C44.51.02.75 43.8.75 97.8h195.6C196.35 43.79 152.56 0 98.55 0Z" fill={D} />
                  <g opacity=".5">
                    <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="197" height="98">
                      <path d="M196.48 97.8H.63C.62 43.8 44.39.02 98.38 0h.04s91.81-.11 98.06 97.8Z" fill="#fff" />
                    </mask>
                    <g mask={`url(#${maskId})`} fill={A}>
                      <path d="M99.2 5.08h-1.56v78.77h1.56V5.08Zm1.56 78.08-2.34 4.06-2.34-4.06h4.68Z" />
                      <path d="m82.887 6.37-1.536.27 13.662 77.485 1.537-.271L82.887 6.37Zm15.083 76.54-1.6 4.4-3.01-3.59 4.61-.81Z" />
                      <path d="m67.045 10.471-1.466.534 26.938 74.01 1.466-.534-26.938-74.01ZM95.21 83.31l-.81 4.61-3.58-3 4.39-1.61Z" />
                      <path d="m52.154 17.275-1.351.78L90.158 86.22l1.351-.78-39.355-68.165ZM92.52 84.06v4.68l-4.06-2.34 4.06-2.34Z" />
                      <path d="m38.678 26.552-1.195 1.003 50.613 60.318 1.195-1.003-50.613-60.318ZM90.04 85.34l.81 4.61-4.4-1.6 3.59-3.01Z" />
                      <path d="m26.998 38.02-1.003 1.195 60.341 50.632 1.003-1.195L26.998 38.02Zm60.822 49 1.6 4.4-4.61-.82 3.01-3.58Z" />
                      <path d="m17.511 51.345-.785 1.359 68.174 39.36.784-1.36-68.173-39.36ZM85.86 89.01l2.34 4.06h-4.68l2.34-4.06Z" />
                      <path d="m10.463 66.136-.534 1.466 73.916 26.903.534-1.466-73.916-26.903Zm73.807 25.194 3.01 3.58-4.61.82 1.6-4.4Z" />
                      <path d="m6.097 81.896-.271 1.536L83.32 97.096l.271-1.536L6.097 81.896Zm77.093 12.014 3.58 3-4.4 1.61.82-4.61Z" />
                      <path d="M99.36 5.08H97.8v78.77h1.56V5.08Zm1.56 78.08-2.34 4.06-2.34-4.06h4.68Z" />
                      <path d="m114.132 6.37-13.676 77.482 1.537.272L115.67 6.64l-1.537-.27ZM103.65 83.72l-3.01 3.59-1.6-4.4 4.61.81Z" />
                      <path d="m129.997 10.502-26.924 74.015 1.466.533 26.924-74.015-1.466-.533ZM106.19 84.92l-3.59 3-.81-4.61 4.4 1.61Z" />
                      <path d="m144.818 17.238-39.355 68.165 1.351.78 39.355-68.165-1.351-.78ZM108.54 86.4l-4.05 2.34v-4.68l4.05 2.34Z" />
                      <path d="m158.361 26.563-50.603 60.327 1.195 1.003 50.603-60.328-1.195-1.002ZM110.55 88.35l-4.4 1.6.82-4.61 3.58 3.01Z" />
                      <path d="m169.987 38-60.342 50.633 1.003 1.195 60.341-50.632L169.987 38Zm-57.797 52.6-4.61.82 1.6-4.4 3.01 3.58Z" />
                      <path d="m179.559 51.459-68.18 39.348.785 1.36 68.18-39.348-.785-1.36Zm-66.079 41.611h-4.68l2.34-4.05 2.34 4.05Z" />
                      <path d="m186.505 66.015-73.912 26.917.534 1.465 73.912-26.916-.534-1.466Zm-72.175 29.715-4.61-.82 3.01-3.58 1.6 4.4Z" />
                      <path d="m190.899 81.795-77.495 13.664.271 1.537 77.494-13.665-.27-1.536Zm-76.269 16.725-4.4-1.61 3.59-3 .81 4.61Z" />
                    </g>
                  </g>
                  <path d="M196.37 97.77H.74v23.15h195.63V97.77Z" fill={H_color} />
                </svg>

                {/* Season 1 4-Axis Sliders with authentic styling */}
                <ol aria-label="심볼 차원별 결과" className="season-one-result-dimensions">
                  {axesData.map(({ cfg, scoreObj }) => {
                    const isLeft = scoreObj.isLeft;
                    const strength = scoreObj.strength;
                    const winningLabel = isLeft
                      ? (cfg.leftMap[currentLang] || cfg.leftKorean)
                      : (cfg.rightMap[currentLang] || cfg.rightKorean);

                    const axisStyle = {
                      '--axis-accent': scoreObj.scoreColor,
                      '--axis-strength': `${(strength / 3) * 50}%`,
                      '--axis-marker-position': `${50 + (isLeft ? -1 : 1) * (strength / 3) * 50}%`,
                    } as React.CSSProperties;

                    return (
                      <li
                        key={cfg.codes}
                        aria-label={`${cfg.titleMap[currentLang] || cfg.title}: ${winningLabel} ${strength}점`}
                        className={`season-one-axis season-one-axis--${isLeft ? 'left' : 'right'}`}
                        style={axisStyle}
                      >
                        <div className="season-one-axis__labels">
                          <span>
                            <small>{cfg.leftEnglish}</small>
                            <b>{cfg.leftMap[currentLang] || cfg.leftKorean}</b>
                          </span>
                          <em>{cfg.titleMap[currentLang] || cfg.title}</em>
                          <span>
                            <small>{cfg.rightEnglish}</small>
                            <b>{cfg.rightMap[currentLang] || cfg.rightKorean}</b>
                          </span>
                        </div>
                        <div className="season-one-axis__track">
                          <i aria-hidden="true" />
                          <strong>{strength}</strong>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </section>

          {/* Season 1 Dimensions Guide */}
          <section className="result-guide result-guide--season-1">
            <div className="result-guide__notices">
              <p>※ 심볼의 각 영역은 지지하는 성향이 강할수록 색상이 선명해집니다.</p>
              <p>※ 결과에서 사용하는 용어들은 본 테스트와 프로그램 안에서 사용하기 위해 정의한 것으로, 실제 용례와 다를 수 있습니다.</p>
            </div>
            <h2>{t.howMeasured}</h2>
            <div className="result-guide__sections">
              {SEASON_1_GUIDE.map((dim, idx) => (
                <details key={idx} open={idx === 0}>
                  <summary>{dim.title[currentLang] || dim.title['ko']}</summary>
                  <p>{dim.body[currentLang] || dim.body['ko']}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Share Panel */}
          <section className="share-panel">
            <div className="result-program-promo">
              <img
                src="/brand/season-1-lockup.svg"
                alt="사상검증구역 더 커뮤니티 방송 안내"
                style={{ background: 'var(--paper)', padding: 'clamp(24px, 6vw, 56px)' }}
              />
              <a
                href="https://www.wavve.com/player/vod?programid=C9901_C99000000124&landing=season"
                target="_blank"
                rel="noreferrer"
              >
                이용권 첫 구매 100원으로 보러가기 ↗
              </a>
            </div>

            <div className="section-label">
              <span>NEXT</span>
              <b>MOVE ANOTHER</b>
            </div>

            <p>
              당신의 결과가<br />
              다른 사람의 선택을<br />
              <em>움직입니다.</em>
            </p>

            {/* 1. Copy Link */}
            <button type="button" className="button button--red" onClick={handleShare}>
              <span>{copied ? t.copied : t.shareBtn}</span>
              <b aria-hidden="true">{copied ? '✓' : '↗'}</b>
            </button>

            {/* 2. Download Result Card Image */}
            <button
              type="button"
              className="button button--image-save"
              onClick={handleSaveImage}
              disabled={isGeneratingImage}
            >
              <span>
                {isGeneratingImage
                  ? currentLang === 'ko'
                    ? '이미지 생성 중…'
                    : currentLang === 'en'
                    ? 'Generating Image…'
                    : '正在生成长图…'
                  : currentLang === 'ko'
                  ? '📷 결과 이미지 저장'
                  : currentLang === 'en'
                  ? '📷 Save Result Image'
                  : '📷 保存测试结果图片'}
              </span>
              <b aria-hidden="true">{isGeneratingImage ? '…' : '↓'}</b>
            </button>

            {/* 3. Social Media Share Buttons */}
            <div className="social-share-group">
              <button
                type="button"
                className="social-share-btn social-share-btn--twitter"
                onClick={handleShareTwitter}
                title="Share on X"
              >
                <span>𝕏 分享</span>
              </button>
              <button
                type="button"
                className="social-share-btn social-share-btn--telegram"
                onClick={handleShareTelegram}
                title="Share on Telegram"
              >
                <span>✈️ Telegram</span>
              </button>
            </div>

            {/* 4. Retake Button */}
            <button
              type="button"
              className="button button--black"
              style={{ marginTop: 12 }}
              onClick={handleRetake}
            >
              <span>{t.retakeBtn}</span>
              <b aria-hidden="true">↺</b>
            </button>
          </section>
        </main>
      </div>
    );
  }

  return null;
};
