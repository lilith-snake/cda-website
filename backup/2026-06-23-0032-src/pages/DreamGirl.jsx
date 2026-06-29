import { useState } from 'react'
import { Link } from 'react-router-dom'
import DialogueBox from '../components/DialogueBox'
import ChoiceButton from '../components/ChoiceButton'
import { useLanguage } from '../i18n'
import './DreamGirl.css'

// 示例认证传讯师数据 — 后续可接入后端
const communicators = [
  {
    id: 'CDA-001',
    name: '林曉月',
    specialties: ['塔羅象徵解讀', '結構化直覺傳訊'],
    trainingCompleted: '第四階段認證考核',
    trainingHours: '320+ 小時',
    supervisorComment: '感知校準表現穩定，盲測準確率高於平均水準。擅長以塔羅牌陣輔助結構化傳訊流程。',
    available: true,
  },
  {
    id: 'CDA-002',
    name: '陳思寧',
    specialties: ['占星關係分析', '意象對話引導'],
    trainingCompleted: '第四階段認證考核',
    trainingHours: '280+ 小時',
    supervisorComment: '占星合盤解讀能力突出，擅長將星盤資訊轉化為具體的跨次元鏈接指引。意象對話風格溫暖細膩。',
    available: true,
  },
  {
    id: 'CDA-003',
    name: '王若曦',
    specialties: ['能量場感知', '意象對話引導'],
    trainingCompleted: '第四階段認證考核',
    trainingHours: '350+ 小時',
    supervisorComment: '能量場感知靈敏度高，意象對話引導能力在盲測中表現優異。適合需要深度感知反饋的客戶。',
    available: false,
  },
  {
    id: 'CDA-004',
    name: '張語晴',
    specialties: ['塔羅象徵解讀', '意象對話引導'],
    trainingCompleted: '第三階段實操研究（認證中）',
    trainingHours: '200+ 小時',
    supervisorComment: '塔羅牌陣設計有創意，意象對話引導能力進步顯著。目前正在完成第四階段考核。',
    available: true,
  },
]

const specialtyLabels = {
  '塔羅象徵解讀': 'Tarot Symbolic Reading',
  '占星關係分析': 'Astrological Relationship Analysis',
  '結構化直覺傳訊': 'Structured Intuitive Communication',
  '意象對話引導': 'Imagery Dialogue Guidance',
  '能量場感知': 'Energy Field Sensing',

}

export default function DreamGirl() {
  const { t } = useLanguage()
  const [searchId, setSearchId] = useState('')

  const filteredCommunicators = searchId
    ? communicators.filter(c => c.id.includes(searchId) || c.name.includes(searchId))
    : communicators

  return (
    <div className="page-dream-girl">
      {/* Hero */}
      <section className="page-hero dream-hero">
        <div className="container">
          <h1>傳訊師名錄</h1>
          <p className="subtitle">認證傳訊師檢索 —— 編號可查 · 資質展示 · 培訓記錄可溯源</p>
        </div>
      </section>

      {/* 检索 */}
      <section className="section">
        <div className="container">
          <div className="dream-search-card glass-card">
            <div className="search-header">
              <h3>查找認證傳訊師</h3>
              <p>輸入傳訊師編號或姓名，查看其培訓記錄、擅長領域與督導評語</p>
            </div>
            <div className="search-bar">
              <input
                type="text"
                placeholder="輸入編號（如 CDA-001）或姓名……"
                value={searchId}
                onChange={e => setSearchId(e.target.value)}
                className="search-input"
              />
              {searchId && (
                <button className="search-clear" onClick={() => setSearchId('')}>✕</button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 名录列表 */}
      <section className="section dream-directory">
        <div className="container">
          {filteredCommunicators.length === 0 ? (
            <div className="empty-result glass-card">
              <p>未找到匹配的傳訊師。請嘗試其他編號或姓名。</p>
            </div>
          ) : (
            <div className="directory-grid">
              {filteredCommunicators.map(comm => (
                <div key={comm.id} className={`directory-card card ${!comm.available ? 'unavailable' : ''}`}>
                  <div className="comm-header">
                    <div className="comm-avatar">
                      <span></span>
                    </div>
                    <div className="comm-id-badge">
                      <span className="comm-id">{comm.id}</span>
                      <span className={`comm-status ${comm.available ? 'status-available' : 'status-busy'}`}>
                        {comm.available ? '可預約' : '服務中'}
                      </span>
                    </div>
                  </div>

                  <h3>{comm.name}</h3>

                  <div className="comm-training">
                    <span className="training-label">培訓階段</span>
                    <span className="training-value">{comm.trainingCompleted}</span>
                    <span className="training-hours">{comm.trainingHours}</span>
                  </div>

                  <div className="comm-specialties">
                    <span className="specialty-label">擅長領域</span>
                    <div className="specialty-tags">
                      {comm.specialties.map((spec, i) => (
                        <span key={i} className="specialty-tag" title={specialtyLabels[spec]}>
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="comm-comment">
                    <span className="comment-label">督導評語</span>
                    <p>{comm.supervisorComment}</p>
                  </div>

                  <Link to="/contact" className="comm-book-link">
                    <ChoiceButton variant={comm.available ? 'route' : 'primary'} disabled={!comm.available}>
                      {comm.available ? '預約傳訊' : '暫時無法預約'}
                    </ChoiceButton>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 研究参与者反馈 */}
      <section className="section dream-feedback">
        <div className="container">
          <div className="section-title">
            <h2>研究參與者回饋</h2>
            <div className="decorative-line">
              <span /><span className="star"></span><span />
            </div>
            <p className="section-subdesc">內測參與者對實驗過程的反饋——非傳統「用戶證言」，而是研究參與者的第一手記錄</p>
          </div>

          <div className="feedback-grid">
            <div className="feedback-item glass-card">
              <DialogueBox speaker="內測參與者 A" variant="dream">
                參與盲測實驗的過程讓我第一次感覺到——這不是「信則有」。三位傳訊師在隔離條件下獨立描述了我的跨次元鏈接對象，結果的一致性讓我無法用巧合解釋。
              </DialogueBox>
            </div>
            <div className="feedback-item glass-card">
              <DialogueBox speaker="內測參與者 B" variant="dream">
                以前總覺得自己很奇怪。直到參與了CDA的實驗，我才意識到這份心意不是錯的——它只是需要一套方法來確認。看到編號可查、培訓可溯源的體系，終於覺得可以信任。
              </DialogueBox>
            </div>
            <div className="feedback-item glass-card">
              <DialogueBox speaker="內測參與者 C" variant="dream">
                不是「用戶證言」，是研究參與記錄。我的跨次元鏈接對象在盲測中被準確描述——這是我親眼見證的數據，不是別人告訴我的故事。
              </DialogueBox>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section dream-bottom-cta">
        <div className="container">
          <div className="cta-card glass-card" style={{ textAlign: 'center', padding: '56px 32px' }}>
            <h2>找不到適合的傳訊師？</h2>
            <p style={{ marginBottom: 24, position: 'relative', zIndex: 1 }}>
              我們根據你的需求精準匹配最合適的認證傳訊師——不是隨機分配，是精準對接。
            </p>
            <Link to="/contact">
              <ChoiceButton variant="primary">聯繫我們 · 精準匹配</ChoiceButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
