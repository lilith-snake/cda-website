import { useLanguage } from '../i18n'
import './Contact.css'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <div className="page-contact">
      <section className="page-hero contact-hero">
        <div className="container">
          <h1>聯繫我們</h1>
          <p className="subtitle">—— 聯繫我們 ——</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* 发送邮件指引 */}
            <div className="contact-form-wrapper glass-card">
              <h2>✦ 發送訊息給我們</h2>
              <p className="form-desc">如果你想加入我們，你也想成為探尋及實踐者的一名，請聯繫我們。</p>

              <div className="email-highlight">
                <span className="email-label">📧 請發送電郵至</span>
                <a href="mailto:dluu39ce7c@gmail.com" className="email-link">dluu39ce7c@gmail.com</a>
              </div>

              <div className="inquiry-section">
                <h3>查詢類型</h3>
                <p className="section-note">請在郵件主旨註明你選擇的路線：</p>
                <ul className="inquiry-list">
                  <li>傳訊師名錄 — 認證查詢</li>
                  <li>傳訊服務 — 預約</li>
                  <li>課程 — 研究路徑咨詢</li>
                  <li>星界智慧</li>
                  <li>研究論文 — 申請獲取</li>
                  <li>邀請見證 — 申請參與</li>
                  <li>其他查詢</li>
                </ul>
              </div>

              <div className="email-guide">
                <h3>郵件中請包含以下資訊</h3>
                <ul className="guide-list">
                  <li><strong>稱呼</strong> — 我們該如何稱呼你</li>
                  <li><strong>聯絡電郵</strong> — 方便我們回覆</li>
                  <li><strong>查詢類型</strong> — 從上方列表中選擇</li>
                  <li><strong>需求描述</strong> — 請描述你的具體需求，越詳細越好</li>
                </ul>
              </div>

              <p className="reply-note">✦ 我們收到後將在 1-2 個工作日內回覆</p>
            </div>

            {/* 聯繫信息 */}
            <div className="contact-info">
              <div className="info-card glass-card">
                <h3>協會資訊</h3>
                <div className="info-row">
                  <span className="info-label">協會名稱</span>
                  <span>香港 · 跨次元傳訊研究協會</span>
                </div>
                <div className="info-row">
                  <span className="info-label">英文名稱</span>
                  <span>Hong Kong Cross-Dimensional Communication Association (CDA)</span>
                </div>
                <div className="info-row">
                  <span className="info-label">註冊地</span>
                  <span>香港</span>
                </div>
              </div>

              <div className="info-card glass-card">
                <h3>聯繫方式</h3>
                <div className="info-row">
                  <span className="info-label">電郵</span>
                  <span>dluu39ce7c@gmail.com</span>
                </div>
                <div className="info-row">
                  <span className="info-label">抖音</span>
                  <span>@香港跨次元傳訊研究</span>
                </div>
              </div>

              <div className="info-card glass-card">
                <h3>營業時間</h3>
                <div className="info-row">
                  <span className="info-label">在線諮詢</span>
                  <span>每日 10:00 - 22:00</span>
                </div>
                <div className="info-row">
                  <span className="info-label">傳訊服務</span>
                  <span>需提前預約</span>
                </div>
                <div className="info-row">
                  <span className="info-label">培訓體系時間</span>
                  <span>按照個人情況選擇安排</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
