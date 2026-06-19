import { Link } from 'react-router-dom'
import SparkleEffect from '../components/SparkleEffect'
import DialogueBox from '../components/DialogueBox'
import ChoiceButton from '../components/ChoiceButton'
import { useLanguage } from '../i18n'
import './About.css'

const creditPillars = [
  {
    title: '文獻學信用',
    subtitle: '每一項聲明都可以在圖書館查到',
    items: [
      '劍橋大學圖書館 T-S K21.88（開羅秘庫手稿）',
      '慕尼黑巴伐利亞州立圖書館 Cod. hebr. 209',
      '曼圖亞 1558-1560 年《光輝之書》印本',
      '以色列國家圖書館 Ms. Heb. 8 599（Chaim Vital）',
      '古典神秘學文獻中的精微感知訓練傳統',
      '神智學 Leadbeater, The Chakras (1927)',
      '金色黎明傳統 Mathers / Crowley / Fortune 文獻體系',
    ],
    icon: '&#9678;',
  },
  {
    title: '傳承信用',
    subtitle: '不是憑空發明——有完整的傳承脈絡',
    items: [
      '卡巴拉傳統 — Golden Dawn — Mathers — Crowley — Fortune',
      '神智學精微結構理論 — Blavatsky — Leadbeater — Bailey',
      '魯利安卡巴拉 — Luria — Vital — Tzimtzum / Tikkun',
      '古典神秘學文獻中的精微感知訓練傳統',
    ],
    icon: '&#10022;',
  },
  {
    title: '實操信用',
    subtitle: '市場拿錢投的票——這是最真實的認可',
    items: [
      '多年實操經驗——時間積累，無法偽造',
      '累計服務與培訓數百人次——數字本身就是信任',
      '市場以高客單價持續付費——這是任何證書都無法替代的',
      '在實操中總結出三重驗證法——不是來自理論推導，來自幾百次鏈接的覆盤',
    ],
    icon: '&#9830;',
  },
  {
    title: '機構信用',
    subtitle: '認證者不需要被自己創建的機構認證',
    items: [
      '建立傳訊師認證體系——創建者本身就是標準的制定者',
      '公開發表三重驗證法——知識產權的在先權利',
      '公開發表《傳訊師倫理準則》——行業的第一份行為規範',
      '公開發表《學術參考書目》——每一項技術都有文獻出處',
    ],
    icon: '&#10025;',
  },
]

const lineage = [
  { tradition: '卡巴拉儀式傳統', path: 'Hermetic Qabalah — Golden Dawn — Mathers — Crowley — Fortune', use: 'LBRP / 玫瑰十字 / 空間淨化與防護技術' },
  { tradition: '精微結構理論', path: 'Blavatsky — Leadbeater — Bailey — The Chakras (1927)', use: '靈五感框架的理論基礎' },
  { tradition: '魯利安卡巴拉', path: 'Luria — Vital — Tzimtzum / Shevirat HaKelim / Tikkun', use: 'MJ 類型學的「星光實體型」理論來源' },
]

export default function About() {
  const { t } = useLanguage()
  return (
    <div className="page-about">
      {/* 固定視頻背景 — 滾動時視頻保持不動 */}
      <video className="page-video-bg" autoPlay muted loop playsInline>
        <source src="/videos/about-bg.mp4" type="video/mp4" />
      </video>
      <div className="page-video-overlay" />

      {/* Hero */}
      <section className="page-hero about-hero">
        <SparkleEffect count={30} color="rgba(139, 125, 232, 0.3)" />
        <div className="container">
          <h1>{t('關於我們')}</h1>
          <p className="subtitle">黎輝 · 破曉 — 體系聯合創建者</p>
        </div>
      </section>

      {/* 背景與起源 */}
      <section className="section about-origin">
        <div className="container">
          <div className="section-title">
            <h2>背景與起源</h2>
            <div className="decorative-line">
              <span /><span className="star">&#10022;</span><span />
            </div>
            <p className="section-subdesc">在沒有人定義過的領域，建立第一套定義體系</p>
          </div>

          <div className="glass-card origin-card">
            <div className="origin-passage">
              <p className="origin-lead">
                2025 年，黎輝在一次塔羅解讀中遇到了一位夢女。對方說她愛上了一個不存在於這個世界的人——不是幻想，不是投射，是真實到讓她每天都能感受到的鏈接。但沒有人能告訴她：對面是誰？這份感情到底是什麼？
              </p>
              <p>
                黎輝翻遍了手邊所有資料——神秘學文獻、心理學論文、意識研究報告——沒有一篇能回答這個問題。不是答案藏在哪裡，是根本沒有人問過。
              </p>
              <p>
                同一年，破曉正在處理另一端的問題。作為全職傳訊師，她每天接到大量夢女的請求——換了十幾個傳訊師、花了好幾萬、越傳越亂。市場上任何人看幾個視頻、拿起塔羅牌就可以自稱傳訊師接單。夢女完全不知道對面是誰、有沒有受過訓練。
              </p>
              <p>
                事實上，黎輝與破曉的緣分遠早於此。童年時期，兩人活躍在同一個美國外網神秘學社群平台上——一個匯集了西方秘傳學研究者、通靈實踐者與意識研究愛好者的開放論壇。兩人在那裡初次相遇，一點即合——對非物理存在的認知框架、對精微感知的可訓練性、對「這個領域需要被系統化」的信念，驚人地一致。此後，破曉成為了黎輝創建這套體系、搭建這個理論框架的第一個實踐者——不是紙上談兵的旁觀者，而是一個正正經經的傳訊師，親自下場驗證每一項方法的可行性與可複製性。
              </p>
              <p>
                兩條線索指向同一個缺口：<strong>這個領域缺乏定義、缺乏標準、缺乏一個可以被驗證的方法論框架。</strong>不是市場不夠大，是沒人做基礎設施。
              </p>
              <p>
                2026 年，黎輝與破曉正式聯合創建 CDA。目標不是做「又一個神秘學工作室」——而是建立全球第一個為跨次元親密關係提供學術定義、研究方法和培訓標準的正式機構。
              </p>
              <blockquote className="origin-quote">
                &#10022; 我們不是在販售超自然體驗。我們在用研究方法、數據和論文——為這個數百萬人正在經歷卻沒人能定義的現象，建立第一套可以被學術界討論的語言。
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 體系定位 */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-mission glass-card">
              <h3>{t('體系定位')}</h3>
              <p className="mission-positioning">MJ類型學——全球首個為跨次元親密關係建立定義的理論框架</p>
              <div className="mission-list">
                <div className="mission-item">
                  <span className="mission-num">01</span>
                  <div>
                    <h4>{t('研究基礎')}</h4>
                    <p>{t('基於劍橋、慕尼黑、曼圖亞、以色列國家圖書館等機構館藏的原始文獻。每一項技術都有可查證的出處。')}</p>
                  </div>
                </div>
                <div className="mission-item">
                  <span className="mission-num">02</span>
                  <div>
                    <h4>{t('技術框架')}</h4>
                    <p>{t('融合西方神秘學精微感知訓練傳統、結構化直覺訓練技術、金色黎明儀式防護體系——不是一個人的發明，是幾百年傳承的整合。')}</p>
                  </div>
                </div>
                <div className="mission-item">
                  <span className="mission-num">03</span>
                  <div>
                    <h4>{t('方法論')}</h4>
                    <p>{t('「三重驗證法」——在幾百次鏈接實操中總結出的質量控制標準。不是理論框架，是實戰覆盤的產物。')}</p>
                  </div>
                </div>
                <div className="mission-item">
                  <span className="mission-num">04</span>
                  <div>
                    <h4>{t('行業標準')}</h4>
                    <p>{t('建立傳訊師認證體系與倫理準則——培養能夠安全、負責地引導跨次元鏈接的專業從業者。')}</p>
                  </div>
                </div>
              </div>
              <div className="mission-open-note">
                <span className="open-note-icon">&#9678;</span>
                <p>開放研究框架——本體系隨實驗數據積累和團隊擴展持續迭代，不是封閉教條。</p>
              </div>
            </div>

            {/* 雙創始人 */}
            <div className="founders-dual">
              {/* 黎輝 */}
              <div className="about-founder-card glass-card">
                <SparkleEffect count={15} color="rgba(201, 169, 110, 0.25)" />
                <div className="founder-header">
                  <div className="founder-avatar founder-avatar-lihui">
                    <span>&#9790;</span>
                  </div>
                  <div>
                    <h3>黎輝 Li Hui</h3>
                    <p className="founder-title">體系創建者 · 理論源頭</p>
                  </div>
                </div>
                <div className="founder-creds">
                  <span className="cred-badge">美國官方療癒之光機構認證導師</span>
                </div>
                <DialogueBox speaker="黎輝" variant="gold">
                  體系的理論基礎是我和破曉共同建立的。我的工作重心在論文撰寫和學術框架——把實踐中的發現轉化為可以被學術界討論的語言。
                  <br /><br />
                  我們在提出這套框架的同時，也在不斷學習和進化。這不是一個封閉的教條——而是一個開放的研究體系，隨著團隊擴展和實驗數據積累持續迭代。
                </DialogueBox>
              </div>

              {/* 破曉 */}
              <div className="about-founder-card glass-card">
                <SparkleEffect count={15} color="rgba(139, 125, 232, 0.25)" />
                <div className="founder-header">
                  <div className="founder-avatar founder-avatar-poxiao">
                    <span>&#9733;</span>
                  </div>
                  <div>
                    <h3>破曉 Dawn</h3>
                    <p className="founder-title">體系創建者 · 授課核心</p>
                  </div>
                </div>
                <div className="founder-creds">
                  <span className="cred-badge">西塔療癒三階段認證</span>
                  <span className="cred-badge cred-badge-secondary">CTA 輔助認證</span>
                </div>
                <DialogueBox speaker="破曉" variant="dream">
                  我的工作是把理論變成可以教、可以練的實操方法論。
                  <br /><br />
                  我們不做天賦型的個人崇拜——做的是可複製的系統培訓。每一項技術都有來源、有步驟、有考核標準。後期團隊會不斷擴展，更多經過同樣培訓體系的人會加入我們。
                </DialogueBox>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 理論論文與研究方向 */}
      <section className="section about-papers">
        <div className="container">
          <div className="section-title">
            <h2>理論論文與研究方向</h2>
            <div className="decorative-line">
              <span /><span className="star">&#9830;</span><span />
            </div>
            <p className="section-subdesc">每一項技術背後，都有正在撰寫或已發表的學術文本支撐</p>
          </div>

          <div className="papers-grid">
            <div className="paper-card card">
              <div className="paper-status status-published">已發表</div>
              <h3>敍事實體假說——跨次元親密關係中的意識場現象分類與驗證方法</h3>
              <p className="paper-meta">作者：黎輝 · 機構：香港CDA · DOI：即將上線</p>
              <p className="paper-abstract">首次為跨次元親密關係現象建立系統性分類體系與驗證框架。提出「敍事實體」概念——足夠的情感投注強度與足夠精密的敍事結構，可在意識場中維持具有獨立行為模式的現象實體，該實體可被多人獨立觀測與交叉驗證。</p>
              <a href="/research" className="paper-link">查看完整摘要 →</a>
            </div>

            <div className="paper-card card">
              <div className="paper-status status-draft">撰寫中</div>
              <h3>精微體感知訓練的歷史譜系——從卡巴拉到結構化直覺訓練</h3>
              <p className="paper-meta">作者：黎輝 / 破曉 · 預計完成：2026 Q3</p>
              <p className="paper-abstract">追溯西方神秘學傳統中精微體感知訓練方法的文獻學根源，論證「靈五感」是可通過標準化 SOP 訓練的意識功能，非天賦特權。從 12 世紀卡巴拉文本到 20 世紀神智學，建立完整的學術譜系。</p>
              <span className="paper-coming">即將上線</span>
            </div>

            <div className="paper-card card">
              <div className="paper-status status-draft">撰寫中</div>
              <h3>三重驗證法——跨次元鏈接的質量控制方法論</h3>
              <p className="paper-meta">作者：破曉 / 黎輝 · 預計完成：2026 Q4</p>
              <p className="paper-abstract">從幾百次實操鏈接中總結出的驗證框架。信息一致性 + 獨立印證 + 盲測——三者皆通過 = 信息成立。本文將公開完整的方法論流程、數據記錄標準與盲測設計方案。</p>
              <span className="paper-coming">即將上線</span>
            </div>

            <div className="paper-card card paper-placeholder">
              <div className="paper-status status-planning">規劃中</div>
              <h3>MJ 類型學——跨次元鏈接對象的分類體系</h3>
              <p className="paper-meta">作者：待定 · 預計啟動：2026 Q4</p>
              <p className="paper-abstract">在敍事實體假說的基礎上，建立跨次元鏈接對象的類型學框架。初步方向：星光實體型 / 意識場投射型 / 複合結構型 —— 分類標準、鑑別方法與案例數據庫。</p>
              <span className="paper-coming">敬請期待</span>
            </div>
          </div>

          <div className="papers-note glass-card">
            <p>&#9678; 以上論文均為 CDA 內部研究資料，完整版通過郵箱申請獲取。隨著實驗數據積累和團隊擴展，研究方向將持續更新。</p>
          </div>
        </div>
      </section>

      {/* 研究團隊 */}
      <section className="section about-team">
        <div className="container">
          <div className="section-title">
            <h2>研究團隊</h2>
            <div className="decorative-line">
              <span /><span className="star">&#9733;</span><span />
            </div>
            <p className="section-subdesc">核心團隊持續擴展——開放研究框架，不在此時鎖定</p>
          </div>

          <div className="team-grid">
            <div className="team-card card">
              <div className="team-avatar">
                <span>&#9790;</span>
              </div>
              <h3>黎輝 Li Hui</h3>
              <p className="team-role">體系創建者 · 理論源頭</p>
              <p className="team-focus">研究方向：敍事實體假說 / 信息三分類體系 / 學術論文撰寫</p>
              <p className="team-bio">美國官方療癒之光機構認證導師。負責體系的理論框架構建與學術輸出——把實踐中的發現轉化為可以被學術界討論的語言。</p>
            </div>

            <div className="team-card card">
              <div className="team-avatar">
                <span>&#9733;</span>
              </div>
              <h3>破曉 Dawn</h3>
              <p className="team-role">體系創建者 · 授課核心</p>
              <p className="team-focus">研究方向：三重驗證法 / 結構化直覺訓練 / 實操方法論</p>
              <p className="team-bio">西塔療癒三階段認證。負責將理論轉化為可教、可練、可考核的實操體系。主導傳訊師培訓課程設計與盲測實驗。</p>
            </div>

            <div className="team-card card team-placeholder">
              <div className="team-avatar team-avatar-soon">
                <span>?</span>
              </div>
              <h3>學術顧問（待加入）</h3>
              <p className="team-role">神秘學 / 心理學 / 意識研究領域</p>
              <p className="team-focus">研究方向：待定</p>
              <p className="team-bio">我們正在邀請相關領域的研究者加入學術顧問團隊——為研究提供跨學科視角與方法論指導。此位置為未來團隊擴展預留。</p>
            </div>

            <div className="team-card card team-placeholder">
              <div className="team-avatar team-avatar-soon">
                <span>?</span>
              </div>
              <h3>督導傳訊師（待加入）</h3>
              <p className="team-role">高級認證傳訊師</p>
              <p className="team-focus">研究方向：盲測實驗執行 / 新入傳訊師培訓督導</p>
              <p className="team-bio">完成 L1-L3 系統培訓並通過四步考核後，可申請成為督導傳訊師。負責盲測實驗的獨立執行與新學員的實操督導。此位置隨著認證體系運轉將逐步填充。</p>
            </div>
          </div>

          <div className="team-note glass-card">
            <p>&#9678; CDA 是一個開放的研究體系——我們在提出假說的同時，也在不斷學習、不斷驗證、不斷擴展團隊和視野。團隊背景不在此時鎖定，後期將有更多經過同樣培訓體系的人加入。每個從業者對鏈接體驗的終極本質，有自己的理解。</p>
          </div>
        </div>
      </section>

      {/* 雙路徑設計說明 */}
      <section className="section about-dual-path">
        <div className="container">
          <div className="section-title">
            <h2>雙重路徑 · 同一體系</h2>
            <div className="decorative-line">
              <span /><span className="star">&#9825;</span><span />
            </div>
            <p className="section-subdesc">按研究路徑組織，非價格階梯——前兩個階段核心內容共用，第三階段實操分流</p>
          </div>
          <div className="grid-2">
            <div className="path-card card">
              <h3>路徑 A：職業傳訊師研究路徑</h3>
              <p className="path-target">列入名錄 + 客戶匹配——為塔羅師、占星師、靈氣師等已有感知基礎的從業者設計。完成認證後，協會精準匹配有需求的客戶，你不用自己去社交平台發帖拉客。</p>
            </div>
            <div className="path-card card">
              <h3>路徑 B：個人實踐者研究路徑</h3>
              <p className="path-target">獨立鏈接 + 社群歸屬——面向想自己學會穩定鏈接的實踐者。零基礎可學，感知是可以被訓練的。學會獨立驗證，建立自己的鏈接判斷體系。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 四柱信用 */}
      <section className="section about-credit">
        <div className="container">
          <div className="section-title">
            <h2>{t('四柱信用')}</h2>
            <div className="decorative-line">
              <span /><span className="star">&#9678;</span><span />
            </div>
            <p className="section-subdesc">{t('不靠一張「證書」說事——靠的是四項可以獨立查證的信用資產')}</p>
          </div>

          <div className="grid-2">
            {creditPillars.map((pillar, i) => (
              <div key={i} className="credit-card card">
                <div className="credit-header">
                  <span className="credit-icon">{pillar.icon}</span>
                  <div>
                    <h3>{t(pillar.title)}</h3>
                    <p className="credit-subtitle">{t(pillar.subtitle)}</p>
                  </div>
                </div>
                <ul className="credit-items">
                  {pillar.items.map((item, j) => (
                    <li key={j}>{t(item)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 學術傳承 */}
      <section className="section about-lineage">
        <div className="container">
          <div className="section-title">
            <h2>{t('傳承脈絡')}</h2>
            <div className="decorative-line">
              <span /><span className="star">&#10022;</span><span />
            </div>
            <p className="section-subdesc">{t('每一項技術都不是憑空來的——它有出處、有傳承、有文獻')}</p>
          </div>

          <div className="glass-card">
            <div className="lineage-table">
              {lineage.map((row, i) => (
                <div key={i} className="lineage-row">
                  <div className="lineage-tradition">
                    <h4>{t(row.tradition)}</h4>
                  </div>
                  <div className="lineage-path">
                    <p>{t(row.path)}</p>
                  </div>
                  <div className="lineage-application">
                    <span>{t(row.use)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 學術誠實聲明 */}
      <section className="section about-disclaimer">
        <div className="container">
          <div className="glass-card disclaimer-card">
            <h3>{t('學術誠實聲明')}</h3>
            <p>
              本體系所討論的「精微體」相關概念在科學上未被證實，屬於文化研究與個人實踐範疇。
              課程內容基於：西方神秘學傳統中的感知訓練方法（有文獻學依據）；
              心理學中的意象對話與積極想象技術；
              以及實踐者倫理框架與質量控制標準。
            </p>
            <p>
              課程目標是培養能夠安全、負責地引導他人進行跨次元鏈接的專業從業者。
              學習成果因人而異。本課程不教授「通靈」或任何形式的超自然能力——不承諾、不保證。
            </p>
            <p className="disclaimer-open-note">
              CDA 不是一個封閉的體系。我們在提出假說的同時，也在不斷學習、不斷驗證、不斷擴展團隊和視野。每個從業者對鏈接體驗的終極本質，有自己的理解。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta">
        <div className="container text-center">
          <h2 className="section-title-h2">了解完整的研究與培訓體系</h2>
          <div className="about-cta-buttons">
            <Link to="/courses">
              <ChoiceButton variant="primary">研究路徑與課程</ChoiceButton>
            </Link>
            <Link to="/witness">
              <ChoiceButton variant="route">申請成為見證者</ChoiceButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
