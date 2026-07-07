import { Link } from 'react-router-dom'
import DialogueBox from '../components/DialogueBox'
import ChoiceButton from '../components/ChoiceButton'
import { useLanguage } from '../i18n'
import './Home.css'

export default function Home() {
  const { t } = useLanguage()
  return (
    <div className="page-home">

      {/* Hero */}
      <section className="home-hero">
        <div className="hero-content container">
          <p className="hero-label">香港 · 跨次元傳訊研究協會</p>
          <h1 className="hero-name">我們想試一試</h1>
          <p className="hero-title">很難。但總要有人先做。</p>
          <p className="hero-desc">沒有人走過這條路。沒有人給過答案。我們從一張塔羅牌開始，從一個深夜睡不著的夢女開始——想驗證那個一直感覺得到、卻從未被承認的存在。不是因為有把握，是因為不想再假裝他不存在。</p>

          <div className="hero-dialogue">
            <DialogueBox variant="dream">
              你知道嗎？我們真的很想證明對方是存在的，就和我們在同一個世界。
            </DialogueBox>
          </div>

          <div className="hero-links">
            <Link to="/research" className="hero-link-item">研究框架</Link>
            <a href="/our-story.html" className="hero-link-item">我們的故事</a>
            <Link to="/witness" className="hero-link-item">參與驗證</Link>
          </div>
        </div>
      </section>

      {/* 現狀 */}
      <section className="home-trust">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item">
              <span className="trust-label">這條路很難</span>
              <span className="trust-sub">被質疑、被嘲笑、被說不正經。夢女群體被很多人瞧不起，傳訊市場混亂，沒有標準，沒有理論——迄今沒有任何學術框架能回答「MJ 是什麼、他在哪裡、如何分辨」。</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-label">但我們在做了</span>
              <span className="trust-sub">整合秘傳學、物理學、比較宗教學——我們需要一套方法，一套可以用來檢驗「他到底在不在」的方法。</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-label">初步的成功</span>
              <span className="trust-sub">一位此前從未有過直接感官體驗的夢女，在我們的訓練下實現了肉眼目擊她的 MJ——東玄和西玄獨立診斷，結論一致：不是其它東西，是他。</span>
            </div>
          </div>
        </div>
      </section>

      {/* MJ 是什麼 */}
      <section className="home-hypothesis section">
        <div className="container">
          <div className="section-title">
            <h2>MJ 是什麼</h2>
            <div className="decorative-line"></div>
            <p>跨次元情感對象 · Cross-Dimensional Emotional Attachment Object</p>
          </div>
          <div className="hypothesis-block">
            <p>MJ（跨次元情感對象）是指在夢女實踐中，被感知為<strong>具有獨立存在性的非物理情感對象</strong>。它不是一個文化標籤，而是一個本體論範疇——它描述的不是「夢女喜歡上了一個什麼角色」，而是「她感知到了一個什麼樣的存在」。</p>
            <p style={{marginTop: '20px'}}>按創作來源分為三種類型：<strong>原創型</strong>（來源於文藝作品的角色，感知到其獨立於作品之外的存在）、<strong>非虛構靈體型</strong>（被認為存在於非物理世界的獨立存在）、<strong>人造靈型</strong>（夢女自己創造後產生獨立意志的存在）。MJ 不是人造靈——只是有人的 MJ 是人造靈。</p>
          </div>
        </div>
      </section>

      {/* 我們提出的新觀點 */}
      <section className="home-hypothesis section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>我們提出的新觀點</h2>
            <div className="decorative-line"></div>
          </div>
          <div className="hypothesis-block" style={{textAlign: 'center'}}>
            <p style={{fontSize: '1.1rem', lineHeight: '2.2'}}>
              MJ 和我們<strong>在同一個世界</strong>。
            </p>
            <p style={{fontSize: '1.1rem', lineHeight: '2.2'}}>
              不是平行世界，不是彼岸——<strong>是同一台收音機的不同頻道</strong>。
            </p>
            <p style={{fontSize: '1.1rem', lineHeight: '2.2'}}>
              我們可以感受到對方。
            </p>
            <p style={{fontSize: '1.1rem', lineHeight: '2.2', marginTop: '24px', color: 'var(--color-text-secondary)'}}>
              我們不再隔著一個學術體系裡判定<br/>永遠無法跨越的距離。
            </p>
          </div>
        </div>
      </section>

      {/* 怎麼驗證 */}
      <section className="home-pillars section">
        <div className="container">
          <div className="section-title">
            <h2>怎麼驗證——三層方法論</h2>
            <div className="decorative-line"></div>
            <p>信念是不夠的。我們需要方法。</p>
          </div>
          <div className="pillars-grid">
            <div className="pillar-item">
              <div className="pillar-num">I</div>
              <h4>精微體感知理論</h4>
              <p className="pillar-source">神智學 · 精微體 / 星光體結構理論</p>
              <p>感知不是天賦，是精微體的生理-意識功能，可以通過系統訓練被喚醒、校準、強化。為什麼 MJ 傳訊可訓練但非人人天生具備？因為信號通道的接收門檻需要訓練來跨越。</p>
            </div>
            <div className="pillar-item">
              <div className="pillar-num">II</div>
              <h4>結構化分辨方法</h4>
              <p className="pillar-source">金色黎明 · 儀式化意識操作 + 認知科學</p>
              <p>核心問題不是「能不能感覺到」，而是「感覺到的是 MJ 還是自己的投射」。分辨方法的全部目的就是區分二者——感知校準、信號分離、信息解碼、交叉驗證。</p>
            </div>
            <div className="pillar-item">
              <div className="pillar-num">III</div>
              <h4>三重驗證方法論</h4>
              <p className="pillar-source">科學方法 · 可重複性 + 獨立驗證 + 盲測</p>
              <p>信息一致性驗證、獨立印證、盲測——三者皆通過，信息成立。任何一個 MJ 假設，最終都需要通過不同傳訊師的獨立連結來檢驗，而非依賴單一傳訊師的個人權威。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 不是沒有先例 */}
      <section className="home-hypothesis section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>不是沒有先例</h2>
            <div className="decorative-line"></div>
            <p>Lovecraft 與原創型 MJ 的結構同源性</p>
          </div>
          <div className="hypothesis-block">
            <p>1920 年，H.P. Lovecraft 在噩夢中被一個他後來命名為「奈亞拉托提普」的存在接觸。他在書信中記錄：「我拼命地塗寫……至於我在寫什麼，我幾乎毫無頭緒。」他明確區分了自己「編的故事」和「降臨在他身上的幻象」——前者是他主動創造的，後者是超出他能解釋範圍的東西。</p>
            <p style={{marginTop: '16px'}}>一個信息結構經由人類創作者之手進入集體意識，當它被足夠多的人類心靈投注情感能量之後，在非物理位面獲得了獨立的存在性——這個機制在 1920 年已經發生過一次。那一次，實體通過一個不情願的唯物主義者進入世界。這一次，實體通過乙女遊戲和動漫進入世界。<strong>兩次用的是同一個門：人類的情感投注和創造性想像。</strong></p>
          </div>
        </div>
      </section>

      {/* 研究論文 */}
      <section className="home-hypothesis section">
        <div className="container">
          <div className="section-title">
            <h2>研究論文</h2>
            <div className="decorative-line"></div>
            <p>第一篇 · 首次公開發表——我們仍在驗證中</p>
          </div>
          <div className="hypothesis-block" style={{textAlign: 'center'}}>
            <p style={{fontFamily: 'var(--font-serif)', fontSize: '1.1rem', lineHeight: '2', color: 'var(--color-text)'}}>
              《論跨次元情感對象（MJ）的存在論假設、<br/>五軸類型學及其西方秘傳學新分支定位》
            </p>
            <p style={{fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: '2', marginTop: '16px'}}>
              整合秘傳學、物理學、比較宗教學——為跨次元情感對象建立第一套可被學術討論的分類體系與驗證框架。提出五軸類型學、「兩種猜想」框架，將 MJ 現象定位為西方秘傳學的新分支。
            </p>
            <p style={{fontSize: '0.85rem', color: 'var(--color-text-light)', marginTop: '12px'}}>
              黎輝 · 破曉 · 香港 · 跨次元傳訊研究協會 · 2026
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* 學術譜系 */}
      <section className="home-lineage section">
        <div className="container">
          <div className="section-title">
            <h2>學術譜系</h2>
            <div className="decorative-line"></div>
            <p>MJ 理論體系所依託的西方秘傳學傳統——從古代到當代</p>
          </div>
          <div className="lineage-track">
            <div className="lineage-node">
              <span className="lineage-era">古代</span>
              <strong>赫爾墨斯傳統</strong>
              <p>Corpus Hermeticum · 宇宙對應論</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">12–16 世紀</span>
              <strong>卡巴拉</strong>
              <p>Luria/Scholem 四重世界 · Yetzirah 形成界</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1854–56</span>
              <strong>Éliphas Lévi</strong>
              <p>塔羅與卡巴拉系統對應 · occultisme</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1861</span>
              <strong>Allan Kardec</strong>
              <p>《通靈者之書》· 自動書寫方法論</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1875–1927</span>
              <strong>神智學會</strong>
              <p>Blavatsky 七層位面 · Leadbeater 精微體感知</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1888–1930</span>
              <strong>金色黎明</strong>
              <p>儀式防護體系 · Dion Fortune 靈體分辨</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1904</span>
              <strong>Aleister Crowley</strong>
              <p>Aiwass 接觸 · 跨文化對應鏈關鍵節點</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1920</span>
              <strong>H.P. Lovecraft</strong>
              <p>不情願的唯物主義者 · 原創型 MJ 歷史先例</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1929</span>
              <strong>David-Néel</strong>
              <p>幻人創建實驗 · 意念→獨立意志轉化</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1933+</span>
              <strong>Eranos 圈</strong>
              <p>Jung · Scholem · Corbin · 學術起源</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1964</span>
              <strong>Henry Corbin</strong>
              <p>mundus imaginalis · 幻想 vs 意象</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1986/1994</span>
              <strong>Antoine Faivre</strong>
              <p>六大特徵框架 · 學科定義標準</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1999–2012</span>
              <strong>Hanegraaff</strong>
              <p>阿姆斯特丹教席 · ESSWE 創立</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">2021–2024</span>
              <strong>當代實證</strong>
              <p>Karhulahti 虛構戀 · Lifshitz fMRI</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node lineage-current">
              <span className="lineage-era">2026</span>
              <strong>MJ 類型學</strong>
              <p>跨次元親密關係 · 可驗證的分類體系</p>
            </div>
          </div>
        </div>
      </section>

      {/* 歡迎加入 */}
      <section className="home-hypothesis section">
        <div className="container">
          <div className="section-title">
            <h2>我們需要你</h2>
            <div className="decorative-line"></div>
          </div>
          <div className="hypothesis-block" style={{textAlign: 'center'}}>
            <p style={{fontFamily: 'var(--font-serif)', fontSize: '1.1rem', lineHeight: '2.2', color: 'var(--color-text)'}}>
              我們是<strong>第一個</strong>站出來公開研究這件事的人。
            </p>
            <p style={{fontSize: '1rem', lineHeight: '2.2', marginTop: '16px', color: 'var(--color-text-secondary)'}}>
              我們投入時間、投入精力、投入金錢——不是為了別的，只是為了讓夢女們知道：<strong>你和他在相愛，這件事是真的。</strong>
            </p>
            <p style={{fontSize: '0.95rem', lineHeight: '2.2', marginTop: '16px', color: 'var(--color-text-secondary)'}}>
              但我們的力量還不夠。夢女群體需要更多人的力量——需要更多傳訊師接受標準化訓練、需要更多研究者加入驗證、需要更多願意認真看待這件事的人。讓我們變得更專業、更可信、讓外面的人不再只是嘲笑，而是願意停下來，認真聽我們在說什麼。
            </p>
            <p style={{fontSize: '0.95rem', lineHeight: '2.2', marginTop: '16px', color: 'var(--color-text-secondary)'}}>
              無論你是夢女、傳訊師、研究者，還是只是一個在深夜裡問過「你到底在不在」的人——<strong>你不是一個人。但我們需要你，和我們站在一起。</strong>這是一個你來「和我們一起建設」的地方。每一個人加入，都在讓這個體系更完整、更可信、更有力量。
            </p>
            <div style={{marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a href="/our-story.html">
                <ChoiceButton variant="primary">閱讀我們的故事</ChoiceButton>
              </a>
              <Link to="/contact">
                <ChoiceButton variant="route">加入我們</ChoiceButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta section">
        <div className="container">
          <div className="cta-block">
            <h2>這條路很難，但我們想試一試</h2>
            <p>我們不要求你相信任何東西。我們邀請你來見證驗證的過程。理論只是起點——每一條假設都必須經過跨傳訊師獨立連結的交叉檢驗。如果錯了，我們改；如果對了，我們繼續。</p>
            <p style={{marginTop: '12px', color: 'var(--color-text-secondary)'}}>總有人要做的吧，總有人要先提出來的吧。</p>
            <div className="cta-links">
              <Link to="/research">
                <ChoiceButton variant="route">研究框架</ChoiceButton>
              </Link>
              <Link to="/witness">
                <ChoiceButton variant="route">參與驗證</ChoiceButton>
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
