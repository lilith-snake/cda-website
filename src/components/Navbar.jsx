import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LanguageToggle, useLanguage } from '../i18n'
import ThemeToggle from '../theme/ThemeToggle'
import './Navbar.css'

const navItems = [
  { path: '/', label: '首頁' },
  { path: '/about', label: '關於' },
  { path: '/research', label: '研究' },
  { path: '/dream-girl', label: '傳訊師名錄' },
  { path: '/contact', label: '聯繫' },
]

const staticLinks = [
  { href: '/cda-website/our-story.html', label: '我們的故事' },
  { href: '/cda-website/zishu.html', label: '破曉自述' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useLanguage()

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand">
          <span className="brand-text">
            <span className="brand-cda">CDA</span>
            <span className="brand-divider">·</span>
            <span className="brand-sub">香港跨次元傳訊研究協會</span>
          </span>
        </Link>

        <div className="navbar-actions">
          <LanguageToggle />
          <ThemeToggle />

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
          {staticLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-label">{t(link.label)}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
