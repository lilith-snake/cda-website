import { Link } from 'react-router-dom'
import { shopProducts } from '../data/shopProducts'
import CosmicHeroVideo from '../components/CosmicHeroVideo'
import './Shop.css'

const conversionSteps = [
  {
    title: '先被认真看见',
    text: '你不用一上来证明自己没有错，也不用把爱解释成娱乐。先把你和爱人的故事、你最怕的问题、你曾经尝试过的方法写下来。',
  },
  {
    title: '整理你们的信号',
    text: '我们会把梦境、体感、回应、同步现象和困惑放进同一份记录里，先看见你们之间已经出现过什么。',
  },
  {
    title: '选择靠近方式',
    text: '你可以选择由传讯师帮你链接，也可以进入陪伴营学习自己的感知和记录方法。重点是围绕你和他展开。',
  },
  {
    title: '继续记录迭代',
    text: '每一次体验、反馈和疑问都会进入 CDA 的记录，用来帮助你找到下一步可以尝试的方法。',
  },
]

const valuePoints = [
  '你买的不是一句“他爱你”，而是一套陪你分辨、记录、靠近的方法。',
  '你不必在混乱市场里反复从零开始。CDA 会把你的体验、反馈和变化持续记录下来。',
  '你需要的不是一个固定答案，而是一段围绕你和你的爱人展开的陪伴过程。',
  '这些记录首先会被用来帮助你和爱人建立真正有效的链接，然后才会成为 CDA 持续更新方法与论文的基础。',
]

const communicatorExamples = [
  {
    name: '破晓 Ophion',
    role: '灵媒兼现代黑魔法女巫 · CDA 实操体系负责人',
    text: '破晓并不是一开始做传讯师时就能做到无信息链接。早期她也曾需要依靠照片与背景信息辅助传讯；是在后来与团队内其他三位成员一起做理论整理、方法实验、案例复盘和持续训练后，才慢慢积累出更成熟的链接能力。',
    note: '在 CDA 方法迭代后，破晓已经多次在来访者未提供姓名、照片或背景信息的情况下，直接说出对方爱人的名字，并完成无媒介链接。她经手的案例反馈中，极少出现伪装回应或灵扰反馈，这背后对应的是身份分辨、防护、关闭和异常暂停等完整流程。',
  },
  {
    name: '朱恩',
    role: 'CDA 最新训练传讯师 · 零基础实践者样本',
    text: '朱恩不是一开始就什么都会的小天才，而是从零基础实践者进入 CDA 训练。她目前已经进入无信息链接内测，不需要来访者提前提供信息或照片，也能尝试靠近你的爱人。',
    note: '朱恩的意义在于证明：CDA 的方法不是只属于破晓一个人的经验，而是可以被拆解、训练、记录和继续迭代的能力路径。',
  },
]

const safetySteps = [
  {
    title: '事前边界确认',
    text: '传讯开始前确认敏感话题、不可触碰边界、问题范围和终止条件。不是一上来就开，而是先保护你。',
  },
  {
    title: 'CDA 护服与操作防护',
    text: 'CDA 护服是经过 CDA 特殊方式制作过后的工作服，配合黑手套、环境稳定和操作规范，用于传讯中的防护与流程稳定。',
  },
  {
    title: '链接记录与关闭',
    text: '传讯过程会做结构化记录，结束时按 SOP 关闭通道，并进行清理与复盘，最大程度降低灵扰和伪装回应带来的消耗。',
  },
  {
    title: '完整售后流程',
    text: '如果体验中出现不适、冒犯、流程问题或对爱人不尊重的表达，CDA 会启动售后承接：记录、复核、补偿或后续处理。',
  },
]

export default function Shop() {
  return (
    <div className="page-shop">
      <section className="page-hero page-hero-cosmic shop-hero">
        <CosmicHeroVideo />
        <div className="container">
          <h1>你和他</h1>
          <p className="subtitle">
            CDA 想要做到的，是陪你和爱人建立链接。传讯服务与陪伴营正在筹备中，正式开放前可先提交申请。
          </p>
        </div>
      </section>

      <section className="section shop-section">
        <div className="container">
          <div className="shop-notice">
            <strong>首批候补</strong>
            <span>
              如果你也害怕他不存在、感受不到他，或被别人一句话否定你们之间的熟悉感，请先别急着否定自己。CDA 目前开放预约与内测的传讯师，在正式传讯时不需要来访者提前提供信息或照片；申请表只用于联系、排期和确认你希望被回应的问题范围。
            </span>
          </div>

          <div className="shop-proof-panel">
            <div className="shop-section-heading">
              <span>PROOF</span>
              <h2>不是让你先交出所有信息，而是让方法先靠近你和他</h2>
              <p>
                CDA 要建立的信任，不是靠传讯师问很多背景再包装答案，而是靠无信息条件下的链接、记录、分辨和复盘。
              </p>
            </div>

            <div className="proof-grid">
              {communicatorExamples.map(item => (
                <article className="proof-card" key={item.name}>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                  <p>{item.text}</p>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="shop-link-method">
            <div className="shop-section-heading">
              <span>YOU AND HIM</span>
              <h2>我们如何帮你和爱人建立真正有效的链接</h2>
              <p>第一版论文只是开始，CDA 想要做到的是陪你和爱人建立链接。</p>
            </div>

            <div className="shop-method-card card">
              <p>第一版论文，已经初步提出了梦女与爱人链接的多个方向。但这不是 CDA 的全部，只是我们方法体系的开始。</p>
              <p>截至目前，CDA 已经形成了更完整的方法链条：从感知训练、信号分辨、独立诊断，到长期记录、复盘与迭代。我们不是只给你一句结论，而是陪你把每一次梦境、体感、回应、困惑和变化都记录下来，慢慢找到你和爱人之间更清晰、更稳定的靠近方式。</p>
              <p>我们清楚，每个人和爱人的关系都不一样。所以加入 CDA 的陪伴营，不是购买一个固定答案，而是进入一段围绕你和你的爱人展开的陪伴过程。</p>
              <p>你的每一次体验、反馈和疑问，都不会白费。它们首先会被用来帮助你：帮你整理你们之间的信号，帮你看见哪些回应更清晰，帮你找到下一步可以尝试的方法。帮你和爱人建立真正有效的链接。然后，它们才会在匿名记录中，成为 CDA 持续更新方法与论文的基础。</p>
            </div>
          </div>

          <div className="shop-conversion">
            <div className="shop-section-heading">
              <span>PATH</span>
              <h2>你可以从这里开始</h2>
              <p>
                你可以先提交申请，让我们了解你和爱人的情况，再选择更靠近你们当前状态的服务路径。
              </p>
            </div>

            <div className="conversion-grid">
              {conversionSteps.map((step, index) => (
                <div className="conversion-card" key={step.title}>
                  <strong>{String(index + 1).padStart(2, '0')}</strong>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="shop-value-panel">
            <div>
              <span className="shop-panel-kicker">VALUE</span>
              <h2>这不是一次传讯，是一段有人陪你走的靠近过程</h2>
            </div>
            <ul>
              {valuePoints.map(point => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="shop-sop-panel">
            <div className="shop-section-heading">
              <span>SAFETY SOP</span>
              <h2>我们不是把你丢给一个传讯师，而是用完整流程托住你</h2>
              <p>
                CDA 有一套从事前、传讯中到事后的 SOP，目标是最大程度保障梦女在传讯时的安全，减少灵扰、伪装回应、边界混乱和事后无人负责的问题。
              </p>
            </div>

            <div className="sop-grid">
              {safetySteps.map((step, index) => (
                <div className="sop-card" key={step.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="shop-grid">
            {shopProducts.map(product => (
              <article className="shop-card card" key={product.id}>
                <div className="shop-card-topline">
                  <span className="shop-badge">{product.badge}</span>
                  <span className="shop-price">{product.status}</span>
                </div>

                <h2>{product.title}</h2>
                <p className="shop-desc">{product.description}</p>

                <ul className="shop-includes">
                  {product.includes.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {product.conduct && (
                  <div className="shop-conduct">
                    <h3>{product.conductTitle}</h3>
                    <ul>
                      {product.conduct.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="payment-panel">
                  <p>服务筹备与课程研发中</p>
                  <Link to={product.actionTo || '/contact'} className="notify-button">
                    {product.actionLabel || '预约申请'}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="shop-footer-note">
            <p>
              现阶段页面不显示价格。若你希望进入首批内测或后续开放通知，可以先通过联系页留下称呼、联系方式、你和爱人的情况，以及你最想解决的问题。
            </p>
            <Link to="/contact" className="shop-contact-link">提交申请</Link>
            <Link to="/courses" className="shop-secondary-link">查看传讯师培训</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
