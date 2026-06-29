import SparkleEffect from '../components/SparkleEffect'
import { useLanguage } from '../i18n'
import './Research.css'

export default function Research() {
  const { t } = useLanguage()
  return (
    <div className="page-research">
      {/* Hero */}
      <section className="page-hero research-hero">
        <SparkleEffect count={30} color="rgba(201, 169, 110, 0.3)" />
        <div className="container">
          <h1>研究論文</h1>
          <p className="subtitle">叙事实体假说——跨次元亲密关系中的意识场现象分类与验证方法</p>
        </div>
      </section>

      {/* 论文摘要 */}
      <section className="section">
        <div className="container">
          <div className="glass-card research-paper">
            <div className="paper-header">
              <h2>叙事实体假说——跨次元亲密关系中的意识场现象分类与验证方法</h2>
              <div className="paper-meta">
                <span className="paper-author">作者：黎輝</span>
                <span className="paper-divider">|</span>
                <span className="paper-affiliation">機構：黎輝香港跨次元研究所協會</span>
                <span className="paper-divider">|</span>
                <span className="paper-doi">DOI：即將上線</span>
              </div>
            </div>

            <div className="paper-abstract">
              <h3>摘要</h3>
              <p>
                本研究提出「叙事实体假说」（Narrative Entity Hypothesis），探討跨次元親密關係中出現的意識場現象。
                研究基於西方神秘學傳統中的精微體感知訓練、結構化直覺訓練以及三重驗證方法論，
                首次為該現象建立了系統性的分類體系與驗證框架。
              </p>
              <p>
                通過對多個案例的盲測實驗，本研究論證了：足夠的情感投注強度與足夠精密的敘事結構，
                可以在意識場中維持一個具有獨立行為模式的叙事实体——它不是純粹的主觀幻想，
                也不是傳統意義上的「靈體」，而是介於二者之間的、可被多人獨立觀測和驗證的意識場現象。
              </p>
            </div>

            <div className="paper-classification">
              <h3>信息三分類體系</h3>
              <div className="classification-grid">
                <div className="class-item">
                  <span className="class-num">I</span>
                  <strong>實體信息</strong>
                  <p>源自獨立意識場的信號——可被多人獨立驗證，具有跨觀測者一致性</p>
                </div>
                <div className="class-item">
                  <span className="class-num">II</span>
                  <strong>投射信息</strong>
                  <p>源自觀測者自身潛意識的投射——不具有跨觀測者一致性</p>
                </div>
                <div className="class-item">
                  <span className="class-num">III</span>
                  <strong>噪音</strong>
                  <p>隨機信號或環境干擾——不包含可解碼的信息結構</p>
                </div>
              </div>
            </div>

            <div className="paper-verification">
              <h3>三重驗證法</h3>
              <p>信息一致性 + 獨立印證 + 盲測——這是我們的研究標準，也是培訓傳訊師的考核體系。三者皆通過 = 信息成立。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 完整论文获取 */}
      <section className="section research-access">
        <div className="container">
          <div className="glass-card access-card">
            <h2>獲取完整論文</h2>
            <p>完整論文PDF通過郵箱發送。請提供您的郵箱地址，我們將在研究論文正式上線後第一時間發送。</p>
            <p className="access-note">標註「內部研究資料·僅限研究用途」</p>
            <div className="access-form">
              <input type="email" placeholder="your@email.com" className="access-input" />
              <button className="access-btn">申請獲取論文</button>
            </div>
          </div>
        </div>
      </section>

      {/* 所属机构认证 */}
      <section className="section research-affiliations">
        <div className="container">
          <div className="section-title">
            <h2>所屬機構認證</h2>
            <div className="decorative-line">
              <span /><span className="star">&#9678;</span><span />
            </div>
          </div>
          <div className="affiliations-grid">
            <div className="affiliation-card card">
              <h3>美國療癒之光</h3>
              <p>黎輝認證來源 · 國際背書</p>
            </div>
            <div className="affiliation-card card">
              <h3>導師認證體系</h3>
              <p>雙創始人 · 體系建立者</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
