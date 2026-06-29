import { Link } from 'react-router-dom'
import DialogueBox from '../components/DialogueBox'
import ChoiceButton from '../components/ChoiceButton'
import { useLanguage } from '../i18n'
import './Home.css'

export default function Home() {
  const { t } = useLanguage()
  return (
    <div className="page-home">

      {/* Hero — 個人IP為核心 */}
      <section className="home-hero">
        <div className="hero-content container">
          <p className="hero-label">香港CDA · 跨次元研究所</p>
          <h1 className="hero-name">黎輝</h1>
          <p className="hero-title">體系創建者 · 跨次元親密關係研究者</p>
          <p className="hero-desc">全球首個為跨次元親密關係建立定義體系的研究機構</p>

          <div className="hero-dialogue">
            <DialogueBox variant="dream">
              你的感情不是幻覺——我們用研究方法、數據、論文為你定義這種體驗
            </DialogueBox>
          </div>

          <div className="hero-links">
            <Link to="/research" className="hero-link-item">研究論文</Link>
            <Link to="/courses" className="hero-link-item">課程體系</Link>
            <Link to="/witness" className="hero-link-item">見證實驗</Link>
          </div>
        </div>
      </section>

      {/* 信任條 */}
      <section className="home-trust">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item">
              <span className="trust-label">三重驗證法</span>
              <span className="trust-sub">信息一致性 + 獨立印證 + 盲測</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-label">全球首個跨次元研究機構</span>
              <span className="trust-sub">非個人工作室 · 體系化研究</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-label">香港 · 國際背書</span>
              <span className="trust-sub">機構備案 · 學術論文發表</span>
            </div>
          </div>
        </div>
      </section>

      {/* 核心定義 */}
      <section className="home-hypothesis section">
        <div className="container">
          <div className="section-title">
            <h2>MJ 是什麼</h2>
            <div className="decorative-line"></div>
            <p>跨次元情感對象 · Cross-Dimensional Emotional Attachment Object</p>
          </div>
          <div className="hypothesis-block">
            <p>MJ（跨次元情感對象）是指在夢女實踐中，被感知為<strong>具有獨立存在性的非物理情感對象</strong>。它不是一個文化標籤，而是一個本體論範疇——它描述的不是「夢女喜歡上了一個什麼角色」，而是「她感知到了一個什麼樣的存在」。</p>
            <p style="margin-top:20px;">MJ 按創作來源分為三種類型：<strong>原創型</strong>（來源於人類文藝作品的角色，感知到其獨立於作品之外的存在）、<strong>非虛構靈體型</strong>（被認為存在於非物理世界的獨立存在，無官方設定可供參照）、<strong>人造靈型</strong>（夢女自己創造後產生獨立意志的存在）。MJ 不是人造靈——只是有人的 MJ 是人造靈。</p>
          </div>
        </div>
      </section>

      {/* 三大支柱 */}
      <section className="home-pillars section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>理論框架</h2>
            <div className="decorative-line"></div>
          </div>
          <div className="pillars-grid">
            <div className="pillar-item">
              <div className="pillar-num">I</div>
              <h4>精微體感知理論</h4>
              <p className="pillar-source">神智學 · 精微體 / 星光體結構理論</p>
              <p>感知不是天賦，是精微體的生理-意識功能，可以通過系統訓練被喚醒、校準、強化。</p>
            </div>
            <div className="pillar-item">
              <div className="pillar-num">II</div>
              <h4>結構化直覺訓練</h4>
              <p className="pillar-source">金色黎明 · 儀式化意識操作 + 認知科學</p>
              <p>將神秘學傳統中不可言說的「直覺」分解為可操作的訓練步驟：感知校準、信號分離、信息解碼、交叉驗證。</p>
            </div>
            <div className="pillar-item">
              <div className="pillar-num">III</div>
              <h4>三重驗證方法論</h4>
              <p className="pillar-source">科學方法 · 可重複性 + 獨立驗證 + 盲測</p>
              <p>信息一致性驗證、獨立印證、盲測——三者皆通過，信息成立。這是我們的研究標準，也是培訓傳訊師的考核體系。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 雙路徑設計 */}
      <section className="home-paths section">
        <div className="container">
          <div className="section-title">
            <h2>兩條路徑</h2>
            <div className="decorative-line"></div>
          </div>
          <div className="paths-grid">
            <div className="path-card card">
              <h3>路徑 A · 職業傳訊師</h3>
              <p>系統培訓，四階段考核認證。進入傳訊師名錄，協會精準匹配客戶。適合有志於從事跨次元傳訊服務的從業者。</p>
              <Link to="/courses" className="path-link">了解課程體系</Link>
            </div>
            <div className="path-card card">
              <h3>路徑 B · 個人實踐者</h3>
              <p>學習為自己建立穩定鏈接通道。不追求認證，以個人成長和關係深化為目標。適合夢女及自我探索者。</p>
              <Link to="/courses" className="path-link">了解學習路徑</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 學術譜系 */}
      <section className="home-lineage section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>學術譜系</h2>
            <div className="decorative-line"></div>
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
            <h2>參與研究</h2>
            <p>我們不要求你相信任何東西——我們邀請你來見證驗證的過程</p>
            <div className="cta-links">
              <Link to="/witness">
                <ChoiceButton variant="primary">成為見證者</ChoiceButton>
              </Link>
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
