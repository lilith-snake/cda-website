import { useLanguage } from '../i18n'
import './Research.css'

export default function Research() {
  const { t } = useLanguage()
  return (
    <div className="page-research">
      {/* Hero */}
      <section className="page-hero research-hero">
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

            <div className="paper-hypothesis">
              <h3>能量場感知阈限假說（EFPTH）</h3>
              <p className="hypothesis-core">
                能量場感知的個體差異，在操作層面是一種可被系統訓練的「意識精度」（Consciousness Precision），而非天賦或超自然能力。通過結構化的精微感知校準訓練，個體可系統性地提升對意識場信息的「信噪比分辯阈限」（Signal-to-Noise Discrimination Threshold），將感知從「偶然的模糊直覺」迭代為「可被他人獨立驗證的精確觀測」。
              </p>

              <div className="hypothesis-pillars">
                <div className="hypothesis-item">
                  <span className="hypothesis-num">I</span>
                  <div>
                    <strong>感知可塑性論</strong>
                    <p>如同品酒師可通過盲品訓練顯著提升味覺辨識精度，意識場感知作為一種精微認知功能，在結構化反饋訓練下可被系統性校準和提升。現有研究已證實內感受（interoception）的可訓練性，意識場感知是其在外部的自然延伸。</p>
                  </div>
                </div>
                <div className="hypothesis-item">
                  <span className="hypothesis-num">II</span>
                  <div>
                    <strong>信噪比阈限模型</strong>
                    <p>感知質量取決於「實體信號 vs 投射噪音 vs 環境干擾」的區分能力。未經訓練的感知者信噪比阈限低，將三類信息混為一談；經過校準的感知者可穩定地將信息分類為實體信息（I類）、投射信息（II類）、噪音（III類）。阈限本身是可量化、可訓練的操作參數。</p>
                  </div>
                </div>
                <div className="hypothesis-item">
                  <span className="hypothesis-num">III</span>
                  <div>
                    <strong>跨觀測者一致性的阈限依賴性</strong>
                    <p>只有當多位觀測者的感知阈限達到相近校準水平時，其對同一意識場現象的獨立描述才呈現統計學上顯著的一致性。這一一致性本身即構成區分「實體信息」與「投射信息」的操作性標準：多人獨立一致 = 實體信號；僅個體感知 = 投射或噪音。</p>
                  </div>
                </div>
                <div className="hypothesis-item">
                  <span className="hypothesis-num">IV</span>
                  <div>
                    <strong>去中介化的方法論</strong>
                    <p>能量場感知的可訓練性不依賴任何外部器物。訓練核心是：結構化反饋循環 + 盲測校準 + 多觀測者交叉驗證。這是可教學、可復現、可證偽的認知訓練技術。如果結構化訓練無法提升信噪比分辯阈限，則假說被證偽。</p>
                  </div>
                </div>
              </div>

              <div className="hypothesis-relation">
                <h4>與 NEH 敘事實體假說的關係</h4>
                <div className="relation-flow">
                  <span className="flow-item">NEH 命題一：敘事結構 → 意識場中生成敘事實體</span>
                  <span className="flow-arrow">→</span>
                  <span className="flow-item">該實體在意識場中產生可被感知的信息信號</span>
                  <span className="flow-arrow">→</span>
                  <span className="flow-item accent">EFPTH：對這些信號的感知精度可通過訓練系統性提升</span>
                  <span className="flow-arrow">→</span>
                  <span className="flow-item">提升後實現對實體信息的穩定解碼與驗證</span>
                </div>
              </div>
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
              <span /><span className="star"></span><span />
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
