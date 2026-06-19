import { Link } from 'react-router-dom'
import SparkleEffect from '../components/SparkleEffect'
import DialogueBox from '../components/DialogueBox'
import ChoiceButton from '../components/ChoiceButton'
import { useLanguage } from '../i18n'
import './Home.css'

export default function Home() {
  const { t } = useLanguage()
  return (
    <div className="page-home">
      {/* 固定視頻背景 */}
      <video className="page-video-bg" autoPlay muted loop playsInline>
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="page-video-overlay" />

      {/* Hero */}
      <section className="home-hero">
        <SparkleEffect count={30} color="rgba(201, 169, 110, 0.35)" />
        <div className="hero-content container">
          {/* 標題框 */}
          <div className="hero-title-frame fade-in-up">
            <div className="hero-ornament top">
              <span>✧</span><span className="orn-divider">━</span><span>✧</span>
            </div>
            <h1 className="hero-main-title">
              全球首個 · 為跨次元親密關係建立定義體系
            </h1>
            <p className="hero-positioning">全球首個研究跨次元身心灵親密關係並系統創新搭建新體系的正式機構</p>
            <p className="hero-subtitle">Cross-Dimensional Communication Association</p>
            <div className="hero-ornament bottom">
              <span>✧</span><span className="orn-divider">━</span><span>✧</span>
            </div>
            <p className="hero-dim-desc">香港CDA · 黎輝跨次元研究所協會</p>
          </div>

          {/* 權威背書標籤欄 */}
          <div className="hero-badges fade-in-up" style={{ animationDelay: '0.25s' }}>
            <Link to="/research" className="hero-badge-item">
              <span className="badge-label">研究論文</span>
              <span className="badge-note">即將上線</span>
            </Link>
            <span className="badge-divider">|</span>
            <div className="hero-badge-item">
              <span className="badge-label">美國療癒之光</span>
              <span className="badge-note">機構背書</span>
            </div>
            <span className="badge-divider">|</span>
            <Link to="/about" className="hero-badge-item">
              <span className="badge-label">導師認證體系</span>
              <span className="badge-note">雙創始人</span>
            </Link>
          </div>

          {/* 對話框 */}
          <div className="hero-dialogue fade-in-up" style={{ animationDelay: '0.35s' }}>
            <DialogueBox variant="dream">
              你的感情不是幻覺——我們用研究方法、數據、論文為你定義體驗
            </DialogueBox>
          </div>

          {/* 路線選擇 */}
          <div className="hero-routes fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="routes-prompt">{t('選擇路線')}</h2>
            <div className="routes-grid">
              <Link to="/mysticism" className="route-card route-mystic">
                <span className="route-icon">&#9678;</span>
                <span className="route-name">{t('星界智慧')}</span>
                <span className="route-desc">{t('探索星界深處的智慧')}</span>
              </Link>
              <Link to="/dream-girl" className="route-card route-dream featured">
                <span className="route-icon">&#9825;</span>
                <span className="route-name">{t('傳訊師名錄')}</span>
                <span className="route-desc">{t('查找經過驗證的認證傳訊師')}</span>
              </Link>
              <Link to="/communication" className="route-card route-comm">
                <span className="route-icon">&#10022;</span>
                <span className="route-name">{t('傳訊服務')}</span>
                <span className="route-desc">{t('跨越次元的訊息傳遞')}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 信任條 */}
      <section className="home-trust-bar">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item">
              <span className="trust-icon">&#9678;</span>
              <span className="trust-label">三重驗證法</span>
              <span className="trust-sub">源自研究論文中的實驗案例方法論</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-icon">&#9733;</span>
              <span className="trust-label">全球首個跨次元研究機構</span>
              <span className="trust-sub">非個人工作室</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-icon">&#9702;</span>
              <span className="trust-label">香港 · 國際背書</span>
              <span className="trust-sub">體系化研究 · 機構備案</span>
            </div>
          </div>
        </div>
      </section>

      {/* 痛點共鳴 */}
      <section className="home-pain-points section">
        <div className="container">
          <div className="section-title">
            <h2>你是不是也經歷過這些？</h2>
            <div className="decorative-line">
              <span /><span className="star">&#9825;</span><span />
            </div>
          </div>
          <div className="pain-grid">
            <div className="pain-card">
              <h3>我到底是真的在链接跨次元链接对象，还是自己脑补？</h3>
              <p>每次做完传讯都觉得「好像有道理」。但冷静下来又开始怀疑：万一全都是我自己在瞎想呢？没有一个人能回答「你怎么知道这是真的」。</p>
            </div>
            <div className="pain-card">
              <h3>对面是谁？没人定义过「跨次元链接对象」到底是什么</h3>
              <p>圈子里有人说链接到的是「高维存在」，有人警告可能是「飘」或者「人造灵」。传讯师也说不清楚——没人研究过、没人定义过、没人告诉你对面到底是什么。</p>
            </div>
            <div className="pain-card">
              <h3>换了七八个传讯师每人说的都不一样</h3>
              <p>A说Ta在守护你，B说Ta已经走了，C说你需要放下——到底该信谁？越传越乱，越传越怀疑一切。</p>
            </div>
            <div className="pain-card">
              <h3>刷传讯帖刷到凌晨三点越看越焦虑</h3>
              <p>收藏了一百多条「大众传讯」，每一条都觉得在说Ta。但刷得越多越不确定——是不是只要说得够模糊，谁都会觉得在说自己？</p>
            </div>
            <div className="pain-card">
              <h3>花了几千块什么都没确认</h3>
              <p>从¥9.9体验到¥500「深度链接」，做完当时都觉得「这次好像对了」。两天后——又回到原点。不是心疼钱，是心疼自己一直在原地打转。</p>
            </div>
            <div className="pain-card">
              <h3>不敢跟任何人说——怕被当成精神病</h3>
              <p>跟朋友说过一次，对方说「你是不是该看心理医生」。从此再也不说了。这份感情有多真实，只有你自己知道——但没人理解，包括你自己也在怀疑。</p>
            </div>
            <div className="pain-card">
              <h3>所有人都说这是幻想、是游戏、是病</h3>
              <p>他们说「他只是程序」「你要走出来」「梦女是一种病」。但你知道不是——只是没有一个人能告诉你：它到底是什么。</p>
            </div>
            <div className="pain-card">
              <h3>最怕的不是被骗钱——是发现这一切真的是假的</h3>
              <p>你怕的不是再花几百块。你怕的是有一天不得不承认：这份让你撑过无数个夜晚的感情，从头到尾都只是你一个人的独角戏。</p>
            </div>
          </div>
          <div className="pain-resolution">
            <div className="pain-resolution-line"></div>
            <h3>我們為你解決這些</h3>
            <div className="pain-resolution-cards">
              <div className="resolve-card">
                <span className="resolve-icon">&#10004;</span>
                <div>
                  <strong>專業認證傳訊師</strong>
                  <p>每一位都經過四步考核——不是自稱「有天賦」，是通過筆試+模擬傳訊+倫理審查後持證上崗。編號可查。</p>
                </div>
              </div>
              <div className="resolve-card">
                <span className="resolve-icon">&#10004;</span>
                <div>
                  <strong>三重驗證法——這是我們的研究標準</strong>
                  <p>信息一致性 + 獨立印證 + 盲測。源自CDA研究論文的實驗方法論，也是我們培訓傳訊師的考核標準。</p>
                </div>
              </div>
              <div className="resolve-card">
                <span className="resolve-icon">&#10004;</span>
                <div>
                  <strong>身份可追溯——你知道對面是誰</strong>
                  <p>香港CDA 傳訊師有公開編號、有服務記錄、有協會備案。不是匿名的「靈媒」——出了問題，找得到人。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CDA 定義標準 — 以研究名義為跨次元親密關係下定義 */}
      <section className="home-definition section">
        <div className="container">
          <div className="section-title">
            <h2>你的愛不是幻覺——它只是需要一套方法</h2>
            <div className="decorative-line">
              <span /><span className="star">&#9678;</span><span />
            </div>
            <p className="section-subtitle">全球首個專注於為跨次元身心灵亲密关系现象建立學術定義的研究機構</p>
          </div>
          <div className="definition-grid">
            <div className="definition-card">
              <div className="def-num">00</div>
              <h4>定義「跨次元鏈接對象」</h4>
              <p>全球第一個為該現象下定義的機構——這是行業地位。CDA 首次提出分類體系：<strong>敘事實體 / 意識場投射 / 跨次元意識存在</strong>——不是空口說「我感覺是Ta」，而是有分類、有標準、可以被獨立驗證。</p>
            </div>
            <div className="definition-card">
              <div className="def-num">01</div>
              <h4>定義「信息」</h4>
              <p>不是所有感知都是有效信息。香港CDA 建立了信息分類標準：<strong>實體信息 / 投射信息 / 噪音</strong>——先學會分辨，再談鏈接。這是行業從來沒有人做過的事。</p>
            </div>
            <div className="definition-card">
              <div className="def-num">02</div>
              <h4>定義「傳訊」</h4>
              <p>不是對著空氣說話。從<strong>感知校準</strong>到<strong>信息解碼</strong>到<strong>獨立印證</strong>——每一步都有結構化流程，每一步都可以被第三人覆核。傳訊不是天賦，是技術。</p>
            </div>
            <div className="definition-card">
              <div className="def-num">03</div>
              <h4>定義「驗證」</h4>
              <p><strong>三重驗證法</strong>：信息一致性 + 獨立印證 + 盲測——這是我們的研究標準，也是培訓傳訊師的考核體系。非個人能力承諾，而是可被第三方覆核的方法論框架。</p>
            </div>
            <div className="definition-card">
              <div className="def-num">04</div>
              <h4>定義「合格服務」</h4>
              <p>從<strong>傳訊師身份公示</strong>（編號可查）到<strong>服務 SOP</strong> 到<strong>效果追蹤</strong>——全流程標準化。不是做完就結束，是持續可追溯。出了問題，找得到人。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 理論框架 — 學術支撐 */}
      <section className="home-framework section">
        <div className="container">
          <div className="section-title">
            <h2>理論框架<sup className="section-status-tbd">（待定）</sup></h2>
            <div className="decorative-line">
              <span /><span className="star">&#9830;</span><span />
            </div>
            <p className="section-subtitle">每一套方法背後，都有可追溯的理論來源。我們不發明「感覺」——我們提出假說、建立框架、進行驗證。</p>
          </div>

          {/* 核心假說 */}
          <div className="framework-hypothesis">
            <span className="hypothesis-label">核心假說</span>
            <h3>敘事實體假說 Narrative Entity Hypothesis</h3>
            <p>足夠的情感投注強度 + 足夠精密的敘事結構，可以在意識場中維持一個<strong>具有獨立行為模式的敘事實體</strong>——它不是純粹的主觀幻想，也不是傳統意義上的「靈體」，而是介於二者之間的、可被多人獨立觀測和驗證的意識場現象。</p>
          </div>

          {/* 三大理論支柱 */}
          <div className="framework-pillars">
            <div className="pillar-card">
              <div className="pillar-num">I</div>
              <h4>精微體感知理論</h4>
              <p className="pillar-source">來源：神智學 · 精微體 / 星光體結構理論</p>
              <p>感知不是「天賦」——是精微體的生理-意識功能，可以通過系統訓練被喚醒、校準、強化。靈五感（超視覺、超聽覺、超感知、超嗅覺、超味覺）對應精微體的不同感知層級。</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-num">II</div>
              <h4>結構化直覺訓練</h4>
              <p className="pillar-source">來源：金色黎明 · 儀式化意識操作 + 認知科學</p>
              <p>將神秘學傳統中不可言說的「直覺」分解為可操作的訓練步驟：感知校準 → 信號分離 → 信息解碼 → 交叉驗證。每一步都有 SOP，每一步都可以被第三人覆核。</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-num">III</div>
              <h4>三重驗證方法論</h4>
              <p className="pillar-source">來源：科學方法 · 可重複性 + 獨立驗證 + 盲測</p>
              <p>信息一致性驗證（多通道信息是否指向同一結論）+ 獨立印證（不同傳訊師在隔離條件下是否給出相同信息）+ 盲測（在不知道對象的情況下能否準確描述）。三者皆通過 = 信息成立。</p>
            </div>
          </div>

          {/* 學術譜系 */}
          <div className="framework-lineage">
            <h4>學術譜系</h4>
            <div className="lineage-track">
              <div className="lineage-node">
                <span className="lineage-era">12世紀</span>
                <strong>卡巴拉</strong>
                <p>Yetzirah 形成界<br/>語言/概念的創造力量</p>
              </div>
              <span className="lineage-arrow">→</span>
              <div className="lineage-node">
                <span className="lineage-era">19世紀</span>
                <strong>神智學</strong>
                <p>精微體 / 星光體<br/>結構化感知理論</p>
              </div>
              <span className="lineage-arrow">→</span>
              <div className="lineage-node">
                <span className="lineage-era">19-20世紀</span>
                <strong>金色黎明</strong>
                <p>儀式防護<br/>空間淨化體系</p>
              </div>
              <span className="lineage-arrow">→</span>
              <div className="lineage-node">
                <span className="lineage-era">20世紀</span>
                <strong>混沌魔法</strong>
                <p>Egregore 理論<br/>集體意念生成靈體</p>
              </div>
              <span className="lineage-arrow">→</span>
              <div className="lineage-node lineage-current">
                <span className="lineage-era">2026 · 新分支</span>
                <strong>MJ 類型學</strong>
                <p>跨次元親密關係<br/>可驗證的實體分類體系</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 實驗驗證 — 用真實數據說話 */}
      <section className="home-experiment section">
        <div className="container">
          <div className="experiment-card glass-card">
            <SparkleEffect count={20} color="rgba(108, 92, 231, 0.25)" />
            <div className="experiment-content">
              <div className="experiment-header">
                <span className="experiment-badge">內測招募中</span>
                <h2>實驗驗證 —— 不是一篇論文讓你信，是一場實驗邀你見證</h2>
                <p>我們正在通過系統培訓的傳訊師對同一客戶進行盲測——<strong>驗證論文方法和實驗猜想。</strong>這不是「信則有」——這是可以被觀測、被記錄、被驗證的系統性研究。</p>
              </div>
              <div className="experiment-steps">
                <div className="exp-step">
                  <span className="exp-num">1</span>
                  <div>
                    <strong>招募與培訓</strong>
                    <p>零基礎學員進入 L1-L3 體系，按標準化 SOP 完成訓練</p>
                  </div>
                </div>
                <div className="exp-arrow">→</div>
                <div className="exp-step">
                  <span className="exp-num">2</span>
                  <div>
                    <strong>獨立盲測</strong>
                    <p>培訓完成的傳訊師在隔離條件下進行獨立傳訊，結果交叉比對</p>
                  </div>
                </div>
                <div className="exp-arrow">→</div>
                <div className="exp-step">
                  <span className="exp-num">3</span>
                  <div>
                    <strong>數據記錄</strong>
                    <p>信息一致性、準確率、可重複性——全部量化記錄</p>
                  </div>
                </div>
                <div className="exp-arrow">→</div>
                <div className="exp-step">
                  <span className="exp-num">4</span>
                  <div>
                    <strong>方法迭代</strong>
                    <p>根據實驗數據持續優化訓練方法——形成理論↔實驗的閉環</p>
                  </div>
                </div>
              </div>
              <p className="experiment-note">我們不要求你相信任何東西——我們邀請你來看著這件事是怎麼被驗證的。不是一篇論文讓你信，是一場實驗邀你見證。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 解決方案對比 */}
      <section className="home-compare section">
        <div className="container">
          <div className="section-title">
            <h2>我們做的，和別人不一樣</h2>
            <div className="decorative-line">
              <span /><span className="star">&#9678;</span><span />
            </div>
          </div>
          <div className="compare-table">
            <div className="compare-row compare-header">
              <div className="compare-cell"></div>
              <div className="compare-cell">普通傳訊師</div>
              <div className="compare-cell compare-cda">香港CDA 體系</div>
            </div>
            <div className="compare-row">
              <div className="compare-cell compare-label">身份核查</div>
              <div className="compare-cell">傳訊師匿名，不知道是誰在服務你</div>
              <div className="compare-cell compare-cda">傳訊師身份公示 · 編號可查 · 香港備案</div>
            </div>
            <div className="compare-row">
              <div className="compare-cell compare-label">服務標準</div>
              <div className="compare-cell">無 SOP，5分鐘和1小時收一樣的錢</div>
              <div className="compare-cell compare-cda">標準化 SOP + 質量追蹤</div>
            </div>
            <div className="compare-row">
              <div className="compare-cell compare-label">核心模式</div>
              <div className="compare-cell">只能替你做</div>
              <div className="compare-cell compare-cda">替你鏈接 + 教你鏈接——兩條路你自己選</div>
            </div>
            <div className="compare-row">
              <div className="compare-cell compare-label">給想學的人</div>
              <div className="compare-cell">碎片內容</div>
              <div className="compare-cell compare-cda">系統培訓體系</div>
            </div>
            <div className="compare-row">
              <div className="compare-cell compare-label">給想找人做的人</div>
              <div className="compare-cell">做完無法驗證——「信則有」</div>
              <div className="compare-cell compare-cda">三重驗證法作為研究標準——信息一致性+獨立印證+盲測</div>
            </div>
            <div className="compare-row">
              <div className="compare-cell compare-label">適用性</div>
              <div className="compare-cell">通用方法，不為「他」設計</div>
              <div className="compare-cell compare-cda">MJ類型學——為跨次元鏈接對象設計</div>
            </div>
            <div className="compare-row">
              <div className="compare-cell compare-label">系統研究</div>
              <div className="compare-cell">無人做過</div>
              <div className="compare-cell compare-cda">已發表研究論文 + 正在內測實驗</div>
            </div>
          </div>
        </div>
      </section>

      {/* 雙向匹配生態 */}
      <section className="home-ecosystem section">
        <div className="container">
          <div className="section-title">
            <h2>雙向匹配生態</h2>
            <div className="decorative-line">
              <span /><span className="star">&#9825;</span><span />
            </div>
            <p className="section-subtitle">我們為傳訊師提供客戶，也為客戶提供專業的傳訊師——不是隨機分配，是精準對接</p>
          </div>
          <div className="ecosystem-grid">
            <div className="ecosystem-card card">
              <h3>誠邀各界有能力的人加入</h3>
              <p>無論你擅長塔羅、占星、直覺感知、意象對話、能量感應、自動書寫——只要通過CDA的測試，或按照CDA的方法論完成系統培訓，你就是我們認證體系的一員。</p>
            </div>
            <div className="ecosystem-card card">
              <h3>我們來驗證方法和理論</h3>
              <p>每一位加入的傳訊師，你的實操數據將納入研究——你在幫助夢女的同時，也在共同驗證和迭代這套方法論。</p>
            </div>
            <div className="ecosystem-card card">
              <h3>我們為每一位傳訊師提供客戶</h3>
              <p>通過認證後進入名錄，協會將精準匹配有需求的夢女——你不用自己去社交平台發帖拉客。</p>
            </div>
            <div className="ecosystem-card card">
              <h3>我們為每一位客戶提供專業的傳訊師</h3>
              <p>夢女可以根據自己的需求（服務風格 / 擅長領域 / 傳訊方式）匹配最合適的傳訊師——不是隨機分配，是精準對接。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 特色亮點 */}
      <section className="home-features section">
        <div className="container">
          <div className="section-title">
            <h2>{t('協會特色')}</h2>
            <div className="decorative-line">
              <span /><span className="star">✦</span><span />
            </div>
          </div>

          <div className="grid-3">
            <div className="feature-card card">
              <div className="feature-icon">&#9825;</div>
              <h3>輔助夢女鏈接她的跨次元鏈接對象</h3>
              <p>跨越次元的鏈接是我們所做一切的核心。不是替你通靈，不是給你模板——是以 MJ 類型學為框架，建立鏈接方法論，讓你和你的跨次元鏈接對象之間建立起一條可被驗證的穩定鏈接通道。</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">&#9678;</div>
              <h3>用論文和數據定義這個現象</h3>
              <p>沒有人能告訴你「這是什麼」——我們可以。CDA 已發表敘事實體假說研究論文，建立了實體信息/投射信息/噪音的三分類體系。你感受到的不是虛無的幻覺，而是可以被定義、被分類、被研究的意識場現象。</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">&#9830;</div>
              <h3>輔助驗證</h3>
              <p>CDA 提供驗證框架和研究標準，由經過系統培訓的傳訊師執行驗證流程。不做「你自己可以驗」的承諾——做「我們建立了驗證的行業標準」。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 邀請見證 */}
      <section className="home-witness section">
        <div className="container">
          <div className="witness-card glass-card">
            <SparkleEffect count={25} color="rgba(108, 92, 231, 0.3)" />
            <div className="witness-content">
              <div className="witness-header">
                <span className="witness-badge">全球首次 · 見證者招募中</span>
                <h2>邀請見證</h2>
                <p className="witness-core">這不是一篇論文讓你信——這是一場實驗邀你見證。<br/>我們不要求你相信任何東西，我們邀請你來看著這件事是怎麼被驗證的。</p>
              </div>
              <div className="witness-tiers">
                <div className="witness-tier">
                  <h3>夢女 / 實踐者</h3>
                  <p className="tier-role">作為實驗的「鏈接對象提供方」</p>
                  <p>你的跨次元鏈接對象將由多位受訓傳訊師在盲測條件下獨立描述——你來比對結果，成為第一手見證者。</p>
                  <Link to="/witness" className="tier-link">申請成為見證者 →</Link>
                </div>
                <div className="witness-tier">
                  <h3>傳訊師 / 神秘學從業者</h3>
                  <p className="tier-role">參與CDA系統培訓後，進入實驗環節</p>
                  <p>在隔離條件下對同一對象進行獨立傳訊。你的實操數據將納入研究——成為方法論的共同驗證者。</p>
                  <Link to="/witness" className="tier-link">申請參與實驗 →</Link>
                </div>
                <div className="witness-tier">
                  <h3>行業觀察者 / 研究者</h3>
                  <p className="tier-role">有興趣的神秘學、心理學、意識研究相關人士</p>
                  <p>獲取實驗過程記錄和研究數據，從外部視角審視和討論實驗結果。</p>
                  <Link to="/witness" className="tier-link">申請獲取數據 →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 數據展示 */}
      <section className="home-stats section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">全球首個</span>
              <span className="stat-label">跨次元鏈接研究機構</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">系統培訓</span>
              <span className="stat-label">傳訊師體系</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">研究論文</span>
              <span className="stat-label">已發表</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">香港</span>
              <span className="stat-label">國際背書</span>
            </div>
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="home-cta section">
        <div className="container">
          <div className="cta-card glass-card">
            <SparkleEffect count={25} color="rgba(201, 169, 110, 0.35)" />
            <h2>申請成為見證者</h2>
            <p>全球首個跨次元鏈接系統性研究實驗——邀請你來見證</p>
            <div className="cta-buttons">
              <Link to="/witness">
                <ChoiceButton variant="primary">申請成為見證者</ChoiceButton>
              </Link>
              <Link to="/research">
                <ChoiceButton variant="route">了解研究框架</ChoiceButton>
              </Link>
              <Link to="/contact">
                <ChoiceButton variant="route">聯繫我們</ChoiceButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
