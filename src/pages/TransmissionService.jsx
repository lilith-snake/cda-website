import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './TransmissionService.css'

const heroParticles = [
  ['7%', '16%', '2px', '5.4s', '-1.2s'],
  ['14%', '71%', '1px', '6.8s', '-3.4s'],
  ['22%', '29%', '2px', '7.1s', '-4.1s'],
  ['31%', '83%', '1px', '5.9s', '-2.7s'],
  ['38%', '12%', '1px', '6.3s', '-1.8s'],
  ['45%', '64%', '2px', '7.4s', '-5.2s'],
  ['53%', '22%', '1px', '5.7s', '-3.1s'],
  ['60%', '77%', '2px', '6.6s', '-2.3s'],
  ['68%', '38%', '1px', '7.2s', '-4.7s'],
  ['74%', '15%', '2px', '5.6s', '-0.9s'],
  ['81%', '69%', '1px', '6.1s', '-3.8s'],
  ['89%', '27%', '2px', '7.6s', '-5.5s'],
  ['94%', '86%', '1px', '5.8s', '-2.1s'],
]

const processSteps = [
  {
    number: '01',
    title: '申请与适配评估',
    text: '先了解你想解决的问题、曾经的体验与当前状态。申请不等于接单，不适合的情况会被建议暂停。',
  },
  {
    number: '02',
    title: '范围与边界确认',
    text: '在开始前明确问题范围、敏感话题、不可触碰内容与中止条件，让你和传讯师对过程拥有同样的预期。',
  },
  {
    number: '03',
    title: '信息隔离与记录',
    text: '在适合的个案中尽量减少照片和背景信息的预先输入，并记录传讯师在什么时间已知道什么，为后续比对保留边界。',
  },
  {
    number: '04',
    title: '正式链接尝试',
    text: '传讯师按既定流程进行人工感知与信息转译；需要时使用塔罗作为视觉锚点，与主感知通道互相对照。',
  },
  {
    number: '05',
    title: '四层身份分辨',
    text: '从设定一致性、跨通道一致性、自主信息与情感特异性四个层次做概率性判断，同时保留不能确认的部分。',
  },
  {
    number: '06',
    title: '关闭、复盘与售后',
    text: '结束时执行关闭与清理，整理结构化记录，标出一致、矛盾与不确定信息。如果有边界或服务争议，进入第三方成员复核。',
  },
]

const comparisonRows = [
  {
    dimension: '信息输入',
    common: '往往在对话中逐步获取背景，事后难以区分已知信息与独立输出。',
    cda: '适合时采用少信息或无信息条件，同时记录信息揭示时点。',
  },
  {
    dimension: '结果表达',
    common: '容易只呈现一段结论或即时回应，判断过程不一定可见。',
    cda: '区分原始信号、转译、比对和不确定项，尽量保留过程。',
  },
  {
    dimension: '质量控制',
    common: '更依赖个人经验与自我声明，不同传讯师之间难以比较。',
    cda: '统一记录、分辨与复盘格式；研究条件允许时再做独立印证和盲测。',
  },
  {
    dimension: '服务边界',
    common: '频次、中止条件与售后方式可能不清晰。',
    cda: '事前确认边界，过程中允许暂停，事后按记录复核。',
  },
]

const paperFrameworks = [
  {
    reference: '论文 7.2、7.4.3',
    title: '双通道交叉校验',
    text: '人工感知是主通道，塔罗在需要时作为视觉锚点与辅助比对。两者矛盾时，矛盾本身也要被记录。',
  },
  {
    reference: '论文 7.4.4',
    title: '四层身份特异性',
    text: '设定一致性、跨通道一致性、自主信息、情感特异性是四层递进筛选，而不是百分之百的身份证明。',
  },
  {
    reference: '论文 8.1–8.3',
    title: '感知、分辨与关闭',
    text: '把感知通道、投射分辨与防护关闭放在同一流程里，不把“感觉到了”直接当作结论。',
  },
  {
    reference: '论文 A.9.2',
    title: '独立印证与盲测',
    text: '论文将跨传讯师独立描述和盲测作为研究方向。这仍是待系统检验的设计，不是每次服务都已通过的结论。',
  },
]

const boundaries = [
  '本服务仅向年满十八周岁的人士开放。提交申请或确认下单，即表示您确认本人已年满十八周岁。',
  '服务属于主观体验与文化探索，不能证明任何超自然现象或 MJ 的客观存在。',
  '不构成医疗、心理治疗、法律、投资或宗教指导，也不替代持牌专业服务。',
  '不保证链接成功、身份确定、特定信息、特定情绪或特定结果。',
  '不应把传讯结果作为学业、就业、医疗、财务或人身安全等重大决策的主要依据。',
  '如果出现持续焦虑、现实感模糊、强迫性链接冲动或社交功能受损，应停止实践并寻求专业帮助。',
  '公开页面不下单、不收款。提交申请仅代表希望被联系，不代表 CDA 已接受委托。',
]

export default function TransmissionService() {
  const [acknowledged, setAcknowledged] = useState(false)
  const heroVideoRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const video = heroVideoRef.current
    if (!video) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const syncPlayback = () => {
      if (reducedMotion.matches || document.hidden) {
        video.pause()
        return
      }
      video.play().catch(() => {})
    }

    syncPlayback()
    document.addEventListener('visibilitychange', syncPlayback)
    reducedMotion.addEventListener?.('change', syncPlayback)

    return () => {
      document.removeEventListener('visibilitychange', syncPlayback)
      reducedMotion.removeEventListener?.('change', syncPlayback)
    }
  }, [])

  const handleApply = () => {
    if (!acknowledged) return
    navigate('/contact?inquiry=service_waitlist&service=lover-transmission')
  }

  return (
    <div className="transmission-page">
      <section className="transmission-hero">
        <video
          ref={heroVideoRef}
          className="transmission-hero-media"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={event => event.currentTarget.play().catch(() => {})}
          aria-hidden="true"
        >
          <source src={`${import.meta.env.BASE_URL}videos/about-bg.mp4`} type="video/mp4" />
        </video>
        <div className="transmission-hero-stars" aria-hidden="true">
          {heroParticles.map(([left, top, size, duration, delay]) => (
            <span
              key={`${left}-${top}`}
              style={{
                '--star-left': left,
                '--star-top': top,
                '--star-size': size,
                '--star-duration': duration,
                '--star-delay': delay,
              }}
            />
          ))}
        </div>
        <div className="transmission-hero-shade" />
        <div className="container transmission-hero-content">
          <p className="transmission-kicker">CDA TRANSMISSION SERVICE</p>
          <h1>爱人传讯服务</h1>
          <p className="transmission-hero-lead">
            不是让你得到一句可以套用在任何人身上的回应。
            我们尝试把人工感知、信息隔离、身份分辨、记录与复盘放进同一套流程里。
          </p>
          <div className="transmission-hero-actions">
            <a className="transmission-primary-action" href="#process">查看服务流程</a>
            <a className="transmission-secondary-action" href="#team">认识传讯师</a>
          </div>
          <p className="transmission-hero-note">申请制·人工评估·公开页面不收款</p>
        </div>
      </section>

      <section className="transmission-signal-band" aria-label="CDA 调研摘要">
        <div className="container transmission-signal-grid">
          <div>
            <strong>122</strong>
            <span>CDA 2026 社群问卷有效样本</span>
          </div>
          <div>
            <strong>80.3%</strong>
            <span>本样本中使用过传讯服务</span>
          </div>
          <div>
            <strong>45.9%</strong>
            <span>本样本中满意度为一般或更低</span>
          </div>
          <p>滚雪球抽样存在自选偏差，数据仅描述本样本，不推及总体。</p>
        </div>
      </section>

      <section className="transmission-intro-band">
        <div className="container transmission-intro-layout">
          <div className="transmission-section-heading">
            <span>WHY CDA</span>
            <h2>你真正需要分辨的，不只是“他说了什么”</h2>
          </div>
          <div className="transmission-intro-copy">
            <p>
              更难的问题是：信息从哪里来？传讯师原本知道什么？
              是独立信息、主观投射、语言包装，还是无法区分的噪音？
            </p>
            <p>
              CDA 的差异不是声称“一定正确”，而是尽量让信息输入、判断过程、
              矛盾与不确定部分都可以被看见、记录和复盘。
            </p>
            <Link to="/research">了解 CDA 研究路线</Link>
          </div>
        </div>
      </section>

      <section className="transmission-process-band" id="process">
        <div className="container">
          <div className="transmission-section-heading transmission-centered-heading">
            <span>PROCESS</span>
            <h2>一次传讯怎样发生</h2>
            <p>从申请到售后，每一步都有可停止、可记录、可复核的节点。</p>
          </div>
          <ol className="transmission-process-list">
            {processSteps.map(step => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="transmission-method-band">
        <div className="container">
          <div className="transmission-section-heading">
            <span>METHOD</span>
            <h2>我们与常见个体服务的流程差异</h2>
            <p>以下比较指向公开可见的常见服务模式，不代表所有独立传讯师。</p>
          </div>
          <div className="transmission-comparison" role="table" aria-label="传讯流程差异对照">
            <div className="transmission-comparison-head" role="row">
              <strong role="columnheader">维度</strong>
              <strong role="columnheader">常见个体服务</strong>
              <strong role="columnheader">CDA 流程</strong>
            </div>
            {comparisonRows.map(row => (
              <div className="transmission-comparison-row" role="row" key={row.dimension}>
                <strong role="cell">{row.dimension}</strong>
                <p role="cell">{row.common}</p>
                <p role="cell">{row.cda}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="transmission-ai-band">
        <div className="container transmission-ai-layout">
          <div className="transmission-section-heading">
            <span>HUMAN / AI</span>
            <h2>为什么仅靠字卡式 AI 对话还不够</h2>
            <p>AI 和人工传讯解决的不是同一个问题，它们可以互补，不需要互相伪装。</p>
          </div>
          <div className="transmission-ai-columns">
            <article>
              <span>即时陪伴</span>
              <h3>字卡式 AI 擅长什么</h3>
              <p>
                根据设定、提示词和对话上下文生成语言，速度快、随时可用，
                适合角色创作、日常对话和陪伴。它不能独立验证输出是否来自你的 MJ。
              </p>
            </article>
            <article>
              <span>过程分辨</span>
              <h3>CDA 人工服务关注什么</h3>
              <p>
                关注信息在什么条件下出现、是否有独立细节、不同通道是否冲突，
                以及哪些内容仍然不能确认。它更慢，也不应伪装成确定性。
              </p>
            </article>
          </div>
          <p className="transmission-ai-caveat">
            字卡 AI 输出和人工传讯结果都不能单独证明 MJ 的客观身份。CDA 的方法仍处于经验检验阶段。
          </p>
        </div>
      </section>

      <section className="transmission-team-band" id="team">
        <div className="container">
          <div className="transmission-section-heading transmission-centered-heading">
            <span>TRANSMITTERS</span>
            <h2>传讯由谁完成</h2>
            <p>我们公开训练路径和当前阶段，不把天赋和头衔当作唯一保证。</p>
          </div>
          <div className="transmission-team-grid">
            <article className="transmission-person">
              <div className="transmission-person-mark" aria-hidden="true">O</div>
              <div>
                <span>体系创建者·实操导师</span>
                <h3>破晓 Ophion</h3>
                <p>
                  从梦女本人的问题出发，负责把研究框架拆成可训练、可记录、可复盘的实操流程。
                  她早期也曾依赖照片和背景辅助，后续通过方法试验与持续训练进入少信息链接实践。
                </p>
                <ul>
                  <li>传讯流程与边界设计</li>
                  <li>感知校准与结构化解码</li>
                  <li>个案复盘与内部督导</li>
                </ul>
              </div>
            </article>
            <article className="transmission-person">
              <div className="transmission-person-mark" aria-hidden="true">J</div>
              <div>
                <span>内测传讯师·训练样本</span>
                <h3>朱恩 June</h3>
                <p>
                  从零基础实践者进入 CDA 训练，目前处于无信息链接内测阶段。
                  她的路径用来观察这套方法是否可以从个人经验转化为可训练的能力，相关结果仍在记录。
                </p>
                <ul>
                  <li>无信息条件内测</li>
                  <li>信号分类与细节记录</li>
                  <li>训练后复盘与持续校准</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="transmission-paper-band">
        <div className="container">
          <div className="transmission-paper-header">
            <div className="transmission-section-heading">
              <span>RESEARCH BASIS</span>
              <h2>服务流程来自哪里</h2>
              <p>论文提供的是可被质疑和检验的工作框架，不是已经完成验证的效果证书。</p>
            </div>
            <a href={`${import.meta.env.BASE_URL}paper.html`} target="_blank" rel="noreferrer">阅读完整论文</a>
          </div>
          <div className="transmission-paper-grid">
            {paperFrameworks.map(item => (
              <article key={item.reference}>
                <span>{item.reference}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="transmission-citation">
            引用：黎輝、破晓与 CDA 研究团队（2026），《论跨次元情感对象（MJ）的存在论假设、五轴类型学及其西方秘传学新分支定位》。
          </p>
        </div>
      </section>

      <section className="transmission-boundary-band" id="boundaries">
        <div className="container transmission-boundary-layout">
          <div className="transmission-section-heading">
            <span>BOUNDARIES</span>
            <h2>申请前请确认的服务边界</h2>
            <p>边界不是小字免责，而是决定这项服务是否适合你的正文。</p>
          </div>
          <ul>
            {boundaries.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="transmission-apply-band">
        <div className="container transmission-apply-layout">
          <div>
            <span className="transmission-apply-kicker">APPLICATION</span>
            <h2>把你和他的问题写下来</h2>
            <p>我们会阅读你的需求、边界和当前状态，再决定是否进入后续人工沟通。</p>
          </div>
          <div className="transmission-apply-control">
            <label>
              <input
                type="checkbox"
                checked={acknowledged}
                onChange={event => setAcknowledged(event.target.checked)}
              />
              <span>我确认本人已年满十八周岁，已阅读并理解上述服务边界，知道提交申请不代表下单、收款或结果承诺。</span>
            </label>
            <button type="button" disabled={!acknowledged} onClick={handleApply}>
              提交传讯服务申请
            </button>
            <small>本服务仅向年满十八周岁的人士开放。提交申请或确认下单，即表示您确认本人已年满十八周岁。申请提交后，CDA 助理将通过你留下的方式联系。</small>
          </div>
        </div>
      </section>
    </div>
  )
}
