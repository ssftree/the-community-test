import json

raw = json.load(open('/tmp/s1_parsed.json', 'r', encoding='utf-8'))

# Translation dictionary mapping for each Korean prompt
t_map = {
  # POLITICS
  "일을 했으면 성과와 무관하게 최소한의 소득은 보장받아야 한다.": {
    "zh-CN": "只要付出了劳动，不论成果如何都应当保障最低收入。",
    "zh-TW": "只要付出了勞動，不論成果如何都應當保障最低收入。",
    "en": "Anyone who works should be guaranteed a minimum income regardless of performance.",
    "ja": "働いたのであれば、成果に関わらず最低限の収入は保障されるべきだ。",
    "es": "Quien trabaje debe tener garantizado un ingreso mínimo independientemente del rendimiento.",
    "fr": "Quiconque travaille devrait se voir garantir un revenu minimum quel que soit le rendement."
  },
  "거주가 아닌 투기 목적의 부동산 구입 행위는 규제되어야 한다.": {
    "zh-CN": "非出于居住而是出于投机目的的购房行为应当受到管制。",
    "zh-TW": "非出於居住而是出於投機目的的購房行為應當受到管制。",
    "en": "Real estate purchases for speculative rather than residential purposes should be regulated.",
    "ja": "居住用ではなく投機目的の不動産購入は規制されるべきだ。",
    "es": "Las compras inmobiliarias con fines especulativos y no residenciales deben regularse.",
    "fr": "Les achats immobiliers à des fins spéculatives et non résidentielles doivent être régulés."
  },
  "정부는 부의 재분배에 지금보다 더 힘써야 한다.": {
    "zh-CN": "政府在财富再分配上应当比现在投入更多努力。",
    "zh-TW": "政府在財富再分配上應當比現在投入更多努力。",
    "en": "The government should make greater efforts toward wealth redistribution than it currently does.",
    "ja": "政府は富の再分配に今よりも一層尽力すべきだ。",
    "es": "El gobierno debería esforzarse más en la redistribución de la riqueza de lo que lo hace actualmente.",
    "fr": "Le gouvernement devrait faire plus d'efforts pour la redistribution des richesses qu'actuellement."
  },
  "정부는 CEO들의 임금에 상한선을 정해야 한다.": {
    "zh-CN": "政府应当为企业CEO的薪酬设定上限。",
    "zh-TW": "政府應當為企業CEO的薪酬設定上限。",
    "en": "The government should set an upper limit on CEO compensation.",
    "ja": "政府はCEOの給与に上限を設けるべきだ。",
    "es": "El gobierno debería fijar un límite máximo al salario de los directores ejecutivos.",
    "fr": "Le gouvernement devrait plafonner la rémunération des directeurs généraux."
  },
  "도로나 전기 같은 공공재는 반드시 국가가 운영해야 한다.": {
    "zh-CN": "像道路和电力这样的公共产品必须由国家来运营。",
    "zh-TW": "像道路和電力這樣的公共產品必須由國家來營運。",
    "en": "Public goods like roads and electricity must strictly be operated by the state.",
    "ja": "道路や電力のような公共財は必ず国家が運営すべきだ。",
    "es": "Los bienes públicos como carreteras y electricidad deben ser operados obligatoriamente por el Estado.",
    "fr": "Les biens publics tels que les routes et l'électricité doivent être gérés par l'État."
  },
  "고액의 사교육은 규제되어야 한다.": {
    "zh-CN": "高额课外补习教育应当受到管制。",
    "zh-TW": "高額課外補習教育應當受到管制。",
    "en": "Expensive private tutoring should be regulated.",
    "ja": "高額な私教育（塾や家庭教師）は規制されるべきだ。",
    "es": "Las clases particulares costosas deberían estar reguladas.",
    "fr": "Les cours particuliers coûteux devraient être réglementés."
  },
  "노동을 통한 수익이 주식을 통한 수익보다 더 정당하다.": {
    "zh-CN": "通过劳动获得的收益比通过股票获得的收益更具正当性。",
    "zh-TW": "透過勞動獲得的收益比透過股票獲得的收益更具正當性。",
    "en": "Income earned through labor is more legitimate than profit earned through stocks.",
    "ja": "労働を通じて得た所得は株式を通じて得た利益よりも正当だ。",
    "es": "Los ingresos obtenidos mediante el trabajo son más legítimos que las ganancias bursátiles.",
    "fr": "Les revenus du travail sont plus légitimes que les bénéfices tirés des actions."
  },
  "기업이 정부보다 더 큰 해악을 끼칠 가능성이 높다.": {
    "zh-CN": "企业比政府更有可能带来更大的社会危害。",
    "zh-TW": "企業比政府更有可能帶來更大的社會危害。",
    "en": "Corporations are more likely to cause significant harm than governments.",
    "ja": "企業は政府よりも大きな害悪をもたらす可能性が高い。",
    "es": "Es más probable que las corporaciones causen un daño mayor que los gobiernos.",
    "fr": "Les entreprises sont plus susceptibles de causer de graves préjudices que les gouvernements."
  },
  "수입품에 대한 관세를 높여 국내 산업을 보호해야 한다.": {
    "zh-CN": "应当提高进口商品关税以保护国内产业。",
    "zh-TW": "應當提高進口商品關稅以保護國內產業。",
    "en": "Tariffs on imported goods should be raised to protect domestic industries.",
    "ja": "輸入品に関税を課して国内産業を保護すべきだ。",
    "es": "Se deberían aumentar los aranceles sobre las importaciones para proteger la industria nacional.",
    "fr": "Les droits de douane sur les importations devraient être augmentés pour protéger les industries nationales."
  },
  "정부는 물가를 안정시키기 위해 특정 품목의 가격을 통제할 수 있어야 한다.": {
    "zh-CN": "政府为了稳定物价，应当有权对特定商品的价格进行管制。",
    "zh-TW": "政府為了穩定物價，應當有權對特定商品的價格進行管制。",
    "en": "The government should be able to control prices on certain items to stabilize the cost of living.",
    "ja": "政府は物価安定のため、特定の品目の価格を統制できるべきだ。",
    "es": "El gobierno debería poder controlar los precios de ciertos artículos para estabilizar el costo de vida.",
    "fr": "Le gouvernement devrait pouvoir contrôler les prix de certains produits pour stabiliser le coût de la vie."
  },
  "노조의 파업은 시민들에게 불편을 끼치더라도 최대한 보장되어야 한다.": {
    "zh-CN": "工会的罢工即使会给市民带来不便，也应当最大限度予以保障。",
    "zh-TW": "工會的罷工即使會給市民帶來不便，也應當最大限度予以保障。",
    "en": "Labor union strikes should be protected to the fullest extent even if they cause inconvenience to citizens.",
    "ja": "労組のストライキは市民に不便を与えても最大限保障されるべきだ。",
    "es": "Las huelgas sindicales deben protegerse en la mayor medida posible, incluso si causan inconvenientes.",
    "fr": "Les grèves syndicales doivent être protégées au maximum même si elles causent des désagréments."
  },
  "고소득자에게 더 높은 세율을 적용하는 누진세율은 더 강화되어야 한다.": {
    "zh-CN": "对高收入群体适用更高税率的累进税制应当进一步强化。",
    "zh-TW": "對高收入群體適用更高稅率的累進稅制應當進一步強化。",
    "en": "Progressive taxation applying higher tax rates to top earners should be strengthened.",
    "ja": "高所得者により高い税率を適用する累進課税はさらに強化されるべきだ。",
    "es": "La tributación progresiva que aplica tasas impositivas más altas a los más ricos debe reforzarse.",
    "fr": "L'imposition progressive appliquant des taux plus élevés aux hauts revenus doit être renforcée."
  },
  "국가는 모든 국민에게 기본적인 주거를 제공할 의무가 있다.": {
    "zh-CN": "国家有义务向全体国民提供基本的住房保障。",
    "zh-TW": "國家有義務向全體國民提供基本的住房保障。",
    "en": "The state has an obligation to provide basic housing for all citizens.",
    "ja": "国家は全国民に基本的な住まいを提供する義務がある。",
    "es": "El Estado tiene la obligación de garantizar una vivienda básica a todos los ciudadanos.",
    "fr": "L'État a l'obligation de fournir un logement de base à tous les citoyens."
  },
  "상속세율을 대폭 낮춰 가업 승계를 원활하게 해야 한다.": {
    "zh-CN": "应当大幅降低遗产继承税率以便利家族企业传承。",
    "zh-TW": "應當大幅降低遺產繼承稅率以便利家族企業傳承。",
    "en": "Inheritance tax rates should be significantly lowered to facilitate family business succession.",
    "ja": "相続税率を大幅に引き下げ、事業承継を円滑にすべきだ。",
    "es": "Las tasas del impuesto a la herencia deben reducirse notablemente para facilitar la sucesión empresarial.",
    "fr": "Les droits de succession devraient être fortement réduits pour faciliter la transmission d'entreprises."
  },
  "최저임금을 급격히 올리는 것은 영세 자영업자를 폐업으로 내몰 수 있다.": {
    "zh-CN": "过快大幅上调最低工资可能会将小微个体商户推向破产倒闭。",
    "zh-TW": "過快大幅上調最低工資可能會將小微個體商戶推向破產倒閉。",
    "en": "Rapidly hiking the minimum wage can drive small business owners out of business.",
    "ja": "最低賃金の急激な引き上げは零細自営業者を廃業に追い込みかねない。",
    "es": "Aumentar bruscamente el salario mínimo puede llevar a la quiebra a los pequeños comerciantes.",
    "fr": "Augmenter brutalement le salaire minimum peut acculer les petits commerçants à la faillite."
  },
  "시장의 자율성에 맡길 때 경제가 가장 효율적으로 돌아간다.": {
    "zh-CN": "交由市场自由支配运作时，经济运转才是最高效的。",
    "zh-TW": "交由市場自由支配運作時，經濟運轉才是最高效的。",
    "en": "The economy operates most efficiently when left to the autonomy of the free market.",
    "ja": "市場の自律性に任せるとき、経済は最も効率的に機能する。",
    "es": "La economía funciona con mayor eficiencia cuando se deja a la autonomía del libre mercado.",
    "fr": "L'économie fonctionne le plus efficacement lorsqu'elle est laissée à l'autonomie du marché."
  },
  "정부의 규제는 기업의 혁신과 투자를 위축시킨다.": {
    "zh-CN": "政府的严苛管制会抑制企业的创新意愿与商业投资。",
    "zh-TW": "政府的嚴苛管制會抑制企業的創新意願與商業投資。",
    "en": "Government regulations stifle corporate innovation and investment.",
    "ja": "政府の規制は企業のイノベーションと投資を萎縮させる。",
    "es": "Las regulaciones gubernamentales sofocan la innovación y la inversión empresarial.",
    "fr": "Les réglementations gouvernementales étouffent l'innovation et les investissements des entreprises."
  },
  "공공부문의 비효율을 줄이기 위해 민영화를 적극 추진해야 한다.": {
    "zh-CN": "为了减少公共部门的低效浪费，应当积极推进民营化改制。",
    "zh-TW": "為了減少公共部門的低效浪費，應當積極推進民營化改制。",
    "en": "Privatization should be actively pursued to eliminate public-sector inefficiencies.",
    "ja": "公共部門の非効率を減らすため、民営化を積極的に推進すべきだ。",
    "es": "La privatización debe promoverse activamente para reducir las ineficiencias del sector público.",
    "fr": "La privatisation doit être activement encouragée pour réduire l'inefficacité du secteur public."
  },
  "복지 혜택의 확대는 국민들의 근로 의욕을 저하시킨다.": {
    "zh-CN": "社会福利待遇的盲目扩大，会挫伤国民的积极劳动意愿。",
    "zh-TW": "社會福利待遇的盲目擴大，會挫傷國民的積極勞動意願。",
    "en": "Expanding welfare benefits diminishes citizens' motivation to work.",
    "ja": "福祉給付の拡大は国民の勤労意欲を低下させる。",
    "es": "La ampliación excesiva de las ayudas sociales reduce la motivación laboral de los ciudadanos.",
    "fr": "L'élargissement excessif des aides sociales réduit la volonté de travailler des citoyens."
  },
  "자유무역협정(FTA)은 국가 경제 발전을 위해 확대되어야 한다.": {
    "zh-CN": "为了国家经济的长远繁荣，应当积极扩大签署自由贸易协定(FTA)。",
    "zh-TW": "為了國家經濟的長遠繁榮，應當積極擴大簽署自由貿易協定(FTA)。",
    "en": "Free Trade Agreements (FTAs) should be expanded for the nation's economic progress.",
    "ja": "自由貿易協定（FTA）は国家経済の発展のために拡大されるべきだ。",
    "es": "Los Tratados de Libre Comercio (TLC) deben ampliarse para el desarrollo económico del país.",
    "fr": "Les accords de libre-échange (ALE) doivent être étendus pour le développement économique."
  },
  "기업에 대한 법인세를 인하하면 일자리가 늘어난다.": {
    "zh-CN": "降低企业所得税（法人税）会促进就业岗位的增加。",
    "zh-TW": "降低企業所得稅（法人稅）會促進就業崗位的增加。",
    "en": "Cutting corporate tax rates creates more jobs.",
    "ja": "法人税を引き下げれば雇用が増える。",
    "es": "Reducir el impuesto de sociedades genera más puestos de trabajo.",
    "fr": "Réduire l'impôt sur les sociétés crée davantage d'emplois."
  },

  # GENDER
  "여성들이 보건휴가(생리휴가)를 주말에 붙여 쓰는 것은 정당한 권리행사이므로 비난할 수 없다.": {
    "zh-CN": "女性将生理休假连同周末一起连休属于正当行使法定权利，不应受到指责。",
    "zh-TW": "女性將生理假連同週末一起連休屬於正當行使法定權利，不應受到指責。",
    "en": "Taking menstrual leave adjacent to weekends is a legitimate exercise of rights and cannot be criticized.",
    "ja": "女性が生理休暇を週末と連続して取得することは正当な権利行使であり、非難される筋合いはない。",
    "es": "Que las mujeres junten la baja menstrual con el fin de semana es un derecho legítimo que no puede ser criticado.",
    "fr": "Prendre un congé menstruel avant ou après le week-end est un droit légitime et ne doit pas être critiqué."
  },
  "자본주의 시장에서 일반적으로 남성의 능력은 여성의 능력보다 더 높게 평가된다.": {
    "zh-CN": "在资本主义职场市场中，男性的能力通常被给予高于女性的评价。",
    "zh-TW": "在資本主義職場市場中，男性的能力通常被給予高於女性的評價。",
    "en": "In the capitalist labor market, male capabilities are generally valued higher than female capabilities.",
    "ja": "資本主義市場において、男性の能力は一般に女性の能力よりも高く評価される傾向がある。",
    "es": "En el mercado laboral capitalista, las capacidades masculinas suelen valorarse más que las femeninas.",
    "fr": "Sur le marché du travail capitaliste, les compétences des hommes sont généralement plus valorisées que celles des femmes."
  },
  "세계의 역사를 여성들이 지배했다면 폭력과 전쟁은 훨씬 적었을 것이다.": {
    "zh-CN": "如果人类历史是由女性主导统治的，暴力与战争必然会少得多。",
    "zh-TW": "如果人類歷史是由女性主導統治的，暴力與戰爭必然會少得多。",
    "en": "If women had dominated world history, there would have been far less violence and war.",
    "ja": "世界の歴史を女性が支配していたなら、暴力や戦争ははるかに少なかったはずだ。",
    "es": "Si las mujeres hubieran gobernado la historia mundial, habría habido mucha menos violencia y guerra.",
    "fr": "Si les femmes avaient dominé l'histoire du monde, il y aurait eu beaucoup moins de violence et de guerre."
  },
  "‘여성 전용 주차장’은 주차가 미숙한 여성을 배려한 좋은 제도이다.": {
    "zh-CN": "“女性专用停车位”是关照停车不够熟练的女性的合理优待制度。",
    "zh-TW": "「女性專用停車位」是關照停車不夠熟練的女性的合理優待制度。",
    "en": "Designated female parking spaces are a beneficial policy accommodating women who may need extra convenience.",
    "ja": "「女性専用駐車場」は配慮に基づいた有益な制度である。",
    "es": "Los estacionamientos exclusivos para mujeres son una política positiva que ofrece consideración.",
    "fr": "Les parkings réservés aux femmes sont une mesure positive tenant compte de leurs besoins."
  },
  "여성징병제는 출산율 회복과 여성의 신체적 한계를 고려할 때 적절하지 않다.": {
    "zh-CN": "考虑到生育率恢复以及女性的生理体能局限，对女性推行强制服兵役是不恰当的。",
    "zh-TW": "考慮到生育率恢復以及女性的生理體能局限，對女性推行強制服兵役是不恰當的。",
    "en": "Female conscription is inappropriate considering birthrate recovery and physiological limits.",
    "ja": "女性徴兵制は出生率の回復と身体的限界を考慮すると適切ではない。",
    "es": "El servicio militar obligatorio femenino es inadecuado considerando la natalidad y las diferencias físicas.",
    "fr": "La conscription féminine est inappropriée compte tenu de la natalité et des limites physiques."
  },
  "결혼 후 남편이 생계를 책임지고 아내가 가사를 전담하는 것은 자연스럽다.": {
    "zh-CN": "婚后由丈夫承担家庭经济开销、妻子专心操持家务料理是合情合理的天然分工。",
    "zh-TW": "婚後由丈夫承擔家庭經濟開銷、妻子專心操持家務料理是合情合理的天然分工。",
    "en": "It is natural for the husband to be the breadwinner while the wife handles domestic responsibilities.",
    "ja": "結婚後に夫が生計を担い、妻が家事を専担することは自然な分担である。",
    "es": "Es natural que el esposo sostenga el hogar y la esposa se encargue de las tareas domésticas.",
    "fr": "Il est naturel que le mari subvienne aux besoins du ménage et que l'épouse s'occupe des tâches ménagères."
  },
  "데이트 비용은 남자가 더 많이 부담하는 것이 일반적인 예의이다.": {
    "zh-CN": "在情侣约会开销中，男方承担更多费用属于合乎常理的礼仪。",
    "zh-TW": "在情侶約會開銷中，男方承擔更多費用屬於合乎常理的禮儀。",
    "en": "It is standard courtesy for the man to cover more of the dating expenses.",
    "ja": "デート代は男性が多く負担するのが一般的なマナーである。",
    "es": "Es una cortesía habitual que el hombre asuma una mayor parte de los gastos en las citas.",
    "fr": "Il est de courtoisie courante que l'homme prenne en charge une plus grande part des dépenses lors des rendez-vous."
  },
  "군 복무를 마친 남성에게 취업 가산점을 주는 제도는 부활되어야 한다.": {
    "zh-CN": "给予完成法定兵役的退伍男性在求职考公时加分的制度应当恢复。",
    "zh-TW": "給予完成法定兵役的退伍男性在求職考公時加分的制度應當恢復。",
    "en": "Employment bonus points for men who completed mandatory military service should be reinstated.",
    "ja": "兵役を終えた男性に対する就職時の加点制度は復活されるべきだ。",
    "es": "Debería reinstaurarse el sistema de puntos extra de empleo para los hombres que cumplieron el servicio militar.",
    "fr": "Le système de points de bonification à l'embauche pour les hommes ayant accompli leur service militaire devrait être rétabli."
  },
  "오늘날 한국 사회는 여성이 남성에 비해 차별받고 있지 않다.": {
    "zh-CN": "在当今韩国现代社会中，女性相比男性并没有受到系统性歧视。",
    "zh-TW": "在當今韓國現代社會中，女性相比男性並沒有受到系統性歧視。",
    "en": "In contemporary Korean society, women are not subject to systemic discrimination relative to men.",
    "ja": "現代の韓国社会において、女性は男性と比べて差別されていない。",
    "es": "En la sociedad actual, las mujeres no sufren discriminación sistémica en comparación con los hombres.",
    "fr": "Dans la société actuelle, les femmes ne subissent pas de discrimination par rapport aux hommes."
  },
  "여성 국회의원이나 고위 공직자의 비율을 강제로 할당하는 것은 역차별이다.": {
    "zh-CN": "强制规定女性国会议员或高阶公职人员的配额比例属于逆向歧视。",
    "zh-TW": "強制規定女性國會議員或高階公職人員的配額比例屬於逆向歧視。",
    "en": "Mandating gender quotas for female lawmakers or senior officials constitutes reverse discrimination.",
    "ja": "女性議員や高官の比率を強制的に割り当てるクオータ制は逆差別である。",
    "es": "Exigir cuotas obligatorias para legisladoras o altos cargos femeninos constituye discriminación inversa.",
    "fr": "Imposer des quotas de genre obligatoires pour les parlementaires ou hauts fonctionnaires est une discrimination inversée."
  },

  # OPENNESS
  "동성 커플은 결혼과 입양 권리 등 이성 커플과 동일한 권리를 누려야 한다.": {
    "zh-CN": "同性伴侣应当享有与异性伴侣同等的结婚登记与收养儿童权利。",
    "zh-TW": "同性伴侶應當享有與異性伴侶同等的結婚登記與收養兒童權利。",
    "en": "Same-sex couples should enjoy the exact same rights as heterosexual couples, including marriage and adoption.",
    "ja": "同性カップルは異性カップルと同じく、結婚や養子縁組の権利を享受すべきだ。",
    "es": "Las parejas del mismo sexo deben disfrutar de los mismos derechos que las heterosexuales, incluidos matrimonio y adopción.",
    "fr": "Les couples de même sexe devraient jouir des mêmes droits que les couples hétérosexuels, y compris le mariage et l'adoption."
  },
  "모든 식당은 가급적 채식주의자를 위한 메뉴를 하나 이상 제공해야 한다.": {
    "zh-CN": "所有餐饮餐馆都应尽量提供至少一道适合素食主义者的菜品。",
    "zh-TW": "所有餐飲餐館都應儘量提供至少一道適合素食主義者的菜品。",
    "en": "All restaurants should strive to offer at least one vegetarian/vegan option.",
    "ja": "すべての飲食店は可能な限りベジタリアンのためのメニューを1つ以上提供すべきだ。",
    "es": "Todos los restaurantes deberían esforzarse por ofrecer al menos una opción vegetariana.",
    "fr": "Tous les restaurants devraient proposer au moins une option végétarienne."
  },
  "우리 사회에서는 사형 집행이 필요하다.": {
    "zh-CN": "在我们的现代法治社会中，恢复执行死刑是绝对必要的。",
    "zh-TW": "在我們的現代法治社會中，恢復執行死刑是絕對必要的。",
    "en": "The execution of capital punishment is necessary in our society.",
    "ja": "私たちの社会において死刑の執行は必要不可欠である。",
    "es": "La aplicación de la pena capital es necesaria en nuestra sociedad.",
    "fr": "L'application de la peine de mort est nécessaire dans notre société."
  },
  "팀워크를 위해서는 내키지 않더라도 회식에 다같이 참여해야한다.": {
    "zh-CN": "为了团队协作与凝聚力，即便个人不情愿也应当集体参加公司聚餐团建。",
    "zh-TW": "為了團隊協作與凝聚力，即便個人不情願也應當集體參加公司聚餐團建。",
    "en": "For teamwork, one should attend company dinners together even if reluctant.",
    "ja": "チームワークのためには気乗りしなくても飲み会に全員で参加すべきだ。",
    "es": "Por el bien del equipo, se debe asistir a las cenas de empresa aunque no apetezca.",
    "fr": "Pour l'esprit d'équipe, on devrait participer aux repas d'entreprise même à contrecœur."
  },
  "다수를 위해 소수가 희생하고 따르는 것이 민주주의의 원칙이다.": {
    "zh-CN": "少数服从多数、为了多数人而做出必要妥协牺牲，才是民主主义的核心基石。",
    "zh-TW": "少數服從多數、為了多數人而做出必要妥協犧牲，才是民主主義的核心基石。",
    "en": "It is the fundamental principle of democracy that the minority accommodates and yields to the majority.",
    "ja": "多数のために少数が犠牲を払い従うことこそが民主主義の原則である。",
    "es": "El principio de la democracia es que la minoría se adapte y ceda ante la mayoría.",
    "fr": "Le principe fondamental de la démocratie est que la minorité cède face à la majorité."
  },

  # CLASS
  "물건을 구입할 때 가장 중요한 기준은 가성비이다": {
    "zh-CN": "在购物消费时，我权衡的最核心决策标准始终是性价比。",
    "zh-TW": "在購物消費時，我權衡的最核心決策標準始終是性價比。",
    "en": "When purchasing items, cost-effectiveness is by far the most decisive criterion.",
    "ja": "買い物をする際、最も重要な基準はコストパフォーマンス（コスパ）である。",
    "es": "Al comprar, la relación calidad-precio es con diferencia el criterio más decisivo.",
    "fr": "Lors d'un achat, le rapport qualité-prix est de loin le critère le plus décisif."
  },
  "경제적인 측면에서는 부모덕을 본 적이 없다": {
    "zh-CN": "在经济与财产层面，我从未沾过父母的任何光或经济庇荫。",
    "zh-TW": "在經濟與財產層面，我從未沾過父母的任何光或經濟庇蔭。",
    "en": "Economically speaking, I have never benefited from my parents' financial support.",
    "ja": "経済的な面で親の恩恵や援助を受けたことは一度もない。",
    "es": "En el aspecto económico, nunca me he beneficiado del apoyo financiero de mis padres.",
    "fr": "Sur le plan financier, je n'ai jamais bénéficié de l'aide de mes parents."
  },
  "어린 시절 살던 집에 습기로 생긴 곰팡이가 있었다": {
    "zh-CN": "我童年居住的屋舍由于潮湿而滋生蔓延着霉斑。",
    "zh-TW": "我童年居住的屋舍由於潮濕而滋生蔓延著黴斑。",
    "en": "In my childhood home, there was mold caused by pervasive dampness.",
    "ja": "幼い頃に住んでいた家には湿気によるカビが生えていた。",
    "es": "En la casa donde viví de niño había moho debido a la humedad constante.",
    "fr": "Dans la maison de mon enfance, il y avait de la moisissure causée par l'humidité."
  },
  "성인이 되기 전 해외여행을 자주 다녔다": {
    "zh-CN": "在成年之前，我曾频繁随家人前往海外国家观光旅游。",
    "zh-TW": "在成年之前，我曾頻繁隨家人前往海外國家觀光旅遊。",
    "en": "Before reaching adulthood, I traveled abroad frequently.",
    "ja": "成人する前に海外旅行へ頻繁に出かけていた。",
    "es": "Antes de alcanzar la mayoría de edad, viajaba al extranjero con frecuencia.",
    "fr": "Avant d'atteindre l'âge adulte, je voyageais fréquemment à l'étranger."
  },
  "대학 등록금은 늘 부모님이 내주셨다": {
    "zh-CN": "大学期间的全部学费一直是由父母如数全额替我支付的。",
    "zh-TW": "大學期間的全部學費一直是由父母如數全額替我支付的。",
    "en": "My university tuition was always paid in full by my parents.",
    "ja": "大学の授業料はいつも親が全額支払ってくれた。",
    "es": "La matrícula de la universidad siempre la pagaron íntegramente mis padres.",
    "fr": "Mes frais de scolarité universitaire ont toujours été entièrement payés par mes parents."
  }
}

# Now generate TypeScript file with all 87 questions fully translated
out_lines = [
  "import { Season1Question } from '../types';",
  "",
  "export const SEASON_1_QUESTIONS: Season1Question[] = ["
]

for q in raw:
    kp = q['prompt']
    trans = t_map.get(kp, {
        'zh-CN': kp,
        'zh-TW': kp,
        'en': kp,
        'ja': kp,
        'es': kp,
        'fr': kp
    })

    out_lines.append("  {")
    out_lines.append(f"    id: '{q['id']}',")
    out_lines.append(f"    group: '{q['group']}',")
    out_lines.append(f"    reverse: {'true' if q['reverse'] else 'false'},")
    out_lines.append(f"    scale: {q['scale']},")
    out_lines.append("    prompt: {")
    out_lines.append(f"      ko: {json.dumps(kp, ensure_ascii=False)},")
    out_lines.append(f"      'zh-CN': {json.dumps(trans.get('zh-CN', kp), ensure_ascii=False)},")
    out_lines.append(f"      'zh-TW': {json.dumps(trans.get('zh-TW', kp), ensure_ascii=False)},")
    out_lines.append(f"      en: {json.dumps(trans.get('en', kp), ensure_ascii=False)},")
    out_lines.append(f"      ja: {json.dumps(trans.get('ja', kp), ensure_ascii=False)},")
    out_lines.append(f"      es: {json.dumps(trans.get('es', kp), ensure_ascii=False)},")
    out_lines.append(f"      fr: {json.dumps(trans.get('fr', kp), ensure_ascii=False)},")
    out_lines.append("    },")
    out_lines.append("  },")

out_lines.append("];")
out_lines.append("")

with open('src/data/season1Questions.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out_lines))

print('season1Questions.ts successfully written with all 87 questions!')
