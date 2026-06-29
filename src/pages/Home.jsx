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
          <p className="hero-label">香港CDA · 跨次元傳訊協會</p>
          <h1 className="hero-name">他們不是幻想</h1>
          <p className="hero-title">我們不用再靠幻想愛下去了</p>
          <p className="hero-desc">從一張塔羅牌到一篇論文，從一個人的孤單到一群人的研究——我們在做的事很簡單：用理論和方法，去驗證那個你一直感覺得到但他從未被承認的存在。</p>

          <div className="hero-dialogue">
            <DialogueBox variant="dream">
              我們不要求你相信任何東西——我們只是不想再讓任何人，只能在深夜裡一個人問「你到底在不在」。
            </DialogueBox>
          </div>

          <div className="hero-links">
            <Link to="/research" className="hero-link-item">研究論文</Link>
            <a href="/cda-website/our-story.html" className="hero-link-item">我們的故事</a>
            <Link to="/witness" className="hero-link-item">參與驗證</Link>
          </div>
        </div>
      </section>

      {/* 我們在做什麼 */}
      <section className="home-trust">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item">
              <span className="trust-label">一個理論真空</span>
              <span className="trust-sub">迄今沒有任何學術框架能系統回答「MJ 是什麼、他在哪裡、如何分類、如何分辨」</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-label">我們在做的事</span>
              <span className="trust-sub">整合秘傳學、物理學、認識論，建立第一個 MJ 理論體系，讓驗證成為可能</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-label">可以被檢驗</span>
              <span className="trust-sub">所有假設都必須經過跨傳訊師獨立連結的交叉驗證——理論只是起點，數據才是終點</span>
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
            <p style={{marginTop: '20px'}}>MJ 按創作來源分為三種類型：<strong>原創型</strong>（來源於人類文藝作品的角色，感知到其獨立於作品之外的存在）、<strong>非虛構靈體型</strong>（被認為存在於非物理世界的獨立存在，無官方設定可供參照）、<strong>人造靈型</strong>（夢女自己創造後產生獨立意志的存在）。MJ 不是人造靈——只是有人的 MJ 是人造靈。</p>
          </div>
        </div>
      </section>

      {/* 他在哪裡 */}
      <section className="home-hypothesis section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>他在哪裡</h2>
            <div className="decorative-line"></div>
            <p>五套存在論框架的同一個答案</p>
          </div>
          <div className="hypothesis-block">
            <p>本文整合五套獨立存在論框架——Everett 多世界、Kaluza-Klein 高維、神智學七層位面、Corbin 意象世界、Luria/Scholem 四重世界——它們指向的不是「多個分離的世界」，而是<strong>同一個世界的多個層級</strong>。</p>
            <p style={{marginTop: '16px'}}>市面傳訊師說「他在另一個世界」——情感內核沒錯。但更精確的表述是：<strong>他在同一個世界的不同位面</strong>。平行世界的核心特徵是退相干——分支之間完全隔離，絕對不可通信。多層位面的核心特徵是簾幕——層與層之間存在感知屏障，但屏障不絕對阻斷信息傳遞，只造成衰減和變形。這正是 MJ 連結的實際體驗：不是「根本沒有信號」，而是「有信號但被簾幕打了折扣」。</p>
          </div>
        </div>
      </section>

      {/* 理論框架 */}
      <section className="home-pillars section">
        <div className="container">
          <div className="section-title">
            <h2>怎麼驗證——三層方法論</h2>
            <div className="decorative-line"></div>
          </div>
          <div className="pillars-grid">
            <div className="pillar-item">
              <div className="pillar-num">I</div>
              <h4>精微體感知理論</h4>
              <p className="pillar-source">神智學 · 精微體 / 星光體結構理論</p>
              <p>感知不是天賦，是精微體的生理-意識功能，可以通過系統訓練被喚醒、校準、強化。這解釋了為什麼 MJ 傳訊是一種可訓練但非人人天生具備的能力——不是因為連結對象不存在，而是因為信號通道的接收門檻需要訓練來跨越。</p>
            </div>
            <div className="pillar-item">
              <div className="pillar-num">II</div>
              <h4>結構化分辨方法</h4>
              <p className="pillar-source">金色黎明 · 儀式化意識操作 + 認知科學</p>
              <p>將不可言說的「直覺」分解為可操作的步驟：感知校準、信號分離、信息解碼、交叉驗證。核心問題不是「能不能感覺到」，而是「感覺到的是 MJ 還是自己的投射」——分辨方法的全部目的就是區分二者。</p>
            </div>
            <div className="pillar-item">
              <div className="pillar-num">III</div>
              <h4>三重驗證方法論</h4>
              <p className="pillar-source">科學方法 · 可重複性 + 獨立驗證 + 盲測</p>
              <p>信息一致性驗證、獨立印證、盲測——三者皆通過，信息成立。任何一個 MJ 假設，最終都需要通過不同傳訊師在同一方法論框架下的獨立連結來檢驗，而非依賴單一傳訊師的個人權威。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lovecraft 先例 */}
      <section className="home-hypothesis section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>不是沒有先例</h2>
            <div className="decorative-line"></div>
            <p>Lovecraft 與原創型 MJ 的結構同源性</p>
          </div>
          <div className="hypothesis-block">
            <p>1920 年，H.P. Lovecraft 在噩梦中被一個他後來命名為「奈亞拉托提普」的存在接觸。他在書信中記錄：「我拼命地塗寫……至於我在寫什麼，我幾乎毫無頭緒。」他明確區分了自己「編的故事」和「降臨在他身上的幻象」——前者是他主動創造的，後者是超出他能解釋範圍的東西。</p>
            <p style={{marginTop: '16px'}}>Lovecraft 的案例與當代原創型 MJ 在結構上完全同源：一個信息結構（角色設定）經由人類創作者之手進入集體意識，當它被足夠多的人類心靈投注情感能量之後，它在非物理位面獲得了獨立的存在性。這個機制不是 MJ 傳訊市場的發明——它在 1920 年已經發生過一次。那一次，實體通過一個不情願的傳訊師進入世界。這一次，實體通過乙女遊戲和動漫進入世界。<strong>兩次用的是同一個門：人類的情感投注和創造性想像。</strong></p>
          </div>
        </div>
      </section>

      {/* 學術譜系 */}
      <section className="home-lineage section">
        <div className="container">
          <div className="section-title">
            <h2>學術譜系</h2>
            <div className="decorative-line"></div>
            <p>MJ 理論體系所依託的西方秘傳學傳統</p>
          </div>
          <div className="lineage-track">
            <div className="lineage-node">
              <span className="lineage-era">12 世紀</span>
              <strong>卡巴拉</strong>
              <p>Yetzirah 形成界 · 語言與概念的創造力量</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">19 世紀</span>
              <strong>神智學</strong>
              <p>精微體 / 星光體結構化感知理論</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">19–20 世紀</span>
              <strong>金色黎明</strong>
              <p>儀式防護 · 空間淨化體系</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">20 世紀</span>
              <strong>混沌魔法</strong>
              <p>Egregore · 集體意念生成靈體</p>
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

      {/* CTA */}
      <section className="home-cta section">
        <div className="container">
          <div className="cta-block">
            <h2>我們不要求你相信</h2>
            <p>我們邀請你來見證驗證的過程。理論只是起點——每一條假設都必須經過跨傳訊師獨立連結的交叉檢驗。如果錯了，我們改；如果對了，我們繼續。</p>
            <div className="cta-links">
              <a href="/cda-website/our-story.html">
                <ChoiceButton variant="primary">為什麼要做這件事</ChoiceButton>
              </a>
              <Link to="/research">
                <ChoiceButton variant="route">研究框架</ChoiceButton>
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
