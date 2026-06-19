import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LanguageToggle, useLanguage } from '../i18n'
import './Navbar.css'

const navItems = [
  { path: '/', label: '首頁' },
  { path: '/about', label: '關於' },
  { path: '/communication', label: '傳訊服務' },
  { path: '/courses', label: '課程' },
  { path: '/dream-girl', label: '傳訊師名錄' },
  { path: '/contact', label: '聯繫' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useLanguage()

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">&#10023;</span>
          <span className="brand-text">
            <span className="brand-cda">香港CDA</span>
            <span className="brand-divider">·</span>
            <span className="brand-sub">黎輝跨次元研究所協會</span>
          </span>
        </Link>

        <div className="navbar-actions">
          <LanguageToggle />

          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t('菜單')}
          >
            <span /><span /><span />
          </button>
        </div>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-label">{t(item.label)}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
