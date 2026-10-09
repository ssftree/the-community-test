from update_translations import s1_guide_details
import json

s1_notices = {
  'zh-CN': [
    '本测试为 Wavve 原创真人秀《思想验证区域：The Community》节目内使用的测量标准，测定结果可能与应答者的实际政治社会见解存在部分差异。',
    '测试题目经延世大学社会科学院金容灿教授学术顾问审定，并由市场调查机构“Embrain (엠브레인)”完成信度检验。',
    '本测试旨在确认应答者对现实存在的各种社会立场的“认同与否”，部分题目的表述可能较为激进或具有争议性，请在作答时予以参考。'
  ],
  'zh-TW': [
    '本測試為 Wavve 原創真人秀《思想驗證區域：The Community》節目內使用的測量標準，測定結果可能與應答者的實際政治社會見解存在部分差異。',
    '測試題目經延世大學社會科學院金容燦教授學術顧問審定，並由市場調查機構「Embrain (엠브레인)」完成信度檢驗。',
    '本測試旨在確認應答者對現實存在的各種社會立場的「認同與否」，部分題目的表述可能較為激進或具有爭議性，請在作答時予以參考。'
  ],
  'ko': [
    '본 테스트는 웨이브 오리지널 [사상검증구역: 더 커뮤니티]의 프로그램 내에서 활용하기 위해 제작된 척도로, 측정값이 응답자의 정치사회적 견해와 일부 일치하지 않을 수 있습니다.',
    '테스트의 질문들은 연세대학교 사회과학대학 김용찬 교수의 자문을 거쳐 작성되었으며, 리서치 업체 ‘엠브레인’을 통해 신뢰도 조사를 완료했습니다.',
    '실제로 존재하는 여러 사회적 입장에 대한 응답자의 ‘동의 여부’를 확인하는 것이므로, 일부 차별적이거나 과격하다고 느껴지는 문항이 있는 점을 참고하여 주시기 바랍니다.'
  ],
  'en': [
    'This test was adapted from the scale used in the Wavve Original "The Community"; measured coordinates may not align with the respondent\'s actual socio-political views.',
    'The questions were formulated with academic guidance from Professor Kim Yong-chan (College of Social Sciences, Yonsei University) and reliability-verified via Embrain.',
    'As this questionnaire evaluates agreement with various real-world stances, please note that some questions may feature controversial or radical perspectives.'
  ],
  'ja': [
    '本テストはWavveオリジナル「思想検証区域：The Community」番組内で活用するために作成された尺度であり、測定値が回答者の実際の社会政治的見解と一致しない場合があります。',
    'テストの質問は延世大学校社会科学大学のキム・ヨンチャン教授の監修を経て作成され、リサーチ会社「エムブレイン」を通じて信頼性検証を完了しました。',
    '実際に存在する様々な社会的立場に対する「同意の有無」を確認するものであるため、一部に過激または議論を呼ぶ設問が含まれている点をご了承ください。'
  ],
  'es': [
    'Esta prueba se diseñó para el programa de Wavve "The Community"; los resultados pueden diferir de las opiniones políticas reales del encuestado.',
    'Las preguntas fueron asesoradas por el profesor Kim Yong-chan (Universidad Yonsei) y verificadas por la firma de investigación Embrain.',
    'El cuestionario evalúa el acuerdo con posturas sociales reales, por lo que algunas preguntas pueden parecer radicales o controvertidas.'
  ],
  'fr': [
    'Ce test a été conçu pour l\'émission de téléréalité Wavve "The Community" ; les résultats peuvent différer des opinions réelles du répondant.',
    'Les questions ont été élaborées avec les conseils du professeur Kim Yong-chan (Université Yonsei) et validées par Embrain.',
    'Le questionnaire évaluant l\'adhésion à diverses positions sociales réelles, certaines questions peuvent sembler radicales ou controversées.'
  ]
}

s2_notices = {
  'zh-CN': [
    '本测试用于 Wavve 原创真人秀《思想验证区域2：看不见的手》节目选拔，测定值可能与应答者的实际日常价值观存在部分差异。',
    '测试题目经首尔市立大学社会学博士张元浩教授学术审定，并通过专业机构“Embrain (엠브레인)”完成全量信度检验。',
    '包含部分关于非人道情境的思考实验题目。均源自经典社会哲学著作中的伦理困境，与实际案例的价值判断无关。',
    '题目的呈现顺序与所属测量维度无关，随机呈现。'
  ],
  'zh-TW': [
    '本測試用於 Wavve 原創真人秀《思想驗證區域2：看不見的手》節目選拔，測定值可能與應答者的實際日常價值觀存在部分差異。',
    '測試題目經首爾市立大學社會學博士張元浩教授學術審定，並通過專業機構「Embrain (엠브레인)」完成全量信度檢驗。',
    '包含部分關於非人道情境的思考實驗題目。均源自經典社會哲學著作中的倫理困境，與實際案例的價值判斷無關。',
    '題目的呈現順序與所屬測量維度無關，隨機呈現。'
  ],
  'ko': [
    '본 테스트는 웨이브 오리지널 [더 커뮤니티 2: 보이지 않는 손]의 프로그램 내에서 활용하기 위한 목적으로 제작되었으며, 측정값이 응답자의 실제 가치관과 일치하지 않을 수 있습니다.',
    '테스트의 질문들은 서울시립대 사회학 박사 장원호 교수의 자문을 거쳐 작성되었으며, 리서치 업체 ‘엠브레인’을 통해 신뢰도 검증을 완료했습니다.',
    '비윤리적인 상황에 대한 사고실험 질문이 일부 포함되어 있습니다. 이는 기존의 다양한 사회철학 저서에서 다루어진 윤리적 딜레마 질문들로, 실제 사례에 대한 가치판단과 무관합니다.',
    '질문의 순서는 측정 영역과 무관하게 무작위로 제시됩니다.'
  ],
  'en': [
    'This test was produced for use in the Wavve Original [The Community 2: The Invisible Hand]; measured values may not align with the respondent\'s actual values.',
    'The questions were formulated under the academic guidance of Sociology Professor Jang Won-ho (University of Seoul) and reliability-verified via Embrain.',
    'Includes philosophical thought experiments on unethical situations. These stem from classic social philosophy dilemmas and do not represent value judgments on real-world cases.',
    'Questions across measurement areas are presented in randomized order.'
  ],
  'ja': [
    '本テストはWavveオリジナル「ザ・コミュニティ2：見えざる手」番組内での活用のために制作された尺度であり、測定値が回答者の実際の価値観と一致しない場合があります。',
    '設問はソウル市立大学社会学博士チャン・ウォンホ教授の監修を経て作成され、リサーチ会社「エムブレイン」を通じて信頼性検証を完了しました。',
    '非倫理的状況に関する思考実験の質問が含まれています。これらは既存の社会哲学書籍で扱われた倫理的ジレンマであり、実際の事例に対する価値判断とは無関係です。',
    '質問の順序は測定領域に関わらずランダムに提示されます。'
  ],
  'es': [
    'Esta prueba fue producida para el programa original de Wavve "The Community 2: The Invisible Hand"; los valores medidos pueden no coincidir con los valores reales del encuestado.',
    'Las preguntas fueron asesoradas por el profesor Jang Won-ho (Universidad de Seúl) y validadas por Embrain.',
    'Incluye dilemas de experimentos mentales sobre situaciones no éticas clásicas de la filosofía social, no juicios sobre casos reales.',
    'El orden de las preguntas se presenta de forma aleatoria, independientemente de la dimensión.'
  ],
  'fr': [
    'Ce test a été conçu pour l\'émission originale Wavve "The Community 2: The Invisible Hand" ; les résultats peuvent différer des valeurs réelles du répondant.',
    'Les questions ont été formulées avec les conseils du professeur Jang Won-ho (Université de Séoul) et validées par Embrain.',
    'Comprend des expériences de pensée sur des dilemmes contraires à l\'éthique issus de la philosophie sociale classique.',
    'L\'ordre des questions est aléatoire, quelle que soit la dimension mesurée.'
  ]
}

scale_6_labels = {
  'zh-CN': ["强烈反对", "反对", "略微反对", "略微同意", "同意", "强烈同意"],
  'zh-TW': ["強烈反對", "反對", "略微反對", "略微同意", "同意", "強烈同意"],
  'ko': ["매우 반대", "반대", "약간 반대", "약간 동의", "동의", "강하게 동의"],
  'en': ["Strongly Disagree", "Disagree", "Slightly Disagree", "Slightly Agree", "Agree", "Strongly Agree"],
  'ja': ["強く反対", "反対", "やや反対", "やや同意", "同意", "強く同意"],
  'es': ["Totalmente en desacuerdo", "En desacuerdo", "Algo en desacuerdo", "Algo de acuerdo", "De acuerdo", "Totalmente de acuerdo"],
  'fr': ["Pas du tout d'accord", "Pas d'accord", "Plutôt pas d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"]
}

scale_4_labels = {
  'zh-CN': ["完全不是", "偶尔如此", "经常如此", "总是如此"],
  'zh-TW': ["完全不是", "偶爾如此", "經常如此", "總是如此"],
  'ko': ["전혀 아니다", "가끔 그렇다", "종종 그렇다", "항상 그렇다"],
  'en': ["Not at all", "Rarely", "Often", "Always"],
  'ja': ["全く違う", "たまにある", "よくある", "いつもそうだ"],
  'es': ["En absoluto", "Raras veces", "A menudo", "Siempre"],
  'fr': ["Pas du tout", "Rarement", "Souvent", "Toujours"]
}

base_data = {
  'zh-CN': {
    'gateTitle': '请输入您的姓名。',
    'nameLabel': '在结果中显示的姓名',
    'namePlaceholder': '姓名（选填）',
    'nameGuide': '在结果中显示的姓名是选填项。',
    'startBtn': '开始',
    'questionLabel': 'QUESTION',
    'keyboardGuide': 'USE KEYBOARD O / X',
    'agreeLabel': '同意',
    'disagreeLabel': '反对',
    'prevQuestionBtn': '← 上一题',
    'calculating': '正在计算测试结果…',
    'quickFillRandom': '随机填答（快速预览）',
    'yourResult': '您的测试结果',
    'ownerSuffix': '的测试结果',
    'than': '高于',
    'point': '分',
    'densityNotice': '各领域最高测定为 2 分。现实导向的倾向以黑色显示，理想主义倾向以白色显示，倾向越强烈，线条密度也越高。',
    'termsNotice': '结果中使用的术语是为了在本次测试和节目中应用而专门定义的，可能与实际日常用例有所不同。',
    'howMeasured': '各领域是如何测量的？',
    'shareCatchphrase1': '一切价值观都在相互',
    'shareCatchphrase2': '碰撞中得以形成',
    'shareBtn': '分享结果',
    'copied': '链接复制完成',
    'retakeBtn': '重新测试',
    'termsMap': {'의미': '意义', '실리': '实利', '구조': '结构', '능력': '能力', '원칙': '原则', '결과': '结果'},
    'oppositeMap': {'의미': '实利', '실리': '意义', '구조': '能力', '능력': '结构', '원칙': '结果', '결과': '原则'}
  },
  'zh-TW': {
    'gateTitle': '請輸入您的姓名。',
    'nameLabel': '在結果中顯示的姓名',
    'namePlaceholder': '姓名（選填）',
    'nameGuide': '在結果中顯示的姓名為選填項。',
    'startBtn': '開始',
    'questionLabel': 'QUESTION',
    'keyboardGuide': 'USE KEYBOARD O / X',
    'agreeLabel': '同意',
    'disagreeLabel': '反對',
    'prevQuestionBtn': '← 上一題',
    'calculating': '正在計算測試結果…',
    'quickFillRandom': '隨機填答（快速預覽）',
    'yourResult': '您的測試結果',
    'ownerSuffix': '的測試結果',
    'than': '高於',
    'point': '分',
    'densityNotice': '各領域最高測定為 2 分。現實導向的傾向以黑色顯示，理想主義傾向以白色顯示，傾向越強烈，線條密度也越高。',
    'termsNotice': '結果中使用的術語是為了在本次測試與節目中應用而專門定義的，可能與實際日常用例有所不同。',
    'howMeasured': '各領域是如何測量的？',
    'shareCatchphrase1': '一切價值觀都在相互',
    'shareCatchphrase2': '碰撞中得以形成',
    'shareBtn': '分享結果',
    'copied': '連結複製完成',
    'retakeBtn': '重新測試',
    'termsMap': {'의미': '意義', '실리': '實利', '구조': '結構', '능력': '能力', '원칙': '原則', '결과': '結果'},
    'oppositeMap': {'의미': '實利', '실리': '意義', '구조': '能力', '능력': '結構', '원칙': '結果', '결과': '原則'}
  },
  'ko': {
    'gateTitle': '이름을 입력하세요.',
    'nameLabel': '결과에 표시할 이름',
    'namePlaceholder': '이름 (선택)',
    'nameGuide': '결과에 표시할 이름은 선택사항입니다.',
    'startBtn': '시작',
    'questionLabel': 'QUESTION',
    'keyboardGuide': 'USE KEYBOARD O / X',
    'agreeLabel': '그렇다',
    'disagreeLabel': '아니다',
    'prevQuestionBtn': '← 이전 문항',
    'calculating': '결과를 계산하고 있습니다…',
    'quickFillRandom': '빠른 무작위 응답',
    'yourResult': '당신의 결과',
    'ownerSuffix': '님의 결과',
    'than': '보다',
    'point': '점',
    'densityNotice': '각 영역별 최대 2점까지 측정됩니다. 현실중심적인 성향은 검은색, 이상주의적인 성향은 흰색으로 표시되며 성향이 강할수록 선의 밀도도 높아집니다.',
    'termsNotice': '결과에서 사용하는 용어들은 본 테스트와 프로그램 안에서 사용하기 위해 정의한 것으로, 실제 용례와 다를 수 있습니다.',
    'howMeasured': '각 영역은 어떻게 측정되나요?',
    'shareCatchphrase1': '모든 가치관은 서로',
    'shareCatchphrase2': '부딪치며 형성됩니다',
    'shareBtn': '결과 공유하기',
    'copied': '링크 복사 완료',
    'retakeBtn': '다시 테스트하기',
    'termsMap': {'의미': '의미', '실리': '실리', '구조': '구조', '능력': '능력', '원칙': '원칙', '결과': '결과'},
    'oppositeMap': {'의미': '실리', '실리': '의미', '구조': '능력', '능력': '구조', '원칙': '결과', '결과': '원칙'}
  },
  'en': {
    'gateTitle': 'Enter your name.',
    'nameLabel': 'Name to display on result',
    'namePlaceholder': 'Name (optional)',
    'nameGuide': 'The name displayed on your results is optional.',
    'startBtn': 'START',
    'questionLabel': 'QUESTION',
    'keyboardGuide': 'USE KEYBOARD O / X',
    'agreeLabel': 'Agree',
    'disagreeLabel': 'Disagree',
    'prevQuestionBtn': '← Previous',
    'calculating': 'Calculating results…',
    'quickFillRandom': 'Quick Random Fill',
    'yourResult': 'Your Results',
    'ownerSuffix': "'s Results",
    'than': 'over',
    'point': 'pts',
    'densityNotice': 'Each dimension is measured up to 2 points. Realist leanings are shown in black, and idealist leanings in white; stronger leanings feature higher line density.',
    'termsNotice': 'The terms used in the results are defined specifically for this test and show, and may differ from real-world usage.',
    'howMeasured': 'How is each dimension measured?',
    'shareCatchphrase1': 'All values are forged as they',
    'shareCatchphrase2': 'collide with one another',
    'shareBtn': 'Share Results',
    'copied': 'Link Copied',
    'retakeBtn': 'Retake Test',
    'termsMap': {'의미': 'Meaning', '실리': 'Utility', '구조': 'Structure', '능력': 'Ability', '원칙': 'Principles', '결과': 'Results'},
    'oppositeMap': {'의미': 'Utility', '실리': 'Meaning', '구조': 'Ability', '능력': 'Structure', '원칙': 'Results', '결과': 'Principles'}
  },
  'ja': {
    'gateTitle': 'お名前を入力してください。',
    'nameLabel': '結果に表示する名前',
    'namePlaceholder': 'お名前（任意）',
    'nameGuide': '結果に表示する名前は任意入力です。',
    'startBtn': 'スタート',
    'questionLabel': 'QUESTION',
    'keyboardGuide': 'USE KEYBOARD O / X',
    'agreeLabel': 'そう思う',
    'disagreeLabel': 'そう思わない',
    'prevQuestionBtn': '← 前の設問',
    'calculating': '結果を計算しています…',
    'quickFillRandom': 'ランダム回答（デモ）',
    'yourResult': 'あなたの結果',
    'ownerSuffix': 'さんの結果',
    'than': 'より',
    'point': '点',
    'densityNotice': '各領域で最大2点まで測定されます。現実志向の傾向は黒、理想主義傾向は白で表示され、傾向が強いほど線の密度が高くなります。',
    'termsNotice': '結果で使用される用語は本テストおよび番組内で使用するために定義されたものであり、実際の一般的な用例とは異なる場合があります。',
    'howMeasured': '各領域はどのように測定されますか？',
    'shareCatchphrase1': 'すべての価値観は互いに',
    'shareCatchphrase2': 'ぶつかり合いながら形成されます',
    'shareBtn': '結果を共有する',
    'copied': 'リンクをコピーしました',
    'retakeBtn': 'もう一度テストする',
    'termsMap': {'의미': '意味', '실리': '実利', '구조': '構造', '능력': '能力', '원칙': '原則', '결과': '結果'},
    'oppositeMap': {'의미': '実利', '실리': '意味', '구조': '能力', '능력': '構造', '원칙': '結果', '결과': '原則'}
  },
  'es': {
    'gateTitle': 'Introduce tu nombre.',
    'nameLabel': 'Nombre a mostrar en el resultado',
    'namePlaceholder': 'Nombre (opcional)',
    'nameGuide': 'El nombre mostrado en los resultados es opcional.',
    'startBtn': 'COMENZAR',
    'questionLabel': 'QUESTION',
    'keyboardGuide': 'USE KEYBOARD O / X',
    'agreeLabel': 'De acuerdo',
    'disagreeLabel': 'En desacuerdo',
    'prevQuestionBtn': '← Anterior',
    'calculating': 'Calculando resultados…',
    'quickFillRandom': 'Respuesta rápida aleatoria',
    'yourResult': 'Tus Resultados',
    'ownerSuffix': ' - Resultados',
    'than': 'sobre',
    'point': 'pts',
    'densityNotice': 'Cada dimensión se mide hasta 2 puntos. Las posturas realistas se muestran en negro y las idealistas en blanco; las más marcadas presentan mayor densidad.',
    'termsNotice': 'Los términos empleados se definieron para esta prueba y el programa, y pueden diferir de su uso cotidiano.',
    'howMeasured': '¿Cómo se mide cada dimensión?',
    'shareCatchphrase1': 'Todos los valores se forjan',
    'shareCatchphrase2': 'al chocar unos con otros',
    'shareBtn': 'Compartir resultados',
    'copied': 'Enlace copiado',
    'retakeBtn': 'Repetir prueba',
    'termsMap': {'의미': 'Sentido', '실리': 'Utilidad', '구조': 'Estructura', '능력': 'Capacidad', '원칙': 'Principios', '결과': 'Resultados'},
    'oppositeMap': {'의미': 'Utilidad', '실리': 'Sentido', '구조': 'Capacidad', '능력': 'Estructura', '원칙': 'Resultados', '결과': 'Principios'}
  },
  'fr': {
    'gateTitle': 'Entrez votre nom.',
    'nameLabel': 'Nom à afficher sur le résultat',
    'namePlaceholder': 'Nom (facultatif)',
    'nameGuide': 'Le nom affiché sur les résultats est facultatif.',
    'startBtn': 'COMMENCER',
    'questionLabel': 'QUESTION',
    'keyboardGuide': 'USE KEYBOARD O / X',
    'agreeLabel': "D'accord",
    'disagreeLabel': "Pas d'accord",
    'prevQuestionBtn': '← Précédent',
    'calculating': 'Calcul des résultats…',
    'quickFillRandom': 'Remplissage aléatoire rapide',
    'yourResult': 'Vos Résultats',
    'ownerSuffix': ' - Résultats',
    'than': 'par rapport à',
    'point': 'pts',
    'densityNotice': 'Chaque dimension est évaluée jusqu\'à 2 points. Les tendances réalistes sont en noir, idéalistes en blanc ; plus elles sont marquées, plus le trait est dense.',
    'termsNotice': 'Les termes utilisés sont définis spécifiquement pour ce test et l\'émission, et peuvent différer de l\'usage courant.',
    'howMeasured': 'Comment chaque dimension est-elle mesurée ?',
    'shareCatchphrase1': 'Toutes les valeurs se forgent',
    'shareCatchphrase2': 'en se heurtant les unes aux autres',
    'shareBtn': 'Partager les résultats',
    'copied': 'Lien copié',
    'retakeBtn': 'Refaire le test',
    'termsMap': {'의미': 'Sens', '실리': 'Utilité', '구조': 'Structure', '능력': 'Compétence', '원칙': 'Principes', '결과': 'Résultats'},
    'oppositeMap': {'의미': 'Utilité', '실리': 'Sens', '구조': 'Compétence', '능력': 'Structure', '원칙': 'Résultats', '결과': 'Principes'}
  }
}

for l in base_data:
    base_data[l]['notices'] = s2_notices[l]

ts_content = f'''import {{ Language }} from '../types';

export interface DimensionGuideItem {{
  id: string;
  title: Record<Language, string>;
  intro: Record<Language, string>;
  contrasts: [
    {{ term: Record<Language, string>; desc: Record<Language, string> }},
    {{ term: Record<Language, string>; desc: Record<Language, string> }}
  ];
}}

export const REPLICA_I18N: Record<Language, {{
  gateTitle: string;
  nameLabel: string;
  namePlaceholder: string;
  nameGuide: string;
  notices: string[];
  startBtn: string;
  questionLabel: string;
  keyboardGuide: string;
  agreeLabel: string;
  disagreeLabel: string;
  prevQuestionBtn: string;
  calculating: string;
  quickFillRandom: string;
  yourResult: string;
  ownerSuffix: string;
  than: string;
  point: string;
  densityNotice: string;
  termsNotice: string;
  howMeasured: string;
  shareCatchphrase1: string;
  shareCatchphrase2: string;
  shareBtn: string;
  copied: string;
  retakeBtn: string;
  termsMap: Record<string, string>;
  oppositeMap: Record<string, string>;
}}> = {json.dumps(base_data, ensure_ascii=False, indent=2)};

export const SEASON_1_NOTICES: Record<Language, string[]> = {json.dumps(s1_notices, ensure_ascii=False, indent=2)};

export const SEASON_1_SCALE_6: Record<Language, string[]> = {json.dumps(scale_6_labels, ensure_ascii=False, indent=2)};

export const SEASON_1_SCALE_4: Record<Language, string[]> = {json.dumps(scale_4_labels, ensure_ascii=False, indent=2)};

export const SEASON_1_GUIDE: {{ title: Record<Language, string>; body: Record<Language, string> }}[] = {json.dumps(s1_guide_details, ensure_ascii=False, indent=2)};

export const ANCHOR_SYMBOLS = [
  {{
    code: 'B2S2M2',
    ariaLabel: {{
      'zh-CN': '理想主义倾向 2 阶段图腾',
      'zh-TW': '理想主義傾向 2 階段圖騰',
      ko: '이상주의 성향 2단계 심볼',
      en: 'Idealist leaning stage 2 symbol',
      ja: '理想主義傾向第2段階シンボル',
      es: 'Símbolo de tendencia idealista nivel 2',
      fr: 'Symbole de tendance idéaliste niveau 2',
    }},
    meaning: {{ code: 'b', intensity: 2 }},
    agency: {{ code: 's', intensity: 2 }},
    judgment: {{ code: 'm', intensity: 2 }},
  }},
  {{
    code: 'B1S1M1',
    ariaLabel: {{
      'zh-CN': '理想主义倾向 1 阶段图腾',
      'zh-TW': '理想主義傾向 1 階段圖騰',
      ko: '이상주의 성향 1단계 심볼',
      en: 'Idealist leaning stage 1 symbol',
      ja: '理想主義傾向第1段階シンボル',
      es: 'Símbolo de tendencia idealista nivel 1',
      fr: 'Symbole de tendance idéaliste niveau 1',
    }},
    meaning: {{ code: 'b', intensity: 1 }},
    agency: {{ code: 's', intensity: 1 }},
    judgment: {{ code: 'm', intensity: 1 }},
  }},
  {{
    code: 'H1A1U1',
    ariaLabel: {{
      'zh-CN': '现实主义倾向 1 阶段图腾',
      'zh-TW': '現實主義傾向 1 階段圖騰',
      ko: '현실주의 성향 1단계 심볼',
      en: 'Realist leaning stage 1 symbol',
      ja: '現実主義傾向第1段階シンボル',
      es: 'Símbolo de tendencia realista nivel 1',
      fr: 'Symbole de tendance réaliste niveau 1',
    }},
    meaning: {{ code: 'h', intensity: 1 }},
    agency: {{ code: 'a', intensity: 1 }},
    judgment: {{ code: 'u', intensity: 1 }},
  }},
  {{
    code: 'H2A2U2',
    ariaLabel: {{
      'zh-CN': '现实主义倾向 2 阶段图腾',
      'zh-TW': '現實主義傾向 2 階段圖騰',
      ko: '현실주의 성향 2단계 심볼',
      en: 'Realist leaning stage 2 symbol',
      ja: '現実主義傾向第2段階シンボル',
      es: 'Símbolo de tendencia realista nivel 2',
      fr: 'Symbole de tendance réaliste niveau 2',
    }},
    meaning: {{ code: 'h', intensity: 2 }},
    agency: {{ code: 'a', intensity: 2 }},
    judgment: {{ code: 'u', intensity: 2 }},
  }},
];

export const REPLICA_DIMENSIONS_GUIDE: DimensionGuideItem[] = [
  {{
    id: 'personal',
    title: {{
      'zh-CN': '个人维度',
      'zh-TW': '個人維度',
      ko: '개인차원',
      en: 'Personal Dimension',
      ja: '個人領域',
      es: 'Dimensión Personal',
      fr: 'Dimension Personnelle',
    }},
    intro: {{
      'zh-CN': '考察在个人生活中，在经济上将什么作为优先考量。',
      'zh-TW': '考察在個人生活中，在經濟上將什麼作為優先考量。',
      ko: '개인적 삶에서 무엇을 경제적으로 우선하는지 확인합니다.',
      en: 'Examines what you economically prioritize in your personal life.',
      ja: '個人の生活において経済的に何を優先するかを確認します。',
      es: 'Examina qué priorizas económicamente en tu vida personal.',
      fr: 'Évalue ce que vous priorisez économiquement dans votre vie personnelle.',
    }},
    contrasts: [
      {{
        term: {{ 'zh-CN': '意义', 'zh-TW': '意義', ko: '의미', en: 'Meaning', ja: '意味', es: 'Sentido', fr: 'Sens' }},
        desc: {{
          'zh-CN': '倾向于将无法换算为金钱价值的事物放在首位。',
          'zh-TW': '傾向於將無法換算為金錢價值的事物放在首位。',
          ko: '금전적인 가치로 환산되지 않는 것들을 우선에 두고자 한다.',
          en: 'Prioritizes things that cannot be converted into monetary value.',
          ja: '金銭的価値に換算されないものを優先しようとします。',
          es: 'Prioriza cosas que no se pueden convertir en valor monetario.',
          fr: 'Privilégie ce qui ne peut être converti en valeur monétaire.',
        }},
      }},
      {{
        term: {{ 'zh-CN': '实利', 'zh-TW': '實利', ko: '실리', en: 'Utility', ja: '実利', es: 'Utilidad', fr: 'Utilité' }},
        desc: {{
          'zh-CN': '强调物质稳定是实现其他一切价值的最重要基石。',
          'zh-TW': '強調物質穩定是實現其他一切價值的最重要基石。',
          ko: '물질적 안정이 다른 가치를 실현하는 가장 중요한 토대라고 강조한다.',
          en: 'Emphasizes material stability as the foundation for realizing other values.',
          ja: '物質的な安定が他の価値を実現するための最も重要な土台であると強調します。',
          es: 'Enfatiza que la estabilidad material es la base para otros valores.',
          fr: 'Souligne que la stabilité matérielle est le socle de toute autre valeur.',
        }},
      }},
    ],
  }},
  {{
    id: 'social',
    title: {{
      'zh-CN': '社会维度',
      'zh-TW': '社會維度',
      ko: '사회차원',
      en: 'Social Dimension',
      ja: '社会領域',
      es: 'Dimensión Social',
      fr: 'Dimension Sociale',
    }},
    intro: {{
      'zh-CN': '考察在分配社会资源时，将什么作为优先考量。',
      'zh-TW': '考察在分配社會資源時，將什麼作為優先考量。',
      ko: '사회적 자원을 분배할 때 무엇을 우선하는지 확인합니다.',
      en: 'Examines what you prioritize when distributing societal resources.',
      ja: '社会的資源を配分する際に何を優先するかを確認します。',
      es: 'Examina qué priorizas al distribuir los recursos sociales.',
      fr: 'Évalue ce que vous priorisez lors de la distribution des ressources sociales.',
    }},
    contrasts: [
      {{
        term: {{ 'zh-CN': '结构', 'zh-TW': '結構', ko: '구조', en: 'Structure', ja: '構造', es: 'Estructura', fr: 'Structure' }},
        desc: {{
          'zh-CN': '认为克服不平等不能仅靠个人，制度与政策应当发挥积极作用。',
          'zh-TW': '認為克服不平等不能僅靠個人，制度與政策應當發揮積極作用。',
          ko: '불평등의 극복을 개인에게만 맡기지 않고, 제도와 정책이 적극적인 역할을 해야 한다고 생각한다.',
          en: 'Believes addressing inequality should not rely on individuals alone; institutions and policies must play an active role.',
          ja: '不平等の克服を個人だけに委ねず、制度と政策が積極的な役割を果たすべきだと考えます。',
          es: 'Considera que la desigualdad requiere la intervención activa de instituciones y políticas.',
          fr: 'Estime que la réduction des inégalités nécessite l\'intervention active des institutions et des politiques.',
        }},
      }},
      {{
        term: {{ 'zh-CN': '能力', 'zh-TW': '能力', ko: '능력', en: 'Ability', ja: '能力', es: 'Capacidad', fr: 'Compétence' }},
        desc: {{
          'zh-CN': '强调个人的成就与努力，认为不平等是公平竞争过程中自然出现的产物。',
          'zh-TW': '強調個人的成就與努力，認為不平等是公平競爭過程中自然出現的產物。',
          ko: '개인의 성취와 노력을 강조하며, 불평등은 공정한 경쟁 과정에서 나타날 수 있다고 생각한다.',
          en: 'Emphasizes individual achievement and effort, seeing inequality as a natural outcome of fair competition.',
          ja: '個人の達成と努力を強調し、不平等は公正な競争の過程で生じ得るものと考えます。',
          es: 'Enfatiza el mérito individual y ve la desigualdad como un resultado natural de la competencia justa.',
          fr: 'Met l\'accent sur le mérite individuel, voyant l\'inégalité comme le fruit d\'une compétition équitable.',
        }},
      }},
    ],
  }},
  {{
    id: 'ethical',
    title: {{
      'zh-CN': '伦理维度',
      'zh-TW': '倫理維度',
      ko: '윤리차원',
      en: 'Ethical Dimension',
      ja: '倫理領域',
      es: 'Dimensión Ética',
      fr: 'Dimension Éthique',
    }},
    intro: {{
      'zh-CN': '考察在道德价值发生冲突时，以什么为标准进行判断。',
      'zh-TW': '考察在道德價值發生衝突時，以什麼為標準進行判斷。',
      ko: '도덕적 가치가 충돌할 때 무엇을 기준으로 판단하는지 확인합니다.',
      en: 'Examines what criteria you use to judge when moral values clash.',
      ja: '道徳的価値観が衝突したときに何を基準に判断するかを確認します。',
      es: 'Examina qué criterios utilizas al juzgar cuando chocan valores morales.',
      fr: 'Évalue les critères utilisés lorsque des valeurs morales entrent en conflit.',
    }},
    contrasts: [
      {{
        term: {{ 'zh-CN': '原则', 'zh-TW': '原則', ko: '원칙', en: 'Principles', ja: '原則', es: 'Principios', fr: 'Principes' }},
        desc: {{
          'zh-CN': '认为由于无法预测行为的全部后果，因此审慎遵循长期共识的标准至关重要。',
          'zh-TW': '認為由於無法預測行為的全部後果，因此審慎遵循長期共識的標準至關重要。',
          ko: '행동의 결과를 모두 예측할 수 없으므로, 오랫동안 합의해 온 기준을 신중하게 따르는 것이 중요하다고 본다.',
          en: 'Believes following long-agreed standards is vital since all consequences cannot be predicted.',
          ja: '行動の結果をすべて予測することはできないため、長く合意されてきた基準に慎重に従うことが重要だと考えます。',
          es: 'Considera vital seguir normas consolidadas dado que las consecuencias no siempre pueden preverse.',
          fr: 'Estime essentiel de respecter les principes établis de longue date face à l\'imprévisibilité des conséquences.',
        }},
      }},
      {{
        term: {{ 'zh-CN': '结果', 'zh-TW': '結果', ko: '결과', en: 'Results', ja: '結果', es: 'Resultados', fr: 'Résultats' }},
        desc: {{
          'zh-CN': '认为单一原则不能硬套所有情况，积极追求最大多数人的最大利益。',
          'zh-TW': '認為單一原則不能硬套所有情況，積極追求最大多數人的最大利益。',
          ko: '하나의 원칙을 모든 상황에 적용할 수 없으므로, 최대 다수의 최대 유익을 적극적으로 추구한다.',
          en: 'Believes a single rule cannot fit all situations; actively pursues the greatest good for the greatest number.',
          ja: '一つの原則をすべての状況に適用することはできないため、最大多数の最大の利益を積極的に追求します。',
          es: 'Considera que ninguna regla fija sirve para todo; busca el mayor beneficio para el mayor número.',
          fr: 'Soutient qu\'une règle unique ne peut s\'appliquer partout ; vise le plus grand bien pour le plus grand nombre.',
        }},
      }},
    ],
  }},
];
'''

with open('src/data/replicaTranslations.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print('src/data/replicaTranslations.ts updated with all 7 languages and Season 1 data!')
