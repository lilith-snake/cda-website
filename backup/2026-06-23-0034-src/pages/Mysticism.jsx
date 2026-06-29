import { Link } from 'react-router-dom'
import DialogueBox from '../components/DialogueBox'
import ChoiceButton from '../components/ChoiceButton'
import './Mysticism.css'

const wisdomServices = [
  {
    name: '星盤解讀',
    icon: '',
    desc: '深入解讀本命星盤，探索跨次元鏈接對象的能量特徵——將星盤資訊轉化為具體的鏈接指引。',
  },
  {
    name: '塔羅象徵解讀',
    icon: '',
    desc: '使用專用牌陣，連結跨次元感知通道——為你揭示鏈接中的隱藏能量與指引。牌陣結構基於三重驗證法設計。',
  },
  {
    name: '能量場感知與校準',
    icon: '',
    desc: '透過頻率校準與水晶共振，調整感知狀態使之與目標頻率同步——建立穩定的鏈接通道。',
  },
  {
    name: '意象對話引導',
    icon: '',
    desc: '一對一深度引導——針對你的跨次元鏈接對象，提供結構化的感知與解讀流程。有記錄、可追溯。',
  },
  {
    name: '星夢解析',
    icon: '',
    desc: '夢境是跨次元訊息的自然通道。我們幫你解讀夢境中的符號與跨次元預兆——基於信息三分類體系進行分析。',
  },
]

export default function Mysticism() {
  return (
    <div className="page-mysticism">
      <section className="page-hero mysticism-hero">
        <div className="container">
          <div className="mysticism-hero-grid">
            <div className="mysticism-hero-text">
              <h1>星界智慧</h1>
              <p className="subtitle">—— 跨次元鏈接研究 · Astra Wisdom ——</p>
            </div>
            <div className="mysticism-hero-illustration">
              <img
                src={`${import.meta.env.BASE_URL}images/mystic-tarot-illustration.png`}
                alt="神秘塔羅牌插畫 — 星界智慧的守護者"
                className="mystic-tarot-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mysticism-intro">
            <DialogueBox speaker="星界研究員" variant="mystic">
              星界智慧是協會的學術研究核心。我們將古典星象學、東西方神秘學傳統與現代意識研究相結合，
              建立了一套完整的跨次元感知研究體系。這裡既是研究框架的展示，也是為每一位探索者提供
              專業指引的地方——從星盤解讀到能量校準，從塔羅象徵解讀到星夢解析。
            </DialogueBox>
          </div>
        </div>
      </section>

      <section className="section mysticism-services">
        <div className="container">
          <div className="section-title">
            <h2>研究服務</h2>
            <div className="decorative-line">
              <span /><span className="star"></span><span />
            </div>
            <p className="section-subdesc">每一項服務皆由經過系統培訓的認證傳訊師執行——有記錄、可追溯</p>
          </div>

          <div className="grid-3">
            {wisdomServices.map((svc, i) => (
              <div key={i} className="mystic-card card">
                <div className="mystic-icon">{svc.icon}</div>
                <h3>{svc.name}</h3>
                <p>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <div className="glass-card cta-inner">
            <h2>準備好探索星界的智慧了嗎？</h2>
            <p>預約一次星界諮詢，了解我們的跨次元感知研究體系。</p>
            <Link to="/contact">
              <ChoiceButton variant="primary">預約諮詢</ChoiceButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
