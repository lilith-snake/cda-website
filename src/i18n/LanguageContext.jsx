import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { translations } from './translations'
import { translationsEn } from './translationsEn'

const LanguageContext = createContext(null)

// 从 localStorage 或浏览器偏好获取初始语言
function getInitialLang() {
  // 1. localStorage 有明确选择
  const stored = localStorage.getItem('cda-lang')
  if (stored === 'zh-Hant' || stored === 'zh-Hans' || stored === 'en') return stored

  // 2. 浏览器偏好
  const nav = navigator.language || ''
  if (nav.startsWith('en')) return 'en'
  if (nav.startsWith('zh-Hans') || nav === 'zh-CN' || nav === 'zh-SG') return 'zh-Hans'
  if (nav.startsWith('zh')) return 'zh-Hans'

  // 3. 默认简体
  return 'zh-Hans'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    localStorage.setItem('cda-lang', lang)
  }, [lang])

  // 直接切换到指定语言
  const switchLang = useCallback((target) => {
    if (target === 'zh-Hant' || target === 'zh-Hans' || target === 'en') {
      setLang(target)
    }
  }, [])

  // 直接设置语言
  const setLangDirect = useCallback((newLang) => {
    if (newLang === 'zh-Hant' || newLang === 'zh-Hans' || newLang === 'en') {
      setLang(newLang)
    }
  }, [])

  // t(text): 繁体时直接返回原文，简体时查 translations，英文时查 translationsEn
  const t = useCallback(
    (text) => {
      if (lang === 'zh-Hant') return text
      if (lang === 'zh-Hans') return translations[text] || text
      if (lang === 'en') return translationsEn[text] || text
      return text
    },
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, switchLang, setLang: setLangDirect, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
