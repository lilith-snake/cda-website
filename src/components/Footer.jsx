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
          <h3>{t('香港 · 跨次元傳訊研究協會')}</h3>
          <p>Hong Kong Cross-Dimensional Communication Association</p>
          <p className="footer-hk">{t('香港 · 版權所有 © 2026 香港 · 跨次元傳訊研究協會')}</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>{t('導航')}</h4>
            <Link to="/">{t('首頁')}</Link>
            <Link to="/about">{t('關於')}</Link>
            <Link to="/courses">{t('培訓驗證')}</Link>
            <Link to="/contact">{t('聯繫')}</Link>
          </div>
          <div className="footer-col">
            <h4>{t('探索')}</h4>
            <Link to="/mysticism">{t('星界智慧')}</Link>
            <Link to="/dream-girl">{t('傳訊師名錄')}</Link>
            
          </div>
          <div className="footer-col">
            <h4>{t('聯繫')}</h4>
            <a href="mailto:dluu39ce7c@gmail.com">dluu39ce7c@gmail.com</a>
            <a href="#">{t('抖音')}</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>{t('© 2026 香港 · 跨次元傳訊研究協會 · 創始人：黎輝、破曉 · 督導研究：符文師、墓地女巫')}</p>
          <p className="footer-dim">CDA · Hong Kong Cross-Dimensional Communication Association</p>
        </div>
      </div>
    </footer>
  )
}
