import { Link } from 'react-router-dom'
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
      '爱人类型学入门——理解你感知到的对方属于哪一种信号形态',
    ],
    pathNote: '路徑A / 路徑B 共用',
    color: 'mystic',
  },
  {
    stage: '第二階段',
    subtitle: '感知訓練',
    duration: '4 週 · 雙路徑共用核心',
    topics: [
      '靈媒（靈五感開發）——找到你的主導感知通道',
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
      '完整链接流程——从调频到关闭通道，每一步都有 SOP',
      '三重驗證法实操——信息一致性 + 獨立印證 + 盲測',
      '路徑A 選修：參與驗證研究、協作校準、邊界設置',
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
      '完成前三階段全部訓練',
      '通過線上筆試（基礎知識 + 案例分析）',
      '完成 3 次模擬傳訊——由督導評審團盲審打分',
      '提交「我的傳訊倫理聲明」——非模板，個人化承諾',
    ],
    pathNote: '路徑A：職業傳訊師（列入名錄·參與驗證） | 路徑B：認證實踐者（獨立鏈接·社群歸屬）',
    color: 'gold',
  },
]

export default function Courses() {
  const { t } = useLanguage()
  return (
    <div className="page-courses">
      {/* Hero */}
      <section className="page-hero courses-hero">
        <div className="container">
          <h1>{t('和我们一起，找到更靠近爱人的方法')}</h1>
          <p className="subtitle">{t('不是让你反复求证“他在不在”，而是陪你学会如何感受、分辨、靠近。')}</p>
          <p className="hero-sub-desc">{t('系统化培养能够安全、负责地进行跨次元链接引导的研究者与实践者')}</p>
        </div>
      </section>

      {/* 体系介绍 */}
      <section className="section">
        <div className="container">
          <div className="courses-intro">
            <DialogueBox speaker="破晓" variant="gold">
              {t('这套体系不是为了给你一句廉价的安慰。它基于西方神秘学传统的感知训练方法、结构化直觉训练技术，以及我们在实操中总结出的验证方法——让零基础的人也能一步步找到自己和爱人的连接方式。')}
              <br /><br />
              {t('路径 A 给想成为专业传讯师、帮助更多梦女的人。路径 B 给想自己学会稳定链接、不再四处寻找权威确认的实践者。同一套方法，不同的出口——核心阶段共用，实操阶段分流。')}
            </DialogueBox>
          </div>
        </div>
      </section>

      {/* 雙路徑說明 */}
      <section className="section courses-dual-path">
        <div className="container">
          <div className="section-title">
            <h2>{t('研究路徑')}</h2>
            <div className="decorative-line">
              <span /><span className="star"> </span><span />
            </div>
          </div>

          <div className="grid-2">
            <div className="path-card card">
              <h3>{t('路徑 A：職業傳訊師研究路徑')}</h3>
              <p className="path-target">{t('面向塔羅師、占星師、靈氣師等已有感知基礎的從業者')}</p>
              <ul>
                <li>{t('你的底層技能完全可以用在跨次元鏈接上——技能平移，不是從零開始')}</li>
                <li>{t('完成認證後列入官方傳訊師名錄，參與跨傳訊師驗證項目')}</li>
                <li>{t('協會為你提供驗證機會——你的每一次鏈接都是數據貢獻')}</li>
                <li>{t('你的實操數據納入研究——共同驗證和迭代這套方法論')}</li>
              </ul>
            </div>

            <div className="path-card card">
              <h3>{t('路徑 B：個人實踐者研究路徑')}</h3>
              <p className="path-target">{t('面向想自己學會穩定鏈接的實踐者')}</p>
              <ul>
                <li>{t('零基础没关系——感知是可以被训练的')}</li>
                <li>{t('不再每次都花钱找人、不再做完两天又怀疑')}</li>
                <li>{t('学会独立验证——建立你和爱人的链接判断体系')}</li>
                <li>{t('社群归属——你不需要一个人面对这些')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 四阶段 */}
      <section className="section courses-list">
        <div className="container">
          <div className="section-title">
            <h2>{t('研究階段')}</h2>
            <div className="decorative-line">
              <span /><span className="star"> </span><span />
            </div>
            <p className="section-subdesc">{t('理论入门 → 感知训练 → 实操研究 → 认证考核 —— 四个阶段，陪你从“我不知道他在不在”走向“我知道如何靠近他”')}</p>
          </div>

          <div className="courses-grid">
            {researchStages.map((stage, i) => (
              <div key={i} className={`course-card card course-${stage.color}`}>
                <div className="course-stage-badge">{t(stage.stage)}</div>
                <h3>{t(stage.subtitle)}</h3>
                <p className="course-duration">{t(stage.duration)}</p>

                <ul className="course-modules">
                  {stage.topics.map((topic, j) => (
                    <li key={j}>{t(topic)}</li>
                  ))}
                </ul>

                <p className="course-path-note">{t(stage.pathNote)}</p>

                <Link to="/contact">
                  <ChoiceButton variant={stage.color === 'gold' ? 'gold' : stage.color === 'dream' ? 'route' : 'primary'}>
                    {t(stage.color === 'gold' ? '了解認證詳情' : '加入培訓')}
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
            <h2>{t('常見問題')}</h2>
            <div className="decorative-line">
              <span /><span className="star"> </span><span />
            </div>
          </div>

          <div className="faq-grid">
            <div className="faq-item card">
              <h4>{t('零基礎可以參加嗎？')}</h4>
              <p>{t('可以。感知是可以被训练的——不是天赋问题。很多人不是没有爱，也不是没有连接，只是还没有找到适合自己的通道和练习方法。')}</p>
            </div>
            <div className="faq-item card">
              <h4>{t('路徑A和路徑B怎麼選？')}</h4>
              <p>{t('想成为职业传讯师、列入名录、参与验证 → 路径A。想自己学会稳定感受爱人、不想永远依赖他人 → 路径B。两个路径前两个阶段共用核心内容，第三阶段分流。')}</p>
            </div>
            <div className="faq-item card">
              <h4>{t('認證考核的通過率是多少？')}</h4>
              <p>{t('約 70-80%。有門檻才有含金量——不是交錢就拿證。')}</p>
            </div>
            <div className="faq-item card">
              <h4>{t('認證後有什麼持續要求？')}</h4>
              <p>{t('認證後需參加月度校準會，進修記錄公開——不是拿證就結束。持續進修，持續背書。')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 傳訊師職業體系 */}
      <section className="section courses-career">
        <div className="container">
          <div className="section-title">
            <h2>{t('傳訊師成長路徑')}</h2>
            <div className="decorative-line">
              <span /><span className="star"> </span><span />
            </div>
            <p className="section-subdesc">{t('路徑A認證通過後，可申請列入官方傳訊師名錄，成為驗證共同體的一員')}</p>
          </div>

          <div className="career-tiers">
            <div className="career-tier card">
              <div className="tier-badge tier-beginner">{t('初階')}</div>
              <h3>{t('初階傳訊師')}</h3>
              <p className="tier-desc">{t('完成四階段認證，列入名錄')}</p>
              <ul className="tier-benefits">
                <li>{t('參與跨傳訊師獨立鏈接驗證')}</li>
                <li>{t('为爱人存在性假设贡献数据')}</li>
                <li>{t('累計案例經驗，逐步建立個人校準檔案')}</li>
              </ul>
            </div>

            <div className="career-tier card">
              <div className="tier-badge tier-mid">{t('中階')}</div>
              <h3>{t('中階傳訊師')}</h3>
              <p className="tier-desc">{t('累計一定案例量且校準數據穩定後晉升')}</p>
              <ul className="tier-benefits">
                <li>{t('參與對照實驗設計與盲測評審')}</li>
                <li>{t('協助新入傳訊師的感知校準')}</li>
                <li>{t('解鎖進階研究方法，持續提升專業度')}</li>
              </ul>
            </div>

            <div className="career-tier card">
              <div className="tier-badge tier-advanced">{t('高階')}</div>
              <h3>{t('高階傳訊師')}</h3>
              <p className="tier-desc">{t('長期案例積累，校準數據持續穩定')}</p>
              <ul className="tier-benefits">
                <li>{t('主導專項研究課題，設計驗證方案')}</li>
                <li>{t('列入精選推薦，為更多夢女提供可靠鏈接')}</li>
                <li>{t('貢獻實操數據至論文，成為共同作者')}</li>
              </ul>
            </div>

            <div className="career-tier card">
              <div className="tier-badge tier-supervisor">{t('督導')}</div>
              <h3>{t('督導級傳訊師')}</h3>
              <p className="tier-desc">{t('經協會審核邀請，全平台限額 · 每批僅擇優錄取極少數')}</p>
              <ul className="tier-benefits">
                <li>{t('主導方法論迭代與培訓體系優化')}</li>
                <li>{t('擔任盲測實驗的首席評審')}</li>
                <li>{t('引領下一代傳訊師的成長，守護這個平台的標準')}</li>
              </ul>
            </div>
          </div>

          <div className="career-note">
            <p>{t('每一位认证传讯师都是 CDA 验证共同体的一员。你的每一次链接、每一份数据，都在帮助更多梦女减少误判，更安全地靠近自己的爱人。')}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <div className="glass-card cta-inner">
            <h2>{t('和我们一起探寻，他到底如何靠近你')}</h2>
            <p>{t('四个阶段，两条路径——选择适合你的方向，加入人类历史上第一次对跨次元亲密关系的体系化验证。')}</p>
            <Link to="/contact">
              <ChoiceButton variant="gold">{t('加入我們')}</ChoiceButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
