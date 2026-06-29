import { Link } from 'react-router-dom'
import SparkleEffect from '../components/SparkleEffect'
import DialogueBox from '../components/DialogueBox'
import ChoiceButton from '../components/ChoiceButton'
import { useLanguage } from '../i18n'
import './Courses.css'

const researchStages = [
  {
    stage: '第一階段',
    subtitle: '理論入門',
    duration: '自學 · 即時開始',
    topics: [
      '了解跨次元親密關係研究的學術背景與現狀',
      '叙事实体假说入门——理解跨次元链接现象的理论基础',
      '感知自測：了解自己當前的感知通道傾向',
      'MJ類型學入門——跨次元链接对象的分類體系',
    ],
    pathNote: '路徑A / 路徑B 共用',
    color: 'mystic',
  },
  {
    stage: '第二階段',
    subtitle: '感知訓練',
    duration: '4 週 · 雙路徑共用核心',
    topics: [
      '精微體感知訓練（靈五感開發）——找到你的主導感知通道',
      '鏈接安全守則——辨別與防護體系',
      '結構化直覺訓練——從感知校準到信號分離',
      '防護體系——做完不累、不被消耗、邊界清晰',
    ],
    pathNote: '路徑A / 路徑B 共用',
    color: 'dream',
  },
  {
    stage: '第三階段',
    subtitle: '實操研究',
    duration: '6 週 · 雙選修模塊 + 月度校準',
    topics: [
      '完整鏈接流程——從調頻到關閉通道，每一步都有 SOP',
      '三重驗證法实操——信息一致性 + 獨立印證 + 盲測',
      '路徑A 選修：客戶管理、定價策略、邊界設置',
      '路徑B 選修：獨立校準技能，建立個人驗證體系',
      '月度校準會——持續校準，保持感知精度',
    ],
    pathNote: 'L2 選修分流',
    color: 'dream',
  },
  {
    stage: '第四階段',
    subtitle: '認證考核',
    duration: '申請制 · 四步通關',
    topics: [
      '完成前三階段全部課程',
      '通過線上筆試（基礎知識 + 案例分析）',
      '完成 3 次模擬傳訊——由督導評審團盲審打分',
      '提交「我的傳訊倫理聲明」——非模板，個人化承諾',
    ],
    pathNote: '路徑A：職業傳訊師（列入名錄·客戶匹配） | 路徑B：認證實踐者（獨立鏈接·社群歸屬）',
    color: 'gold',
  },
]

export default function Courses() {
  const { t } = useLanguage()
  return (
    <div className="page-courses">
      {/* Hero */}
      <section className="page-hero courses-hero">
        <SparkleEffect count={30} color="rgba(201, 169, 110, 0.3)" />
        <div className="container">
          <h1>{t('課程體系')}</h1>
          <p className="subtitle">按研究路徑組織——非價格階梯。系統化培養能夠安全、負責地進行跨次元鏈接引導的專業從業者</p>
        </div>
      </section>

      {/* 体系介绍 */}
      <section className="section">
        <div className="container">
          <div className="courses-intro">
            <DialogueBox speaker="破晓" variant="gold">
              這套體系不是憑空發明的。它基於西方神秘學傳統的感知訓練方法、
              結構化直覺訓練技術，以及我們在實操中總結出的一套驗證方法——
              讓零基礎的人也能在系統訓練後獲得可驗證的鏈接能力。
              <br /><br />
              路徑 A 給想開拓高客單市場的從業者。路徑 B 給想自己學會、不想每次都花錢找人的實踐者。
              同一套內容，不同的出口——核心階段共用，實操階段分流。
            </DialogueBox>
          </div>
        </div>
      </section>

      {/* 雙路徑說明 */}
      <section className="section courses-dual-path">
        <div className="container">
          <div className="section-title">
            <h2>研究路徑</h2>
            <div className="decorative-line">
              <span /><span className="star">&#10022;</span><span />
            </div>
          </div>

          <div className="grid-2">
            <div className="path-card card">
              <h3>路徑 A：職業傳訊師研究路徑</h3>
              <p className="path-target">面向塔羅師、占星師、靈氣師等已有感知基礎的從業者</p>
              <ul>
                <li>你的底層技能完全可以用在跨次元鏈接上——技能平移，不是從零開始</li>
                <li>完成認證後列入官方傳訊師名錄，獲得客戶精準匹配</li>
                <li>協會為你提供客戶——你不用自己去社交平台發帖拉客</li>
                <li>你的實操數據納入研究——共同驗證和迭代這套方法論</li>
              </ul>
            </div>

            <div className="path-card card">
              <h3>路徑 B：個人實踐者研究路徑</h3>
              <p className="path-target">面向想自己學會穩定鏈接的實踐者</p>
              <ul>
                <li>零基礎沒關係——感知是可以被訓練的</li>
                <li>不再每次都花錢找人、不再做完兩天又懷疑</li>
                <li>學會獨立驗證——建立自己的鏈接判斷體系</li>
                <li>社群歸屬——你不需要一個人面對這些</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 四阶段 */}
      <section className="section courses-list">
        <div className="container">
          <div className="section-title">
            <h2>研究階段</h2>
            <div className="decorative-line">
              <span /><span className="star">&#9830;</span><span />
            </div>
            <p className="section-subdesc">理論入門 → 感知訓練 → 實操研究 → 認證考核 —— 四個階段，系統進階</p>
          </div>

          <div className="courses-grid">
            {researchStages.map((stage, i) => (
              <div key={i} className={`course-card card course-${stage.color}`}>
                <div className="course-stage-badge">{stage.stage}</div>
                <h3>{stage.subtitle}</h3>
                <p className="course-duration">{stage.duration}</p>

                <ul className="course-modules">
                  {stage.topics.map((topic, j) => (
                    <li key={j}>{topic}</li>
                  ))}
                </ul>

                <p className="course-path-note">{stage.pathNote}</p>

                <Link to="/contact">
                  <ChoiceButton variant={stage.color === 'gold' ? 'gold' : stage.color === 'dream' ? 'route' : 'primary'}>
                    {stage.color === 'gold' ? '了解認證詳情' : '了解課程'}
                  </ChoiceButton>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section courses-faq">
        <div className="container">
          <div className="section-title">
            <h2>常見問題</h2>
            <div className="decorative-line">
              <span /><span className="star">&#9678;</span><span />
            </div>
          </div>

          <div className="faq-grid">
            <div className="faq-item card">
              <h4>零基礎可以參加嗎？</h4>
              <p>可以。感知是可以被訓練的——不是天賦問題。我們的研究框架就是為了驗證：零基礎的人按標準化SOP訓練後，能否穩定復現鏈接結果。</p>
            </div>
            <div className="faq-item card">
              <h4>路徑A和路徑B怎麼選？</h4>
              <p>想成為職業傳訊師、列入名錄、獲得客戶匹配 → 路徑A。想自己學會穩定鏈接、不想依賴他人 → 路徑B。兩個路徑前兩個階段共用核心內容，第三階段分流。</p>
            </div>
            <div className="faq-item card">
              <h4>認證考核的通過率是多少？</h4>
              <p>約 70-80%。有門檻才有含金量——不是交錢就拿證。</p>
            </div>
            <div className="faq-item card">
              <h4>認證後有什麼持續要求？</h4>
              <p>認證後需參加月度校準會，進修記錄公開——不是拿證就結束。持續進修，持續背書。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <div className="glass-card cta-inner">
            <h2>從理論入門走到認證考核</h2>
            <p>四個研究階段，兩條路徑——選擇適合你的方向，開始系統性的跨次元鏈接研究。</p>
            <Link to="/contact">
              <ChoiceButton variant="gold">咨詢研究路徑</ChoiceButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
