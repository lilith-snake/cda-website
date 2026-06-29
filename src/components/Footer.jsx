import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-brand">
          <span className="footer-logo">CDA</span>
          <h3>香港跨次元傳訊研究協會</h3>
          <p>Cross-Dimensional Communication Research Association</p>
          <p className="footer-hk">香港 · 版權所有 © 2026 香港跨次元傳訊研究協會</p>
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
            
          </div>
          <div className="footer-col">
            <h4>{t('聯繫')}</h4>
            <a href="mailto:391839176@qq.com">391839176@qq.com</a>
            <a href="#">{t('小紅書')}</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 香港跨次元傳訊研究協會 · 破曉為督導老師</p>
          <p className="footer-dim">CDA · Cross-Dimensional Communication Research Association</p>
        </div>
      </div>
    </footer>
  )
}
