import { Link } from 'react-router-dom'
import { shopProducts } from '../data/shopProducts'
import './Shop.css'

export default function Shop() {
  return (
    <div className="page-shop">
      <section className="page-hero shop-hero">
        <div className="container">
          <h1>服务正在准备中</h1>
          <p className="subtitle">
            我们的传讯师正在培养中，课程方法也在持续研发，以更好地适配大家的真实需求。
          </p>
        </div>
      </section>

      <section className="section shop-section">
        <div className="container">
          <div className="shop-notice">
            <strong>准备中</strong>
            <span>
              我们正在研发新的课程方法，帮助你得到真正需要的支持，探索你和爱人的进一步发展，也探索你内心的自我成长。正式公布后，页面将更新服务范围、购买方式与后续确认流程。
            </span>
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
                    联系登记
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="shop-footer-note">
            <p>
              现阶段页面仅作服务信息展示。若你希望后续收到开放通知，可以先通过联系页留下称呼、联系方式和感兴趣的服务项目。
            </p>
            <Link to="/contact" className="shop-contact-link">联系登记</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
