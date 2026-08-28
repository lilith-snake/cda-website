import { Link } from 'react-router-dom'
import './Mentorship.css'

const expertise = [
  {
    number: '01',
    title: '古典仪式与天使魔法',
    text: '从手稿谱系、版本差异和仪式语法进入古典魔法，分清所罗门文本、卡巴拉名号与现代 72 天使体系，再理解择时、空间、器物、言语与结束结构。',
  },
  {
    number: '02',
    title: '塔罗、星盘与灵媒训练',
    text: '从塔罗图像、出生星盘、水面凝视到灵媒练习，把原始观察、个人联想与待验证信息分开记录。重点不是制造神秘感，而是辨识、反馈、边界与关闭。',
  },
  {
    number: '03',
    title: '左手路径与内在主权',
    text: '把阴影、意志、欲望与责任带回个人选择。任何导师、体系或强烈体验，都不能越过当事人的同意、现实证据和自主判断。',
  },
  {
    number: '04',
    title: 'CDA 验证型学习',
    text: '用双账本、冻结记录、盲评对照和案例督导，把不同体系放进可复盘的流程。允许没有结果，也如实保留误判，不用事后故事替代证据。',
  },
]

const lineagePeriods = [
  {
    era: '公元前 6 世纪 — 公元 6 世纪',
    english: 'ANCIENT & LATE ANTIQUE',
    title: '古代思想与仪式语境',
    text: '这里不是一条单一传承，而是后来西方秘传学反复取用的多个思想与实践环境。哲学、宗教、占星和仪式在当时并没有今天这样清楚的学科边界。',
    currents: ['毕达哥拉斯与柏拉图传统', '新柏拉图主义与神术', '赫尔墨斯主义与诺斯替思潮', '希腊魔法莎草纸与古代占星'],
    reading: '先确认文本、地域与年代，不把「古老」直接当作真实性证明。',
  },
  {
    era: '7 — 17 世纪',
    english: 'MEDIEVAL & EARLY MODERN',
    title: '手稿、翻译与仪式技术',
    text: '阿拉伯语、希伯来语、希腊语与拉丁语材料在翻译和抄写中交汇。卡巴拉、炼金术、星象知识与仪式文本形成多个版本，差异本身就是研究对象。',
    currents: ['梅尔卡巴与犹太卡巴拉', '自然、天体与图像魔法', '炼金术与占星术', '所罗门文本群与以诺材料'],
    reading: '追踪馆藏号、语言、伪托作者与版本改写，拒绝把后世编辑本说成唯一原典。',
  },
  {
    era: '17 — 19 世纪',
    english: 'OCCULT REVIVAL',
    title: '社团化与知识重组',
    text: '玫瑰十字宣言、灵性主义、神智学与仪式团体把旧材料放入新的世界观、通信网络和训练制度。现代意义上的 occultism 逐步成形。',
    currents: ['玫瑰十字主义', '灵性主义运动', '神智学与现代通神论', '黄金黎明与仪式对应体系'],
    reading: '区分历史材料与组织自述，观察古典来源如何被选择、标准化与重新命名。',
  },
  {
    era: '20 世纪 — 当代',
    english: 'MODERN & CONTEMPORARY',
    title: '现代魔法与个人实践',
    text: '泰勒玛、人智学、第四道、威卡与后来的混融式实践继续改写传统。心理学、流行文化和互联网也成为新的解释媒介。',
    currents: ['泰勒玛与人智学', '第四道与现代内在训练', '威卡、现代异教与混融实践', '心理化、个体化与网络神秘文化'],
    reading: '现代体系可以有价值，但必须标明来源、改写与适用边界，不伪装成未经中断的古代传统。',
  },
]

const classicalModernComparison = [
  {
    dimension: '材料形态',
    classical: '手稿、祷文、星表、护符、炼金配方与地方仪式记录；常有残缺和多个异本。',
    modern: '印刷书、函授材料、社团等级、统一对应表、课程与个人实践手册。',
  },
  {
    dimension: '组织方式',
    classical: '嵌在宗教、宫廷、医学、哲学或民间生活中，未必自称「神秘学」。',
    modern: '以组织、导师、入门等级或自我训练体系呈现，身份与课程结构更明确。',
  },
  {
    dimension: '核心变化',
    classical: '重视宇宙秩序、神名、择时、材料和仪式效力，各传统语境差异很大。',
    modern: '更常加入心理转化、个人意志、灵性进化和跨传统整合。',
  },
  {
    dimension: 'CDA 的读法',
    classical: '先做文本谱系、版本与物质文化判读，再讨论可练习的仪式结构。',
    modern: '拆出继承、改写与新创部分，再用记录、反馈和边界评估实践。',
  },
]

const coursePath = [
  {
    number: '01',
    level: '共同必修',
    english: 'HISTORY',
    tone: 'foundation',
    title: '西方秘传学通史：先知道我们从哪里来',
    text: '从古代晚期一路走到当代，追踪秘传思想如何在宗教、哲学、自然研究、艺术与民间实践之间流动。它不是一条单一正统传承，而是一组不断分化、翻译和重组的历史传统。',
    topics: ['赫尔墨斯、诺斯替、新柏拉图与神术', '中世纪魔法、犹太与基督教卡巴拉', '文艺复兴自然魔法、炼金术与占星', '玫瑰十字、灵性主义、神智学、现代巫术与新纪元'],
    prerequisite: '无需经验，所有方向共同起点',
    outcome: '一条从古代晚期到当代的时间轴与流派关系图',
  },
  {
    number: '02',
    level: '零基础',
    english: 'FOUNDATION',
    tone: 'foundation',
    title: '新手女巫：建立第一套实践系统',
    text: '不从购买一桌工具开始。先认识当代巫术、威卡、民间传统与个人实践的差异，再建立意图、空间、动作、结束和记录的基本闭环。',
    topics: ['女巫史与流派辨识', '祭坛、工具与象征', '专注、观想与实践日志', '伦理、文化边界与个人守则'],
    prerequisite: '无需经验，建议与 01 同步',
    outcome: '个人实践守则与 30 日观察日志',
  },
  {
    number: '03',
    level: '基础主修',
    english: 'TAROT & CHART',
    tone: 'core',
    title: '塔罗与星盘：从象征阅读到时间结构',
    text: '先读塔罗的图像、结构与历史，再进入出生星盘中的行星、星座、宫位和相位。练习用两种工具组织问题与可能性，不把解读写成无法改变的绝对预言。',
    topics: ['78 张牌的结构与图像语言', '行星、星座、宫位与相位', '牌阵与星盘主题交叉阅读', '出生时间边界与解读伦理'],
    prerequisite: '建议完成 01 与 02',
    outcome: '一份带原始依据与反馈复盘的联合解读记录',
  },
  {
    number: '04',
    level: '基础主修',
    english: 'SCRYING',
    tone: 'core',
    title: '水、地、火占与凝视艺术：先描述，后解释',
    text: '以水面、地面图式、火焰与反光训练非语言观察，采用「原始变化 / 后续解释」双栏日志。三种媒介只作为历史与象征路径研究，镜面凝视和明火练习另做安全评估。',
    topics: ['水占与水镜的历史、物质文化', '地占图式与地域谱系辨析', '火焰、烟灰与无焰观察', '联想、投射与退出机制'],
    prerequisite: '建议完成 01 与 02；镜面练习另做评估',
    outcome: '个人视觉信号词典与双栏记录样本',
  },
  {
    number: '05',
    level: '进阶主修',
    english: 'MEDIUMSHIP',
    tone: 'advanced',
    title: '灵媒训练：感知、验证与自主关闭',
    text: '从身体、情绪、图像与「知道感」等通道开始校准，再进入信息隔离、单条陈述、目标与诱饵盲评。命中不被直接解释成超自然来源，误报也必须保留。',
    topics: ['感知通道与状态基线', '原始感知和故事分离', '中性盲靶与冻结记录', '同意、边界、转介与结束'],
    prerequisite: '完成 01、02 与基础日志，并通过安全与边界访谈',
    outcome: '一份不诱导、可评分、可主动结束的练习档案',
  },
  {
    number: '06',
    level: '高阶限修',
    english: 'SOLOMONIC',
    tone: 'advanced',
    title: '所罗门魔法：文本谱系与仪式语法',
    text: '从所罗门作为魔法权威的形象演变、伪托作者与多版本手稿开始，比较《所罗门之钥》与《小钥匙》，分析择时、操作者、空间、器物、祷文和结束的历史结构。',
    topics: ['古代晚期到近代的文本谱系', 'Key 与 Lesser Key 辨析', '手稿校读与版本差异', '仪式结构与物质文化'],
    prerequisite: '完成 01 与 02，并具备史料判读和稳定记录习惯',
    outcome: '一份带馆藏号、版本对照和结构分析的研究档案',
    note: '《所罗门之钥》《小钥匙》与 72 天使不是同一本书。本课先建立文本边界，再与下一阶段对读。',
  },
  {
    number: '07',
    level: '高阶主修',
    english: 'SHEM 72',
    tone: 'advanced',
    title: '72 天使魔法：名号谱系与仪式实践',
    text: '从《出埃及记》14:19-21 的三段经文和三字母组合开始，追踪「72 重神名」如何在后世犹太与基督教卡巴拉中被解释、加上 -el / -yah 词尾并逐渐形成天使名号，再比较现代实践体系。',
    topics: ['经文、希伯来字母与 72 组名号', '神名、天使名与版本差异', '祷文、符印、择时与联系流程', '意图边界、双账本与结束复盘'],
    prerequisite: '完成 01、02 与仪式基础；建议先修 06',
    outcome: '72 行来源数据库、原创仪式脚本与完整实践记录',
    note: 'CDA 不复制单一本现代著作，也不承诺召唤成功、财富、复合或其他确定结果。',
  },
  {
    number: '08',
    level: '特色高阶',
    english: 'LEFT-HAND PATH',
    tone: 'signature',
    title: '左手路径：阴影、意志与内在主权',
    text: '这不是以反叛姿态代替判断。课程比较左右路的历史概念，辨认外部期待、愿望、恐惧与权威投射，让选择回到自己的价值排序和现实后果。',
    topics: ['左右路的历史与概念边界', '阴影材料与投射记录', '欲望、代价与责任', '个人誓约与实践设计'],
    prerequisite: '有稳定记录习惯；不以危机状态进入高强度练习',
    outcome: '个人边界、价值排序与独立实践框架',
  },
  {
    number: '09',
    level: '研究级',
    english: 'CDA LAB',
    tone: 'signature',
    title: '研究型实践者：跨体系案例督导',
    text: '把占卜、灵媒、仪式与左手路径放进同一套研究纪律。练习设计盲法、冻结原始记录、匿名化案例，并在督导中检视确认偏差、诱导和伦理边界。',
    topics: ['双账本与证据链', '目标 / 诱饵盲评', '案例伦理与客户边界', '方法迭代与研究写作'],
    prerequisite: '导师评估，并完成至少一门主修',
    outcome: '匿名化案例档案、盲评记录与方法复盘',
  },
]

const learningPath = [
  {
    stage: 'STEP 01',
    title: '建立学习地图',
    text: '了解你的基础、兴趣与目标，先把概念、流派和资料来源理清。',
  },
  {
    stage: 'STEP 02',
    title: '练稳基础能力',
    text: '建立专注、观想、感知、记录和复盘习惯，让后续实践有底层支撑。',
  },
  {
    stage: 'STEP 03',
    title: '选择主修方向',
    text: '根据你的反馈深入仪式、占卜、黑魔法、灵体研究或跨体系整合。',
  },
  {
    stage: 'STEP 04',
    title: '进入督导实践',
    text: '完成练习、记录与复盘，在反馈中修正方法，逐步形成独立判断。',
  },
]

const witchPaths = [
  {
    title: '学术魔法与仪式魔法',
    text: '起源于文献、手稿、对应表与仪式体系的 learned magic 传统，与单纯民间习俗不同。',
  },
  {
    title: '民间魔法与地方智者',
    text: '草药、护符、治疗、祝福、解咒与地方传统形成的实践；历史上常被称为 wise woman 或 cunning folk。',
  },
  {
    title: '威卡与现代异教女巫',
    text: '在二十世纪现代异教运动中形成的女巫身份，重视自然周期、神灵、仪式与实践社群；但威卡不等于所有巫术。',
  },
  {
    title: '神秘学家、灵性主义者与灵媒',
    text: '十九世纪以后的神智学、神秘主义、灵性主义与灵媒运动互有重叠，但有各自的组织、世界观与技法。',
  },
  {
    title: '黑女巫与左路实践者',
    text: '探索意志、阴影、自我塑造与力量边界。左路不是「伤害他人」的代名词，它对自我、神性与意志有特定的历史讨论。',
  },
  {
    title: '独修与墓地实践',
    text: '有些实践者不属于固定教团，而围绕死亡象征、祖灵、场地与灵体边界建立个人路径。「墓地女巫」是个人实践身份，不是全球统一流派。',
  },
]

const divinationModes = [
  {
    code: 'WATER',
    type: '占卜媒介 · HYDROMANCY / SCRYING',
    title: '水占与水镜',
    text: '水占术属于占卜与凝视传统：水面、流动、波纹、颜色或反射被当作观察媒介。不同历史语境会采用不同的取象方式；现代水镜更强调持续注视与意象记录。',
    boundary: '先记可见变化，再谈象征；历史记录不等于预测证明。',
    source: '密歇根大学数字馆藏 · Hydromancy',
    href: 'https://quod.lib.umich.edu/d/did/did2222.0004.024/--hydromancy?rgn=main%3Bview%3Dfulltext',
  },
  {
    code: 'EARTH',
    type: '占卜媒介 · GEOMANCY',
    title: '地占与地景',
    text: '地占不是风水的同义词。中世纪伊斯兰与拉丁传统的「沙之学」以随机点列生成图式，再按格局解释；东亚地理术有自己的谱系。课程先标注地域、文本与对象，再比较相似问题。',
    boundary: '不把占卜图式与地质、建筑或环境安全判断混称。',
    source: '美国国立医学图书馆 · Arabic geomancy',
    href: 'https://www.nlm.nih.gov/hmd/arabic/astrology1.html',
  },
  {
    code: 'FIRE',
    type: '占卜媒介 · PYROMANCY',
    title: '火占与火焰凝视',
    text: '火占以火焰、烟、灰或燃烧过程作为征兆媒介，在不同文化中又与祭火、灯火和净化仪式交叠。CDA 将火的物理变化与后来解释分栏记录，不把烛魔法直接等同于火占。',
    boundary: '公开课只做文化史与无焰观察；任何明火都须成人看护、通风并远离可燃物。',
    source: '密歇根大学数字馆藏 · Pyromancy',
    href: 'https://quod.lib.umich.edu/d/did/did2222.0004.055/--pyromancy',
  },
]

const witchPracticeModules = [
  {
    type: '实践取向 · GREEN / KITCHEN',
    title: '草药与绿色、厨房女巫',
    text: '从植物识别、产地、季节、民俗与家庭仪式进入。绿色女巫偏向植物与生态，厨房女巫把烹饪、家务和照护变成有意图的日常实践；两者都是可重叠的当代社群标签，不是统一教派。',
    boundary: '自然不等于安全或有效；不把民俗配方当处方，不自行摄入未知植物。',
    source: 'NCCIH · 草药与膳食补充剂',
    href: 'https://www.nccih.nih.gov/health/dietary-and-herbal-supplements',
  },
  {
    type: '材料文化 · MINERAL / AMULET',
    title: '水晶与矿物实践',
    text: '水晶可被放进矿物学、护符史、审美和冥想符号的交叉位置。我们比较颜色、形状、材质、铭文与使用语境，不把今天流行的水晶寓意倒投成古代共识。',
    boundary: '不宣称晶体治病或存在可测能量；不饮用晶石浸泡水，也不把未知矿物放入口中。',
    source: 'Versus Arthritis · 辅助疗法证据报告',
    href: 'https://www.versusarthritis.org/media/12780/complementary-and-alternative-therapies-report-2013.pdf',
  },
  {
    type: '仪式工具 · WAND / ROD',
    title: '魔杖与仪式器物',
    text: '法杖把方向、手势、节奏与边界变得可见；它不是自带力量的道具。古埃及护符棒、近代仪式团体的莲花杖和现代木杖属于不同历史系统，必须分开讲。',
    boundary: '工具服务于意图与注意力，不替代文本训练、同意和结束流程。',
    source: '大都会艺术博物馆 · Egyptian magic wand',
    href: 'https://www.metmuseum.org/art/collection/search/544149',
  },
  {
    type: '意识训练 · IMAGERY',
    title: '视觉化与观想',
    text: '以多感官意象练习注意力、情绪调节和仪式想象；可以用于目标排练与自我反思。CDA 以身体定向开始、以五感回到当下，不把脑内图像当作外部讯息。',
    boundary: '若出现持续不适、失眠或现实感下降，立即停止并寻求专业帮助。',
    source: 'NCCIH · 放松与可视化技术',
    href: 'https://www.nccih.nih.gov/health/relaxation-techniques-what-you-need-to-know',
  },
  {
    type: '仪式过程 · EMPOWER / CONSECRATE',
    title: '赋能、充能与祝圣',
    text: '在不同传统里，口述、符号、祷文、动作和时间会把对象设为「有意义、可使用」。CDA 把它写成可描述的仪式过程：记录来源、意图、动作与前后感受，而不是声称有可测的物理能量转移。',
    boundary: '把社群内部语言与科学结论分开，不保证结果，也不替代现实决策。',
    source: 'OpenStax · 人类学中的宗教与超自然概念',
    href: 'https://openstax.org/books/introduction-anthropology/pages/13-1-what-is-religion',
  },
  {
    type: '嗅觉材料 · AROMA',
    title: '魔法精油与香氛制作',
    text: '把气味作为记忆、氛围与象征媒介，学习原料标签、载体、保存、批次和警示；公开示范先从香薰纸或合规扩香开始，不把配方包装成治疗方案。',
    boundary: '纯精油不口服、不直接涂抹；需按标签稀释，避开眼睛与光敏风险，儿童、宠物、孕哺或用药先咨询专业人士。',
    source: 'NCCIH · Aromatherapy 安全信息',
    href: 'https://www.nccih.nih.gov/health/aromatherapy',
  },
  {
    type: '对应系统 · SYMBOL / FIRELIGHT',
    title: '颜色、烛火与符号',
    text: '颜色、火、水、金属与符号在各传统中有不同对应。课程把对应表当作历史材料与创作语言，比较版本和语境，不把它们写成跨文化通用的「魔法公式」。',
    boundary: '明火只在稳定、通风、可控的环境中使用；无焰灯是更低风险的练习替代。',
    source: '美国消防局 · Candle safety',
    href: 'https://www.usfa.fema.gov/prevention/home-fires/prevent-fires/candle/',
  },
  {
    type: '传统与身份 · FOLK / WICCA / MEDIUMSHIP',
    title: '民间魔法、威卡与灵媒',
    text: '民间魔法、现代威卡、仪式魔法与灵媒是不同历史和社群路径；它们可以互相影响，却不能被压成一张「女巫等级表」。当代的 hedge、sea、cosmic 或 eclectic witch 更多是流动的自我描述。',
    boundary: '先说明来源、社群与文化边界，不挪用受保护传统，也不把身份当作能力证明。',
    source: 'OpenLearn · Wicca 与宗教变迁',
    href: 'https://www.open.edu/openlearn/course/view.php?id=6411',
  },
]

const learningResources = [
  {
    platform: 'OPENLEARN · FREE COURSE',
    title: 'Wicca 与 1960 年代宗教变迁',
    text: '从新宗教史角度理解 Wicca 的形成，不把现代宗教包装成未经中断的古代遗存。',
    href: 'https://www.open.edu/openlearn/course/view.php?id=6411',
  },
  {
    platform: 'COURSERA · UNIVERSITY OF BARCELONA',
    title: 'Magic in the Middle Ages',
    text: '以历史与科学史区分 popular magic、learned magic、占星与地占等概念。',
    href: 'https://www.coursera.org/learn/magic-middle-ages',
  },
  {
    platform: 'UNIVERSITY OF ARIZONA · RELI 377',
    title: 'History of Witchcraft, Magic and the Occult',
    text: '从古代到二十世纪，讨论巫术、审判、神秘学与 Wicca 的历史语境。',
    href: 'https://religion.arizona.edu/course-description/reli-377-history-witchcraft-magic-and-occult',
  },
  {
    platform: 'UNIVERSITY OF SYDNEY · RLST3607',
    title: 'Witchcraft, Paganism and Western Esotericism',
    text: '观察女巫、异教与西方秘传学之间的交叉与差异；开课状态以学校页面为准。',
    href: 'https://www.sydney.edu.au/units/RLST3607',
  },
  {
    platform: 'NCCIH · HEALTH LITERACY',
    title: '放松、可视化与草药资料',
    text: '了解引导想象、草药补充剂的证据边界、相互作用与安全信息。',
    href: 'https://www.nccih.nih.gov/health/relaxation-techniques-what-you-need-to-know',
  },
  {
    platform: 'FDA / POISON CONTROL · SAFETY',
    title: '精油与香氛安全',
    text: '查看精油的稀释、误食、皮肤、儿童与宠物风险；不把天然等同于无害。',
    href: 'https://www.poison.org/articles/essential-oils',
  },
]

const worldviewPrinciples = [
  {
    title: '对应关系',
    text: '行星、元素、金属、植物、身体与符号之间，可以被理解为一张象征性的关系网。',
  },
  {
    title: '活化的自然',
    text: '许多秘传传统不将自然视为死的背景，而将它理解为有层次、意义与关系的整体。',
  },
  {
    title: '想象与中介',
    text: '意象、神话、仪式与护符被用来在物质与精神之间建立可理解、可实践的中介。',
  },
  {
    title: '转化',
    text: '学习的目标不只是「知道更多」，而是通过实践改变感知、判断、意志与对自己的理解。',
  },
  {
    title: '传统互照',
    text: '比较不同时代与文化的传统，寻找相似问题和不同答案；互照不意味着把它们强行说成同一套东西。',
  },
  {
    title: '传承与责任',
    text: '知识通过文献、师徒、社群和反复实践传递；传承不是神秘光环，也意味着边界、伦理和责任。',
  },
]

const academicReferences = [
  {
    institution: '英国图书馆 · 手稿目录',
    title: '所罗门魔法不是一本固定不变的书',
    text: 'Sloane MS 3648 等馆藏记录展示了《小钥匙》及相关文本的具体年代、语言和编排。课程从馆藏号与版本差异开始，不把后世编辑本当作唯一原典。',
    href: 'https://searcharchives.bl.uk/catalog/040-002116038',
  },
  {
    institution: 'V&A · 塔罗馆藏',
    title: '先分清纸牌史，再进入现代占卜',
    text: '馆藏研究显示塔罗最初是纸牌游戏，至十八、十九世纪才逐渐与占卜及神秘学结合。黎辉的塔罗课会把历史、牌面结构和现代实践分开讲清。',
    href: 'https://www.vam.ac.uk/articles/tarot-cards',
  },
  {
    institution: '密歇根大学 · 数字馆藏',
    title: '水占有历史记录，不等于效果证明',
    text: '十八世纪百科全书资料记录了多种 hydromancy 水占形式。课程将它作为历史与物质文化来源，同时明确：历史存在不能证明它能够预测未来。',
    href: 'https://quod.lib.umich.edu/d/did/did2222.0004.024/--hydromancy?rgn=main%3Bview%3Dfulltext',
  },
  {
    institution: 'Windbridge Research Center',
    title: '灵媒材料也可以减少暗示与线索泄漏',
    text: '其研究协议使用信息隔离、代理来访者、目标与诱饵稿盲评来控制冷读、提示和评分偏差。CDA 借鉴的是记录纪律，不把命中率写成来源证明。',
    href: 'https://www.windbridge.org/research/mediumship-research/',
  },
  {
    institution: 'Sefaria · 希伯来经文',
    title: '72 天使课程从原始经文开始核对',
    text: '《出埃及记》14:19-21 是后世 72 组三字母名号推导所使用的三段经文；经文本身并没有列出今天常见的 72 位天使名单，二者必须分层理解。',
    href: 'https://www.sefaria.org/Exodus.14.19-21',
  },
  {
    institution: '博洛尼亚大学 · 文献研究',
    title: '三字母名号经过祷文与跨宗教传播',
    text: 'Campanini 对 1513 年拉丁祷文的研究追踪了 72 组名号如何由经文组合、进入诗篇祷文，并在基督教读者中产生多个版本。',
    href: 'https://cris.unibo.it/handle/11585/844735',
  },
  {
    institution: '剑桥大学出版社',
    title: '犹太卡巴拉与基督教卡巴拉不能混写',
    text: '基督教卡巴拉会在自身神学目标下重新解释犹太材料。课程会标出每一层改写发生的时代与语境，不把后世天使对应包装成一份自古不变的名单。',
    href: 'https://www.cambridge.org/core/books/abs/cambridge-handbook-of-western-mysticism-and-esotericism/christian-kabbalah/06C1841D0B561A4F4A01E791743CF4DE',
  },
  {
    institution: '阿姆斯特丹大学',
    title: '西方秘传学有清楚的历史研究范围',
    text: '其研究覆盖赫尔墨斯主义、魔法、炼金术、占星、卡巴拉、神智学与灵性主义，并追踪它们和主流文化之间的关系。',
    href: 'https://www.uva.nl/en/discipline/religious-studies/western-esotericism/article.html',
  },
  {
    institution: '埃克塞特大学',
    title: '跨文化比较需要历史与方法训练',
    text: '其魔法与神秘学硕士涉及希腊罗马魔法、宗教秘本、巫术史、民俗、文学及科学与医学史，说明这个领域远不止一种流派或单一技法。',
    href: 'https://www.exeter.ac.uk/masters-degrees/ma-magic-and-occult-science/',
  },
]

const cdaTechniques = [
  {
    type: '存在论框架',
    title: '「同一个世界，不同位面」',
    text: '黎辉与 CDA 将不同传统中的位面、帷幕与意象世界整理进同一条逻辑链，用来思考「看不见」与「不存在」之间的区别。这是 CDA 正在持续检验的工作假说。',
  },
  {
    type: '分类工具',
    title: '五轴类型学',
    text: '从存在位面、空间维度、创作来源、互动模式与身份可验证性五个坐标整理一个案例，避免把所有经验都塞进同一种解释。',
  },
  {
    type: '感知训练',
    title: '精微体三层感知',
    text: '分别训练躯体感应、情绪感知与脑海思维三个层次，帮助学习者找到自己的主导通道，而不是强迫每个人都用同一种方式感知。',
  },
  {
    type: '解码方法',
    title: '三类信号分离',
    text: '把记录拆分为待验证的对象信息、个人投射与环境噪音，再比较它们的连续性和可复现性。感知到什么只是开始，分辨才是训练的核心。',
  },
  {
    type: '验证方法',
    title: '三重验证法',
    text: '将信息一致性、不同实践者的独立印证与盲测对照放在同一个流程中。一次体感或一句像对方的话，不会被直接当成最终结论。',
  },
  {
    type: '安全技法',
    title: '三重否决与关闭闭环',
    text: '身体持续不适、当事人未同意、或现实证据明确冲突，任一成立就暂停。结束后做五感定向、状态复核与书面复盘；学员始终保有拒绝和退出权。',
  },
  {
    type: '研究 SOP',
    title: '双账本与冻结记录',
    text: '把「原始感知」和「解释 / 证据」写进两本账，不在反馈后补写命中。少信息条件下先独立提交，再由第三方对比，降低锚定、冷读和互相暗示。',
  },
  {
    type: '校准原则',
    title: '空白也是结果',
    text: '允许记录「没有信息」、矛盾与误判，不为了完成表演强行联想。每次练习留下状态、原始信号、置信度和反馈，让进步不再只依赖「我感觉更准了」。',
  },
]

const contributions = [
  {
    title: '建立理论基础',
    text: '与破晓共同建立 CDA 的理论与方法基础，并作为首篇 MJ 理论建构论文的共同作者，为跨次元传讯研究提供可讨论的框架。',
  },
  {
    title: '把知识整理成方法',
    text: '将分散在不同传统中的知识重新整理为有文献来源、有逻辑链条、有操作步骤的训练体系，为传讯师与神秘学学生提供共同底座。',
  },
  {
    title: '负责质量把控',
    text: '持续参与训练路径调整、方法论迭代、数据审核与质量把控，不让课程停留在概念，也不让传讯实践脱离记录和复盘。',
  },
  {
    title: '培养学生与团队',
    text: '长期带领神秘学学生。破晓是她培养出的代表实践者之一；她也为 CDA 连接不同传统的专业成员，让跨体系交叉验证成为可能。',
  },
]

const suitableStudents = [
  '完全零基础，但愿意先学习历史、伦理、记录与结束流程的人',
  '学过塔罗、星盘、水占或其他占卜，想摆脱死背关键词和模糊话术的人',
  '对灵媒训练感兴趣，同时愿意保留误判、接受盲评与现实验证的人',
  '想研究所罗门魔法、左手路径与古典仪式，并接受高阶先修门槛的人',
]

export default function Mentorship() {
  return (
    <div className="page-mentorship">
      <section className="page-hero mentorship-hero">
        <div className="mentorship-hero-media" aria-hidden="true">
          <img
            src={`${import.meta.env.BASE_URL}images/lihui-cosmic-atlas-hero.png`}
            alt=""
          />
        </div>
        <div className="container mentorship-hero-content">
          <p className="mentorship-kicker">CDA OCCULT MENTORSHIP</p>
          <h1>跟随黎辉学习神秘学</h1>
          <p className="subtitle">
            从西方秘传学通史、零基础女巫、塔罗与星盘、水占、地占与火占，到灵媒训练、所罗门魔法、72 天使、左手路径与 CDA 研究实践。
          </p>
          <p className="mentorship-hero-copy">
            这不是神秘学速成目录。每一级都有先修、记录、关闭和复盘，高阶训练只在基础稳定后开启。
          </p>
          <div className="mentorship-hero-actions">
            <Link
              className="mentorship-button primary"
              to="/contact?inquiry=course_interest&service=occult-mentorship&mentor=lihui"
            >
              申请课程咨询
            </Link>
            <a className="mentorship-button secondary" href="#curriculum">查看完整学习路径</a>
          </div>
          <div className="mentorship-hero-index" aria-hidden="true">
            <span>LI HUI</span>
            <i></i>
            <span>ARCHIVE 01 / 09</span>
          </div>
        </div>
      </section>

      <section className="section mentorship-profile-band">
        <div className="container mentorship-profile-grid">
          <div className="mentorship-profile-identity">
            <div className="mentorship-monogram" aria-hidden="true">L</div>
            <p className="mentorship-role">古典仪式魔法导师 · 神秘学教育</p>
            <h2>黎辉 <span>Li Hui / Success</span></h2>
            <p className="mentorship-profile-lead">
              黎辉是一位优秀的古典黑魔法师，也是一位长期带领神秘学学生的认证导师。
              她对西方神秘学中的左手路径与右手路径都有系统理解和实操经验，擅长把所罗门魔法、占卜、灵媒与复杂传统拆成有逻辑、有边界、可以练习与复盘的学习路径。
            </p>
          </div>

          <dl className="mentorship-facts">
            <div>
              <dt>专业身份</dt>
              <dd>美国疗愈之光认证黑魔法导师</dd>
            </div>
            <div>
              <dt>教学方向</dt>
              <dd>秘传学通史、所罗门与 72 天使魔法、塔罗与星盘、水占、灵媒训练、左手路径</dd>
            </div>
            <div>
              <dt>学生路径</dt>
              <dd>理论理解、实操训练、记录复盘与个人能力深化</dd>
            </div>
            <div>
              <dt>CDA 职责</dt>
              <dd>联合创始、理论方法、学术输出与质量把控</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section mentorship-expertise">
        <div className="container">
          <div className="section-title">
            <p className="mentorship-section-kicker">PROFESSIONAL PRACTICE</p>
            <h2>她教的不是碎片化技巧</h2>
            <div className="decorative-line"></div>
            <p className="section-subdesc">左路与右路不是互相贴标签，而是两套需要理解目标、伦理和方法边界的实践框架。</p>
          </div>

          <div className="mentorship-expertise-list">
            {expertise.map(item => (
              <article className="mentorship-expertise-item" key={item.number}>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section mentorship-curriculum" id="curriculum">
        <div className="container">
          <div className="mentorship-curriculum-heading">
            <div>
              <p className="mentorship-section-kicker">THE LI HUI PATH</p>
              <h2>从秘传学通史，到研究型实践者</h2>
            </div>
            <div className="mentorship-curriculum-intro">
              <p>
                课程按照能力成熟度逐层开放：先建立秘传学历史地图、观察、记录与伦理，再进入塔罗、星盘、水占和灵媒，最后研究所罗门魔法、72 天使、左手路径与跨体系案例。
              </p>
              <p className="mentorship-curriculum-note">
                标注为高阶的课程不接受零基础直入。黎辉会根据基础访谈、练习记录与学习方向安排组合。
              </p>
            </div>
          </div>

          <div className="mentorship-lineage-atlas" aria-labelledby="lineage-atlas-title">
            <div className="mentorship-lineage-heading">
              <div>
                <span>HISTORICAL LINEAGE ATLAS</span>
                <h3 id="lineage-atlas-title">古典魔法如何走向现代神秘学</h3>
              </div>
              <p>
                不是把三十个流派背成一张表，而是看清思想、文本、组织与技法如何跨越时代被翻译和重组。
                下面是 CDA 的课程导航，不是「唯一正统传承图」。
              </p>
            </div>

            <ol className="mentorship-lineage-track">
              {lineagePeriods.map((item, index) => (
                <li key={item.english}>
                  <div className="mentorship-lineage-marker" aria-hidden="true">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <article>
                    <div className="mentorship-lineage-meta">
                      <span>{item.era}</span>
                      <span>{item.english}</span>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                    <ul aria-label={`${item.title}所涵盖的传统`}>
                      {item.currents.map(current => <li key={current}>{current}</li>)}
                    </ul>
                    <div className="mentorship-lineage-reading">
                      <span>CDA 判读</span>
                      <p>{item.reading}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ol>

            <div className="mentorship-comparison" aria-labelledby="comparison-title">
              <div className="mentorship-comparison-heading">
                <span>CONTEXT, NOT A BINARY</span>
                <h3 id="comparison-title">古典与现代，差别在哪里</h3>
                <p>「古典」和「现代」是理解材料的入口，不是高低等级，也不是判断真伪的捷径。</p>
              </div>
              <div className="mentorship-comparison-table" role="table" aria-label="古典魔法与现代魔法对照">
                <div className="mentorship-comparison-row header" role="row">
                  <span role="columnheader">判读维度</span>
                  <span role="columnheader">古典材料</span>
                  <span role="columnheader">现代体系</span>
                </div>
                {classicalModernComparison.map(item => (
                  <div className="mentorship-comparison-row" role="row" key={item.dimension}>
                    <strong role="rowheader">{item.dimension}</strong>
                    <p role="cell">{item.classical}</p>
                    <p role="cell">{item.modern}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <figure className="mentorship-archive-feature">
            <div className="mentorship-archive-image">
              <img
                src={`${import.meta.env.BASE_URL}images/key-of-solomon-plate-v.jpg`}
                alt="1889 年所罗门之钥公版编辑本中的第五图版"
              />
            </div>
            <figcaption>
              <span>ARCHIVE ENTRY · 1889 · PUBLIC DOMAIN</span>
              <h3>先读懂文本，才谈实践</h3>
              <p>
                图版来自 Mathers 编辑的《所罗门之钥》。黎辉会带学生追踪馆藏号、年代、语言和编辑改动，分清历史来源与现代再包装，而不是拿一张符印就宣称掌握整套传统。
              </p>
              <a href="https://wellcomecollection.org/works/xhh2qvud/items" target="_blank" rel="noreferrer">
                查看 Wellcome Collection 公版馆藏
              </a>
            </figcaption>
          </figure>

          <div className="mentorship-course-thesis">
            <span>CDA PRACTICE PRINCIPLE</span>
            <p>在未知面前，依然能辨别、验证、负责，并自主结束。</p>
          </div>

          <ol className="mentorship-course-path">
            {coursePath.map(item => (
              <li className={`mentorship-course-stage ${item.tone}`} key={item.number}>
                <span className="mentorship-stage-line" aria-hidden="true"></span>
                <div className="mentorship-stage-marker">
                  <span className="mentorship-stage-number">{item.number}</span>
                  <div>
                    <span className="mentorship-stage-level">{item.level}</span>
                    <span className="mentorship-stage-english">{item.english}</span>
                  </div>
                </div>

                <div className="mentorship-stage-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ul aria-label={`${item.title}的学习要点`}>
                    {item.topics.map(topic => <li key={topic}>{topic}</li>)}
                  </ul>
                  {item.note && <p className="mentorship-stage-note">{item.note}</p>}
                </div>

                <dl className="mentorship-stage-meta">
                  <div>
                    <dt>进入门槛</dt>
                    <dd>{item.prerequisite}</dd>
                  </div>
                  <div>
                    <dt>完成标志</dt>
                    <dd>{item.outcome}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ol>

          <div className="mentorship-course-boundary">
            <span>练习边界</span>
            <p>
              课程属于成人神秘学文化、象征阅读与主观体验训练，不承诺预测未来或获得超自然能力，也不替代医疗、心理、法律或财务建议。若练习造成持续失眠、幻听幻视、意识混乱或现实功能下降，应立即停止并寻求专业帮助。
            </p>
          </div>
        </div>
      </section>

      <section className="section mentorship-academic-scope">
        <div className="container">
          <div className="mentorship-academic-heading">
            <div>
              <p className="mentorship-section-kicker">ACADEMIC SCOPE</p>
              <h2>这不是 CDA 凭空定义的「神秘学」</h2>
            </div>
            <p>
              国际学术界已经把西方秘传学、魔法与巫术作为跨历史、宗教、文学、人类学与科学史的研究领域。
              CDA 以这些已被学术界明确的范围作为通识底座，再进入黎辉与 CDA 自己的实操、记录和方法研发。
            </p>
          </div>

          <div className="mentorship-academic-grid">
            {academicReferences.map(item => (
              <article key={item.institution}>
                <span>{item.institution}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href={item.href} target="_blank" rel="noreferrer">查看公开资料</a>
              </article>
            ))}
          </div>

          <p className="mentorship-academic-disclaimer">
            上述机构是课程范围的公开学术参照，不代表它们与 CDA 存在合作、认证或背书关系。
          </p>
        </div>
      </section>

      <section className="section mentorship-worldview">
        <div className="container">
          <div className="mentorship-worldview-lead">
            <div>
              <p className="mentorship-section-kicker">THE WITCH'S WORLD</p>
              <h2>女巫不是一种造型，<br />而是一种实践者身份</h2>
            </div>
            <div>
              <p>
                在黎辉的课程里，女巫不是穿上黑衣、摆满水晶就完成的人设。
                她阅读传统，观察时间、自然、身体与符号；她使用工具，也知道工具的边界；
                她记录每一次实践，并为自己的选择、伦理和后果负责。
              </p>
              <blockquote>
                女巫不是一个从古代一直保持不变的统一职业。历史上被指控的「女巫」、乡村疗愈者、现代威卡、仪式魔法师、灵媒和左路实践者可能互有重叠，却不能被随意等同。
              </blockquote>
            </div>
          </div>

          <div className="mentorship-worldview-source">
            <p>下面六个视角参考 Antoine Faivre 对西方秘传思想形态的分析框架。它们用来理解神秘学传统如何思考，不是对超自然主张的科学证明。</p>
          </div>

          <div className="mentorship-worldview-principles">
            {worldviewPrinciples.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mentorship-witch-paths">
            {witchPaths.map(item => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section mentorship-practice-atlas" id="practice-atlas">
        <div className="container">
          <div className="mentorship-atlas-heading">
            <div>
              <p className="mentorship-section-kicker">THE PRACTICE ATLAS</p>
              <h2>工具不是流派</h2>
            </div>
            <div className="mentorship-atlas-intro">
              <p>
                水占、地占、火占属于占卜的媒介层；草药、水晶与魔杖属于材料和仪式工具层；视觉化、赋能与香氛属于技法层。女巫则是身份、传统或社群位置。把层级分开，才能既尊重历史，也不被社交媒体标签牵着走。
              </p>
              <p className="mentorship-atlas-note">
                以下整理是 CDA 的学习地图，不是全球统一的女巫分类。标签可以重叠、改变，也可以不使用。
              </p>
            </div>
          </div>

          <div className="mentorship-element-grid" aria-label="三种媒介占卜">
            {divinationModes.map((item, index) => (
              <article className={`mentorship-element-card ${item.code.toLowerCase()}`} key={item.code}>
                <div className="mentorship-element-card-top">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{item.code}</span>
                </div>
                <span className="mentorship-atlas-type">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <dl>
                  <div>
                    <dt>练习边界</dt>
                    <dd>{item.boundary}</dd>
                  </div>
                </dl>
                <a href={item.href} target="_blank" rel="noreferrer">{item.source}</a>
              </article>
            ))}
          </div>

          <div className="mentorship-atlas-subheading">
            <span>WITCHCRAFT IN PRACTICE</span>
            <h3>从社群自称，到可以复盘的学习模块</h3>
            <p>绿色、厨房、晶石、灵媒或 eclectic 等词，是实践焦点或当代自我描述，不是能力等级。每一项都要回到来源、材料、意图、风险和记录。</p>
          </div>

          <div className="mentorship-atlas-grid">
            {witchPracticeModules.map(item => (
              <article key={item.title}>
                <span className="mentorship-atlas-type">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <dl>
                  <div>
                    <dt>边界提醒</dt>
                    <dd>{item.boundary}</dd>
                  </div>
                </dl>
                <a href={item.href} target="_blank" rel="noreferrer">{item.source}</a>
              </article>
            ))}
          </div>

          <div className="mentorship-learning-resources">
            <div className="mentorship-resources-heading">
              <span>OPEN STUDY ROUTE</span>
              <h3>公开资料与课程入口</h3>
              <p>按历史、宗教研究与健康安全三个方向继续阅读。课程状态、语言和访问条件以原站为准；这些资源不代表 CDA 认证或背书。</p>
            </div>
            <div className="mentorship-resources-list">
              {learningResources.map(item => (
                <a href={item.href} target="_blank" rel="noreferrer" key={item.title}>
                  <span>{item.platform}</span>
                  <strong>{item.title}</strong>
                  <em>{item.text}</em>
                  <b>打开公开资源 ↗</b>
                </a>
              ))}
            </div>
          </div>

          <p className="mentorship-atlas-disclaimer">
            本地图以宗教史、民俗学、人类学、博物馆资料和当代社群自述为对象。象征意义与个人体验值得被尊重，但不等同于科学疗效；草药、矿物、精油与火焰均有现实风险，涉及摄入、皮肤、孕期、儿童、宠物、疾病或用药时请先咨询合资格专业人士。
          </p>
        </div>
      </section>

      <section className="section mentorship-techniques">
        <div className="container">
          <div className="section-title">
            <p className="mentorship-section-kicker">CDA ORIGINAL FRAMEWORK</p>
            <h2>黎辉与 CDA 的特殊技法</h2>
            <div className="decorative-line"></div>
            <p className="section-subdesc">不把神秘体验说得更真，而是让体验接受分辨、验证、边界与记录。能说「不知道」，也能随时结束。</p>
          </div>

          <div className="mentorship-technique-list">
            {cdaTechniques.map((item, index) => (
              <article key={item.title}>
                <span className="mentorship-technique-number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <span className="mentorship-technique-type">{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="mentorship-technique-note">
            公开页面展示方法的逻辑与用途；完整操作步骤、练习参数与案例复盘属于 CDA 课程与研究体系。其中部分框架仍是待继续验证的工作假说。
          </p>
        </div>
      </section>

      <section className="section mentorship-learning-path">
        <div className="container">
          <div className="section-title">
            <p className="mentorship-section-kicker">HOW YOU WILL LEARN</p>
            <h2>从零散兴趣，到建立自己的方法</h2>
            <div className="decorative-line"></div>
            <p className="section-subdesc">先理解，再练习；先记录，再判断。学习会按你的进度逐步深入。</p>
          </div>

          <ol className="mentorship-learning-list">
            {learningPath.map(item => (
              <li key={item.stage}>
                <span>{item.stage}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section mentorship-certificate" id="certificate">
        <div className="container mentorship-certificate-grid">
          <div>
            <p className="mentorship-section-kicker">VERIFIABLE CREDENTIAL</p>
            <h2>可公开查询的导师认证</h2>
            <p className="mentorship-certificate-copy">
              证书不是能力的全部，但它应当能够被核对。黎辉的认证信息已写入 CDA 论文贡献声明，并提供公开查询编号。
            </p>
          </div>

          <div className="certificate-panel">
            <dl className="certificate-record">
              <div>
                <dt>认证机构</dt>
                <dd>美国疗愈之光 Light of Soul</dd>
              </div>
              <div>
                <dt>认证项目</dt>
                <dd>黑魔法导师</dd>
              </div>
              <div>
                <dt>证书编号</dt>
                <dd>C26061903211</dd>
              </div>
              <div>
                <dt>查询号</dt>
                <dd>E008600112233</dd>
              </div>
            </dl>
            <a className="certificate-link" href="https://lightofsoul.ltd" target="_blank" rel="noreferrer">
              前往认证网站查询
            </a>
          </div>
        </div>
      </section>

      <section className="section mentorship-contribution">
        <div className="container">
          <div className="section-title">
            <p className="mentorship-section-kicker">CONTRIBUTION TO CDA</p>
            <h2>她为 CDA 建立了什么</h2>
            <div className="decorative-line"></div>
          </div>

          <div className="mentorship-contribution-list">
            {contributions.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section mentorship-students">
        <div className="container mentorship-students-grid">
          <div>
            <p className="mentorship-section-kicker">FOR STUDENTS</p>
            <h2>这条学习路径适合谁</h2>
            <p>
              你不需要先证明自己有天赋。比起快速学会一个看起来神秘的动作，黎辉更重视你能否理解、记录、分辨，并逐渐形成自己的专业判断。
            </p>
          </div>
          <ul>
            {suitableStudents.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section
        className="mentorship-final-cta"
        style={{ '--mentorship-bg-image': `url(${import.meta.env.BASE_URL}images/lihui-cosmic-atlas-hero.png)` }}
      >
        <div className="container">
          <p>CDA OCCULT EDUCATION</p>
          <h2>把兴趣变成真正属于你的能力</h2>
          <span>提交申请后，CDA 助理会了解你的基础、学习方向和希望解决的问题，再与你确认适合的课程安排。</span>
          <Link
            className="mentorship-button primary"
            to="/contact?inquiry=course_interest&service=occult-mentorship&mentor=lihui"
          >
            申请跟随黎辉学习
          </Link>
        </div>
      </section>
    </div>
  )
}
