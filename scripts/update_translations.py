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

s1_guide_details = [
  {
    "title": {
      "zh-CN": "政治领域",
      "zh-TW": "政治領域",
      "ko": "정치 영역",
      "en": "Politics Dimension",
      "ja": "政治領域",
      "es": "Dimensión Política",
      "fr": "Dimension Politique"
    },
    "body": {
      "zh-CN": "政治领域衡量的是对政府职能与市场经济的态度。越赞成政府通过财富再分配缩小贫富差距、健全社会福利安全网（大政府），越倾向于红色的“左派”；越赞成政府保障个人自由竞争、依托自由市场促进经济增长（小政府），越倾向于蓝色的“右派”。",
      "zh-TW": "政治領域衡量的是對政府職能與市場經濟的態度。越贊成政府透過財富再分配縮小貧富差距、健全社會福利安全網（大政府），越傾向於紅色的「左派」；越贊成政府保障個人自由競爭、依託自由市場促進經濟增長（小政府），越傾向於藍色的「右派」。",
      "ko": "정치 영역은 정부의 역할에 대한 태도를 측정합니다. 정부가 적극적으로 부의 재분배를 통해 빈부격차를 줄이고, 복지제도를 통한 안전망을 확보해야 한다는 ‘큰 정부’의 입장일수록 빨간색의 ‘좌파’로 분류됩니다. 정부가 개인의 노력과 자유를 최대한 보장하고, 자유시장경제의 경쟁을 통한 성장을 추구해야 한다는 ‘작은 정부’의 입장일수록 파란색의 ‘우파’로 분류됩니다.",
      "en": "The politics dimension evaluates attitudes toward the role of government. Believing in active wealth redistribution and welfare safety nets ('Big Government') leans toward red 'Left'. Believing in market competition and limited government intervention leans toward blue 'Right'.",
      "ja": "政治領域は政府の役割に対する態度を測定します。富の再分配と社会福祉を重視する「大きな政府」の立場は赤の「左派」に、自由市場と個人の競争を重視する「小さな政府」は青の「右派」に分類されます。",
      "es": "La dimensión política evalúa las actitudes hacia el papel del gobierno. Quienes apoyan la redistribución y el bienestar social se clasifican como 'Izquierda' (rojo); quienes priorizan el libre mercado y la desregulación como 'Derecha' (azul).",
      "fr": "La dimension politique évalue les attitudes envers le rôle de l'État. Favoriser la redistribution des richesses et la protection sociale relève de la 'Gauche' (rouge) ; privilégier le libre marché relève de la 'Droite' (bleu)."
    }
  },
  {
    "title": {
      "zh-CN": "性别领域",
      "zh-TW": "性別領域",
      "ko": "젠더 영역",
      "en": "Gender Dimension",
      "ja": "ジェンダー領域",
      "es": "Dimensión de Género",
      "fr": "Dimension de Genre"
    },
    "body": {
      "zh-CN": "性别领域衡量的是对女权主义与性别平等的态度。越认同现代社会男性既得特权依然显著、需要积极改善女性受歧视处境，越倾向于红色的“女权主义”；越认为制度性歧视已基本消除、过分强调单方面女性权益反而构成逆向歧视，越倾向于蓝色的“平权主义（Equalism）”。",
      "zh-TW": "性別領域衡量的是對女性主義與性別平等的態度。越認同現代社會男性既得特權依然顯著、需要積極改善女性受歧視處境，越傾向於紅色的「女權主義」；越認為制度性歧視已基本消除、過分強調單方面女性權益反而構成逆向歧視，越傾向於藍色的「平權主義（Equalism）」。",
      "ko": "젠더 영역은 페미니즘 일반에 대한 태도를 측정합니다. 현대사회에도 여전히 남성의 기득권이 유지되고 있기 때문에 여성에 대한 차별을 개선해 나가야 한다는 전제에 동의할수록 빨간색의 ‘페미니즘’으로 분류됩니다. 반대로 일방적인 여성 차별은 해소되었으며 과도한 여성 우대 정책이 ‘역차별’을 낳는다는 입장일수록 파란색의 ‘이퀄리즘’으로 분류됩니다.",
      "en": "Evaluates attitudes toward feminism. Viewing male privilege as persistent and advocating gender redress leans toward red 'Feminism'. Viewing institutional bias as largely resolved and criticizing reverse discrimination leans toward blue 'Equalism'.",
      "ja": "ジェンダー領域はフェミニズムに対する姿勢を測定します。男性優位が維持されており格差是正が必要と考える立場は赤の「フェミニズム」、一方的な女性優遇が逆差別を生むと考える立場は青の「イコリズム」に分類されます。",
      "es": "Evalúa actitudes hacia el feminismo. Considerar que persiste el privilegio masculino conduce al 'Feminismo' (rojo); considerar que las cuotas son discriminación inversa conduce al 'Igualitarismo' (azul).",
      "fr": "Évalue les attitudes envers le féminisme. Soutenir que les privilèges masculins persistent relève du 'Féminisme' (rouge) ; considérer que les politiques actuelles créent une discrimination inversée relève de l''Égalitarisme' (bleu)."
    }
  },
  {
    "title": {
      "zh-CN": "阶级领域",
      "zh-TW": "階級領域",
      "ko": "계급 영역",
      "en": "Class Dimension",
      "ja": "階級領域",
      "es": "Dimensión de Clase",
      "fr": "Dimension de Classe"
    },
    "body": {
      "zh-CN": "阶级领域衡量的是答题者成长背景中经济资本与文化资本的实际积累状况。成长过程中经历较多经济拮据、靠打工筹措学费生活的倾向于红色的“平民（Working）”；拥有富足家庭背景、充分享受海外旅游与私立优质教育资源的倾向于深蓝色的“富裕（Upper-Middle）”。",
      "zh-TW": "階級領域衡量的是答題者成長背景中經濟資本與文化資本的實際積累狀況。成長過程中經歷較多經濟拮据、靠打工籌措學費生活的傾向於紅色的「平民（Working）」；擁有富足家庭背景、充分享受海外旅遊與私立優質教育資源的傾向於深藍色的「富裕（Upper-Middle）」。",
      "ko": "계급 영역은 개인의 경제적·문화적 배경을 측정합니다. 학창 시절 학비나 생활비에 대한 경제적 부담을 겪었거나 아르바이트와 대출로 자립해 온 경우 빨간색의 ‘서민’으로 분류되며, 부모의 전폭적인 경제적 지원, 해외여행, 유학 등 유복한 환경에서 성장한 경우 남색의 ‘부유’로 분류됩니다.",
      "en": "Measures economic and cultural background. Experiencing financial constraints, working part-time for tuition, and lack of parental economic safety nets leans toward red 'Working Class'. Growing up with affluent family assets, private tutoring, and overseas travel leans toward dark blue 'Upper-Middle Class'.",
      "ja": "階級領域は成長環境における経済的・文化的資本を測定します。学費や生活費の工面に苦労した経験が多い場合は赤の「庶民」、裕福な家庭で留学や海外旅行などの支援を受けて育った場合は紺の「富裕」に分類されます。",
      "es": "Mide el capital económico y cultural formativo. Crecer con limitaciones económicas y trabajar para pagar los estudios conduce a 'Clase Trabajadora' (rojo); crecer con solvencia familiar y viajes al exterior conduce a 'Clase Acomodada' (azul oscuro).",
      "fr": "Mesure le milieu économique et culturel d'origine. Avoir connu la précarité et travaillé pour financer ses études relève de la 'Classe Populaire' (rouge) ; avoir bénéficié de voyages et d'un soutien financier aisé relève de la 'Classe Aisée' (bleu marine)."
    }
  },
  {
    "title": {
      "zh-CN": "开放性领域",
      "zh-TW": "開放性領域",
      "ko": "개방성 영역",
      "en": "Openness Dimension",
      "ja": "開放性領域",
      "es": "Dimensión de Apertura",
      "fr": "Dimension d'Ouverture"
    },
    "body": {
      "zh-CN": "开放性领域衡量对多元少数群体、社会异质性以及传统伦理规范的态度。积极包容性少数群体权利、素食主义及多元移民文化的倾向于橙红色的“开放”；重视传统家庭制度、集体凝聚力与社会秩序规范的倾向于天蓝色的“传统”。",
      "zh-TW": "開放性領域衡量對多元少數群體、社會異質性以及傳統倫理規範的態度。積極包容性少數群體權利、素食主義及多元移民文化的傾向於橙紅色的「開放」；重視傳統家庭制度、集體凝聚力與社會秩序規範的傾向於天藍色的「傳統」。",
      "ko": "개방성 영역은 성소수자, 채식주의, 이민자 등 소수자 의제와 전통적 질서에 대한 태도를 측정합니다. 다양성과 소수자 가시화, 인권의 확대를 지지할수록 주황색의 ‘개방’으로, 전통적인 가족제도와 공동체의 질서, 의무 이행을 강조할수록 하늘색의 ‘전통’으로 분류됩니다.",
      "en": "Measures stance toward social diversity and tradition. Supporting minority visibility, LGBTQ+ rights, veganism, and multiculturalism leans toward orange-red 'Open Minded'. Emphasizing conventional family structures, order, and collective duty leans toward sky-blue 'Conservative'.",
      "ja": "開放性領域は多様性と伝統的規範に対する姿勢を測定します。性的マイノリティや多文化共生を寛容に受け入れる姿勢はオレンジの「開放」、伝統的な家族観や社会秩序の維持を重んじる姿勢は空色の「伝統」に分類されます。",
      "es": "Evalúa la apertura hacia la diversidad y las tradiciones. Apoyar los derechos de minorías, diversidad sexual y vegetarianismo conduce a 'Abierto' (naranja); priorizar la familia tradicional y el orden colectivo conduce a 'Tradicional' (azul celeste).",
      "fr": "Évalue l'ouverture envers la diversité et la tradition. Soutenir les droits des minorités, la communauté LGBTQ+ et le multiculturalisme relève de 'Ouvert' (orange) ; valoriser les structures familiales traditionnelles et l'ordre établi relève de 'Traditionnel' (bleu ciel)."
    }
  }
]

print('Loaded metadata successfully!')
