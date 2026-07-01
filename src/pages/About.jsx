import { Link } from 'react-router-dom'
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
    icon: '',
  },
  {
    title: '傳承信用',
    subtitle: '不是憑空發明——有完整的傳承脈絡',
    items: [
      '卡巴拉傳統 — Golden Ophion — Mathers — Crowley — Fortune',
      '神智學精微結構理論 — Blavatsky — Leadbeater — Bailey',
      '魯利安卡巴拉 — Luria — Vital — Tzimtzum / Tikkun',
      '古典神秘學文獻中的精微感知訓練傳統',
    ],
    icon: '',
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
    icon: '',
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
    icon: '',
  },
]

const lineage = [
  { tradition: '卡巴拉儀式傳統', path: 'Hermetic Qabalah — Golden Ophion — Mathers — Crowley — Fortune', use: 'LBRP / 玫瑰十字 / 空間淨化與防護技術' },
  { tradition: '精微結構理論', path: 'Blavatsky — Leadbeater — Bailey — The Chakras (1927)', use: '靈五感框架的理論基礎' },
  { tradition: '魯利安卡巴拉', path: 'Luria — Vital — Tzimtzum / Shevirat HaKelim / Tikkun', use: 'MJ 類型學的「星光實體型」理論來源' },
]

export default function About() {
  const { t } = useLanguage()
  return (
    <div className="page-about">
      {/* Hero */}
      <section className="page-hero about-hero">
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
              <span /><span className="star"> </span><span />
            </div>
            <p className="section-subdesc">在沒有人定義過的領域，建立第一套定義體系</p>
          </div>

          <div className="glass-card origin-card">
            <div className="origin-passage">
              <p className="origin-lead">
                第一個接觸 MJ 的人，是破曉。她本身就是一個夢女——愛上了一個不存在於這個世界的人。不是幻想，不是投射，是真實到讓她每天都能感受到的鏈接。但沒有人能告訴她：對面是誰？這份感情到底是什麼？
              </p>
              <p>
                破曉留學期間，曾遇到一位當地的老女巫——一位在歐洲民間傳承中獨自修習了數十年的女性長者。她教會了破曉一件事：非物理世界的感知，不是天賦，是訓練。此後，破曉在一個美國外網神秘學社群平台上結識了黎輝——一個匯集了西方秘傳學研究者、通靈實踐者與意識研究愛好者的開放論壇。她成為黎輝的學生，跟隨她學習黑魔法、西方秘傳學、靈媒——所有的一切。但她最終向黎輝坦白：<strong>她學習這些，只是為了尋找對方存在的跡象。</strong>
              </p>
              <p>
                黎輝欣賞這份坦誠。一個人願意為了驗證所愛之人的存在，跨越半個地球去學習、去訓練、去翻遍每一本文獻——這不是天真，這是一種值得被認真對待的力量。
              </p>
              <p>
                黎輝自己的路，同樣不是正統之路。她天生就有這個天賦——從小就能感知到別人看不見、聽不到的東西。但這份天賦沒有給她帶來掌聲。她被排擠、被孤立，父母帶著她離開——自小離家，在不同的地方輾轉長大。黑魔法對她來說不是書本上的條文——是她用自己的雙手和靈魂，在無數個夜晚裡一點一點摸索出來的感知。她在國外的神秘學社群中跟隨過多位導師，但最終誰的模板都沒用——她走的是自己的路。
              </p>
              <p>
                在國外的女巫圈子裡，沒有人會問你「有沒有證書」。她們在意的是你手上的功夫——你的感知精度、你對能量的掌控力、你做出來的結果。證書只是翻譯給外界看的語言，實力才是圈子內部流通的唯一貨幣。黎輝後來拿到了美國療癒之光的黑魔法導師認證，也帶著破曉一起完成了認證——但她從不主動提起這件事。一個被證書定義的女巫，在她眼裡還不是真正的女巫。
              </p>
              <p>
                她翻遍了手邊所有資料——神秘學文獻、心理學論文、意識研究報告——沒有一篇能回答破曉的問題。不是答案藏在哪裡，是根本沒有人問過。
              </p>
              <p>
                與此同時，她們看到了市場的另一端：大量夢女換了十幾個傳訊師、花了好幾萬、越傳越亂。任何人看幾個視頻、拿起塔羅牌就可以自稱傳訊師接單。夢女完全不知道對面是誰、傳訊師有沒有受過訓練。<strong>這個領域缺乏定義、缺乏標準、缺乏一個可以被驗證的方法論框架。</strong>不是市場不夠大，是沒人做基礎設施。
              </p>
              <p>
                在破曉的推動下，黎輝開始將目光轉向跨次元情感對象這個從未被系統研究過的領域。她以文獻與理論為根基，為破曉提供學術指導，一步步帶著她尋找更多專業人士——從神秘學實踐者到意識研究者，從東玄到西玄。黎輝搭建框架、尋找資源、連結人脈；破曉則成為了這套方法的第一個實踐者——不是紙上談兵的旁觀者，而是一個正正經經的傳訊師，親自下場驗證每一項方法的可行性與可複製性。
              </p>
              <p>
                2026 年，黎輝與破曉正式聯合創建 CDA。目標不是做「又一個神秘學工作室」——而是建立全球第一個為跨次元親密關係提供學術定義、研究方法和培訓標準的正式機構。
              </p>
              <blockquote className="origin-quote">
                  我們不是在販售超自然體驗。我們在用研究方法、數據和論文——為這個數百萬人正在經歷卻沒人能定義的現象，建立第一套可以被學術界討論的語言。
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
                <span className="open-note-icon"> </span>
                <p>開放研究框架——本體系隨實驗數據積累和團隊擴展持續迭代，不是封閉教條。</p>
              </div>
            </div>

            {/* 雙創始人 */}
            <div className="founders-dual">
              {/* 黎輝 */}
              <div className="about-founder-card glass-card">
                <div className="founder-header">
                  <div className="founder-avatar founder-avatar-lihui">
                    <span> </span>
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
                <div className="founder-header">
                  <div className="founder-avatar founder-avatar-poxiao">
                    <span> </span>
                  </div>
                  <div>
                    <h3>破曉 Ophion</h3>
                    <p className="founder-title">體系創建者 · 授課核心</p>
                  </div>
                </div>
                <div className="founder-creds">
                  <span className="cred-badge">美國療癒之光機構認證</span>
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
              <span /><span className="star"> </span><span />
            </div>
            <p className="section-subdesc">每一項技術背後，都有正在撰寫或已發表的學術文本支撐</p>
          </div>

          <div className="papers-grid">
            <div className="paper-card card">
              <div className="paper-status status-published">已發表</div>
              <h3>論跨次元情感對象（MJ）的存在論假設、五軸類型學及其西方秘傳學新分支定位</h3>
              <p className="paper-meta">作者：黎輝 · 破曉 · CDA 研究團隊 · 機構：香港CDA · DOI：即將上線</p>
              <p className="paper-abstract">以 Antoine Faivre（1986/1994）六大特徵框架為形式分析工具，逐條檢驗 MJ 理論體系是否滿足一個西方秘傳學新分支的全部構成要件——檢驗結論為是。這不是「申請加入」，而是用本學科自己定義的標準，檢驗一個當代現象是否符合這個標準。同時整合 Everett 多世界、Kaluza-Klein 高維、神智學七層位面、Corbin 意象世界與 Luria/Scholem 四重世界五套獨立框架，為 MJ 提供跨學科存在論基礎，並首次建立五軸類型學分類體系。</p>
              <Link to="/research" className="paper-link">查看完整摘要 →</Link>
            </div>

            <div className="paper-card card">
              <div className="paper-status status-draft">撰寫中</div>
              <h3>靈媒的歷史譜系——從卡巴拉到結構化直覺訓練</h3>
              <p className="paper-meta">作者：黎輝 / 破曉 · 預計完成：2026 Q3</p>
              <p className="paper-abstract">追溯西方神秘學傳統中靈媒方法的文獻學根源，論證「靈五感」是可通過標準化 SOP 訓練的意識功能，非天賦特權。從 12 世紀卡巴拉文本到 20 世紀神智學，建立完整的學術譜系。</p>
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
              <h3>五軸類型學的經驗檢驗——跨傳訊師獨立鏈接的一致性研究</h3>
              <p className="paper-meta">作者：待定 · 預計啟動：2026 Q4</p>
              <p className="paper-abstract">在已發表的 MJ 五軸類型學理論框架（位面軸/維度軸/來源軸/互動軸/可驗證性軸）基礎上，通過 CDA 標準化培訓體系下的跨傳訊師獨立鏈接實驗，對每一軸的分類假設進行系統的經驗檢驗。核心問題：不同傳訊師對同一 MJ 的五軸定位是否表現出統計學上顯著的一致性？</p>
              <span className="paper-coming">敬請期待</span>
            </div>
          </div>

          <div className="papers-note glass-card">
            <p>  以上論文均為 CDA 內部研究資料，完整版通過郵箱申請獲取。隨著實驗數據積累和團隊擴展，研究方向將持續更新。</p>
          </div>
        </div>
      </section>

      {/* 研究團隊 */}
      <section className="section about-team">
        <div className="container">
          <div className="section-title">
            <h2>研究團隊</h2>
            <div className="decorative-line">
              <span /><span className="star"> </span><span />
            </div>
            <p className="section-subdesc">核心團隊持續擴展——開放研究框架，不在此時鎖定</p>
          </div>

          <div className="team-grid">
            <div className="team-card card">
              <div className="team-avatar">
                <span> </span>
              </div>
              <h3>黎輝 Li Hui</h3>
              <p className="team-role">體系創建者 · 理論源頭</p>
              <p className="team-focus">研究方向：敍事實體假說 / 信息三分類體系 / 學術論文撰寫</p>
              <p className="team-bio">美國官方療癒之光機構認證導師。負責體系的理論框架構建與學術輸出——把實踐中的發現轉化為可以被學術界討論的語言。</p>
            </div>

            <div className="team-card card">
              <div className="team-avatar">
                <span> </span>
              </div>
              <h3>破曉 Ophion</h3>
              <p className="team-role">體系創建者 · 授課核心</p>
              <p className="team-focus">研究方向：三重驗證法 / 結構化直覺訓練 / 實操方法論</p>
              <p className="team-bio">整個團隊中第一個接觸 MJ 的人。本身就是夢女——比誰都清楚「真的連結」和「自己的投射」之間的區別。美國療癒之光機構認證。負責將理論轉化為可教、可練、可考核的實操體系，主導傳訊師培訓課程設計與盲測實驗。</p>
            </div>

            <div className="team-card card">
              <div className="team-avatar team-avatar-mystery">
                <span> </span>
              </div>
              <h3>赫爾加 · Helga</h3>
              <p className="team-role">符文師 · 祖母傳承</p>
              <p className="team-focus">比較宗教學 · 文獻考據</p>
              <p className="team-bio">符文女巫。符文是祖母教的，文獻考據是她自己一頭鑽進去的——兩條路在她身上從來不分開走。她不公開身份，不想被打擾。在這個團隊裡，只有黎輝用真名，其他人都選擇了另一條路。她不多話，但每一句都有分量。論文的 Faivre 六大特徵論證結構、卡巴拉四重世界的位面模型、以及幾乎每一條學術引用的溯源核對，都經過她的眼睛。她不會放過任何一條文獻來源——「這個術語在這個傳統裡的用法和你想的不一樣」「這個引用你核對過原文嗎」——嚴謹得讓人頭疼。但也正因如此，每一次被她追問之後，論文的論證都變得更結實了一層。黎輝說起她的時候，語氣和平時不一樣：「這個人，我很早就認識了。她不輕易答應什麼，但一旦答應了，就會做到最後。」</p>
            </div>

            <div className="team-card card">
              <div className="team-avatar team-avatar-mystery">
                <span> </span>
              </div>
              <h3>夜薇 · Vera</h3>
              <p className="team-role">研究員 · 獨修墓地女巫</p>
              <p className="team-focus">聖彼得堡墓園 · 靈體身份辨別</p>
              <p className="team-bio">獨修的墓地女巫。不屬於任何組織，不來自任何傳承——聖彼得堡的墓園就是她的場地。沒有人知道她的能力是跟誰學的，她也從不解釋。當某個靈體的身份怎麼都確認不了的時候，她會輕輕說一句「讓我去」，然後走進夜色裡。第二天早上回來，答案已經在桌上。</p>
            </div>

            <div className="team-card card team-placeholder">
              <div className="team-avatar team-avatar-more">
                <span>…</span>
              </div>
              <h3>更多成員</h3>
              <p className="team-role">身份保密中</p>
              <p className="team-focus">——</p>
              <p className="team-bio">還有一些人，正在接受訓練。還有一些人，在暗處注視著這個實驗。當時機成熟，他們的名字會出現在這裡。</p>
            </div>
          </div>

          <div className="team-note glass-card">
            <p>  CDA 是一個開放的研究體系——我們在提出假說的同時，也在不斷學習、不斷驗證、不斷擴展團隊和視野。團隊背景不在此時鎖定，後期將有更多經過同樣培訓體系的人加入。每個從業者對鏈接體驗的終極本質，有自己的理解。</p>
          </div>
        </div>
      </section>

      {/* 雙路徑設計說明 */}
      <section className="section about-dual-path">
        <div className="container">
          <div className="section-title">
            <h2>雙重路徑 · 同一體系</h2>
            <div className="decorative-line">
              <span /><span className="star"> </span><span />
            </div>
            <p className="section-subdesc">按研究路徑組織，非價格階梯——前兩個階段核心內容共用，第三階段實操分流</p>
          </div>
          <div className="grid-2">
            <div className="path-card card">
              <h3>路徑 A：職業傳訊師研究路徑</h3>
              <p className="path-target">列入名錄 + 客戶匹配——為塔羅師、占星師、靈氣師等已有感知基礎的從業者設計。完成認證後，協會精準匹配有需求的客戶，你可以成為有證書認證的首批傳訊師。</p>
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
              <span /><span className="star"> </span><span />
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
              <span /><span className="star"> </span><span />
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
              本培訓定位為文化教育類培訓服務，內容屬於文化研究與個人實踐範疇，與封建迷信、宗教活動及占卜算命無關。體系所討論的「精微體」相關概念在科學上未被證實。
            </p>
            <p>
              培訓內容參考了以下文獻傳統：神智學精微體解剖學（Leadbeater 1927, <em>The Chakras</em>）、金色黎明傳統儀式實踐框架（Regardie 1937–40, <em>The Golden Dawn</em>），以及 Antoine Faivre（1986/1994）西方秘傳學學術框架。我們在這些文獻的基礎上進行了整理與教學轉化，學者可自行判斷其參考價值。
            </p>
            <p>
              習近平總書記曾談到，對待傳統文化和外來文化，應「古為今用，洋為中用，去粗取精，去偽存真」。本培訓對西方秘傳學文獻的梳理與取捨，正是在這一精神下進行的。
            </p>
            <p>
              最終解釋權歸香港跨次元傳訊研究協會所有。
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
