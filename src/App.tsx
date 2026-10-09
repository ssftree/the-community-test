import React, { useState, useEffect } from 'react';
import { Language, AnswerValue, TestResult } from './types';
import { QUESTIONS_DATA, Question } from './data/questions';
import { calculateTestResult } from './utils/calculator';
import {
  REPLICA_I18N,
  REPLICA_DIMENSIONS_GUIDE,
  ANCHOR_SYMBOLS,
} from './data/replicaTranslations';
import { CustomLanguageMenu } from './components/CustomLanguageMenu';
import { Season1View } from './components/Season1View';

export const App: React.FC = () => {
  const [currentSeason, setCurrentSeason] = useState<'season-1' | 'season-2'>(() => {
    if (typeof window !== 'undefined' && window.location.hash.includes('season-1')) {
      return 'season-1';
    }
    return 'season-2';
  });
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const langParam = urlParams.get('lang') as Language;
      if (langParam && ['zh-CN', 'zh-TW', 'ko', 'en', 'ja', 'es', 'fr'].includes(langParam)) {
        return langParam;
      }
      try {
        const saved = localStorage.getItem('the_community_lang') as Language;
        if (saved && ['zh-CN', 'zh-TW', 'ko', 'en', 'ja', 'es', 'fr'].includes(saved)) {
          return saved;
        }
      } catch {
        // ignore
      }
    }
    return 'zh-CN';
  });
  const [step, setStep] = useState<'gate' | 'testing' | 'result'>('gate');
  const [displayName, setDisplayName] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});
  const [hoveredChoice, setHoveredChoice] = useState<AnswerValue | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [result, setResult] = useState<TestResult | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const t = REPLICA_I18N[currentLang];
  const currentQ: Question = QUESTIONS_DATA[currentIndex];

  // Dynamic multilingual SEO metadata synchronization
  useEffect(() => {
    const seoMeta: Record<Language, { title: string; desc: string }> = {
      'zh-CN': {
        title: '思想验证区域｜The Community 第一、二季多语言价值观测试',
        desc: '《思想验证区域：The Community》（사상검증구역: 더 커뮤니티）第一、二季多语言测试复刻平台。包含第一季 87 题政治思想坐标、第二季 37 题“看不见的手”价值观测试、算法计算、思想图腾及深度维度解析。',
      },
      'zh-TW': {
        title: '思想驗證區域｜The Community 第一、二季多語言價值觀測試',
        desc: '《思想驗證區域：The Community》（사상검증구역: 더 커뮤니티）第一、二季多語言測試復刻平台。包含第一季 87 題政治思想座標、第二季 37 題「看不見的手」價值觀測試及思想圖騰解析。',
      },
      ko: {
        title: '사상검증구역: 더 커뮤니티 시즌 1·2 공식 가치관 테스트',
        desc: '웨이브 오리지널 [사상검증구역: 더 커뮤니티] 시즌 1(87문항 정치사회 좌표) 및 시즌 2(37문항 보이지 않는 손) 가치관 테스트와 3차원 심볼 타워 결과 분석.',
      },
      en: {
        title: 'The Community: Season 1 & 2 Multilingual Ideological Test',
        desc: '1:1 replica of the official ideological tests from Korean series "The Community" (사상검증구역: 더 커뮤니티). Features Season 1 (87 questions) & Season 2 "The Invisible Hand" (37 questions).',
      },
      ja: {
        title: '思想検証区域：The Community シーズン1・2 多言語価値観テスト',
        desc: '韓国Wavve話題作「思想検証区域：The Community」シーズン1（87問政治座標）＆シーズン2（37問見えざる手）思想実験テスト・公式トーテム解析。',
      },
      es: {
        title: 'The Community: Test Ideológico Multilingüe Temporada 1 y 2',
        desc: 'Réplica 1:1 de los cuestionarios oficiales de la serie surcoreana "The Community" (사상검증구역: 더 커뮤니티). Temporada 1 (87 preguntas) y Temporada 2 (37 preguntas).',
      },
      fr: {
        title: "The Community : Test Idéologique Multilingue Saisons 1 et 2",
        desc: "Réplique 1:1 des tests idéologiques officiels de l'émission sud-coréenne \"The Community\" (사상검증구역: 더 커뮤니티). Saison 1 (87 questions) et Saison 2 (37 questions).",
      },
    };

    const info = seoMeta[currentLang] || seoMeta['zh-CN'];
    document.title = info.title;
    document.documentElement.lang = currentLang;

    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', info.desc);

    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) ogTitleEl.setAttribute('content', info.title);

    const ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl) ogDescEl.setAttribute('content', info.desc);
  }, [currentLang]);

  // Listen to hash change for back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.includes('season-1')) {
        setCurrentSeason('season-1');
      } else if (window.location.hash.includes('season-2')) {
        setCurrentSeason('season-2');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('the_community_lang', lang);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
    } catch {
      // ignore
    }
  };

  const handleSwitchSeason = (season: 'season-1' | 'season-2') => {
    setCurrentSeason(season);
    window.location.hash = `#${season}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Keyboard navigation for test
  useEffect(() => {
    if (step !== 'testing' || isSubmitting) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key.toLowerCase();

      if (key === 'o' || key === '1') {
        e.preventDefault();
        handleAnswer('O');
      } else if (key === 'x' || key === '2') {
        e.preventDefault();
        handleAnswer('X');
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        e.preventDefault();
        setCurrentIndex((prev) => Math.max(0, prev - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step, currentIndex, isSubmitting, answers]);

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('testing');
    setCurrentIndex(0);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleAnswer = (choice: AnswerValue) => {
    const nextAnswers = { ...answers, [currentQ.id]: choice };
    setAnswers(nextAnswers);

    if (currentIndex < QUESTIONS_DATA.length - 1) {
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setHoveredChoice(null);
      }, 240);
    } else {
      // Complete test
      setIsSubmitting(true);
      setTimeout(() => {
        const computed = calculateTestResult(nextAnswers);
        setResult(computed);
        setIsSubmitting(false);
        setStep('result');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 600);
    }
  };

  const handleQuickFillRandom = () => {
    const randomAnswers: Record<string, AnswerValue> = {};
    QUESTIONS_DATA.forEach((q) => {
      randomAnswers[q.id] = Math.random() > 0.5 ? 'O' : 'X';
    });
    setAnswers(randomAnswers);
    setIsSubmitting(true);
    setTimeout(() => {
      const computed = calculateTestResult(randomAnswers);
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
    const shareText = `${displayName ? `${displayName}${t.ownerSuffix}` : t.yourResult} ${t.howMeasured} - ${result?.fullCode}`;
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

  // Result card classes calculation exactly like original
  const resultCardClasses = result
    ? [
        result.judgment.winningSideKo === '결과'
          ? 'result-card--result'
          : 'result-card--principle',
        result.agency.winningSideKo === '능력'
          ? 'result-card--ability'
          : 'result-card--structure',
        result.meaning.winningSideKo === '실리'
          ? 'result-card--utility'
          : 'result-card--meaning',
      ].join(' ')
    : '';

  // Route to Season 1
  if (currentSeason === 'season-1') {
    return (
      <Season1View
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onSwitchSeason={handleSwitchSeason}
      />
    );
  }

  // 1. GATE SCREEN (INTRO)
  if (step === 'gate') {
    return (
      <div className="shell shell--dark">
        <div className="route-wipe" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
        </div>
        <header className="site-header">
          <a className="brand" href="/" aria-label="더 커뮤니티 홈" onClick={(e) => e.preventDefault()}>
            <img className="brand__wordmark" src="/brand/community-wordmark.svg" alt="" />
          </a>
          <nav>
            <a href="#broadcast">ON AIR</a>
            <a
              href="#season-1"
              onClick={(e) => {
                e.preventDefault();
                handleSwitchSeason('season-1');
              }}
            >
              시즌 1
            </a>
            <a
              href="#season-2"
              className="is-active"
              onClick={(e) => {
                e.preventDefault();
                handleSwitchSeason('season-2');
              }}
            >
              시즌 2
            </a>
            <CustomLanguageMenu currentLang={currentLang} onLanguageChange={handleLanguageChange} />
          </nav>
        </header>

        <main className="gate">
          <form className="gate__form" onSubmit={handleStart}>
            <img
              className="season-lockup season-lockup--two"
              src="/brand/season-2-lockup.svg"
              alt="더 커뮤니티2 보이지 않는 손"
            />
            <h1>{t.gateTitle}</h1>
            <label className="visually-hidden" htmlFor="season-2-name">
              {t.nameLabel}
            </label>
            <input
              id="season-2-name"
              maxLength={24}
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder={t.namePlaceholder}
              autoComplete="off"
            />
            <span className="gate__name-guide">{t.nameGuide}</span>

            <div className="test-notices" aria-label="테스트 안내">
              {t.notices.map((item, idx) => (
                <p key={idx}>※ {item}</p>
              ))}
            </div>

            <button className="button button--blue" type="submit">
              <span>{t.startBtn}</span>
              <b aria-hidden="true">↘</b>
            </button>

            {/* Discreet random fill for fast demonstration */}
            <button
              type="button"
              className="random-fill-btn"
              onClick={handleQuickFillRandom}
              title="一键随机模拟填答，快速体验完整结果"
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
    const selected = answers[currentQ.id];

    return (
      <div className="test-shell test-shell--two">
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
            <CustomLanguageMenu currentLang={currentLang} onLanguageChange={handleLanguageChange} />
            <span>
              {String(currentIndex + 1).padStart(2, '0')} / {QUESTIONS_DATA.length}
            </span>
          </div>
        </header>

        <div className="progress">
          <i
            style={{
              width: `${((currentIndex + 1) / QUESTIONS_DATA.length) * 100}%`,
            }}
          />
        </div>

        <main className="question" aria-live="polite">
          <div className="question__meta">
            <div className="section-label">
              <span>{String(currentIndex + 1).padStart(2, '0')}</span>
              <b>{t.questionLabel}</b>
            </div>
            <span>{t.keyboardGuide}</span>
          </div>

          <span className="question__ghost" aria-hidden="true">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>

          <h1>
            <span>Q.</span>
            {currentQ.prompt[currentLang]}
          </h1>

          <div className="answers answers--2">
            <button
              type="button"
              className={`${selected === 'O' ? 'is-selected' : ''} ${
                hoveredChoice === 'O' ? 'is-hovered' : ''
              }`}
              onClick={() => handleAnswer('O')}
              onPointerEnter={(e) => e.pointerType === 'mouse' && setHoveredChoice('O')}
              onPointerLeave={() => setHoveredChoice(null)}
              disabled={isSubmitting}
            >
              <small>01</small>
              <b>O</b>
              <span>{t.agreeLabel}</span>
              <i>↘</i>
            </button>

            <button
              type="button"
              className={`${selected === 'X' ? 'is-selected' : ''} ${
                hoveredChoice === 'X' ? 'is-hovered' : ''
              }`}
              onClick={() => handleAnswer('X')}
              onPointerEnter={(e) => e.pointerType === 'mouse' && setHoveredChoice('X')}
              onPointerLeave={() => setHoveredChoice(null)}
              disabled={isSubmitting}
            >
              <small>02</small>
              <b>X</b>
              <span>{t.disagreeLabel}</span>
              <i>↘</i>
            </button>
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

          {/* Quick random fill helper button */}
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
    const winningMeaning = t.termsMap[result.meaning.winningSideKo] || result.meaning.winningSideKo;
    const oppositeMeaning = t.oppositeMap[result.meaning.winningSideKo] || result.meaning.winningSideKo;

    const winningAgency = t.termsMap[result.agency.winningSideKo] || result.agency.winningSideKo;
    const oppositeAgency = t.oppositeMap[result.agency.winningSideKo] || result.agency.winningSideKo;

    const winningJudgment = t.termsMap[result.judgment.winningSideKo] || result.judgment.winningSideKo;
    const oppositeJudgment = t.oppositeMap[result.judgment.winningSideKo] || result.judgment.winningSideKo;

    return (
      <div className="shell shell--dark">
        <div className="route-wipe" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
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
            <a
              href="#season-1"
              onClick={(e) => {
                e.preventDefault();
                handleSwitchSeason('season-1');
              }}
            >
              시즌 1
            </a>
            <a
              href="#season-2"
              className="is-active"
              onClick={(e) => {
                e.preventDefault();
                setStep('gate');
              }}
            >
              시즌 2
            </a>
            <CustomLanguageMenu currentLang={currentLang} onLanguageChange={handleLanguageChange} />
          </nav>
        </header>

        <main className="result-page">
          <div className="result-page__index" aria-hidden="true">
            RESULT
            <br />
            <b>SYMBOL</b>
          </div>

          {/* Result Card */}
          <section
            className={`result-card result-card--symbol result-card--season-2 ${resultCardClasses}`}
            data-result-code={result.fullCode}
          >
            <div className="result-card__head">
              <div className="section-label">
                <span>02</span>
                <b>YOUR INVISIBLE HAND</b>
              </div>
              <span>{displayName ? `${displayName}${t.ownerSuffix}` : t.yourResult}</span>
            </div>

            <div className="result-symbol-stage">
              <div className="season-two-result-figure">
                {/* 4 Anchor Symbols Guide */}
                <div className="season-two-symbol-guide">
                  <ol aria-label="심볼 성향 4단계">
                    {ANCHOR_SYMBOLS.map((item) => (
                      <li key={item.code}>
                        <svg
                          aria-label={item.ariaLabel[currentLang]}
                          className="season-two-symbol-guide__symbol"
                          data-symbol-code={item.code}
                          role="img"
                          viewBox="0 0 74.3 106.84"
                        >
                          <image
                            height={36.87}
                            href={`/brand/season-2-symbols/${item.meaning.code}${item.meaning.intensity}.svg`}
                            width={74.3}
                            x={0}
                            y={0}
                          />
                          <image
                            height={18.76}
                            href={`/brand/season-2-symbols/${item.agency.code}${item.agency.intensity}.svg`}
                            width={74.3}
                            x={0}
                            y={36.87}
                          />
                          <image
                            height={51.21}
                            href={`/brand/season-2-symbols/${item.judgment.code}${item.judgment.intensity}.svg`}
                            width={74.3}
                            x={0}
                            y={55.63}
                          />
                        </svg>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Main Result Symbol SVG */}
                <div className="season-two-result-symbol-control">
                  <svg
                    aria-label="보이지 않는 손 결과 심볼"
                    className="season-two-result-symbol"
                    data-symbol-code={result.fullCode}
                    role="img"
                    viewBox="0 0 74.3 106.84"
                  >
                    <image
                      height={36.87}
                      href={`/brand/season-2-symbols/${result.meaning.symbolFile}`}
                      width={74.3}
                      x={0}
                      y={0}
                    />
                    <image
                      height={18.76}
                      href={`/brand/season-2-symbols/${result.agency.symbolFile}`}
                      width={74.3}
                      x={0}
                      y={36.87}
                    />
                    <image
                      height={51.21}
                      href={`/brand/season-2-symbols/${result.judgment.symbolFile}`}
                      width={74.3}
                      x={0}
                      y={55.63}
                    />
                  </svg>
                </div>

                {/* 3 Dimensions Score List */}
                <ol aria-label="심볼 차원별 결과" className="season-two-result-dimensions">
                  <li>
                    <small>01</small>
                    <span className="result-dimension-labels">
                      <em className="result-dimension-labels__opposite">
                        {currentLang === 'ko' ? `${oppositeMeaning}보다` : `${oppositeMeaning} ${t.than}`}
                      </em>
                      <b>{winningMeaning}</b>
                    </span>
                    <strong>
                      {result.meaning.intensity}
                      <em>{t.point}</em>
                    </strong>
                  </li>

                  <li>
                    <small>02</small>
                    <span className="result-dimension-labels">
                      <em className="result-dimension-labels__opposite">
                        {currentLang === 'ko' ? `${oppositeAgency}보다` : `${oppositeAgency} ${t.than}`}
                      </em>
                      <b>{winningAgency}</b>
                    </span>
                    <strong>
                      {result.agency.intensity}
                      <em>{t.point}</em>
                    </strong>
                  </li>

                  <li>
                    <small>03</small>
                    <span className="result-dimension-labels">
                      <em className="result-dimension-labels__opposite">
                        {currentLang === 'ko' ? `${oppositeJudgment}보다` : `${oppositeJudgment} ${t.than}`}
                      </em>
                      <b>{winningJudgment}</b>
                    </span>
                    <strong>
                      {result.judgment.intensity}
                      <em>{t.point}</em>
                    </strong>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Result Guide Accordions */}
          <section className="result-guide result-guide--season-2">
            <div className="result-guide__notices">
              <p>※ {t.densityNotice}</p>
              <p>※ {t.termsNotice}</p>
            </div>
            <h2>{t.howMeasured}</h2>
            <div className="result-guide__sections">
              {REPLICA_DIMENSIONS_GUIDE.map((dim, idx) => (
                <details key={dim.id} open={idx === 0}>
                  <summary>{dim.title[currentLang]}</summary>
                  <div className="result-guide__body">
                    <p className="result-guide__lead">{dim.intro[currentLang]}</p>
                    <dl className="result-guide__contrasts">
                      <div className="result-guide__contrast result-guide__contrast--ideal">
                        <dt>{dim.contrasts[0].term[currentLang]}</dt>
                        <dd>{dim.contrasts[0].desc[currentLang]}</dd>
                      </div>
                      <div className="result-guide__contrast result-guide__contrast--real">
                        <dt>{dim.contrasts[1].term[currentLang]}</dt>
                        <dd>{dim.contrasts[1].desc[currentLang]}</dd>
                      </div>
                    </dl>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Share Panel */}
          <section className="share-panel">
            <a
              className="result-program-card--mobile"
              href="https://m.site.naver.com/2fi4N"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/season-2-program-card.jpg"
                alt="더 커뮤니티 2 프로그램관 지금 보러 가기"
                width={800}
                height={400}
                loading="lazy"
              />
            </a>

            <div className="section-label">
              <span>NEXT</span>
              <b>MOVE ANOTHER</b>
            </div>

            <p>
              {t.shareCatchphrase1}
              <br />
              <em>{t.shareCatchphrase2}</em>
            </p>

            <button type="button" className="button button--red" onClick={handleShare}>
              <span>{copied ? t.copied : t.shareBtn}</span>
              <b aria-hidden="true">{copied ? '✓' : '↗'}</b>
            </button>

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
