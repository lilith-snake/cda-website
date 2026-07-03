import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n'
import { ThemeProvider } from './theme/ThemeContext'
import Survey from './pages/Survey'
import Admin from './pages/Admin'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <LanguageProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Survey />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </ThemeProvider>
      </LanguageProvider>
    </HashRouter>
  </React.StrictMode>
)
