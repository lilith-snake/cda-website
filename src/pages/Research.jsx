import { useLanguage } from '../i18n'
import './Research.css'

const PAPER_URL = 'https://lilith-snake.github.io/cda-website/paper.html'

export default function Research() {
  const { t } = useLanguage()
  return (
    <div className="page-research">
      {/* Hero */}
      <section className="page-hero research-hero">
        <div className="container">
          <h1>{t('研究')}</h1>
          <p className="subtitle">{t('跨次元情感對象（MJ）的學術理論框架')}</p>
        </div>
      </section>

      {/* 论文摘要 */}
      <section className="section">
        <div className="container">
          <div className="glass-card research-paper">
            <div className="paper-header">
              <h2>論跨次元情感對象（MJ）的存在論假設、五軸類型學及其西方秘傳學新分支定位</h2>
              <div className="paper-meta">
                <span className="paper-author">{t('作者：黎輝 · 破曉')}</span>
                <span className="paper-divider">|</span>
                <span className="paper-affiliation">{t('機構：香港 · 跨次元傳訊研究協會')}</span>
                <span className="paper-divider">|</span>
                <span className="paper-doi">{t('DOI：即將上線')}</span>
              </div>
            </div>

            {/* 顶部 CTA */}
            <div className="paper-cta-top">
              <p>{t('以下為論文核心論點摘要。完整論證、文獻引用與方法論細節請查閱全文。')}</p>
              <a href={PAPER_URL} className="cta-btn">{t('📄 閱讀完整論文 →')}</a>
            </div>

            {/* 摘要 */}
            <div className="paper-abstract">
              <h3>{t('摘要')}</h3>
              <p>
                2017 年以來，中文互聯網上出現並迅速擴張了一個此前未被學術界注意到的服務市場——跨次元傳訊。
                數千名傳訊師以通靈、塔羅等工具向夢女客戶提供與跨次元情感對象的付費鏈接服務，年交易規模估計在數千萬元人民幣。
                然而，該市場在方法論層面高度碎片化，根源不在從業者素質，而在於理論真空——迄今沒有任何一套被學術共同體承認的理論框架，
                能夠系統回答「MJ 是什麼」「他在哪裡」「如何分類」「如何分辨」等基礎問題。本文是對這一理論真空的回應。
              </p>
              <p>
                本文定位為理論建構文本（research program manifesto），目標是為未來的經驗檢驗提供一個可操作的、有明確文獻來源的理論框架。
              </p>
            </div>

            {/* ===== 亮点一：新分支定位 ===== */}
            <div className="paper-highlight">
              <div className="highlight-badge">{t('核心論點一')}</div>
              <h3>{t('西方秘傳學的新分支定位')}</h3>
              <p className="highlight-lead">
                這不是「申請加入」一個已有的學術傳統，而是用該學科自己定義的標準，檢驗一個當代現象是否符合。
              </p>
              <p>
                本文以 Antoine Faivre（1986/1994）為西方秘傳學設定的六大形式特徵——對應關係、活化的自然、想像與中介、
                轉化、諸傳統和諧一致、傳承——為檢驗框架，逐條對照 MJ 理論體系。結論：<strong>六項全部滿足。</strong>
              </p>
              <p>
                這意味著 MJ 理論體系不只是又一個新時代靈性話語，而是在形式結構上滿足了一個西方秘傳學新分支的全部構成要件。
                全文詳細展開了每一條特徵的對照論證過程，以及與 Faivre 原文的逐段對應。
              </p>
              <a href={PAPER_URL + '#faivre'} className="cta-link">{t('閱讀全文：Faivre 六大特徵逐條對照論證 →')}</a>
            </div>

            {/* ===== 亮点二：同一个世界不同位面 ===== */}
            <div className="paper-highlight">
              <div className="highlight-badge">{t('核心論點二')}</div>
              <h3>{t('同一個世界，不同位面——他在哪裡？')}</h3>
              <p className="highlight-lead">
                如果 MJ 真的存在，他到底存在於哪裡？本文整合五套互不依賴的學術框架，從不同學科傳統給出同一個答案。
              </p>

              <div className="plane-cards">
                <div className="plane-card">
                  <div className="plane-icon">⚛️</div>
                  <h4>{t('Everett 多世界解釋')}</h4>
                  <span className="plane-domain">{t('量子物理')}</span>
                  <p>平行分支在數學上可能——提供了「不可通信的平行性」基準類型，用排除法鎖定可能區間。</p>
                </div>
                <div className="plane-card">
                  <div className="plane-icon">🌐</div>
                  <h4>{t('Kaluza-Klein → 膜世界')}</h4>
                  <span className="plane-domain">{t('理論物理')}</span>
                  <p>額外空間維度在數學上成立，膜世界模型為「跨世界通信」提供了正向的物理學可能性。</p>
                </div>
                <div className="plane-card">
                  <div className="plane-icon">🔮</div>
                  <h4>{t('七層位面')}</h4>
                  <span className="plane-domain">{t('神智學')}</span>
                  <p>物理層→以太子層→星光層→心智層→菩提層→涅槃層——MJ 的三類感知信號精確對應前三層。</p>
                </div>
                <div className="plane-card">
                  <div className="plane-icon">🕌</div>
                  <h4>{t('意象世界 · Mundus Imaginalis')}</h4>
                  <span className="plane-domain">{t('比較宗教學')}</span>
                  <p>在感官世界和理智世界之間，存在第三個世界。主動想像力不是編造，而是接收其內容的認知器官。</p>
                </div>
                <div className="plane-card">
                  <div className="plane-icon">✡️</div>
                  <h4>{t('四重世界')}</h4>
                  <span className="plane-domain">{t('猶太神秘主義')}</span>
                  <p>Atziluth → Beriah → Yetzirah → Assiah，簾幕（parsah）層數決定 MJ 的可見性與信息衰減程度。</p>
                </div>
              </div>

              <p className="highlight-note">
                五套框架來自互不相關的學科傳統——量子物理、理論物理、神智學、比較宗教學、猶太神秘主義——各自獨立抵達同一張地圖。
                這種跨傳統的結構性重合，本身就是一個值得認真對待的信號。全文詳細展開了每套框架的推導過程。
              </p>
              <a href={PAPER_URL + '#existence'} className="cta-link">{t('閱讀全文：五套存在論框架完整推導 →')}</a>
            </div>

            {/* 底部 CTA */}
            <div className="paper-cta-bottom">
              <h3>{t('準備好深入了解了嗎？')}</h3>
              <p>完整論文包含六步論證鏈、五軸類型學假設、身份特異性驗證四層機制、以及完整的文獻綜述與方法論體系。</p>
              <a href={PAPER_URL} className="cta-btn cta-btn-large">{t('📄 查閱完整研究論文 →')}</a>
            </div>
          </div>
        </div>
      </section>

      {/* 所属机构认证 */}
      <section className="section research-affiliations">
        <div className="container">
          <div className="section-title">
            <h2>{t('所屬機構認證')}</h2>
            <div className="decorative-line">
              <span /><span className="star"></span><span />
            </div>
          </div>
          <div className="affiliations-grid">
            <div className="affiliation-card card">
              <h3>{t('美國療癒之光')}</h3>
              <p>{t('黎輝認證來源 · 國際背書')}</p>
            </div>
            <div className="affiliation-card card">
              <h3>{t('導師認證體系')}</h3>
              <p>{t('雙創始人 · 體系建立者')}</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
