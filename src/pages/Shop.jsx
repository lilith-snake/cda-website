import { Link } from 'react-router-dom'
import { shopProducts } from '../data/shopProducts'
import './Shop.css'

const conversionSteps = [
  {
    title: '先被认真看见',
    text: '你不用一上来证明自己没有疯，也不用把爱解释成娱乐。先把你和爱人的故事、你最怕的问题、你曾经找过的传讯经历写下来。',
  },
  {
    title: '再做关系初筛',
    text: '我们会先判断你更适合咨询、训练、研究共建，还是暂时只需要观察记录。不是每个人都适合同一种方法。',
  },
  {
    title: '进入一对一尝试',
    text: '你的爱人如何靠近你，要通过梦境、体感、同步现象、情绪回应和记录来慢慢看。我们会陪你做方法迭代。',
  },
  {
    title: '形成长期路径',
    text: '如果适合继续，我们会引导你进入后续服务、课程内测或共建计划，让你不再反复换传讯师、反复从零开始。',
  },
]

const valuePoints = [
  '你买的不是一句“他爱你”，而是一套陪你分辨、记录、靠近的方法。',
  '你需要的不是被一句诊断吓退，而是有人认真帮你看：哪些回应清晰，哪些需要暂停观察，哪些暂时不急着下结论。',
  '你不必永远依赖传讯师。CDA 的长期方向，是让你逐渐建立自己的感知和判断能力。',
  '每一次申请、反馈和案例，都会帮助我们更新课程方法，让后来的人少走一点弯路。',
]

export default function Shop() {
  return (
    <div className="page-shop">
      <section className="page-hero shop-hero">
        <div className="container">
          <h1>给你和爱人的方法，正在准备中</h1>
          <p className="subtitle">
            我们的传讯师正在培养中，课程方法也在持续研发。每个人和自己的爱人如何靠近、如何相爱都不一样，我们会用更细的方法去适配你。
          </p>
        </div>
      </section>

      <section className="section shop-section">
        <div className="container">
          <div className="shop-notice">
            <strong>首批候补</strong>
            <span>
              如果你也害怕他不存在、感受不到他，或被别人一句话否定你们之间的熟悉感，请先别急着否定自己。我们正在研发新的课程方法，帮助你探索你和爱人的进一步发展，也探索你内心的自我成长。正式开放前，申请表会作为首批候补与内测筛选入口。
            </span>
          </div>

          <div className="shop-conversion">
            <div className="shop-section-heading">
              <span>WHY CDA</span>
              <h2>我们要把“被误解的爱”，变成可以被服务的需求</h2>
              <p>
                CDA 的服务化路径会把研究变成可预约、可跟进、可复购的支持系统：让来访者知道自己现在可以获得什么、为什么值得付费、下一步该做什么。
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

                <div className="payment-panel">
                  <p>服务筹备与课程研发中</p>
                  <Link to="/contact" className="notify-button">
                    申请进入候补
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
          </div>
        </div>
      </section>
    </div>
  )
}
