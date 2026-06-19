import { Link } from 'react-router-dom'
import SparkleEffect from '../components/SparkleEffect'
import DialogueBox from '../components/DialogueBox'
import ChoiceButton from '../components/ChoiceButton'
import { useLanguage } from '../i18n'
import './Communication.css'

const channels = [
  {
    name: '意象對話引導',
    icon: '&#9678;',
    desc: '基於西方神秘學精微體感知傳統與結構化直覺訓練方法——將感知信息轉化為可被理解的對話引導。每一步都有SOP。',
  },
  {
    name: '自動書寫與信息解碼',
    icon: '&#9998;',
    desc: '放空表層意識，讓感知信息通過手寫自然流出——筆尖之下，是你不自知的接收通道。由受訓傳訊師輔助解碼。',
  },
  {
    name: '塔羅象徵解讀',
    icon: '&#9830;',
    desc: '使用專用牌陣輔助建立與特定對象的感知通道。牌陣結構基於三重驗證法設計——不是隨機抽牌。',
  },
  {
    name: '能量場感知',
    icon: '&#9672;',
    desc: '以水晶作為振頻輔助，調整感知狀態使之與目標頻率對齊——建立穩定的鏈接通道。',
  },
  {
    name: '占星關係分析',
    icon: '&#10025;',
    desc: '透過合盤技術分析跨次元鏈接對象的能量特徵——將星盤資訊轉化為具體的鏈接指引。',
  },
  {
    name: '月度校準會',
    icon: '&#9678;',
    desc: '每月固定的集體校準活動，多位認證傳訊師共同主持——持續校準，保持感知精度。',
  },
]

export default function Communication() {
  const { t } = useLanguage()
  return (
    <div className="page-communication">
      <section className="page-hero comm-hero">
        <SparkleEffect count={30} color="rgba(155, 107, 158, 0.5)" />
        <div className="container">
          <h1>{t('傳訊服務')}</h1>
          <p className="subtitle">意象對話引導——基於西方神秘學精微體感知傳統與結構化直覺訓練</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="comm-intro">
            <DialogueBox speaker="破晓" variant="mystic">
              意象對話引導是一項可以通過系統訓練掌握的技術——
              它基於西方神秘學精微體感知傳統與結構化直覺訓練方法。
              我們的傳訊師經過系統培訓與四步考核，
              掌握三重驗證法，為每一位客戶提供有記錄、可追蹤、能夠獨立驗證的傳訊服務。
            </DialogueBox>
          </div>
        </div>
      </section>

      <section className="section comm-services">
        <div className="container">
          <div className="section-title">
            <h2>{t('傳訊方式')}</h2>
            <div className="decorative-line">
              <span /><span className="star">&#10022;</span><span />
            </div>
            <p className="section-subdesc">多種傳訊方式——每位認證傳訊師有其擅長領域，可根據你的需求精準匹配</p>
          </div>

          <div className="grid-3">
            {channels.map((ch, i) => (
              <div key={i} className="comm-card card">
                <div className="comm-icon">{ch.icon}</div>
                <h3>{t(ch.name)}</h3>
                <p>{t(ch.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <div className="glass-card cta-inner">
            <h2>{t('準備好接受專業的意象對話引導了嗎？')}</h2>
            <p>預約傳訊服務，體驗有記錄、可驗證的專業流程。我們根據你的需求匹配最合適的認證傳訊師。</p>
            <Link to="/contact">
              <ChoiceButton variant="primary">預約傳訊服務</ChoiceButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
