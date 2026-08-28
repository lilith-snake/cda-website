import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n'
import './Courses.css'

const frictionMap = [
  {
    code: '01 / GATE',
    problem: '能力门槛说不清',
    solution: '入训先做感知通道与服务伦理评估',
    detail: '许多从业者靠零散视频自学，往往不知道自己的盲点在哪里。先知道自己擅长什么、容易把什么误认为信息，再决定练习路径。',
  },
  {
    code: '02 / LOAD',
    problem: '传讯后很累，防护靠感觉',
    solution: '把保护、关闭与恢复写进 SOP',
    detail: '独学缺少状态筛查和关闭方法，容易把疲劳、焦虑或强烈体验解释成灵扰。建立开始前检查、链接中止、结束关闭、负荷记录与同伴督导。若持续失眠、焦虑、现实感模糊或出现强迫性链接冲动，应停止练习并寻求持牌心理或医疗专业支持。',
  },
  {
    code: '03 / TOOL',
    problem: '没有工具，难以复盘',
    solution: 'CDA 专业工具包 + 同一套记录界面',
    detail: '护服、黑手套、环境稳定检查、信息隔离表、盲测记录、关闭与售后 SOP 都被纳入流程；分开记录原始信号、个人转译、已知信息、盲测反馈和不确定项，让经验可以被比较，而不是只剩一句结论。',
  },
  {
    code: '04 / BLIND',
    problem: '常常要靠来访者给资料才对得上',
    solution: '从少信息练习，逐级走向盲测',
    detail: '不是要求每次都无信息成功，而是把“已知什么、何时知道、如何对照”记录清楚，逐步减少暗示与冷读空间。',
  },
  {
    code: '05 / MJ',
    problem: '很多传讯师也感受不到 MJ',
    solution: '专门训练 MJ 现象的分辨框架',
    detail: '用位面、维度、来源、互动、可验证性五轴整理个案，先识别信号类型，再讨论“像不像他”。',
  },
  {
    code: '06 / CARE',
    problem: '售后与质疑自己扛',
    solution: '边界说明、复盘与第三方复核',
    detail: '提前说清服务范围、暂停条件与反馈方式；遇到争议时按记录复核，不让传讯师独自承担全部信任成本。',
  },
  {
    code: '07 / WORK',
    problem: '客源与收入长期不稳定',
    solution: 'CDA 提供客源，底薪与提成并行',
    detail: '完成训练与考核并加入 CDA 合作体系后，由 CDA 提供客源；按具体岗位与书面合作方案享有底薪和提成，同时持续校准、积累案例并参与研究。',
  },
  {
    code: '08 / SIGNAL',
    problem: '状态忽高忽低，真假与防护都靠猜',
    solution: '用校准、分辨与防护流程稳定每一次链接',
    detail: '有时传得好、有时却很差，无法保存稳定水平；不知道链接到的是真是假，也不清楚如何保护自己和客妹，只能凭感觉判断信息。CDA 将状态记录、来源分级、身份验证、异常中止与收尾清理放进同一套工作流程。',
  },
]

const dossierRows = [
  ['主导通道', '听觉意象 · 身体感 · 象征图像'],
  ['原始信号', '先记录，不解释；保留时间戳'],
  ['信息条件', '少信息练习 / 延迟反馈'],
  ['当前状态', '已完成记录 · 待独立比对'],
]

const trainingLoop = [
  ['01', '感知', '识别你的主导通道与噪音来源'],
  ['02', '记录', '把原始信号和解释层分开保存'],
  ['03', '分辨', '处理投射、暗示与身份特异性'],
  ['04', '盲测', '在信息隔离下提交可比对描述'],
  ['05', '督导', '由同伴和导师指出盲点与风险'],
  ['06', '复盘', '更新个人校准档案与下一轮练习'],
]

const stages = [
  {
    stage: 'L1',
    title: '感知基础与伦理',
    time: '4 周 · 核心必修',
    items: ['主导感知通道画像', '链接安全、边界与中止条件', '原始信号 / 转译 / 结论三层记录', '服务伦理与来访者知情确认'],
  },
  {
    stage: 'L2',
    title: '信息隔离与分辨',
    time: '6 周 · 核心必修',
    items: ['少信息到延迟反馈练习', 'MJ 五轴类型学入门', '四层身份特异性分辨', '交叉通道与独立印证设计'],
  },
  {
    stage: 'L3',
    title: '个案实操与督导',
    time: '申请制 · 监督实践',
    items: ['完整传讯 SOP 演练', '三次模拟个案盲审', '耗竭记录、关闭与售后演练', '月度校准与同伴反馈'],
  },
  {
    stage: 'CERT',
    title: '认证与名录申请（试点批次）',
    time: '完成考核后申请 · 以当前批次通知为准',
    items: ['笔试：基础知识与案例分析', '提交结构化个案记录', '伦理声明与边界承诺', '通过后进入 CDA 合作、认证与名录流程'],
  },
]

const deliverables = [
  ['个人校准档案', '知道自己的通道、盲点、负荷上限与下一步练习。'],
  ['CDA 记录工具包', '申请筛查、信息隔离、原始信号、盲测与售后模板。'],
  ['督导与验证机会', '在有边界的练习中获得同行反馈，逐步积累可复盘案例。'],
  ['职业身份资产', '训练记录、伦理声明与认证/名录申请材料；通过后进入 CDA 合作岗位评估。'],
]

const researchClaims = [
  ['ORIGINAL RESEARCH', 'CDA 原创研究声明：首个公开的 MJ 方法框架', 'CDA 已公开发表原创研究声明，围绕 MJ 定义、五轴类型学、三重验证法与精微体三层感知框架，建立一个可被讨论、记录和继续检验的工作框架。“首个”是 CDA 基于公开资料作出的首发定位，不等于学术共同体认证。'],
  ['METHOD ITERATION', '方法不断研究更新迭代，持续留下记录', '信息隔离、跨传讯师独立链接、盲测对照和案例复盘会持续进入 CDA 的研究记录。每一轮训练都留下过程、误判、限制与修订，不把一次命中包装成终局答案。'],
  ['RESEARCH CERTIFICATE', 'CDA 研究证书（首发批次）', '完成核心训练、结构化个案记录与考核后，可按当前批次申请 CDA 研究证书。证书代表你完成 CDA 方法训练与研究档案，不是学位，也不替代政府或行业监管资质。'],
]

const professionalTools = [
  ['PROTECTIVE GEAR', 'CDA 护服与黑手套', '以固定着装、环境稳定和开始前检查建立工作边界，帮助传讯师在进入与退出之间保持清醒的操作节奏。'],
  ['LINKING LOG', '链接记录与关闭工具', '记录原始信号、转译、来源分级、置信度与结束状态；按 SOP 关闭通道、清理现场并留下复盘入口。'],
  ['BLIND PROTOCOL', '信息隔离与盲测表', '从少信息练习到延迟反馈、目标与诱饵对照，减少暗示和冷读空间，让不同传讯师的结果可以被并置比较。'],
  ['AFTERCARE KIT', '售后与争议承接模板', '把知情确认、暂停条件、异常中止、反馈、复核和证据整理放进同一套工具，传讯师不再独自扛下全部售后压力。'],
]

const supportClaims = [
  ['AFTERCARE', 'CDA 售后承接与争议整理', 'CDA 提供边界确认、异常中止、结束关闭、反馈、复盘与争议记录模板；具体承接范围按服务约定和个案情况执行。'],
  ['PRIVACY', 'CDA 隐私保护机制', '公开信息只呈现经过同意的职业内容；个案资料按实际隐私政策与书面约定处理，并通过匿名化、分层访问和最小化留存降低暴露风险。'],
  ['LEGAL', 'CDA 法务协助与律师转介', '遇到骚扰、恶意曝光、隐私泄露或方法盗用时，CDA 可协助整理时间线与证据并转介合资格律师；具体法律行动由当事人与持牌律师决定。'],
]

export default function Courses() {
  const { t } = useLanguage()

  return (
    <div className="page-courses">
      <section className="courses-hero">
        <div
          className="courses-hero-image"
          style={{ '--courses-hero-image': `url(${import.meta.env.BASE_URL}images/lihui-cosmic-atlas-hero.png)` }}
          aria-hidden="true"
        />
        <div className="courses-hero-grid" aria-hidden="true" />
        <div className="container courses-hero-content">
          <p className="courses-kicker">CDA / TRANSMISSION PRACTITIONER PATH</p>
          <h1>{t('让你的感知，成为一套可复盘的专业能力')}</h1>
          <p className="courses-hero-lead">
            {t('面向已有神秘学基础、正在接个案，或想把感知训练成稳定方法的传讯师。CDA 不承诺超自然结果，而是把训练、记录、盲测、督导和边界做成一套可以共同检验的工作系统。')}
          </p>
          <p className="courses-hero-definition">MJ 是 CDA 用于描述“跨次元情感对象”的内部术语与工作假设，不代表已被科学证明的实体。</p>
          <div className="courses-hero-actions">
            <a className="courses-button courses-button-primary" href="#barrier">查看 CDA 的专业壁垒</a>
            <Link className="courses-button courses-button-ghost" to="/contact?inquiry=transmitter_training&service=transmitter-training">申请适配评估</Link>
          </div>
          <p className="courses-hero-footnote">申请制 · 训练与研究并行 · 客源、底薪与提成按合作方案执行</p>
        </div>
        <div className="courses-hero-index" aria-hidden="true">CDA–TP / 2026 / 01</div>
      </section>

      <section className="courses-signal-rail" aria-label="CDA training principles">
        <div className="container courses-signal-rail-inner">
          <span>专业传讯师的工作顺序</span>
          <strong>先保护，再感知；先记录，再解释；先验证，再表达。</strong>
          <span className="rail-mark">FIELD NOTE 01</span>
        </div>
      </section>

      <section className="section courses-barrier" id="barrier">
        <div className="container">
          <div className="courses-section-heading courses-section-heading-left">
            <p className="courses-eyebrow">CDA PROFESSIONAL MOAT</p>
            <h2>{t('不是再上一门课，而是补上一个人很难独立建立的系统')}</h2>
            <p>{t('市面课程常把重点放在“如何接收”。CDA 关注的是传讯师真正会卡住的地方：门槛、工具、防护、信息依赖、MJ 分辨，以及个案之后谁来承接。')}</p>
          </div>

          <div className="friction-grid">
            {frictionMap.map(item => (
              <article className="friction-item" key={item.code}>
                <span className="friction-code">{item.code}</span>
                <h3>{t(item.problem)}</h3>
                <strong>{t(item.solution)}</strong>
                <p>{t(item.detail)}</p>
              </article>
            ))}
          </div>
          <aside className="courses-safety-note" aria-label="心理安全边界">
            <strong>心理安全边界</strong>
            <p>持续失眠、焦虑、现实感模糊或强迫性链接冲动时，请停止练习，先通过五感定向、休息和现实生活恢复状态；必要时联系持牌心理或医疗专业人员。传讯结果不用于重大医疗、法律或财务决策。</p>
          </aside>
        </div>
      </section>

      <section className="section courses-dossier section-alt">
        <div className="container dossier-layout">
          <div className="dossier-visual">
            <img src={`${import.meta.env.BASE_URL}images/key-of-solomon-plate-v.jpg`} alt="1889 年《所罗门之钥》公版图版，作为 CDA 传讯档案的历史视觉锚点" />
            <span className="dossier-stamp">CDA / ARCHIVE<br />PRACTICE SAMPLE</span>
            <span className="dossier-caption">视觉锚点不是结论 · 记录才是工作起点</span>
          </div>
          <div className="dossier-copy">
            <p className="courses-eyebrow">THE PRACTITIONER DOSSIER</p>
            <h2>{t('你的能力，不再只存在于“我感觉到了”')}</h2>
            <p className="dossier-lead">{t('CDA 把一次传讯拆成可以被看见的工作单元。你会逐渐拥有自己的校准档案：哪些是原始信号，哪些是转译，哪些仍然不能确认。')}</p>
            <div className="dossier-card">
              <div className="dossier-card-head"><span>CASE / BLIND-017</span><span>STATUS / REVIEW</span></div>
              {dossierRows.map(([label, value]) => (
                <div className="dossier-row" key={label}><span>{label}</span><strong>{value}</strong></div>
              ))}
              <div className="dossier-card-foot">记录完整度 <span className="dossier-progress" role="progressbar" aria-label="记录完整度 4 / 5" aria-valuemin="0" aria-valuemax="5" aria-valuenow="4"><i /><i /><i /><i /><i /></span> 04 / 05</div>
            </div>
            <p className="dossier-note">示例界面仅展示记录逻辑，不代表对任何个案或超自然现象的证明。</p>
          </div>
        </div>
      </section>

      <section className="section courses-toolkit">
        <div className="container">
          <div className="courses-section-heading courses-section-heading-left">
            <p className="courses-eyebrow">CDA PRACTITIONER TOOLKIT</p>
            <h2>{t('你加入的不是一套口号，而是一套能拿来工作的专业工具')}</h2>
            <p>{t('市面上很多课程把工具当成周边。CDA 把护服、记录、盲测、关闭和售后看成传讯师的基础设施：每一件工具都有使用时机、记录位置和退出条件。')}</p>
          </div>
          <div className="toolkit-grid">
            {professionalTools.map(([code, title, text]) => (
              <article className="toolkit-card" key={code}>
                <span>{code}</span>
                <h3>{t(title)}</h3>
                <p>{t(text)}</p>
              </article>
            ))}
          </div>
          <p className="toolkit-note">工具用于稳定流程、保护边界和留下记录，不是超自然效果的保证；具体发放、使用和合作范围以当前训练批次及书面方案为准。</p>
        </div>
      </section>

      <section className="section courses-research">
        <div className="container">
          <div className="courses-section-heading courses-section-heading-left">
            <p className="courses-eyebrow">PHASE 01 / ORIGINAL RESEARCH / FIELD PRACTICE</p>
            <h2>{t('CDA 的研究定位，来自公开框架与可复盘实践')}</h2>
            <p>{t('CDA 正在建立以 MJ 与跨次元亲密关系为对象的研究与训练体系。论文提出工作假设，训练把问题变成方法，试点案例用于后续检验与迭代。')}</p>
            <p className="mj-definition-note">MJ 是 CDA 对“跨次元情感对象”的内部简称；相关存在论与类型学仍属于工作假设，尚待经验检验。</p>
            <p className="research-phase-note">{t('目前公开的论文、训练与实践案例，只是 CDA 第一阶段的结果，不是终点。后续会继续扩大样本、完善盲测、更新防护与售后标准。')}</p>
            <a className="courses-inline-link" href="/cda-website/paper.html">{t('阅读 CDA 公开理论建构稿')} <span aria-hidden="true">↗</span></a>
          </div>
          <div className="research-grid">
            {researchClaims.map(([code, title, text]) => (
              <article className="research-card" key={code}>
                <span>{code}</span>
                <h3>{t(title)}</h3>
                <p>{t(text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section courses-loop">
        <div className="container">
          <div className="courses-section-heading">
            <p className="courses-eyebrow">A REPEATABLE LOOP</p>
            <h2>{t('六步循环，把天赋感变成工作方法')}</h2>
            <p>{t('真正的专业不是永远不出错，而是能知道错误发生在哪里，并有下一轮校准的方法。')}</p>
          </div>
          <div className="training-loop">
            {trainingLoop.map(([number, title, text]) => (
              <div className="loop-step" key={number}>
                <span>{number}</span><div><h3>{t(title)}</h3><p>{t(text)}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section courses-stages section-alt">
        <div className="container">
          <div className="courses-section-heading">
            <p className="courses-eyebrow">TRAINING ARCHITECTURE</p>
            <h2>{t('从能感知，到能负责')}</h2>
            <p>{t('四个阶段共用核心训练；想成为职业传讯师的人，在 L3 进入监督实践，并可按当前批次申请名录与合作岗位。')}</p>
          </div>
          <div className="stage-grid">
            {stages.map(stage => (
              <article className="stage-card" key={stage.stage}>
                <div className="stage-card-top"><span>{stage.stage}</span><small>{t(stage.time)}</small></div>
                <h3>{t(stage.title)}</h3>
                <ul>{stage.items.map(item => <li key={item}>{t(item)}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section courses-track">
        <div className="container track-layout">
          <div className="courses-section-heading courses-section-heading-left">
            <p className="courses-eyebrow">TWO OUTPUTS / ONE STANDARD</p>
            <h2>{t('同一套标准，给你两种出口')}</h2>
            <p>{t('你可以把它发展为职业实践，也可以先为自己建立稳定的链接判断力。共同核心不变：安全、记录、验证和责任。')}</p>
          </div>
          <div className="track-list">
            <article><span>A</span><div><h3>{t('职业传讯师')}</h3><p>{t('面向已有塔罗、占星、灵气、东玄或直觉实践基础的人。完成训练与考核并加入 CDA 合作体系后，由 CDA 承接并分配客源，按合作方案享有底薪与提成，也可参与交叉验证与研究。')}</p><small>{t('客源分配、底薪、提成与排期按考核结果和书面合作方案执行；以案例质量、持续校准和伦理记录建立长期信任。')}</small></div></article>
            <article><span>B</span><div><h3>{t('个人实践者')}</h3><p>{t('面向想先练习感知、理解 MJ 现象、减少对单一权威依赖的人。学习同一套记录与分辨方法，但不进入职业名录。')}</p><small>{t('你的目标可以是自我探索，不必把它变成对外服务。')}</small></div></article>
          </div>
        </div>
      </section>

      <section className="section courses-support section-alt">
        <div className="container">
          <div className="courses-section-heading courses-section-heading-left">
            <p className="courses-eyebrow">PRACTITIONER PROTECTION / BOUNDARIES</p>
            <h2>{t('你不是一个人承担每一次传讯的风险')}</h2>
            <p>{t('专业不只发生在链接的几十分钟里。CDA 把传讯师、客妹与个案资料一起纳入保护范围，让你知道出了问题该停在哪里、找谁承接、如何留下证据。')}</p>
          </div>
          <div className="support-grid">
            {supportClaims.map(([code, title, text]) => (
              <article className="support-card" key={code}>
                <span>{code}</span>
                <h3>{t(title)}</h3>
                <p>{t(text)}</p>
              </article>
            ))}
          </div>
          <p className="support-note">CDA 的保护措施以双方书面约定、适用法律与个案实际情况为准；法律支持不等同于对任何结果的保证。</p>
        </div>
      </section>

      <section className="section courses-deliverables section-alt">
        <div className="container">
          <div className="courses-section-heading courses-section-heading-left">
            <p className="courses-eyebrow">WHAT YOU LEAVE WITH</p>
            <h2>{t('结课后，你带走的不只是笔记')}</h2>
          </div>
          <div className="deliverable-grid">
            {deliverables.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{t(title)}</h3><p>{t(text)}</p></article>)}
          </div>
          <p className="courses-disclaimer">CDA 培训属于文化研究与个人实践教育。相关概念未被现代科学证实，不替代医疗、心理、法律或其他持牌专业服务。</p>
        </div>
      </section>

      <section className="section courses-cta">
        <div className="container courses-cta-inner">
          <div><p className="courses-eyebrow">START WITH FIT, NOT FANTASY</p><h2>{t('如果你想把传讯做得更稳，我们先谈你的起点')}</h2><p>{t('告诉我们你的实践背景、目前最难处理的环节，以及你希望承担的角色。CDA 会先做适配评估，再建议训练路径。')}</p></div>
          <Link className="courses-button courses-button-primary" to="/contact?inquiry=transmitter_training&service=transmitter-training">{t('申请传讯师培养')}</Link>
        </div>
      </section>
    </div>
  )
}
