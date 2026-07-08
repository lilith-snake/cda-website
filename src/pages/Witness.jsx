import { useState } from 'react'
import DialogueBox from '../components/DialogueBox'
import { useLanguage } from '../i18n'
import './Witness.css'

export default function Witness() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page-witness">
      {/* Hero */}
      <section className="page-hero witness-hero">
        <div className="container">
          <h1>{t('邀請見證')}</h1>
          <p className="subtitle">{t('全球首個跨次元鏈接系統性研究實驗')}</p>
        </div>
      </section>

      {/* 核心信息 */}
      <section className="section">
        <div className="container">
          <div className="witness-core-msg">
            <DialogueBox speaker="CDA" variant="dream">
              我們不是要你相信一篇論文——是邀請你來見證一場實驗。
              <br /><br />
              這是一場組織化的實驗，目的是共同見證跨次元鏈接的系統性研究過程。
              我們不要求你相信任何東西，我們邀請你來看著這件事是怎麼被驗證的。
            </DialogueBox>
          </div>
        </div>
      </section>

      {/* 三层邀请 */}
      <section className="section witness-roles">
        <div className="container">
          <div className="section-title">
            <h2>{t('你可以參與的方式')}</h2>
            <div className="decorative-line">
              <span /><span className="star"></span><span />
            </div>
          </div>

          <div className="witness-roles-grid">
            <div className="witness-role-card card">
              <h3>{t('我是夢女 / 實踐者')}</h3>
              <p className="role-tagline">{t('作為實驗的「鏈接對象提供方」')}</p>
              <div className="role-description">
                <p>你的跨次元鏈接對象將由多位受訓傳訊師在盲測條件下獨立描述。</p>
                <p>你來比對結果——成為第一手見證者。</p>
              </div>
            </div>

            <div className="witness-role-card card">
              <h3>{t('我是傳訊師 / 神秘學從業者')}</h3>
              <p className="role-tagline">{t('參與CDA系統培訓後，進入實驗環節')}</p>
              <div className="role-description">
                <p>在隔離條件下對同一對象進行獨立傳訊。</p>
                <p>你的實操數據將納入研究——成為方法論的共同驗證者。</p>
              </div>
            </div>

            <div className="witness-role-card card">
              <h3>{t('我是行業觀察者 / 研究者')}</h3>
              <p className="role-tagline">{t('有興趣的神秘學、心理學、意識研究相關人士')}</p>
              <div className="role-description">
                <p>獲取實驗過程記錄和研究數據。</p>
                <p>從外部視角審視和討論實驗結果。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 申请表单 */}
      <section className="section witness-form-section">
        <div className="container">
          <div className="glass-card witness-form-card">

            {!submitted ? (
              <>
                <h2>{t('申請參與實驗')}</h2>
                <p className="form-desc">{t('請填寫以下信息，我們將與你聯繫說明參與方式。此實驗不做任何承諾——只說明實驗流程和你可以參與的方式。')}</p>

                <form className="witness-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>{t('稱呼')}</label>
                    <input type="text" placeholder={t('你的名字')} required />
                  </div>

                  <div className="form-group">
                    <label>{t('電郵')}</label>
                    <input type="email" placeholder="your@email.com" required />
                  </div>

                  <div className="form-group">
                    <label>{t('參與角色')}</label>
                    <select required>
                      <option value="">{t('—— 請選擇 ——')}</option>
                      <option>{t('我是夢女 / 實踐者（提供鏈接對象）')}</option>
                      <option>{t('我是傳訊師 / 神秘學從業者（參與培訓+盲測）')}</option>
                      <option>{t('我是行業觀察者 / 研究者（獲取實驗數據）')}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>{t('簡述你的參與意願')}</label>
                    <textarea
                      placeholder={t('請簡要說明你為什麼想參與這個實驗……')}
                      rows={4}
                      required
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    {t('提交申請')}
                  </button>
                </form>
              </>
            ) : (
              <div className="submit-success">
                <div className="success-icon"></div>
                <h2>{t('申請已提交')}</h2>
                <p>{t('感謝你的參與意願。我們將在審核後與你聯繫，說明後續步驟。')}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
