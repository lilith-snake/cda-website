import { Link } from 'react-router-dom'
import DialogueBox from '../components/DialogueBox'
import ChoiceButton from '../components/ChoiceButton'
import { useLanguage } from '../i18n'
import './Courses.css'

const researchStages = [
  {
    stage: '第一階段',
    subtitle: '理論入門',
    duration: '自學 · 即時開始',
    topics: [
      '了解跨次元親密關係研究的學術背景與現狀',
      '叙事实体假说入门——理解跨次元链接现象的理论基础',
      '感知自測：了解自己當前的感知通道傾向',
      '爱人类型学入门——理解你感知到的对方属于哪一种信号形态',
    ],
    pathNote: '路徑A / 路徑B 共用',
    color: 'mystic',
  },
  {
    stage: '第二階段',
    subtitle: '感知訓練',
    duration: '4 週 · 雙路徑共用核心',
    topics: [
      '靈媒（靈五感開發）——找到你的主導感知通道',
      '鏈接安全守則——辨別與防護體系',
      '結構化直覺訓練——從感知校準到信號分離',
      '防護體系——做完不累、不被消耗、邊界清晰',
    ],
    pathNote: '路徑A / 路徑B 共用',
    color: 'dream',
  },
  {
    stage: '第三階段',
    subtitle: '實操研究',
    duration: '6 週 · 雙選修模塊 + 月度校準',
    topics: [
      '完整链接流程——从调频到关闭通道，每一步都有 SOP',
      '三重驗證法实操——信息一致性 + 獨立印證 + 盲測',
      '路徑A 選修：參與驗證研究、協作校準、邊界設置',
      '路徑B 選修：獨立校準技能，建立個人驗證體系',
      '月度校準會——持續校準，保持感知精度',
    ],
    pathNote: 'L2 選修分流',
    color: 'dream',
  },
  {
    stage: '第四階段',
    subtitle: '認證考核',
    duration: '申請制 · 四步通關',
    topics: [
      '完成前三階段全部訓練',
      '通過線上筆試（基礎知識 + 案例分析）',
      '完成 3 次模擬傳訊——由督導評審團盲審打分',
      '提交「我的傳訊倫理聲明」——非模板，個人化承諾',
    ],
    pathNote: '路徑A：職業傳訊師（列入名錄·參與驗證） | 路徑B：認證實踐者（獨立鏈接·社群歸屬）',
    color: 'gold',
  },
]

const marketProblems = [
  {
    stat: '80.3%',
    title: '用过传讯服务',
    text: 'CDA 社群调研显示，大多数梦女不是没有消费过，而是已经反复找过传讯师，却依然没有获得稳定、可信、可复盘的答案。',
  },
  {
    stat: '46.0%',
    title: '中性或不满意',
    text: '传讯结束后仍然困惑的人很多：信息像不像他、来源是否稳定、该不该继续，都没有统一标准承接。',
  },
  {
    stat: '91.0%',
    title: '愿意参与盲测',
    text: '梦女不是不想验证。她们真正缺少的，是一个愿意认真验证、记录并持续迭代的方法体系。',
  },
  {
    stat: '低门槛',
    title: '市场鱼龙混杂',
    text: '很多人看几个视频、拿起工具就能接单，价格混乱、流程不明、防护缺席，客户很难判断对方是否真的受过训练。',
  },
]

const trainingPromises = [
  {
    title: '先保护梦女',
    text: '培训的第一目的，是让更多梦女不用在混乱市场里孤独试错。传讯师要先学会边界、防护、记录、关闭和售后，再谈链接与结果。',
  },
  {
    title: '再建立标准',
    text: 'CDA 要做的是把零散经验变成可训练、可考核、可复盘的流程，让传讯师不再只靠“我很准”的自我宣传建立信任。',
  },
  {
    title: '也形成职业路径',
    text: '当训练、案例、校准和认证都能被展示，传讯师才有机会摆脱朋友圈零散接单和收入不稳定，进入更长期的服务体系。',
  },
]

const cdaSopItems = [
  '事前：申请筛查、来访者边界确认、问题范围确认、敏感内容预警',
  '传讯中：CDA 护服、黑手套、环境稳定、链接记录、异常信号暂停机制',
  '验证中：信息一致性、独立印证、盲测记录、先提交后对比',
  '事后：关闭通道、清理复盘、来访者情绪承接、售后申诉与补偿流程',
]

const practitionerPainPoints = [
  '很多传讯师有感知，但没有受过系统训练，客户一问 SOP 就答不上来。',
  '很多传讯师收入不稳定，靠熟人、朋友圈和临时流量接单，很难长期经营。',
  '很多传讯师独自承担风险：客户害怕、质疑、失望、不适时，没有督导和售后体系接住。',
  '很多传讯师没有背书，做得再认真，也很难向客户证明自己不是市场里的又一个“随便接单的人”。',
]

const trainingExamples = [
  {
    name: '破晓 Ophion',
    role: '灵媒兼现代黑魔法女巫 · CDA 实操体系负责人',
    text: '破晓不是一开始做传讯师时就能做到无信息链接。早期她也曾需要依靠照片和背景信息辅助传讯；后来在 CDA 团队内其他三位成员共同参与下，她们一起做理论整理、方法实验、案例复盘和持续训练，才把这条路径慢慢跑出来。',
    result: '进入 CDA 方法迭代后，破晓曾多次在无照片、无姓名、无背景信息的条件下，直接说出对方爱人的名字。CDA 第一个肉眼看到 MJ 的案例，也是破晓培养体系跑出来的结果。',
  },
  {
    name: '朱恩',
    role: 'CDA 最新训练传讯师 · 零基础实践者样本',
    text: '朱恩代表的是另一条路径：从零基础小白和实践者进入 CDA 训练，而不是一开始就拥有成熟经验。她目前已经进入无信息链接内测，不需要来访者提供信息或照片，也能尝试靠近对方爱人。',
    result: '这说明 CDA 的能力不是只停留在破晓个人身上，而是正在被拆成可以学习、可以练习、可以复盘的培养路径。传讯师在这里得到的不只是技术，还有平台、标准、背书和保护。',
  },
]

export default function Courses() {
  const { t } = useLanguage()
  return (
    <div className="page-courses">
      {/* Hero */}
      <section className="page-hero courses-hero">
        <div className="container">
          <h1>{t('CDA 传讯师培训')}</h1>
          <p className="subtitle">{t('培训传讯师，是为了让更多梦女更安全地和爱人相处。')}</p>
          <p className="hero-sub-desc">{t('香港跨次元传讯研究协会 · 全球首家以 MJ 现象与跨次元亲密关系为核心研究对象的传讯研究协会')}</p>
        </div>
      </section>

      {/* 体系介绍 */}
      <section className="section">
        <div className="container">
          <div className="courses-intro">
            <DialogueBox speaker="破晓" variant="gold">
              {t('这套体系不是为了在现有传讯市场里分一杯羹。我们自己培养传讯师，是因为市面上没有一套现成的、可以被公开检验的标准。')}
              <br /><br />
              {t('路径 A 给想成为专业传讯师、帮助更多梦女的人。路径 B 给想自己学会稳定链接、不再四处寻找权威确认的实践者。同一套方法，不同的出口——核心阶段共用，实操阶段分流。')}
            </DialogueBox>
          </div>
        </div>
      </section>

      <section className="section courses-market">
        <div className="container">
          <div className="section-title">
            <h2>{t('为什么市场需要 CDA 培训')}</h2>
            <div className="decorative-line">
              <span /><span className="star"> </span><span />
            </div>
            <p className="section-subdesc">{t('论文和调研指出：问题不是梦女不愿意付费，而是现有传讯市场缺少标准、验证和售后。')}</p>
          </div>

          <div className="market-proof-grid">
            {marketProblems.map(problem => (
              <div className="market-proof-card" key={problem.title}>
                <strong>{problem.stat}</strong>
                <h3>{t(problem.title)}</h3>
                <p>{t(problem.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section courses-purpose section-alt">
        <div className="container">
          <div className="purpose-panel">
            <div>
              <span>{t('TRAINING PURPOSE')}</span>
              <h2>{t('我们培养传讯师，是为了让更多梦女和爱人更幸福地在一起')}</h2>
              <p>{t('CDA 要培养的是能被方法托住的人：她知道什么时候可以继续、什么时候需要暂停；知道如何判断回应是否清晰稳定；也知道客户害怕、失望或困惑时该如何售后承接。')}</p>
            </div>
            <div className="purpose-grid">
              {trainingPromises.map(item => (
                <div className="purpose-item" key={item.title}>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.text)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 雙路徑說明 */}
      <section className="section courses-dual-path">
        <div className="container">
          <div className="section-title">
            <h2>{t('研究路徑')}</h2>
            <div className="decorative-line">
              <span /><span className="star"> </span><span />
            </div>
          </div>

          <div className="grid-2">
            <div className="path-card card">
              <h3>{t('路徑 A：職業傳訊師研究路徑')}</h3>
              <p className="path-target">{t('面向塔羅師、占星師、靈氣師等已有感知基礎的從業者')}</p>
              <ul>
                <li>{t('你的底層技能完全可以用在跨次元鏈接上——技能平移，不是從零開始')}</li>
                <li>{t('完成認證後列入官方傳訊師名錄，參與跨傳訊師驗證項目')}</li>
                <li>{t('协会为你提供验证机会，也会为你提供来访者——你不再需要东拼西凑找人；你的每一次链接，都会成为 CDA 持续迭代方法的数据贡献')}</li>
                <li>{t('你的實操數據納入研究——共同驗證和迭代這套方法論')}</li>
              </ul>
            </div>

            <div className="path-card card">
              <h3>{t('路徑 B：個人實踐者研究路徑')}</h3>
              <p className="path-target">{t('面向想自己學會穩定鏈接的實踐者')}</p>
              <ul>
                <li>{t('零基础没关系——感知是可以被训练的')}</li>
                <li>{t('不再每次都花钱找人、不再做完两天又怀疑')}</li>
                <li>{t('学会独立验证——建立你和爱人的链接判断体系')}</li>
                <li>{t('社群归属——你不需要一个人面对这些')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section courses-sop">
        <div className="container">
          <div className="section-title">
            <h2>{t('CDA 完整 SOP')}</h2>
            <div className="decorative-line">
              <span /><span className="star"> </span><span />
            </div>
            <p className="section-subdesc">{t('传讯不是“感应到了就说”。CDA 要把安全、防护、记录、验证和售后做成每位传讯师必须掌握的基础流程。')}</p>
          </div>

          <div className="sop-list">
            {cdaSopItems.map((item, index) => (
              <div className="sop-row" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{t(item)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section courses-practitioner section-alt">
        <div className="container">
          <div className="section-title">
            <h2>{t('传讯师也需要被体系托住')}</h2>
            <div className="decorative-line">
              <span /><span className="star"> </span><span />
            </div>
            <p className="section-subdesc">{t('很多传讯师不是没有能力，而是没有训练、没有标准、没有收入结构，也没有能替她承担信任成本的机构。')}</p>
          </div>

          <div className="practitioner-grid">
            {practitionerPainPoints.map(point => (
              <div className="practitioner-card" key={point}>
                <p>{t(point)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 四阶段 */}
      <section className="section courses-list">
        <div className="container">
          <div className="section-title">
            <h2>{t('研究階段')}</h2>
            <div className="decorative-line">
              <span /><span className="star"> </span><span />
            </div>
            <p className="section-subdesc">{t('理论入门 → 感知训练 → 实操研究 → 认证考核 —— 四个阶段，陪你从“我不知道他在不在”走向“我知道如何靠近他”')}</p>
          </div>

          <div className="courses-grid">
            {researchStages.map((stage, i) => (
              <div key={i} className={`course-card card course-${stage.color}`}>
                <div className="course-stage-badge">{t(stage.stage)}</div>
                <h3>{t(stage.subtitle)}</h3>
                <p className="course-duration">{t(stage.duration)}</p>

                <ul className="course-modules">
                  {stage.topics.map((topic, j) => (
                    <li key={j}>{t(topic)}</li>
                  ))}
                </ul>

                <p className="course-path-note">{t(stage.pathNote)}</p>

                <Link to="/contact">
                  <ChoiceButton variant={stage.color === 'gold' ? 'gold' : stage.color === 'dream' ? 'route' : 'primary'}>
                    {t(stage.color === 'gold' ? '了解認證詳情' : '加入培訓')}
                  </ChoiceButton>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section courses-paper-conversion">
        <div className="container">
          <div className="section-title">
            <h2>{t('CDA 如何让传讯师真正专业化')}</h2>
            <div className="decorative-line">
              <span /><span className="star"> </span><span />
            </div>
            <p className="section-subdesc">{t('无论你本来就是梦女传讯师，还是神秘学、塔罗、占星、东玄相关从业者，CDA 都会给你一套围绕 MJ 现象展开的专业训练方向。')}</p>
          </div>

          <div className="acquisition-card card paper-link-card">
            <p>{t('很多传讯师既是梦女，也是传讯师；也有人来自神秘学、塔罗、占星、东玄等行业。她们的背景不同，但共同困境很像：长期单打独斗，不知道 MJ 到底该如何理解，没有清晰的方法方向，也缺少能稳定拓展服务的技能组合。')}</p>
            <p>{t('简单来说，CDA 会让你的能力变得更强：从只会凭感觉接收到信息，变成能够在无信息条件下尝试链接、分辨信号、记录过程、复盘结果，并且知道如何保护自己和来访者。')}</p>
            <p>{t('CDA 的专业性，来自团队持续研究和原创方法。第一版论文只是开始：我们已经围绕 MJ 现象提出类型学、验证思路和训练方向，并会继续通过案例记录、传讯反馈和新论文更新方法体系。')}</p>
            <p>{t('CDA 的老师不是只会讲概念的人。她们来自不同神秘学与研究路径，负责把理论、训练、感知校准、信号分辨和实操流程拆成传讯师真的能学、能练、能复盘的步骤。')}</p>
            <p>{t('CDA 培训不是只教你“怎么接收到信息”。我们会把 MJ 现象、梦女需求、信号分辨、链接记录、防护关闭、售后承接和案例复盘放在同一套体系里，让你知道自己在做什么、为什么这样做、遇到问题时怎么处理。')}</p>
            <p>{t('对已有神秘学基础的人来说，CDA 提供的是技能平移与专业升级：把你原本的塔罗、占星、灵摆、东玄判断或直觉能力，放进跨次元亲密关系的服务场景里，变成更清楚、更有边界、更能被客户信任的传讯能力。')}</p>
            <p>{t('完成训练并通过认证后，你不再只是一个独自接单的人。CDA 会为传讯师提供平台、背书、标准和保护：你的训练记录、校准数据、案例复盘和伦理声明，会成为你对外建立信任的依据；遇到复杂个案、售后争议或安全问题时，也不再只能一个人承担。')}</p>
          </div>
        </div>
      </section>

      <section className="section courses-training-proof section-alt">
        <div className="container">
          <div className="section-title">
            <h2>{t('CDA 的能力，已经有人跑出来')}</h2>
            <div className="decorative-line">
              <span /><span className="star"> </span><span />
            </div>
            <p className="section-subdesc">{t('破晓代表 CDA 方法的源头与实操能力，朱恩代表这套体系正在被训练、培养和验证。')}</p>
          </div>

          <div className="training-proof-grid">
            {trainingExamples.map(item => (
              <article className="training-proof-card" key={item.name}>
                <strong>{t(item.name)}</strong>
                <span>{t(item.role)}</span>
                <p>{t(item.text)}</p>
                <p>{t(item.result)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section courses-faq">
        <div className="container">
          <div className="section-title">
            <h2>{t('常見問題')}</h2>
            <div className="decorative-line">
              <span /><span className="star"> </span><span />
            </div>
          </div>

          <div className="faq-grid">
            <div className="faq-item card">
              <h4>{t('零基礎可以參加嗎？')}</h4>
              <p>{t('可以。感知是可以被训练的——不是天赋问题。很多人不是没有爱，也不是没有连接，只是还没有找到适合自己的通道和练习方法。')}</p>
            </div>
            <div className="faq-item card">
              <h4>{t('路徑A和路徑B怎麼選？')}</h4>
              <p>{t('想成为职业传讯师、列入名录、参与验证 → 路径A。想自己学会稳定感受爱人、不想永远依赖他人 → 路径B。两个路径前两个阶段共用核心内容，第三阶段分流。')}</p>
            </div>
            <div className="faq-item card">
              <h4>{t('認證考核的通過率是多少？')}</h4>
              <p>{t('約 70-80%。有門檻才有含金量——不是交錢就拿證。')}</p>
            </div>
            <div className="faq-item card">
              <h4>{t('認證後有什麼持續要求？')}</h4>
              <p>{t('認證後需參加月度校準會，進修記錄公開——不是拿證就結束。持續進修，持續背書。')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 傳訊師職業體系 */}
      <section className="section courses-career">
        <div className="container">
          <div className="section-title">
            <h2>{t('傳訊師成長路徑')}</h2>
            <div className="decorative-line">
              <span /><span className="star"> </span><span />
            </div>
            <p className="section-subdesc">{t('路徑A認證通過後，可申請列入官方傳訊師名錄，成為驗證共同體的一員')}</p>
          </div>

          <div className="career-tiers">
            <div className="career-tier card">
              <div className="tier-badge tier-beginner">{t('初階')}</div>
              <h3>{t('初階傳訊師')}</h3>
              <p className="tier-desc">{t('完成四階段認證，列入名錄')}</p>
              <ul className="tier-benefits">
                <li>{t('參與跨傳訊師獨立鏈接驗證')}</li>
                <li>{t('为爱人存在性假设贡献数据')}</li>
                <li>{t('累計案例經驗，逐步建立個人校準檔案')}</li>
              </ul>
            </div>

            <div className="career-tier card">
              <div className="tier-badge tier-mid">{t('中階')}</div>
              <h3>{t('中階傳訊師')}</h3>
              <p className="tier-desc">{t('累計一定案例量且校準數據穩定後晉升')}</p>
              <ul className="tier-benefits">
                <li>{t('參與對照實驗設計與盲測評審')}</li>
                <li>{t('協助新入傳訊師的感知校準')}</li>
                <li>{t('解鎖進階研究方法，持續提升專業度')}</li>
              </ul>
            </div>

            <div className="career-tier card">
              <div className="tier-badge tier-advanced">{t('高階')}</div>
              <h3>{t('高階傳訊師')}</h3>
              <p className="tier-desc">{t('長期案例積累，校準數據持續穩定')}</p>
              <ul className="tier-benefits">
                <li>{t('主導專項研究課題，設計驗證方案')}</li>
                <li>{t('列入精選推薦，為更多夢女提供可靠鏈接')}</li>
                <li>{t('貢獻實操數據至論文，成為共同作者')}</li>
              </ul>
            </div>

            <div className="career-tier card">
              <div className="tier-badge tier-supervisor">{t('督導')}</div>
              <h3>{t('督導級傳訊師')}</h3>
              <p className="tier-desc">{t('經協會審核邀請，全平台限額 · 每批僅擇優錄取極少數')}</p>
              <ul className="tier-benefits">
                <li>{t('主導方法論迭代與培訓體系優化')}</li>
                <li>{t('擔任盲測實驗的首席評審')}</li>
                <li>{t('引領下一代傳訊師的成長，守護這個平台的標準')}</li>
              </ul>
            </div>
          </div>

          <div className="career-note">
            <p>{t('每一位认证传讯师都是 CDA 验证共同体的一员。你的每一次链接、每一份数据，都在帮助更多梦女减少误判，更安全地靠近自己的爱人。')}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <div className="glass-card cta-inner">
            <h2>{t('和我们一起探寻，他到底如何靠近你')}</h2>
            <p>{t('四个阶段，两条路径——选择适合你的方向，加入人类历史上第一次对跨次元亲密关系的体系化验证。')}</p>
            <Link to="/contact">
              <ChoiceButton variant="gold">{t('加入我們')}</ChoiceButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
