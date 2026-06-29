import { useState } from 'react'
import DialogueBox from '../components/DialogueBox'
import ChoiceButton from '../components/ChoiceButton'
import { useLanguage } from '../i18n'
import './Contact.css'

export default function Contact() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
            {/* 聯絡表單 */}
            <div className="contact-form-wrapper glass-card">

              {!submitted ? (
                <>
                  <h2>✦ 發送訊息給我們</h2>
                  <p className="form-desc">選擇你想查詢的內容，我們會盡快回覆。</p>

                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>稱呼</label>
                      <input type="text" placeholder="你的名字" required />
                    </div>

                    <div className="form-group">
                      <label>電郵</label>
                      <input type="email" placeholder="your@email.com" required />
                    </div>

                    <div className="form-group">
                      <label>查詢類型</label>
                      <select required>
                        <option value="">—— 請選擇路線 ——</option>
                        <option>傳訊師名錄 — 認證查詢</option>
                        <option>傳訊服務 — 預約</option>
                        <option>課程 — 研究路徑咨詢</option>
                        <option>星界智慧</option>
                        <option>研究論文 — 申請獲取</option>
                        <option>邀請見證 — 申請參與</option>
                        <option>其他查詢</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>需求描述</label>
                      <textarea
                        placeholder="請描述你的具體需求……"
                        rows={4}
                        required
                      />
                    </div>

                    <button type="submit" className="submit-btn">
                      <ChoiceButton variant="route" className="submit-choice">
                        發送訊息
                      </ChoiceButton>
                    </button>
                  </form>
                </>
              ) : (
                <div className="submit-success">
                  <div className="success-icon"></div>
                  <h2>訊息已發送！</h2>
                  <DialogueBox speaker="CDA" variant="dream">
                    你的訊息已成功送達。
                    <br />
                    我們將在 1-2 個工作日內回覆你。
                  </DialogueBox>
                </div>
              )}
            </div>

            {/* 聯繫信息 */}
            <div className="contact-info">
              <div className="info-card glass-card">
                <h3>協會資訊</h3>
                <div className="info-row">
                  <span className="info-label">協會名稱</span>
                  <span>黎輝跨次元研究所協會</span>
                </div>
                <div className="info-row">
                  <span className="info-label">英文名稱</span>
                  <span>Cross-Dimensional Communication Association (香港CDA)</span>
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
                  <span>391839176@qq.com</span>
                </div>
                <div className="info-row">
                  <span className="info-label">小紅書</span>
                  <span>@香港CDA跨次元傳訊</span>
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
                  <span className="info-label">課程時間</span>
                  <span>按課表安排</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
