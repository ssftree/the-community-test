export interface Archetype {
  id: string; // e.g. "B-S-M"
  threeLetterCode: string; // e.g. "P–S–M"
  resultTypeKo: string; // "원칙·구조·의미"
  name: {
    'zh-CN': string;
    'zh-TW': string;
    ko: string;
    en: string;
  };
  title: {
    'zh-CN': string;
    'zh-TW': string;
    ko: string;
    en: string;
  };
  summary: {
    'zh-CN': string;
    'zh-TW': string;
    ko: string;
    en: string;
  };
  coreValues: {
    'zh-CN': string[];
    'zh-TW': string[];
    ko: string[];
    en: string[];
  };
  characterAnalog: {
    'zh-CN': string;
    'zh-TW': string;
    ko: string;
    en: string;
  };
}

export const ARCHETYPES: Record<string, Archetype> = {
  'B-S-M': {
    id: 'B-S-M',
    threeLetterCode: 'P–S–M',
    resultTypeKo: '원칙·구조·의미',
    name: {
      'zh-CN': '崇高理想家',
      'zh-TW': '崇高理想家',
      ko: '고결한 이상주의자',
      en: 'The Noble Idealist',
    },
    title: {
      'zh-CN': '守护公平与良知的纯粹灯塔',
      'zh-TW': '守護公平與良知的純粹燈塔',
      ko: '공정과 양심을 지키는 순수한 등대',
      en: 'The Pure Lighthouse of Justice & Conscience',
    },
    summary: {
      'zh-CN': '你坚信社会的基石必须是公正与良知。在面对利益诱惑时，你绝不轻易妥协道德底线；在资源分配上，你坚信体制与社会必须主动保障弱势群体，让不平等降到最低。',
      'zh-TW': '你堅信社會的基石必須是公正與良知。在面對利益誘惑時，你絕不輕易妥協道德底線；在資源分配上，你堅信體制與社會必須主動保障弱勢群體，讓不平等降到最低。',
      ko: '사회는 공정과 양심에 기반해야 한다고 확신합니다. 이익 앞에서도 도덕적 원칙을 굽히지 않으며, 제도가 약자를 적극적으로 보호해야 한다고 믿습니다.',
      en: 'You firmly believe that society must be anchored in fairness and moral conscience, refusing to compromise on ethics for expediency while advocating systemic safeguards for the vulnerable.',
    },
    coreValues: {
      'zh-CN': ['良知底线', '制度公平', '信念优先'],
      'zh-TW': ['良知底線', '制度公平', '信念優先'],
      ko: ['원칙 준수', '구조적 평등', '의미 지향'],
      en: ['Moral Principles', 'Systemic Equity', 'Value-Driven'],
    },
    characterAnalog: {
      'zh-CN': '类似坚守程序正义与理想主义的辩护者',
      'zh-TW': '類似堅守程序正義與理想主義的辯護者',
      ko: '절차적 정의와 이상을 지키는 신념가',
      en: 'An uncompromising defender of procedural justice and ideals',
    },
  },
  'B-S-U': {
    id: 'B-S-U',
    threeLetterCode: 'R–S–M',
    resultTypeKo: '결과·구조·의미',
    name: {
      'zh-CN': '变革实干家',
      'zh-TW': '變革實幹家',
      ko: '변혁적 실천가',
      en: 'The Transformative Reformer',
    },
    title: {
      'zh-CN': '为多数人谋求公平的破局者',
      'zh-TW': '為多數人謀求公平的破局者',
      ko: '다수의 공익을 위해 틀을 깨는 혁신가',
      en: 'The Breaker of Molds for Public Welfare',
    },
    summary: {
      'zh-CN': '你拥有理想主义的初心，注重社会公平与精神价值，但在实现手段上极具破局魄力。你不会因教条规则而束手束脚，只要能切实帮扶大众、促成实质性改良，你勇于采取果断策略。',
      'zh-TW': '你擁有理想主義的初心，注重社會公平與精神價值，但在實現手段上極具破局魄力。你不會因教條規則而束手束腳，只要能切實幫扶大眾、促成實質性改良，你勇於採取果斷策略。',
      ko: '사회적 약자와 가치 있는 삶을 꿈꾸지만, 목표 달성을 위해선 형식적인 규율에 얽매이지 않고 대담한 실천과 결과를 우선시합니다.',
      en: 'Driven by idealist dreams of equity and meaning, you are unafraid to discard rigid formalities to achieve tangible improvements for the collective good.',
    },
    coreValues: {
      'zh-CN': ['社会福祉', '结果导向', '打破教条'],
      'zh-TW': ['社會福祉', '結果導向', '打破教條'],
      ko: ['공공선 추구', '결과 중시', '개혁적 사고'],
      en: ['Public Good', 'Outcome-Focused', 'Pragmatic Reform'],
    },
    characterAnalog: {
      'zh-CN': '雷厉风行的社会改革者与公益推动者',
      'zh-TW': '雷厲風行的社會改革者與公益推動者',
      ko: '행동으로 세상을 바꾸는 추진형 리더',
      en: 'An energetic social reformer driving measurable change',
    },
  },
  'B-A-M': {
    id: 'B-A-M',
    threeLetterCode: 'P–A–M',
    resultTypeKo: '원칙·능력·의미',
    name: {
      'zh-CN': '清流独行侠',
      'zh-TW': '清流獨行俠',
      ko: '원칙적 능력주의자',
      en: 'The Principled Meritocrat',
    },
    title: {
      'zh-CN': '依凭个人才华与戒律立身的孤勇者',
      'zh-TW': '依憑個人才華與戒律立身的孤勇者',
      ko: '실력과 신념으로 길을 개척하는 고결한 장인',
      en: 'The Master of Craft, Guided by Moral Conviction',
    },
    summary: {
      'zh-CN': '你重视个人才华的打磨与自律奋斗，不愿依附体制特权；同时，你视精神志趣高于铜臭利益，在立身处世中严守道德操守，宁缺毋滥。',
      'zh-TW': '你重視個人才華的打磨與自律奮鬥，不願依附體制特權；同時，你視精神志趣高於銅臭利益，在立身處世中嚴守道德操守，寧缺毋濫。',
      ko: '개인의 실력과 자기관리를 가장 신뢰하며, 물질적 유혹보다 자신의 품위와 도덕적 원칙을 끝까지 지키고자 합니다.',
      en: 'You place faith in individual grit and craft while holding steadfast to high moral standards over mere pecuniary rewards.',
    },
    coreValues: {
      'zh-CN': ['才华自立', '严于律己', '不慕虚荣'],
      'zh-TW': ['才華自立', '嚴於律己', '不慕虛榮'],
      ko: ['실력 중심', '도덕적 엄격성', '내적 자존감'],
      en: ['Merit & Grit', 'Moral Discipline', 'Inner Integrity'],
    },
    characterAnalog: {
      'zh-CN': '不与世俗合流的学者、艺术匠人与独立专业精英',
      'zh-TW': '不與世俗合流的學者、藝術匠人與獨立專業菁英',
      ko: '타협하지 않는 학자형 지식인 또는 장인',
      en: 'The uncompromising scholar, craftsman, or independent specialist',
    },
  },
  'B-A-U': {
    id: 'B-A-U',
    threeLetterCode: 'R–A–M',
    resultTypeKo: '결과·능력·의미',
    name: {
      'zh-CN': '浪漫开拓者',
      'zh-TW': '浪漫開拓者',
      ko: '낭만적 개척자',
      en: 'The Visionary Pioneer',
    },
    title: {
      'zh-CN': '用超凡才能缔造远大愿景的探索者',
      'zh-TW': '用超凡才能締造遠大願景的探索者',
      ko: '탁월한 역량으로 이상을 현실화하는 혁신가',
      en: 'The Innovator Turning Grand Visions into Reality',
    },
    summary: {
      'zh-CN': '你怀揣不甘平庸的理想主义追求，又深信只有卓越的才华和扎实的战果才能改变世界。你追求自我潜能的极限释放，为了达成宏伟目标可以灵活变通。',
      'zh-TW': '你懷揣不甘平庸的理想主義追求，又深信只有卓越的才華和紮實的戰果才能改變世界。你追求自我潛能的極限釋放，為了達成宏偉目標可以靈活變通。',
      ko: '높은 이상과 의미를 꿈꾸며, 이를 성취하기 위해 개인의 역량과 효율적인 결과 도출을 적극 활용하는 전진형 성향입니다.',
      en: 'Driven by sublime ideals yet grounded in fierce meritocratic capability, you deploy pragmatic strategies to manifest grand visions.',
    },
    coreValues: {
      'zh-CN': ['远大愿景', '卓越才能', '灵活突破'],
      'zh-TW': ['遠大願景', '卓越才能', '靈活突破'],
      ko: ['비전 실현', '개인 역량', '유연한 돌파'],
      en: ['Visionary Aim', 'Excellence', 'Adaptive Drive'],
    },
    characterAnalog: {
      'zh-CN': '富有远见的科技创业者或具有使命感的先锋艺术家',
      'zh-TW': '富有遠見的科技創業者或具有使命感的先鋒藝術家',
      ko: '세상을 놀라게 할 비전을 가진 스타트업 창업가',
      en: 'The visionary tech founder or missionary creator',
    },
  },
  'H-A-U': {
    id: 'H-A-U',
    threeLetterCode: 'R–A–U',
    resultTypeKo: '결과·능력·실리',
    name: {
      'zh-CN': '终极现实派',
      'zh-TW': '終極現實派',
      ko: '냉철한 현실주의자',
      en: 'The Pragmatic Realist',
    },
    title: {
      'zh-CN': '“看不见的手”的最佳诠释者与市场驾驭者',
      'zh-TW': '「看不見的手」的最佳詮釋者與市場駕馭者',
      ko: '보이지 않는 손의 원리를 가장 잘 이해하는 승부사',
      en: 'The Quintessential Embodiment of The Invisible Hand',
    },
    summary: {
      'zh-CN': '你拥有极度清晰的现实世界认知。你深知物质基础决定上层建筑，信奉能力至上的市场法则，注重实际成效而非虚无空谈。在纷繁复杂的社会博弈中，你是最懂生存规则的敏锐捕手。',
      'zh-TW': '你擁有極度清晰的現實世界認知。你深知物質基礎決定上層建築，信奉能力至上的市場法則，注重實際成效而非虛無空談。在紛繁複雜的社會博弈中，你是最懂生存規則的敏銳捕手。',
      ko: '냉철하고 명확한 현실 감각의 소유자입니다. 능력 중심의 경쟁과 물질적 안정을 신뢰하며, 공허한 이상보다 눈에 보이는 성과와 효율을 최우선합니다.',
      en: 'Armed with lucid realism, you champion merit-based competition, tangible utility, and efficient results as the true bedrock of worldly success.',
    },
    coreValues: {
      'zh-CN': ['效率第一', '胜者通达', '物质基石'],
      'zh-TW': ['效率第一', '勝者通達', '物質基石'],
      ko: ['성과 중심', '실리 추구', '경쟁 승리'],
      en: ['Efficiency First', 'Merit & Utility', 'Measurable Impact'],
    },
    characterAnalog: {
      'zh-CN': '纵横商海的投资银行家、操盘手与顶级战略决策者',
      'zh-TW': '縱橫商海的投資銀行家、操盤手與頂級戰略決策者',
      ko: '시장의 흐름을 꿰뚫는 전략가이자 냉철한 승부사',
      en: 'The sharp investment banker, master strategist, and venture capitalist',
    },
  },
  'H-A-M': {
    id: 'H-A-M',
    threeLetterCode: 'P–A–U',
    resultTypeKo: '원칙·능력·실리',
    name: {
      'zh-CN': '契约守护者',
      'zh-TW': '契約守護者',
      ko: '계약적 자본주의자',
      en: 'The Contractual Capitalist',
    },
    title: {
      'zh-CN': '严守法治底线的自由竞争捍卫者',
      'zh-TW': '嚴守法治底線的自由競爭捍衛者',
      ko: '법과 원칙 아래 정당한 대가를 요구하는 합리주의자',
      en: 'The Defender of Fair Competition Under Strict Law',
    },
    summary: {
      'zh-CN': '你认同个人才华与财富积累的正当性，但绝不认同破坏底线的野蛮掠夺。你极其强调“契约精神”、“产权保障”与“法律边界”，是规范化市场经济的最忠实信徒。',
      'zh-TW': '你認同個人才華與財富積累的正當性，但絕不認同破壞底線的野蠻掠奪。你極其強調「契約精神」、「產權保障」與「法律邊界」，是規範化市場經濟的最忠實信徒。',
      ko: '능력에 따른 정당한 보상과 물질적 가치를 추구하지만, 그 과정에서 룰과 계약을 위반하는 것은 결코 용납하지 않는 엄격한 시장 신봉자입니다.',
      en: 'You celebrate the dignity of individual success and wealth, while strictly upholding the sanctity of contracts, property rights, and the rule of law.',
    },
    coreValues: {
      'zh-CN': ['契约精神', '产权不可侵', '公平竞争'],
      'zh-TW': ['契約精神', '產權不可侵', '公平競爭'],
      ko: ['계약 준수', '사유재산 존중', '공정 룰'],
      en: ['Rule of Law', 'Property Rights', 'Fair Market Play'],
    },
    characterAnalog: {
      'zh-CN': '精通商法底线的企业法务专家与现代企业合规官',
      'zh-TW': '精通商法底線的企業法務專家與現代企業合規官',
      ko: '준법정신이 투철한 법조인 또는 기업 컴플라이언스 전문가',
      en: 'The rigorous corporate counsel or classical liberal economist',
    },
  },
  'H-S-U': {
    id: 'H-S-U',
    threeLetterCode: 'R–S–U',
    resultTypeKo: '결과·구조·실리',
    name: {
      'zh-CN': '务实经世派',
      'zh-TW': '務實經世派',
      ko: '실용적 민생가',
      en: 'The Pragmatic Technocrat',
    },
    title: {
      'zh-CN': '把脉民生与实物利益的技术官僚',
      'zh-TW': '把脈民生與實物利益的技術官僚',
      ko: '민생 안정과 실질적 복지를 설계하는 현실 정책가',
      en: 'The Architect of Practical Welfare & Economic Stability',
    },
    summary: {
      'zh-CN': '比起高深抽象的道德哲学，你更关切普通老百姓能不能吃饱穿暖、兜里有没有钱。你主张用高效的制度和资源调配手段，为大众带来实实在在的物质生活改善。',
      'zh-TW': '比起高深抽象的道德哲學，你更關切普通老百姓能不能吃飽穿暖、兜裡有沒有錢。你主張用高效的制度和資源調配手段，為大眾帶來實實在在的物質生活改善。',
      ko: '관념적인 담론보다는 시민들의 실질적인 밥그릇과 주머니 사정을 개선하는 정책적 결과와 제도적 지원에 집중합니다.',
      en: 'Unmoved by abstract moral debates, you prioritize real-world livelihood, social safety nets, and tangible material benefits for everyday people.',
    },
    coreValues: {
      'zh-CN': ['民生为本', '实用福利', '实效保障'],
      'zh-TW': ['民生為本', '實用福利', '實效保障'],
      ko: ['민생 해결', '제도적 복지', '실용 행정'],
      en: ['Bread & Butter', 'Social Safety Net', 'Practical Delivery'],
    },
    characterAnalog: {
      'zh-CN': '深谙宏观调控与民生实操的高效政策制定者',
      'zh-TW': '深諳宏觀調控與民生實操的高效政策制定者',
      ko: '살림살이를 책임지는 실용주의 행정가',
      en: 'The results-driven economic planner or pragmatic public servant',
    },
  },
  'H-S-M': {
    id: 'H-S-M',
    threeLetterCode: 'P–S–U',
    resultTypeKo: '원칙·구조·실리',
    name: {
      'zh-CN': '建制护航者',
      'zh-TW': '建制護航者',
      ko: '제도적 수호자',
      en: 'The Institutional Guardian',
    },
    title: {
      'zh-CN': '以审慎规范确保公共繁荣的维稳者',
      'zh-TW': '以審慎規範確保公共繁榮的維穩者',
      ko: '안정된 시스템 속에서 사회적 번영을 지키는 관리자',
      en: 'The Anchor of Stability and Institutional Order',
    },
    summary: {
      'zh-CN': '你深知现代社会的繁荣离不开稳定的制度框架与审慎的程序规则。你赞同制度性保障与经济安全，但坚决反对因一时冲动而破坏长期建立的秩序准则。',
      'zh-TW': '你深知現代社會的繁榮離不開穩定的制度框架與審慎的程序規則。你贊同制度性保障與經濟安全，但堅決反對因一時衝動而破壞長期建立的秩序準則。',
      ko: '안정적인 사회 시스템과 규범 준수가 경제적 번영의 전제조건이라고 믿으며, 제도를 통한 질서와 보호를 중시합니다.',
      en: 'You believe institutional durability and strict adherence to established protocols are essential prerequisites for broad-based prosperity.',
    },
    coreValues: {
      'zh-CN': ['程序正义', '系统维稳', '务实秩序'],
      'zh-TW': ['程序正義', '系統維穩', '務實秩序'],
      ko: ['질서 유지', '제도 안정', '신중한 절차'],
      en: ['Procedural Due Process', 'System Stability', 'Orderly Welfare'],
    },
    characterAnalog: {
      'zh-CN': '恪尽职守的高阶行政官员、合规审计长与制度监督官',
      'zh-TW': '恪盡職守的高階行政官員、合規審計長與制度監督官',
      ko: '안정과 신뢰를 최우선하는 관료형 관리자',
      en: 'The steadfast civil administrator and institutional trustee',
    },
  },
};
