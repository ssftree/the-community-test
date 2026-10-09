import { Language } from '../types';

export const I18N: Record<Language, {
  brandTitle: string;
  brandSeason: string;
  brandSubtitle: string;
  season1Badge: string;
  season2Badge: string;
  navTest: string;
  navLibrary: string;
  navGuide: string;
  navShow: string;
  
  // Hero & Intro
  heroEyebrow: string;
  heroTitle: string;
  heroDesc: string;
  startTestBtn: string;
  browseQuestionsBtn: string;
  
  // Disclaimer & Credits
  disclaimerTitle: string;
  disclaimerItems: string[];
  
  // Dimensions
  dimensionsTitle: string;
  dimensionPersonal: string;
  dimensionSocial: string;
  dimensionEthical: string;
  
  // Test Runner
  progressLabel: string;
  answeredCount: string;
  unansweredWarning: string;
  agreeBtn: string;
  disagreeBtn: string;
  agreeTip: string;
  disagreeTip: string;
  prevBtn: string;
  nextBtn: string;
  submitBtn: string;
  quickFillRandomBtn: string;
  keyboardTip: string;
  
  // Question Library
  libraryTitle: string;
  librarySubtitle: string;
  searchPlaceholder: string;
  filterAll: string;
  targetDimension: string;
  keyLeaning: string;
  agreeMeans: string;
  disagreeMeans: string;
  toggleOriginalKo: string;
  
  // Result Page
  resultTitle: string;
  resultSubtitle: string;
  yourSymbol: string;
  resultCode: string;
  threeCodeLabel: string;
  archetypeBadge: string;
  dimensionBreakdown: string;
  retakeBtn: string;
  shareBtn: string;
  copySuccess: string;
  viewAnswersBtn: string;
  densityGuideTitle: string;
  densityGuideDesc: string;
}> = {
  'zh-CN': {
    brandTitle: '思想验证区域',
    brandSeason: '第二季：看不见的手',
    brandSubtitle: '官方价值观坐标测试 · 多语言完整版',
    season1Badge: '第一季 · 政治思想坐标',
    season2Badge: '第二季 · 看不见的手',
    navTest: '价值观实测',
    navLibrary: '37道全题对照',
    navGuide: '维度机制解析',
    navShow: '关于节目',

    heroEyebrow: 'WAVVE ORIGINAL 社会实验真人秀',
    heroTitle: '我的最佳选择，就是众人的最佳选择吗？',
    heroDesc: '《思想验证区域2：看不见的手》全真价值观测试。穿透市场、道德与阶层迷雾，基于首尔市立大学社会学张元浩教授学术顾问审定与 M-Brain 权威信度检验。总共 37 道思想实验课题，测算推动你做抉择的“看不见的手”。',
    startTestBtn: '开启实测 (37题)',
    browseQuestionsBtn: '查阅中韩英题目对照库',

    disclaimerTitle: '测试说明与学术顾问背景',
    disclaimerItems: [
      '本测试改编自 Wavve 原创综艺《思想验证区域2：看不见的手》节目选拔所用标准，测定值或与答题者日常某些直觉存在微妙张力。',
      '问卷由首尔市立大学社会学博士张元浩（Jang Won-ho）教授参与专业学术指导，并经专业调研机构“Embrain (엠브레인)”完成全量信度与效度检定。',
      '题库中包含关于非人道情境的“哲学思维实验”（如电车难题、拆弹拷问等）。题目仅用于测算价值取向尺度，不代表对任何极端事实的主观鼓励。',
      '测试各维度题目在答题过程中随机穿插，全卷作答仅需约 5~8 分钟。',
    ],

    dimensionsTitle: '三大核心衡量维度',
    dimensionPersonal: '个人维度 · 意义 vs 实利',
    dimensionSocial: '社会维度 · 结构 vs 能力',
    dimensionEthical: '伦理维度 · 原则 vs 结果',

    progressLabel: '作答进度',
    answeredCount: '已回答',
    unansweredWarning: '您还有未作答题目，请完成所有 37 题后生成结果。',
    agreeBtn: 'O · 同意',
    disagreeBtn: 'X · 反对',
    agreeTip: '快捷键: O 或 1',
    disagreeTip: '快捷键: X 或 2',
    prevBtn: '上一题',
    nextBtn: '下一题',
    submitBtn: '生成我的思想象征图腾',
    quickFillRandomBtn: '🎲 随机模拟填答 (测试体验用)',
    keyboardTip: '支持键盘快捷键：[O] 同意 / [X] 反对 / [←] [→] 翻题',

    libraryTitle: '第二季 37 道测试题 · 多语言全对照库',
    librarySubtitle: '中 / 韩 / 英对照翻译，解析每道题目背后的衡量维度、哲学渊源与偏向判定机制。',
    searchPlaceholder: '输入关键词搜索题目（如：电车、黑客、遗产税、CEO、加分...）',
    filterAll: '全部题目 (37)',
    targetDimension: '测算维度',
    keyLeaning: '计分偏向',
    agreeMeans: '选择同意计入',
    disagreeMeans: '选择反对计入',
    toggleOriginalKo: '查看韩语原题',

    resultTitle: '你的思想象征图腾已生成',
    resultSubtitle: '驱动你的“看不见的手”究竟是怎样的图腾？',
    yourSymbol: 'YOUR INVISIBLE HAND',
    resultCode: '图腾代号',
    threeCodeLabel: '三维缩写',
    archetypeBadge: '思想人格类型',
    dimensionBreakdown: '三大维度深度测算偏向',
    retakeBtn: '重新测试',
    shareBtn: '复制测试结果与分享链接',
    copySuccess: '测试结果链接已复制到剪贴板！',
    viewAnswersBtn: '回顾我的 37 题作答详情',
    densityGuideTitle: '图腾刻痕与颜色说明',
    densityGuideDesc: '每个维度最高测定为 2 级。现实主义偏向采用黑色呈现，理想主义偏向采用白色/亮色呈现；倾向性差距越显著（差距≥25%），图腾各层的刻线密度越高。',
  },

  'zh-TW': {
    brandTitle: '思想驗證區域',
    brandSeason: '第二季：看不見的手',
    brandSubtitle: '官方價值觀座標測試 · 多語言完整版',
    season1Badge: '第一季 · 政治思想座標',
    season2Badge: '第二季 · 看不見的手',
    navTest: '價值觀實測',
    navLibrary: '37道全題對照',
    navGuide: '維度機制解析',
    navShow: '關於節目',

    heroEyebrow: 'WAVVE ORIGINAL 社會實驗真人秀',
    heroTitle: '我的最佳選擇，就是眾人的最佳選擇嗎？',
    heroDesc: '《思想驗證區域2：看不見的手》全真價值觀測試。穿透市場、道德與階層迷霧，基於首爾市立大學社會學張元浩教授學術顧問審定與 M-Brain 權威信度檢驗。總共 37 道思想實驗課題，測算推動你做抉擇的「看不見的手」。',
    startTestBtn: '開啟實測 (37題)',
    browseQuestionsBtn: '查閱中韓英題目對照庫',

    disclaimerTitle: '測試說明與學術顧問背景',
    disclaimerItems: [
      '本測試改編自 Wavve 原創綜藝《思想驗證區域2：看不見的手》節目選拔所用標準，測定值或與答題者日常某些直覺存在微妙張力。',
      '問卷由首爾市立大學社會學博士張元浩（Jang Won-ho）教授參與專業學術指導，並經專業調研機構「Embrain (엠브레인)」完成全量信度與效度檢定。',
      '題庫中包含關於非人道情境的「哲學思維實驗」（如電車難題、拆彈拷問等）。題目僅用於測算價值取向尺度，不代表對任何極端事實的主觀鼓勵。',
      '測試各維度題目在答題過程中隨機穿插，全卷作答僅需約 5~8 分鐘。',
    ],

    dimensionsTitle: '三大核心衡量維度',
    dimensionPersonal: '個人維度 · 意義 vs 實利',
    dimensionSocial: '社會維度 · 結構 vs 能力',
    dimensionEthical: '倫理維度 · 原則 vs 結果',

    progressLabel: '作答進度',
    answeredCount: '已回答',
    unansweredWarning: '您還有未作答題目，請完成所有 37 題後生成結果。',
    agreeBtn: 'O · 同意',
    disagreeBtn: 'X · 反對',
    agreeTip: '快捷鍵: O 或 1',
    disagreeTip: '快捷鍵: X 或 2',
    prevBtn: '上一題',
    nextBtn: '下一題',
    submitBtn: '生成我的思想象徵圖騰',
    quickFillRandomBtn: '🎲 隨機模擬填答 (測試體驗用)',
    keyboardTip: '支援鍵盤快捷鍵：[O] 同意 / [X] 反對 / [←] [→] 翻題',

    libraryTitle: '第二季 37 道測試題 · 多語言全對照庫',
    librarySubtitle: '中 / 韓 / 英對照翻譯，解析每道題目背後的衡量維度、哲學淵源與偏向判定機制。',
    searchPlaceholder: '輸入關鍵詞搜尋題目（如：電車、駭客、遺產稅、CEO、加分...）',
    filterAll: '全部題目 (37)',
    targetDimension: '測算維度',
    keyLeaning: '計分偏向',
    agreeMeans: '選擇同意計入',
    disagreeMeans: '選擇反對計入',
    toggleOriginalKo: '查看韓語原題',

    resultTitle: '你的思想象徵圖騰已生成',
    resultSubtitle: '驅動你的「看不見的手」究竟是怎樣的圖騰？',
    yourSymbol: 'YOUR INVISIBLE HAND',
    resultCode: '圖騰代號',
    threeCodeLabel: '三維縮寫',
    archetypeBadge: '思想人格類型',
    dimensionBreakdown: '三大維度深度測算偏向',
    retakeBtn: '重新測試',
    shareBtn: '複製測試結果與分享連結',
    copySuccess: '測試結果連結已複製到剪貼簿！',
    viewAnswersBtn: '回顧我的 37 題作答詳情',
    densityGuideTitle: '圖騰刻痕與顏色說明',
    densityGuideDesc: '每個維度最高測定為 2 級。現實主義偏向採用黑色呈現，理想主義偏向採用白色/亮色呈現；傾向性差距越顯著（差距≥25%），圖騰各層的刻線密度越高。',
  },

  'ko': {
    brandTitle: '사상검증구역: 더 커뮤니티',
    brandSeason: '시즌 2 · 보이지 않는 손',
    brandSubtitle: '공식 가치관 코드 테스트 · 다국어 에디션',
    season1Badge: '시즌 1 · 사상검증구역',
    season2Badge: '시즌 2 · 보이지 않는 손',
    navTest: '가치관 테스트',
    navLibrary: '37문항 대조 라이브러리',
    navGuide: '측정 영역 가이드',
    navShow: '프로그램 소개',

    heroEyebrow: '웨이브 오리지널 서바이벌 예능',
    heroTitle: '나의 최선이 모두의 최선일까?',
    heroDesc: '더 커뮤니티 2: 보이지 않는 손 사용자 테스트. 시장, 윤리, 계급의 딜레마를 횡단하며 서울시립대 사회학 박사 장원호 교수의 자문과 리서치 업체 ‘엠브레인’의 신뢰도 검증을 거친 37개의 사고실험 문항을 직접 경험하세요.',
    startTestBtn: '테스트 시작 (37문항)',
    browseQuestionsBtn: '문항 다국어 대조보기',

    disclaimerTitle: '테스트 안내 및 학술 자문',
    disclaimerItems: [
      '본 테스트는 웨이브 오리지널 [더 커뮤니티 2: 보이지 않는 손] 프로그램 내에서 활용하기 위한 목적으로 제작되었으며, 측정값이 응답자의 실제 가치관과 일치하지 않을 수 있습니다.',
      '테스트의 질문들은 서울시립대 사회학 박사 장원호 교수의 자문을 거쳐 작성되었으며, 리서치 업체 ‘엠브레인’을 통해 신뢰도 검증을 완료했습니다.',
      '비윤리적인 상황에 대한 사고실험 질문이 일부 포함되어 있습니다. 이는 기존의 다양한 사회철학 저서에서 다루어진 윤리적 딜레마 질문들로, 실제 사례에 대한 가치판단과 무관합니다.',
      '질문의 순서는 측정 영역과 무관하게 무작위로 제시됩니다.',
    ],

    dimensionsTitle: '3가지 핵심 측정 영역',
    dimensionPersonal: '개인차원 · 의미 vs 실리',
    dimensionSocial: '사회차원 · 구조 vs 능력',
    dimensionEthical: '윤리차원 · 원칙 vs 결과',

    progressLabel: '진행도',
    answeredCount: '응답 완료',
    unansweredWarning: '아직 답변하지 않은 문항이 있습니다. 37문항을 모두 완료해 주세요.',
    agreeBtn: 'O · 그렇다',
    disagreeBtn: 'X · 아니다',
    agreeTip: '단축키: O 또는 1',
    disagreeTip: '단축키: X 또는 2',
    prevBtn: '이전 문항',
    nextBtn: '다음 문항',
    submitBtn: '나의 결과 심볼 확인하기',
    quickFillRandomBtn: '🎲 빠른 무작위 응답 (테스트용)',
    keyboardTip: '키보드 지원: [O] 그렇다 / [X] 아니다 / [←] [→] 문항 이동',

    libraryTitle: '시즌 2 전체 37문항 · 다국어 대조 라이브러리',
    librarySubtitle: '한국어 원문과 중국어·영어 번역 대조 및 문항별 측정 차원과 채점 원리를 한눈에 확인하세요.',
    searchPlaceholder: '키워드로 문항 검색 (예: 댐, 해킹, 고문, 상속세, CEO, 성범죄...)',
    filterAll: '전체 문항 (37)',
    targetDimension: '측정 차원',
    keyLeaning: '지향 성향',
    agreeMeans: '동의(O) 시 지향',
    disagreeMeans: '비동의(X) 시 지향',
    toggleOriginalKo: '한국어 원문 보기',

    resultTitle: '나를 움직이는 손 — 테스트 결과',
    resultSubtitle: '당신을 움직이는 보이지 않는 손의 심볼은 무엇입니까?',
    yourSymbol: 'YOUR INVISIBLE HAND',
    resultCode: '심볼 코드',
    threeCodeLabel: '성향 코드',
    archetypeBadge: '성향 유형',
    dimensionBreakdown: '3대 영역별 세부 성향 분석',
    retakeBtn: '다시 테스트하기',
    shareBtn: '결과 복사 및 공유하기',
    copySuccess: '결과 링크가 클립보드에 복사되었습니다!',
    viewAnswersBtn: '내가 선택한 37문항 답변 보기',
    densityGuideTitle: '심볼 성향 4단계 및 밀도 안내',
    densityGuideDesc: '각 영역별 최대 2점까지 측정됩니다. 현실중심적인 성향은 검은색, 이상주의적인 성향은 흰색으로 표시되며 성향이 강할수록(편차 25% 이상) 선의 밀도도 높아집니다.',
  },

  'en': {
    brandTitle: 'The Community',
    brandSeason: 'Season 2: The Invisible Hand',
    brandSubtitle: 'Official Ideology Code Test · Multilingual Edition',
    season1Badge: 'Season 1 · Political Compass',
    season2Badge: 'Season 2 · The Invisible Hand',
    navTest: 'Take the Test',
    navLibrary: '37 Questions Library',
    navGuide: 'Dimensions Guide',
    navShow: 'About the Show',

    heroEyebrow: 'WAVVE ORIGINAL SOCIAL EXPERIMENT REALITY SHOW',
    heroTitle: 'Is my best truly the best for everyone?',
    heroDesc: 'Experience the official ideological test of "The Community Season 2: The Invisible Hand." Navigating market, ethics, and class dilemmas, verified by Prof. Jang Won-ho of University of Seoul and Embrain market research. 37 thought experiments uncovering the invisible hand directing your choices.',
    startTestBtn: 'Start Test (37 Questions)',
    browseQuestionsBtn: 'Browse Trilingual Questions',

    disclaimerTitle: 'Test Overview & Academic Advisory',
    disclaimerItems: [
      'This test was adapted from the scale utilized in Wavve Original "The Community 2: The Invisible Hand"; measurements may show nuanced tension with respondents\' daily intuitions.',
      'Questions were formulated with academic guidance from Sociology Professor Jang Won-ho (University of Seoul) and reliability-tested via Embrain.',
      'Includes philosophical thought experiments on unethical dilemmas (e.g., trolley problems, ticking-bomb torture). Used strictly to assess moral tendencies, not to encourage real-world extremism.',
      'Questions across all 3 dimensions are presented in randomized order. Completion takes approximately 5–8 minutes.',
    ],

    dimensionsTitle: 'Three Core Dimensions',
    dimensionPersonal: 'Personal Dimension · Meaning vs Utility',
    dimensionSocial: 'Social Dimension · Structure vs Ability',
    dimensionEthical: 'Ethical Dimension · Principles vs Results',

    progressLabel: 'Progress',
    answeredCount: 'Answered',
    unansweredWarning: 'You still have unanswered questions. Please answer all 37 questions to generate results.',
    agreeBtn: 'O · Agree',
    disagreeBtn: 'X · Disagree',
    agreeTip: 'Hotkey: O or 1',
    disagreeTip: 'Hotkey: X or 2',
    prevBtn: 'Previous',
    nextBtn: 'Next',
    submitBtn: 'Generate My Symbol',
    quickFillRandomBtn: '🎲 Random Fill (Demo Test)',
    keyboardTip: 'Keyboard shortcuts: [O] Agree / [X] Disagree / [←] [→] Navigate',

    libraryTitle: 'Season 2 All 37 Questions · Multilingual Library',
    librarySubtitle: 'Explore side-by-side Korean, Chinese, and English translations with underlying dimensions, philosophical roots, and scoring criteria.',
    searchPlaceholder: 'Search questions by keyword (e.g. dam, hack, torture, tax, CEO, AI car...)',
    filterAll: 'All Questions (37)',
    targetDimension: 'Dimension',
    keyLeaning: 'Underlying Stance',
    agreeMeans: 'Agree (O) earns',
    disagreeMeans: 'Disagree (X) earns',
    toggleOriginalKo: 'View Original Korean',

    resultTitle: 'Your Ideological Symbol Generated',
    resultSubtitle: 'What is the Invisible Hand that moves you?',
    yourSymbol: 'YOUR INVISIBLE HAND',
    resultCode: 'Symbol Code',
    threeCodeLabel: 'Three-Axis Code',
    archetypeBadge: 'Archetype Profile',
    dimensionBreakdown: 'Detailed Breakdown Across 3 Dimensions',
    retakeBtn: 'Retake Test',
    shareBtn: 'Copy & Share Results',
    copySuccess: 'Result link copied to clipboard!',
    viewAnswersBtn: 'Review My 37 Answers',
    densityGuideTitle: 'Symbol Visual Guide & Density',
    densityGuideDesc: 'Each dimension measures up to 2 points. Realist leanings appear in dark/black, Idealist leanings in white/light. Stronger deviation (≥25% gap) produces denser graphical line patterns.',
  },
};
