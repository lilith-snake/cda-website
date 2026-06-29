import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      <div className="footer-decor">
        <span className="decor-star">&#10023;</span>
        <span className="decor-line"></span>
        <span className="decor-heart">&#9825;</span>
        <span className="decor-line"></span>
        <span className="decor-star">&#10023;</span>
      </div>

      <div className="footer-content container">
        <div className="footer-brand">
          <span className="footer-logo">香港CDA</span>
          <h3>香港CDA · 黎輝跨次元研究所協會</h3>
          <p>Cross-Dimensional Communication Association</p>
          <p className="footer-hk">香港 · 版權所有 © 2026 黎輝跨次元研究所協會</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>{t('導航')}</h4>
            <Link to="/">{t('首頁')}</Link>
            <Link to="/about">{t('關於')}</Link>
            <Link to="/courses">{t('課程')}</Link>
            <Link to="/contact">{t('聯繫')}</Link>
          </div>
          <div className="footer-col">
            <h4>{t('服務')}</h4>
            <Link to="/mysticism">{t('星界智慧')}</Link>
            <Link to="/dream-girl">{t('傳訊師名錄')}</Link>
            <Link to="/communication">{t('傳訊服務')}</Link>
          </div>
          <div className="footer-col">
            <h4>{t('聯繫')}</h4>
            <a href="mailto:contact@cda-hk.xyz">contact@cda-hk.xyz</a>
            <a href="#">{t('小紅書')}</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 香港CDA · 黎輝跨次元研究所協會</p>
          <p className="footer-dim">{t('✦ 跨越次元的界限，連接你我的心靈 ✦')}</p>
        </div>
      </div>
    </footer>
  )
}
