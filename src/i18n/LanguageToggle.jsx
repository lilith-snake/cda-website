import { useLanguage } from './LanguageContext'
import './LanguageToggle.css'

const titleMap = {
  'zh-Hant': '繁 → 简 → EN',
  'zh-Hans': '简 → EN → 繁',
  'en': 'EN → 繁 → 简',
}

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      className="lang-toggle"
      onClick={toggleLang}
      title={titleMap[lang]}
      aria-label={titleMap[lang]}
    >
      <span className={lang === 'zh-Hant' ? 'lang-active' : ''}>繁</span>
      <span className="lang-divider">|</span>
      <span className={lang === 'zh-Hans' ? 'lang-active' : ''}>简</span>
      <span className="lang-divider">|</span>
      <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
    </button>
  )
}
