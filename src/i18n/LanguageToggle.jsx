import { useLanguage } from './LanguageContext'
import './LanguageToggle.css'

export default function LanguageToggle() {
  const { lang, switchLang } = useLanguage()

  return (
    <div className="lang-toggle" role="radiogroup" aria-label="语言切换">
      <button
        className={`lang-option ${lang === 'zh-Hant' ? 'lang-active' : ''}`}
        onClick={() => switchLang('zh-Hant')}
        aria-label="切换到繁体中文"
      >繁</button>
      <span className="lang-divider">|</span>
      <button
        className={`lang-option ${lang === 'zh-Hans' ? 'lang-active' : ''}`}
        onClick={() => switchLang('zh-Hans')}
        aria-label="切换到简体中文"
      >简</button>
      <span className="lang-divider">|</span>
      <button
        className={`lang-option ${lang === 'en' ? 'lang-active' : ''}`}
        onClick={() => switchLang('en')}
        aria-label="Switch to English"
      >EN</button>
    </div>
  )
}
