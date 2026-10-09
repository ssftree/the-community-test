// Generated official Season 2 questions data for 《思想验证区域2：看不见的手》
// 사상검증구역: 더 커뮤니티 시즌2 (보이지 않는 손)
export type DimensionType = 'personal' | 'social' | 'ethical';
export type AnswerChoice = 'O' | 'X';

export interface Question {
  id: string;
  dimension: DimensionType;
  groupKo: string;
  agreeValueKo: string; // value earned if answered 'O'
  oppositeValueKo: string; // value earned if answered 'X'
  prompt: {
    ko: string;
    'zh-CN': string;
    'zh-TW': string;
    en: string;
    ja: string;
    es: string;
    fr: string;
  };
  category: string;
}

export const OPPOSITE_MAP: Record<string, string> = {
  '의미': '실리',
  '실리': '의미',
  '구조': '능력',
  '능력': '구조',
  '원칙': '결과',
  '결과': '원칙',
};

export const DIMENSIONS_CONFIG = {
  personal: {
    id: 'personal',
    groupKo: '의미-실리',
    axisCode: 'meaning',
    leftKo: '의미',
    rightKo: '실리',
    leftLetter: 'B', // Idealist
    rightLetter: 'H', // Realist
    title: {
      'zh-CN': '个人维度',
      'zh-TW': '個人維度',
      ko: '개인차원',
      en: 'Personal Dimension'
    },
    intro: {
      'zh-CN': '探究个人生活中将什么视为经济优先项。',
      'zh-TW': '探究個人生活中將什麼視為經濟優先項。',
      ko: '개인적 삶에서 무엇을 경제적으로 우선하는지 확인합니다.',
      en: 'Examines what you economically prioritize in your personal life.'
    },
    leftLabel: {
      'zh-CN': '意义 (Meaning)',
      'zh-TW': '意義 (Meaning)',
      ko: '의미',
      en: 'Meaning'
    },
    leftDesc: {
      'zh-CN': '优先守护无法被金钱换算的价值（信念、良知、情谊、人生志向）。',
      'zh-TW': '優先守護無法被金錢換算的價值（信念、良知、情誼、人生志向）。',
      ko: '금전적인 가치로 환산되지 않는 것들을 우선에 두고자 한다.',
      en: 'Prioritizes values that cannot be converted into monetary value.'
    },
    rightLabel: {
      'zh-CN': '实利 (Utility)',
      'zh-TW': '實利 (Utility)',
      ko: '실리',
      en: 'Utility'
    },
    rightDesc: {
      'zh-CN': '强调物质与经济稳定是实现一切其他价值的最重要根基。',
      'zh-TW': '強調物質與經濟穩定是實現一切其他價值的最重要根基。',
      ko: '물질적 안정이 다른 가치를 실현하는 가장 중요한 토대라고 강조한다.',
      en: 'Emphasizes material stability as the foundation for realizing other values.'
    },
  },
  social: {
    id: 'social',
    groupKo: '구조-능력',
    axisCode: 'agency',
    leftKo: '구조',
    rightKo: '능력',
    leftLetter: 'S', // Idealist
    rightLetter: 'A', // Realist
    title: {
      'zh-CN': '社会维度',
      'zh-TW': '社會維度',
      ko: '사회차원',
      en: 'Social Dimension'
    },
    intro: {
      'zh-CN': '探究在分配社会公共资源时，何种原则应当占据主导。',
      'zh-TW': '探究在分配社會公共資源時，何種原則應當佔據主導。',
      ko: '사회적 자원을 분배할 때 무엇을 우선하는지 확인합니다.',
      en: 'Examines what is prioritized when distributing societal resources.'
    },
    leftLabel: {
      'zh-CN': '结构 (Structure)',
      'zh-TW': '結構 (Structure)',
      ko: '구조',
      en: 'Structure'
    },
    leftDesc: {
      'zh-CN': '认为不平等不能只交由个人承担，制度、政策与社会应当发挥主动干预与再分配作用。',
      'zh-TW': '認為不平等不能只交由個人承擔，制度、政策與社會應當發揮主動干預與再分配作用。',
      ko: '불평등의 극복을 개인에게만 맡기지 않고, 제도와 정책이 적극적인 역할을 해야 한다고 생각한다.',
      en: 'Believes mitigating inequality requires active systemic and institutional intervention.'
    },
    rightLabel: {
      'zh-CN': '能力 (Merit)',
      'zh-TW': '能力 (Merit)',
      ko: '능력',
      en: 'Ability'
    },
    rightDesc: {
      'zh-CN': '强调个人奋斗与能力成就，认为合理的差距是不受阻挠的公平竞争下的自然产物。',
      'zh-TW': '強調個人奮鬥與能力成就，認為合理的差距是不受阻撓的公平競爭下的自然產物。',
      ko: '개인의 성취와 노력을 강조하며, 불평등은 공정한 경쟁 과정에서 나타날 수 있다고 생각한다.',
      en: 'Emphasizes individual achievement and effort, seeing inequality as a natural outcome of fair competition.'
    },
  },
  ethical: {
    id: 'ethical',
    groupKo: '원칙-결과',
    axisCode: 'judgment',
    leftKo: '원칙',
    rightKo: '결과',
    leftLetter: 'M', // Idealist
    rightLetter: 'U', // Realist
    title: {
      'zh-CN': '伦理维度',
      'zh-TW': '倫理維度',
      ko: '윤리차원',
      en: 'Ethical Dimension'
    },
    intro: {
      'zh-CN': '探究在不同道德价值激烈冲撞时，依托何种尺度做出终极裁量。',
      'zh-TW': '探究在不同道德價值激烈衝撞時，依託何種尺度做出終極裁量。',
      ko: '도덕적 가치가 충돌할 때 무엇을 기준으로 판단하는지 확인합니다.',
      en: 'Examines which criteria you rely on when moral values clash.'
    },
    leftLabel: {
      'zh-CN': '原则 (Principles)',
      'zh-TW': '原則 (Principles)',
      ko: '원칙',
      en: 'Principles'
    },
    leftDesc: {
      'zh-CN': '因为无法全知不可控的连锁后果，因而坚定谨慎地坚守人类长期共识的道德戒律与底线。',
      'zh-TW': '因為無法全知不可控的連鎖後果，因而堅定謹慎地堅守人類長期共識的道德戒律與底線。',
      ko: '행동의 결과를 모두 예측할 수 없으므로, 오랫동안 합의해 온 기준을 신중하게 따르는 것이 중요하다고 본다.',
      en: 'Advocates adhering strictly to long-standing agreed moral principles regardless of consequences.'
    },
    rightLabel: {
      'zh-CN': '结果 (Consequences)',
      'zh-TW': '結果 (Consequences)',
      ko: '결과',
      en: 'Results'
    },
    rightDesc: {
      'zh-CN': '单一死板原则无法生搬硬套于所有危机，务实追求“为最大多数人创造最大福祉与效用”。',
      'zh-TW': '單一死板原則無法生搬硬套於所有危機，務實追求「為最大多數人創造最大福祉與效用」。',
      ko: '하나의 원칙을 모든 상황에 적용할 수 없으므로, 최대 다수의 최대 유익을 적극적으로 추구한다.',
      en: 'Believes no single rule fits all; actively maximizes overall benefit and utility for the greatest number.'
    },
  },
};

export const QUESTIONS_DATA: Question[] = [
  {
    id: 'rp01',
    dimension: 'ethical',
    groupKo: '원칙-결과',
    agreeValueKo: '결과',
    oppositeValueKo: '원칙',
    prompt: {
      ko: "국가의 전력 부족 사태를 해결하기 위해 댐을 건설해야 한다면 수몰지역의 일부 주민들이 강력하게 반대하더라도 강행할 필요가 있다.",
      'zh-CN': "为了解决国家电力短缺问题而必须修建水坝时，即使水淹区域的部分居民强烈反对，也有必要强行推进工程。",
      'zh-TW': "為了解決國家電力短缺問題而必須興建水壩時，即使淹水區域的部分居民強烈反對，也有必要強行推動。",
      en: "If building a dam is necessary to resolve a national power shortage, it must be pushed through even if some residents of the flooded area strongly object.",
    },
    category: 'utilitarianism',
  },
  {
    id: 'rp02',
    dimension: 'ethical',
    groupKo: '원칙-결과',
    agreeValueKo: '원칙',
    oppositeValueKo: '결과',
    prompt: {
      ko: "특정 암 치료법의 완성을 앞둔 천재 과학자가 과거 중대한 성범죄를 저질렀다는 증거를 발견했다. 그가 없이는 치료법을 완성할 수 없다는 사실이 확실하더라도 그를 고발하겠는가?",
      'zh-CN': "即将攻克某种癌症疗法的天才科学家，被发现了过去曾犯下严重性犯罪的证据。即便确信没有他就无法完成这一疗法，你也依然会举报他吗？",
      'zh-TW': "即將攻克某種癌症療法的天才科學家，被發現了過去曾犯下重大性犯罪的證據。即便確信沒有他就無法完成該療法，你依然會檢舉他嗎？",
      en: "Evidence surfaces that a genius scientist on the verge of perfecting a cancer cure committed a serious sexual crime in the past. Even knowing the cure cannot be finished without him, would you still report him?",
    },
    category: 'deontology',
  },
  {
    id: 'rp03',
    dimension: 'ethical',
    groupKo: '원칙-결과',
    agreeValueKo: '원칙',
    oppositeValueKo: '결과',
    prompt: {
      ko: "'소수를 희생하더라도 더 많은 생명을 구하라'는 목적보다 '살인해서는 안 된다'는 원칙이 항상 우선되어야 한다.",
      'zh-CN': "相比“哪怕牺牲少数也要拯救更多生命”的目的，“绝不可杀人”的原则必须始终放在首位。",
      'zh-TW': "相較於「哪怕犧牲少數也要拯救更多生命」的目的，「絕不可殺人」的原則必須始終置於首位。",
      en: "The principle of 'Thou shall not kill' must always take precedence over the objective of 'saving more lives even if a few are sacrificed.'",
    },
    category: 'deontology',
  },
  {
    id: 'rp04',
    dimension: 'ethical',
    groupKo: '원칙-결과',
    agreeValueKo: '결과',
    oppositeValueKo: '원칙',
    prompt: {
      ko: "어떤 행위의 도덕적 가치는 그 사람의 '의도'가 아니라 발생한 '결과'에 의해 평가되어야 한다.",
      'zh-CN': "一种行为的道德价值，应当根据其产生的“结果”来评判，而非当事人的“动机与意图”。",
      'zh-TW': "一種行為的道德價值，應當依據其產生的「結果」來評判，而非當事人的「動機與意圖」。",
      en: "The moral worth of an action should be judged by the 'consequences' produced, not by the person's 'intentions.'",
    },
    category: 'consequentialism',
  },
  {
    id: 'rp05',
    dimension: 'ethical',
    groupKo: '원칙-결과',
    agreeValueKo: '원칙',
    oppositeValueKo: '결과',
    prompt: {
      ko: "흉악범을 놓칠 수 있더라도 불법적인 수사 방식이 동원되어서는 안 된다.",
      'zh-CN': "哪怕可能会错失将凶残罪犯缉拿归案的机会，也绝不能动用非法的侦查手段。",
      'zh-TW': "哪怕可能會錯失將凶殘罪犯緝拿歸案的機會，也絕不可動用非法的偵查手段。",
      en: "Even if a heinous criminal might escape, illegal investigative methods must never be employed.",
    },
    category: 'rule_of_law',
  },
  {
    id: 'rp06',
    dimension: 'ethical',
    groupKo: '원칙-결과',
    agreeValueKo: '결과',
    oppositeValueKo: '원칙',
    prompt: {
      ko: "수만 명이 모여 있는 종합운동장에 폭탄 테러가 예고되었다. 폭탄의 정확한 위치를 알 수 있는 유일한 방법이 테러 용의자의 무고한 어린 자녀를 고문하는 것이라면 고문해야 한다.",
      'zh-CN': "数万人聚集的综合体育场遭到炸弹袭击威胁。如果获知炸弹确切位置的唯一途径是拷问嫌犯无辜的幼童，那就必须进行拷问。",
      'zh-TW': "數萬人聚集的綜合體育場接獲炸彈恐攻威脅。若得知炸彈確切位置的唯一途徑是拷問嫌犯無辜的幼童，就必須進行拷問。",
      en: "A bomb attack is threatened against a stadium packed with tens of thousands of people. If the only way to obtain the bomb's exact location is to torture the suspect's innocent young child, they should be tortured.",
    },
    category: 'ticking_bomb_dilemma',
  },
  {
    id: 'rp07',
    dimension: 'ethical',
    groupKo: '원칙-결과',
    agreeValueKo: '결과',
    oppositeValueKo: '원칙',
    prompt: {
      ko: "탈세를 일삼는 부패한 기업의 계좌를 해킹해 그 돈을 자선기관의 운영비로 전액 기부할 수 있는 기회가 생겼다면 법을 어기더라도 해킹을 실행할 것이다.",
      'zh-CN': "如果有机会黑入一家肆意逃税的腐败企业的账户，并将资金全额捐给慈善机构作为运营金，哪怕违法我也愿意实施黑客行动。",
      'zh-TW': "若有機會駭入一家肆意逃稅的腐敗企業帳戶，並將資金全額捐給慈善機構作為營運金，哪怕違法我也願意實施駭客行動。",
      en: "If given the chance to hack into the account of a corrupt tax-evading corporation and donate all that money for charity operations, I would proceed with the hack even if it violates the law.",
    },
    category: 'robin_hood',
  },
  {
    id: 'rp08',
    dimension: 'ethical',
    groupKo: '원칙-결과',
    agreeValueKo: '결과',
    oppositeValueKo: '원칙',
    prompt: {
      ko: "자율주행 자동차는 여러 명의 보행자와 충돌할 상황에 처하면 운전자를 희생시키더라도 다수를 살리는 방향으로 설계되어야 한다.",
      'zh-CN': "自动驾驶汽车在面临即将撞向多名行人的危急情形时，应设计为即便牺牲车内驾驶员，也要优先挽救多数人的生命。",
      'zh-TW': "自動駕駛汽車在面臨即將撞向多名行人的緊急狀況時，應設計為即便犧牲車內駕駛人，也要優先挽救多數人的生命。",
      en: "When facing a collision with multiple pedestrians, autonomous vehicles should be designed to prioritize saving the majority even if it sacrifices the driver.",
    },
    category: 'trolley_problem',
  },
  {
    id: 'rp09',
    dimension: 'ethical',
    groupKo: '원칙-결과',
    agreeValueKo: '원칙',
    oppositeValueKo: '결과',
    prompt: {
      ko: "명백하게 중범죄를 저지를 것으로 예측되는 사람이 있더라도 아직 범죄를 저지르지 않았다면 미리 구금할 수 없다.",
      'zh-CN': "即便某人被明确预测必然会犯下严重罪行，但只要其尚未付诸实际行动，就不能提前进行拘禁。",
      'zh-TW': "即便某人被明確預測必然會犯下重大罪行，但只要其尚未付諸實際行動，就不可提前進行拘留。",
      en: "Even if someone is clearly predicted to commit a serious crime, they cannot be pre-emptively detained if they have not yet committed it.",
    },
    category: 'minority_report',
  },
  {
    id: 'rp10',
    dimension: 'ethical',
    groupKo: '원칙-결과',
    agreeValueKo: '결과',
    oppositeValueKo: '원칙',
    prompt: {
      ko: "무고한 사람 한 명을 책임자로 지목해 처벌함으로써 폭도들의 분노를 잠재우고 시민들의 안전을 보장할 수 있다면 한 사람을 희생시킬 수 있다.",
      'zh-CN': "如果将一名无辜者指认为元凶并施加惩戒，能够平息暴民的怒火并确保全体市民的安全，那么牺牲这一个人是可接受的。",
      'zh-TW': "若將一名無辜者指認為元兇並施加懲戒，能夠平息暴徒的怒火並確保全體市民的安全，那麼犧牲這一個人是可接受的。",
      en: "If framing and punishing a single innocent person can appease an angry mob and guarantee citizens' safety, that one person can be sacrificed.",
    },
    category: 'scapegoat',
  },
  {
    id: 'rp11',
    dimension: 'ethical',
    groupKo: '원칙-결과',
    agreeValueKo: '원칙',
    oppositeValueKo: '결과',
    prompt: {
      ko: "실제 피해자가 발생하지 않는 가상현실 안에서라도 특정 집단을 대상으로 하는 고문이나 학살 등 반인륜적인 행위는 창작의 자유를 침해하더라도 규제해야 한다.",
      'zh-CN': "即便是在没有真实受害者的虚拟现实中，针对特定群体的酷刑、屠杀等反人类行为，哪怕干涉创作自由也应当予以监管取缔。",
      'zh-TW': "即便是在沒有真實受害者的虛擬世界中，針對特定群體的酷刑、屠殺等反人類行為，哪怕干涉創作自由也應當予以監管取締。",
      en: "Even in virtual reality where no real victims exist, anti-human acts like torture or genocide against specific groups should be regulated, even if it limits creative freedom.",
    },
    category: 'virtual_ethics',
  },
  {
    id: 'rp12',
    dimension: 'ethical',
    groupKo: '원칙-결과',
    agreeValueKo: '결과',
    oppositeValueKo: '원칙',
    prompt: {
      ko: "규칙을 철저히 지키느라 일을 그르치는 사람보다 규칙을 조금 어기더라도 성과를 내는 사람이 유능한 인재다.",
      'zh-CN': "相比因为死板遵循规矩而把事情搞砸的人，哪怕稍微打破规则但能创造卓越业绩的人才是真正有能力的人才。",
      'zh-TW': "相較於因為死守規矩而把事情搞砸的人，哪怕稍微打破規則但能創造卓越成果的人才是真正有能力的人才。",
      en: "A person who bends the rules to achieve results is more capable than someone who ruins the task by rigidly following rules.",
    },
    category: 'pragmatism_talent',
  },
  {
    id: 'rp13',
    dimension: 'ethical',
    groupKo: '원칙-결과',
    agreeValueKo: '원칙',
    oppositeValueKo: '결과',
    prompt: {
      ko: "중대한 공익을 침해하는 기업의 부정을 고발하면 무고한 많은 사람들이 일자리를 잃게 되더라도 고발해야 한다.",
      'zh-CN': "揭发严重侵害公众利益的企业舞弊行为，即使会导致大量无辜员工失去工作，也必须义无反顾地予以举报。",
      'zh-TW': "揭發嚴重侵害公眾利益的企業舞弊行為，即使會導致大量無辜員工失去工作，也必須義無反顧地予以檢舉。",
      en: "If whistleblowing on corporate corruption that violates major public interest causes many innocent workers to lose their jobs, it must still be exposed.",
    },
    category: 'whistleblowing',
  },
  {
    id: 'sa01',
    dimension: 'social',
    groupKo: '구조-능력',
    agreeValueKo: '능력',
    oppositeValueKo: '구조',
    prompt: {
      ko: "성공은 노력과 자기관리의 산물이며 운이나 배경이 차지하는 비중은 미미하다.",
      'zh-CN': "成功是个人努力与自我约束的产物，运气或家庭背景所占的比重微乎其微。",
      'zh-TW': "成功是個人努力與自我約束的產物，運氣或家庭背景所佔的比重微乎其微。",
      en: "Success is the product of effort and self-discipline; luck or family background plays only a negligible role.",
    },
    category: 'meritocracy_effort',
  },
  {
    id: 'sa02',
    dimension: 'social',
    groupKo: '구조-능력',
    agreeValueKo: '능력',
    oppositeValueKo: '구조',
    prompt: {
      ko: "대기업 인턴십 기회가 부모의 인맥으로 주어졌더라도 실제 업무를 완벽하게 수행해냈다면 채용 결정에는 문제가 없다.",
      'zh-CN': "大企业的实习资格即使是凭借父母人脉关系获取的，只要实际工作完成得完美无缺，其最终录用决定就合情合理。",
      'zh-TW': "大企業的實習資格即使是憑藉父母人脈關係取得的，只要實際工作完成得完美無缺，其最終錄用決定就毫無問題。",
      en: "Even if a corporate internship was obtained via parents' connections, hiring them is justified if they demonstrated flawless performance on the job.",
    },
    category: 'connection_competence',
  },
  {
    id: 'sa03',
    dimension: 'social',
    groupKo: '구조-능력',
    agreeValueKo: '구조',
    oppositeValueKo: '능력',
    prompt: {
      ko: "기업이나 조직의 인력을 실력으로 선발했더라도 인적 구성이 특정 출신지·학교·성별로 치우친다면 조정할 필요가 있다.",
      'zh-CN': "哪怕企业或组织的人员全部是凭实力选拔的，如果人员结构过度偏向特定地域、毕业名校或性别，就有必要进行结构配额干预。",
      'zh-TW': "哪怕企業或組織的人員全部是憑實力選拔的，如果人員結構過度偏向特定地區、名校或性別，也有必要進行配額干預。",
      en: "Even if candidates were selected purely on merit, adjustments must be made if composition leans disproportionately toward a specific region, school, or gender.",
    },
    category: 'affirmative_action',
  },
  {
    id: 'sa04',
    dimension: 'social',
    groupKo: '구조-능력',
    agreeValueKo: '능력',
    oppositeValueKo: '구조',
    prompt: {
      ko: "가난한 사람이 가난에서 벗어나지 못하는 주된 이유는 본인의 의지와 노력이 부족하기 때문이다.",
      'zh-CN': "贫困阶层未能摆脱贫困的主要症结，归根结底是当事人自身的意愿与奋斗拼劲不足。",
      'zh-TW': "貧困階層未能脫離貧窮的主要癥結，歸根結底是當事人自身的意願與奮鬥拼勁不足。",
      en: "The primary reason people living in poverty cannot escape it is their own lack of willpower and determination.",
    },
    category: 'individual_responsibility',
  },
  {
    id: 'sa05',
    dimension: 'social',
    groupKo: '구조-능력',
    agreeValueKo: '능력',
    oppositeValueKo: '구조',
    prompt: {
      ko: "소득세와 재산세를 내며 모은 자산을 자식에게 물려줄 때 상속세를 다시 부과하는 것은 개인 자산을 과도하게 침해한다.",
      'zh-CN': "在如实缴纳个人所得税与财产税后积攒下的资产，赠予传承给子女时再次征收遗产税，是对私有财产的过度侵害。",
      'zh-TW': "在如實繳納所得稅與財產稅後累積的資產，傳承給子女時再次課徵遺產稅，是對私有財產的過度侵害。",
      en: "Levying inheritance tax when passing wealth—already taxed via income and property taxes—to children is an excessive infringement on private property.",
    },
    category: 'inheritance_tax',
  },
  {
    id: 'sa06',
    dimension: 'social',
    groupKo: '구조-능력',
    agreeValueKo: '구조',
    oppositeValueKo: '능력',
    prompt: {
      ko: "청년 실업은 사회 구조에 근본적인 원인이 있으므로 젊은 세대가 고생을 안 하려는 것이 문제라고 비판할 수 없다.",
      'zh-CN': "青年失业问题根植于深层社会结构机制，不能轻率指责是年轻一代“不愿吃苦受罪”。",
      'zh-TW': "青年失業問題根植於深層社會結構機制，不能輕率指責是年輕一代「不願吃苦耐勞」。",
      en: "Youth unemployment is rooted in fundamental social structures, so one cannot blame the younger generation for simply being unwilling to struggle.",
    },
    category: 'youth_unemployment',
  },
  {
    id: 'sa07',
    dimension: 'social',
    groupKo: '구조-능력',
    agreeValueKo: '능력',
    oppositeValueKo: '구조',
    prompt: {
      ko: "같은 비용이라면 경쟁에서 뒤처진 사람을 구제하는 것보다 뛰어난 인재를 육성하는 데 쓰는 편이 더 가치 있다.",
      'zh-CN': "在投入同等资源预算的前提下，把资金用于发掘培养拔尖精英，远比用于救济淘汰落后者更具社会价值。",
      'zh-TW': "在投入同等資源預算的前提下，把資金用於發掘培養頂尖菁英，遠比用於救濟競爭落後者更具社會價值。",
      en: "Given equal resources, investing in cultivating exceptional elite talent is far more worthwhile than subsidizing those left behind in competition.",
    },
    category: 'elite_vs_welfare',
  },
  {
    id: 'sa08',
    dimension: 'social',
    groupKo: '구조-능력',
    agreeValueKo: '구조',
    oppositeValueKo: '능력',
    prompt: {
      ko: "일반 직원과 CEO의 연봉이 수백 배 차이 나는 것은 기득권자에게 유리한 사회 구조 때문이므로 적절한 성과 반영이라고 보기 어렵다.",
      'zh-CN': "基层普通员工与企业高管CEO年薪悬殊数百倍，源自向既得利益者倾斜的社会结构，很难称得上是对实际贡献的合理反映。",
      'zh-TW': "基層普通員工與企業高階CEO年薪懸殊數百倍，源自向既得利益者傾斜的社會結構，很難稱得上是對實際貢獻的合理體現。",
      en: "A hundreds-fold pay disparity between ordinary employees and CEOs stems from a system favoring incumbents, and can hardly be viewed as fair performance compensation.",
    },
    category: 'income_inequality',
  },
  {
    id: 'sa09',
    dimension: 'social',
    groupKo: '구조-능력',
    agreeValueKo: '구조',
    oppositeValueKo: '능력',
    prompt: {
      ko: "시골 오지 학생의 성적이 낮더라도 열악한 교육 환경을 고려해 입시에서 가산점을 주는 제도는 필요하다.",
      'zh-CN': "偏远落后地区的学生哪怕统考分数偏低，考虑到教育资源环境的天然劣势，在升学中给予政策性加分是完全必要的。",
      'zh-TW': "偏遠落後地區的學生哪怕統考分數偏低，考慮到教育資源環境的天然劣勢，在升學中給予政策性加分是完全必要的。",
      en: "Even if rural remote students have lower test scores, granting them admission bonus points to account for poor educational conditions is necessary.",
    },
    category: 'regional_equality',
  },
  {
    id: 'sa10',
    dimension: 'social',
    groupKo: '구조-능력',
    agreeValueKo: '구조',
    oppositeValueKo: '능력',
    prompt: {
      ko: "범죄의 발생 원인은 개인의 도덕적 결함보다 그가 처했던 환경과 사회 구조에서 찾아야 한다.",
      'zh-CN': "违法犯罪行为的滋生根源，与其归咎于当事人的道德败坏，不如深入从其所处的家庭困境与阶层社会结构中去剖析。",
      'zh-TW': "違法犯罪行為的滋生根源，與其歸咎於當事人的道德敗壞，不如深入從其所處的成長困境與階層社會結構中去剖析。",
      en: "The causes of crime should be sought in environmental hardships and social structures rather than merely in individual moral deficiencies.",
    },
    category: 'criminology_structural',
  },
  {
    id: 'sa11',
    dimension: 'social',
    groupKo: '구조-능력',
    agreeValueKo: '능력',
    oppositeValueKo: '구조',
    prompt: {
      ko: "성공한 기업가의 막대한 부와 명예는 사회에 기여한 만큼 주어지는 정당한 보상이다.",
      'zh-CN': "卓越成功的企业家所坐拥的巨额财富与至高声望，正是其为社会创造巨大价值后所获得的当之无愧的回报。",
      'zh-TW': "卓越成功的企業家所坐擁的巨額財富與崇高聲望，正是其為社會創造巨大價值後所獲得的當之無愧的回報。",
      en: "The colossal wealth and reputation attained by successful entrepreneurs are rightful rewards proportionate to their societal contributions.",
    },
    category: 'entrepreneur_rewards',
  },
  {
    id: 'sa12',
    dimension: 'social',
    groupKo: '구조-능력',
    agreeValueKo: '능력',
    oppositeValueKo: '구조',
    prompt: {
      ko: "모두에게 동일한 시험 기회를 주는 것만으로 공정한 경쟁 조건은 충분히 갖춰진 것이다.",
      'zh-CN': "只要面向全社会所有人提供一视同仁的统一考核机会，公平竞争的充分条件就已被完全满足。",
      'zh-TW': "只要面向全社會所有人提供一視同仁的統一測驗機會，公平競爭的充分條件就已被完全滿足。",
      en: "Providing identical testing opportunities to everyone is in itself sufficient to guarantee fair terms of competition.",
    },
    category: 'formal_equality',
  },
  {
    id: 'sa13',
    dimension: 'social',
    groupKo: '구조-능력',
    agreeValueKo: '능력',
    oppositeValueKo: '구조',
    prompt: {
      ko: "지방 도시가 소멸하는 것은 시장 원리에 따른 자연스러운 현상이므로 이를 막기 위해 과도한 예산을 투입하는 것은 국가 역량의 낭비다.",
      'zh-CN': "边缘小城镇的人口消亡衰落属于符合自由市场法则的必然演进，投入巨额国家财政企图强行阻止属于资源浪费。",
      'zh-TW': "邊緣城鎮的人口消亡衰落屬於符合自由市場機制的必然演進，投入巨額國家財政企圖強行阻止純屬資源浪費。",
      en: "The depopulation of peripheral regional towns is a natural market outcome; deploying excessive budgets to stop it is a waste of national resources.",
    },
    category: 'market_efficiency',
  },
  {
    id: 'ms01',
    dimension: 'personal',
    groupKo: '의미-실리',
    agreeValueKo: '의미',
    oppositeValueKo: '실리',
    prompt: {
      ko: "상품의 가성비가 훌륭하더라도 윤리적으로 문제가 있는 기업이라면 구매할 수 없다.",
      'zh-CN': "哪怕某款商品的性价比无可挑剔，如果制造企业在道德伦理上劣迹斑斑，我也绝对不会买单。",
      'zh-TW': "哪怕某款商品的性價比無可挑剔，若製造企業在道德倫理上劣跡斑斑，我也絕對不會購買。",
      en: "Even if a product offers stellar cost-effectiveness, I refuse to purchase it if the company exhibits ethical misconduct.",
    },
    category: 'ethical_consumption',
  },
  {
    id: 'ms02',
    dimension: 'personal',
    groupKo: '의미-실리',
    agreeValueKo: '실리',
    oppositeValueKo: '의미',
    prompt: {
      ko: "더 높은 연봉을 위해서라면 가족·친구와의 시간을 포기할 수 있다.",
      'zh-CN': "如果能够换取更上一层楼的高额年薪，我愿意忍痛牺牲陪伴家人与挚友的闲暇时光。",
      'zh-TW': "若能夠換取更上一層樓的高額年薪，我願意忍痛犧牲陪伴家人與摯友的閒暇時光。",
      en: "For the sake of a substantially higher compensation, I am willing to sacrifice personal time spent with family and friends.",
    },
    category: 'career_money_priority',
  },
  {
    id: 'ms03',
    dimension: 'personal',
    groupKo: '의미-실리',
    agreeValueKo: '실리',
    oppositeValueKo: '의미',
    prompt: {
      ko: "인정과 보상이 주어지지 않는다면 굳이 시간이나 비용을 들여 기부나 선행을 하고 싶지는 않다.",
      'zh-CN': "如果得不到应有的赞誉、名望或实质回报，我不会甘愿白白自掏腰包或牺牲时间去施舍行善。",
      'zh-TW': "若得不到應有的讚譽、名望或實質回報，我不會甘願白白自掏腰包或犧牲時間去施捨行善。",
      en: "Unless explicit recognition or rewards follow, I have no interest in expending my time or financial resources on charity and altruism.",
    },
    category: 'transactional_altruism',
  },
  {
    id: 'ms04',
    dimension: 'personal',
    groupKo: '의미-실리',
    agreeValueKo: '의미',
    oppositeValueKo: '실리',
    prompt: {
      ko: "평생 안정적인 소득이 주어져도 사회적으로 유해하다고 여겨지는 업종에서는 일할 의향이 없다.",
      'zh-CN': "即便承诺提供一辈子高枕无忧的丰厚铁饭碗，我也绝不考虑在任何被公认为有害于社会的行业工作。",
      'zh-TW': "即便承諾提供一輩子高枕無憂的優渥收入，我也絕不考慮在任何被公認為有害於社會的產業任職。",
      en: "Even with guaranteed lifetime financial security, I have zero desire to work in an industry deemed socially detrimental.",
    },
    category: 'work_social_value',
  },
  {
    id: 'ms05',
    dimension: 'personal',
    groupKo: '의미-실리',
    agreeValueKo: '의미',
    oppositeValueKo: '실리',
    prompt: {
      ko: "내가 정말 싫어하는 종류의 사람이라면 나의 직업적 성과에 큰 도움이 되어도 사적으로 친밀한 관계를 갖지 않겠다.",
      'zh-CN': "如果是我打心底里鄙视反感的那类人，就算与他交好能让我的职场飞黄腾达，我也坚决不与他产生私交。",
      'zh-TW': "若是我打從心底鄙視厭惡的那類人，就算與他交好能讓我的職場飛黃騰達，我也堅決不與他建立私交。",
      en: "If someone belongs to a type of person I despise, I will never establish intimate personal ties with them, even if it could boost my career immensely.",
    },
    category: 'interpersonal_integrity',
  },
  {
    id: 'ms06',
    dimension: 'personal',
    groupKo: '의미-실리',
    agreeValueKo: '실리',
    oppositeValueKo: '의미',
    prompt: {
      ko: "사회의 공정함이나 정의를 논하기 전에 일단 나의 경제적 자유를 얻는 것이 가장 중요한 과업이다.",
      'zh-CN': "在侈谈社会的崇高正义或公平规则之前，先挣够银子实现自己的财务自由才是我人生第一要务。",
      'zh-TW': "在奢談社會的崇高正義或公平規則之前，先賺夠資本實現自己的財務自由才是我人生第一要務。",
      en: "Before engaging in debates over societal fairness and justice, securing my own financial independence is the single most crucial mission.",
    },
    category: 'financial_survival_first',
  },
  {
    id: 'ms07',
    dimension: 'personal',
    groupKo: '의미-실리',
    agreeValueKo: '의미',
    oppositeValueKo: '실리',
    prompt: {
      ko: "내 자식에게는 영리하게 돈 버는 법보다 양심에 따라 사는 법을 먼저 가르치겠다.",
      'zh-CN': "教导自己的儿女时，相较于精巧钻营的赚钱技巧，我必定会把恪守良知行事作为第一课传授给他们。",
      'zh-TW': "教導自己的兒女時，相較於精巧鑽營的賺錢技巧，我必定會把恪守良知行事作為第一課傳授給他們。",
      en: "To my children, I will prioritize teaching how to live by moral conscience over smart tricks for accumulating money.",
    },
    category: 'family_values',
  },
  {
    id: 'ms08',
    dimension: 'personal',
    groupKo: '의미-실리',
    agreeValueKo: '실리',
    oppositeValueKo: '의미',
    prompt: {
      ko: "다소 부패한 정치인이더라도 내 자산을 증식시켜 준다면 투표할 수 있다.",
      'zh-CN': "即便某个候选政客手脚不太干净甚至有贪腐传闻，但只要他当选能切实让我的房产和资产升值，我就愿意投票支持他。",
      'zh-TW': "即便某個候選政客操守不潔甚至有貪腐傳聞，但只要他當選能切實讓我的房地產與資產升值，我就願意投票支持他。",
      en: "Even if a politician is tainted with corruption, I am willing to vote for them as long as their policies actively grow my personal assets.",
    },
    category: 'pocketbook_voting',
  },
  {
    id: 'ms10',
    dimension: 'personal',
    groupKo: '의미-실리',
    agreeValueKo: '실리',
    oppositeValueKo: '의미',
    prompt: {
      ko: "솔직히 인생에서 만나는 대부분의 문제는 돈으로 해결할 수 있다.",
      'zh-CN': "说句心底的大实话，人在世间遭遇的大多数坎坷与困境，最终都能靠足够的金钱迎刃而解。",
      'zh-TW': "說句心底的真心話，人在世間遭遇的大多數坎坷與困境，最終都能靠充裕的金錢迎刃而解。",
      en: "Frankly speaking, the overwhelming majority of challenges one encounters in this life can eventually be resolved with money.",
    },
    category: 'monetary_omnipresence',
  },
  {
    id: 'ms11',
    dimension: 'personal',
    groupKo: '의미-실리',
    agreeValueKo: '의미',
    oppositeValueKo: '실리',
    prompt: {
      ko: "직업을 선택할 때는 통장에 찍히는 숫자보다 적성이나 보람이 최우선이어야 한다.",
      'zh-CN': "在抉择人生职业方向时，内心的热爱天赋与成就满足感，必须压过银行账户每月的到账数字。",
      'zh-TW': "在抉擇人生職業方向時，內心的熱愛天賦與成就滿足感，必須凌駕於銀行帳戶每月的薪資數字。",
      en: "When deciding on a career path, personal calling and spiritual fulfillment should unconditionally outrank the numbers on the paycheck.",
    },
    category: 'calling_vs_pay',
  },
  {
    id: 'ms13',
    dimension: 'personal',
    groupKo: '의미-실리',
    agreeValueKo: '실리',
    oppositeValueKo: '의미',
    prompt: {
      ko: "자본주의 사회에서 모든 상품이나 서비스의 가치는 가격이 증명한다.",
      'zh-CN': "在现代商业资本主义社会中，任何商品与服务的真实价值高低，最终皆由其标价与市场成交价来证明。",
      'zh-TW': "在現代商業資本主義社會中，任何商品與服務的真實價值高低，最終皆由其標價與市場成交價來證明。",
      en: "In a market capitalist society, the genuine worth of any good or service is objectively verified by its price.",
    },
    category: 'price_as_value',
  },
];
