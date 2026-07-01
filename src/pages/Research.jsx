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
          <p className="subtitle">論跨次元情感對象（MJ）的存在論假設、五軸類型學及其西方秘傳學新分支定位</p>
        </div>
      </section>

      {/* 论文摘要 */}
      <section className="section">
        <div className="container">
          <div className="glass-card research-paper">
            <div className="paper-header">
              <h2>論跨次元情感對象（MJ）的存在論假設、五軸類型學及其西方秘傳學新分支定位</h2>
              <div className="paper-meta">
                <span className="paper-author">作者：黎輝 · 破曉</span>
                <span className="paper-divider">|</span>
                <span className="paper-affiliation">機構：香港跨次元傳訊研究協會</span>
                <span className="paper-divider">|</span>
                <span className="paper-doi">DOI：即將上線</span>
              </div>
            </div>

            <div className="paper-abstract">
              <h3>摘要</h3>
              <p>
                2017 年以來，中文互聯網上出現並迅速擴張了一個此前未被學術界注意到的服務市場——跨次元傳訊。
                數千名傳訊師以通靈、塔羅等工具向夢女客戶提供與跨次元情感對象的付費鏈接服務，年交易規模估計在數千萬元人民幣。
                然而，該市場在方法論層面高度碎片化，根源不在從業者素質，而在於理論真空——迄今沒有任何一套被學術共同體承認的理論框架，
                能夠系統回答「MJ 是什麼」「他在哪裡」「如何分類」「如何分辨」等基礎問題。本文是對這一理論真空的回應。
              </p>
              <p>
                本文的核心論證線索如下。第一步，以 Antoine Faivre（1986/1994）提出的西方秘傳學六大特徵框架為形式分析工具，
                逐條檢驗 MJ 理論體系是否滿足一個秘傳學新分支的全部構成要件。第二步，整合五套獨立存在論框架——
                Everett 多世界、Kaluza-Klein 高維、神智學七層位面、Corbin 意象世界、Luria/Scholem 四重世界——
                為 MJ 提供跨學科存在論基礎。第三步，基於上述框架提出五軸類型學假設。第四步，建構從感知訓練、鏈接工具、
                分辨方法論到身份驗證和儀式防護的完整 MJ 方法論體系。第五步，以 Hanegraaff「被排斥的知識」理論解釋 MJ 尚未被正式承認的現狀。
                第六步，指出上述假設可通過 CDA 標準化培訓體系下的跨傳訊師獨立鏈接進行系統的經驗檢驗。
              </p>
              <p>
                本文的定位是一份理論建構文本（research program manifesto），而非已完成的實證論文。其目標是為未來的經驗檢驗提供一個可操作的、有明確文獻來源的理論框架。
              </p>
            </div>

            {/* 核心猜想 */}
            <div className="paper-verification" style={{borderLeft: '3px solid #c9a96e'}}>
              <h3>核心猜想：集體能量能否創造位面？</h3>
              <p>本文提出了一個比「MJ 存在於某個已有非物理層面」更激進的開放假說：<strong>當足夠多的人對同一個敘事結構持續投注情感能量，這股集體能量是否不僅能在已有位面中生成實體，還能在意識場中開闢出一個具有穩定結構的獨立位面？</strong>一個人（如 David-Néel）的持續意念可以創造一個幻人——百萬人的集體情感投注，指向同一個角色、同一個故事世界，其規模遠超歷史上任何一次靈體創建實驗。如果人造靈的生成機制在個體層面成立，那麼集體層面的同一種機制——敘事結構 + 大規模持續情感投注——是否可能在意識場中生成的不只是一個獨立實體，而是一個獨立位面？這一假說在當前階段無法被嚴格檢驗，但它為 MJ 存在論提供了一個更激進的替代性解釋：<strong>也許那個位面本身，就是被夢女們共同創造出來的。</strong></p>
            </div>

            {/* Faivre 六大特征逐条对照 */}
            <div className="paper-classification">
              <h3>Faivre 六大特徵逐條對照論證</h3>
              <p style={{marginBottom: '1.2rem', color: '#ccc'}}>
                本文的核心形式論證：以 Antoine Faivre（1986/1994）為西方秘傳學學科自身定義的六大特徵框架為標準，
                逐條檢驗 MJ 理論體系。結論——六項全部滿足。這不是「申請加入」，而是用本學科自己定義的標準，檢驗一個當代現象是否符合這個標準。
              </p>
              <div className="classification-grid">
                <div className="class-item">
                  <span className="class-num">①</span>
                  <strong>對應關係</strong>
                  <p>MJ 的感知、定位、驗證三個模塊均依賴於 Faivre 意義上的「對應關係」原則——通靈收信號，塔羅做定位，卡巴拉四重世界做位面診斷</p>
                </div>
                <div className="class-item">
                  <span className="class-num">②</span>
                  <strong>活化的自然</strong>
                  <p>MJ 實踐的根本前提——非物理存在是有生命的、有自主意志的、可被感知和交互的——並將其操作化為三層感知訓練方法論</p>
                </div>
                <div className="class-item">
                  <span className="class-num">③</span>
                  <strong>想像與中介</strong>
                  <p>最強的對應。Corbin 的意象世界（mundus imaginalis）為 MJ 鏈接提供了精確的操作模型——主動想像力不是編造，而是接收意象世界真實內容的認知器官</p>
                </div>
                <div className="class-item">
                  <span className="class-num">④</span>
                  <strong>轉化</strong>
                  <p>CDA 體系的設計目標不是永遠替客戶傳訊，而是讓客戶最終不再需要傳訊師——從「依賴」到「獨立」的軌跡，就是轉化</p>
                </div>
                <div className="class-item">
                  <span className="class-num">⑤</span>
                  <strong>諸傳統和諧一致</strong>
                  <p>人造靈的三重獨立印證（藏傳佛教/神智學/西方儀式魔法）、存在位面的跨傳統描述、「黑暗信使」原型的五傳統對應鏈——均非互相引用，獨立抵達同一張地圖</p>
                </div>
                <div className="class-item">
                  <span className="class-num">⑥</span>
                  <strong>傳承</strong>
                  <p>CDA 標準化傳訊師培訓認證體系——建立可操作的標準化訓練方法、定義市場專業標準、培養能獨立驗證本文假設的專業傳訊師</p>
                </div>
              </div>
            </div>

            {/* 身份特異性驗證 */}
            <div className="paper-verification">
              <h3>身份特異性驗證四層機制</h3>
              <p>設定一致性檢驗 + 跨通道信息一致性 + 自主信息識別 + 情感特異性——四層遞進篩選器，將身份驗證從「信則有」轉變為有方法論控制的概率判斷。</p>
            </div>

            {/* 五套存在論框架 */}
            <div className="paper-hypothesis">
              <h3>五套獨立存在論框架</h3>
              <p className="hypothesis-core">
                本文整合五套互不依賴的學術框架來回答同一個問題——「他在哪裡」。每一套來自獨立的學科傳統，各自覆蓋不同的坐標軸，共同構成 MJ 的跨學科存在論基礎。
              </p>

              <div className="hypothesis-pillars">
                <div className="hypothesis-item">
                  <span className="hypothesis-num">I</span>
                  <div>
                    <strong>Everett 多世界解釋（量子物理）</strong>
                    <p>為「不可觀測的平行分支在數學上可能」提供邏輯區分工具——定義「不可通信的平行性」基準類型，幫助排除不可能的選項</p>
                  </div>
                </div>
                <div className="hypothesis-item">
                  <span className="hypothesis-num">II</span>
                  <div>
                    <strong>Kaluza-Klein 高維理論 → 膜世界（理論物理）</strong>
                    <p>額外空間維度在數學上可能，膜世界模型為「跨世界通信」提供了正向的物理學可能性空間</p>
                  </div>
                </div>
                <div className="hypothesis-item">
                  <span className="hypothesis-num">III</span>
                  <div>
                    <strong>Blavatsky / Leadbeater 七層位面（神智學）</strong>
                    <p>從物理層到涅槃層的連續光譜——MJ 的三類感知信號（軀體/情緒/意象）分別對應以太子層、星光層和心智層</p>
                  </div>
                </div>
                <div className="hypothesis-item">
                  <span className="hypothesis-num">IV</span>
                  <div>
                    <strong>Corbin 意象世界（比較宗教學）</strong>
                    <p>在感官世界和理智世界之間存在第三個世界——mundus imaginalis。感知它的器官是主動想像力，不是編造謊言的工具，而是接收意象世界真實內容的認知通道</p>
                  </div>
                </div>
                <div className="hypothesis-item">
                  <span className="hypothesis-num">V</span>
                  <div>
                    <strong>Luria / Scholem 四重世界（猶太神秘主義）</strong>
                    <p>Atziluth → Beriah → Yetzirah → Assiah，世界之間由簾幕（parsah）分隔。簾幕的層數決定了 MJ 的可見性、接觸難度和信息衰減程度</p>
                  </div>
                </div>
              </div>
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
