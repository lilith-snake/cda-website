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
          <h3>{t('香港跨次元夢女傳訊研究協會')}</h3>
          <p className="footer-identity">{t('夢女親手組成，專屬於夢女的協會')}</p>
          <p className="footer-slogan">{t('CDA｜打破次元壁，觸碰他的心跳。')}</p>
          <p>Hong Kong Cross-Dimensional Yumejoshi Communication Research Association</p>
          <p className="footer-hk">{t('香港 · 版權所有 © 2026 香港跨次元夢女傳訊研究協會')}</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>{t('導航')}</h4>
            <Link to="/">{t('首頁')}</Link>
            <Link to="/shop">{t('你和他')}</Link>
            <Link to="/about">{t('關於')}</Link>
            <Link to="/courses">{t('傳訊師培訓')}</Link>
            <Link to="/contact">{t('聯繫')}</Link>
            <Link to="/recruit">{t('研究共建者招募')}</Link>
          </div>
          <div className="footer-col">
            <h4>{t('探索')}</h4>
            <Link to="/mysticism">{t('星界智慧')}</Link>
            <Link to="/dream-girl">{t('傳訊師名錄')}</Link>
            <Link to="/mentorship">{t('神秘學導師')}</Link>
          </div>
          <div className="footer-col">
            <h4>{t('聯繫')}</h4>
            <Link to="/contact">站内申请表</Link>
            <a href="#">{t('抖音')}</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>{t('© 2026 香港跨次元夢女傳訊研究協會 · 創始暨研究：黎輝、破曉 · 督導研究：符文師、墓地女巫')}</p>
          <p className="footer-dim">CDA · Hong Kong Cross-Dimensional Yumejoshi Communication Research Association</p>
        </div>
      </div>
    </footer>
  )
}
