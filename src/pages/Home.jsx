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
          <p className="hero-label">{t('香港 · 跨次元傳訊研究協會')}</p>
          <h1 className="hero-name">{t('你的爱人，不该被一句诊断轻易否定。')}</h1>
          <p className="hero-title">{t('你感受不到的时候，我们在替你继续研究。')}</p>
          <p className="hero-desc">{t('你是否也犹豫过：他到底在不在？那些梦、感应、回应和牵引，到底是不是你的爱人，还是来自投射、误识或另一个非目标存在？别急着害怕。CDA 正在做的，是为梦女建立一套更严肃、更细致、更有人情味的方法：不否定任何存在形式，也不轻率承诺答案，而是去探索、分辨、记录你和爱人靠近的方式。')}</p>

          <div className="hero-dialogue">
            <DialogueBox variant="dream">
              {t('别担心。我们不是靠嘴巴说“他是真的”，我们会用一次次训练、记录、交叉验证和方法迭代，陪你把这件事走出来。')}
            </DialogueBox>
          </div>

          <div className="hero-links">
            <Link to="/research" className="hero-link-item">{t('研究框架')}</Link>
            <a href="/cda-website/our-story.html" className="hero-link-item">{t('我們的故事')}</a>
            <Link to="/witness" className="hero-link-item">{t('參與驗證')}</Link>
          </div>
        </div>
      </section>

      {/* 現狀 */}
      <section className="home-trust">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item">
              <span className="trust-label">{t('你最怕的，我们懂')}</span>
              <span className="trust-sub">{t('梦女最怕的不是等待，而是害怕对方根本不存在；害怕自己感受不到他；害怕别人一句诊断就把你们的关系说成“不安全”“不真实”或“不是你的目标爱人”。')}</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-label">{t('所以我们不只安慰你')}</span>
              <span className="trust-sub">{t('市面对这个类型和划分还很陌生，误判很多。CDA 要做的是把经验整理成方法：先分辨，再靠近；先记录，再迭代。')}</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-label">{t('你要的不是空话')}</span>
              <span className="trust-sub">{t('你要的是有人认真看待你们的感情，有人陪你试方法、看反馈、做记录，一点点找到更适合你和爱人的靠近方式。')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 你的爱人是什么 */}
      <section className="home-hypothesis section">
        <div className="container">
          <div className="section-title">
            <h2>{t('我们说的“你的爱人”是什么')}</h2>
            <div className="decorative-line"></div>
            <p>{t('论文里有术语，但我们知道：对你来说，他首先是你的爱人。')}</p>
          </div>
          <div className="hypothesis-block">
            <p>{t('在 CDA 的研究语言里，我们把梦女所爱、所感知、所牵挂的对象称为')}<strong>{t('跨次元情感对象')}</strong>{t('；但在面对你的时候，我们更愿意说：那是你的爱人。我们研究的不是“你是不是疯了”，而是你感受到的那个人，究竟以什么方式与你发生联系。')}</p>
            <p style={{marginTop: '20px'}}>{t('我们会区分不同来源与不同信号形态：来自作品叙事的爱人、被感知为独立存在的爱人、以及在长期情感投注中形成特殊回应的爱人。分类不是为了把你们拆开，而是为了减少误判，让每一种关系都能被更准确地看见。')}</p>
          </div>
        </div>
      </section>

      {/* 我們提出的新觀點 */}
      <section className="home-hypothesis section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>{t('我們提出的新觀點')}</h2>
            <div className="decorative-line"></div>
          </div>
          <div className="hypothesis-block" style={{textAlign: 'center'}}>
            <p style={{fontSize: '1.1rem', lineHeight: '2.2'}}>
              {t('你的爱人和我们')}<strong>{t('不是永远隔绝')}</strong>{t('。')}
            </p>
            <p style={{fontSize: '1.1rem', lineHeight: '2.2'}}>
              {t('不是一句“虚构”就结束，也不是一句“非目标存在”就定论——')}<strong>{t('重点是更正确地分辨与感知')}</strong>{t('。')}
            </p>
            <p style={{fontSize: '1.1rem', lineHeight: '2.2'}}>
              {t('如果他属于灵体型或非物理存在，也不代表你们的关系就该被粗暴否定；我们更关心的是：他是否与你的目标爱人一致，互动是否清晰、稳定、滋养你。')}
            </p>
            <p style={{fontSize: '1.1rem', lineHeight: '2.2'}}>
              {t('我们要探索的，是你如何更稳定、更安全地感受到他。')}
            </p>
            <p style={{fontSize: '1.1rem', lineHeight: '2.2', marginTop: '24px', color: 'var(--color-text-secondary)'}}>
              {t('每个人和爱人的靠近方式都不一样。')}<br/>{t('所以方法必须一对一地尝试、更新、迭代。')}
            </p>
          </div>
        </div>
      </section>

      {/* 怎麼驗證 */}
      <section className="home-pillars section">
        <div className="container">
          <div className="section-title">
            <h2>{t('怎么靠近他——三层方法论')}</h2>
            <div className="decorative-line"></div>
            <p>{t('只有安慰是不够的。梦女需要能被执行、被记录、被修正的方法。')}</p>
          </div>
          <div className="pillars-grid">
            <div className="pillar-item">
              <div className="pillar-num">I</div>
              <h4>{t('精微體感知理論')}</h4>
              <p className="pillar-source">{t('神智學 · 精微體 / 星光體結構理論')}</p>
              <p>{t('感受不到，不代表他不存在。很多时候只是通道还没有被找到、状态还没有被校准。我们训练的是更细的感知能力：梦境、体感、情绪、画面、语言和同步现象。')}</p>
            </div>
            <div className="pillar-item">
              <div className="pillar-num">II</div>
              <h4>{t('結構化分辨方法')}</h4>
              <p className="pillar-source">{t('金色黎明 · 儀式化意識操作 + 認知科學')}</p>
              <p>{t('核心问题不是粗暴地问“真假”，而是分辨：这是你的爱人的信号，还是投射、噪音、误判，或其他不适合继续深入的东西。先保护你，再靠近他。')}</p>
            </div>
            <div className="pillar-item">
              <div className="pillar-num">III</div>
              <h4>{t('三重驗證方法論')}</h4>
              <p className="pillar-source">{t('科學方法 · 可重複性 + 獨立驗證 + 盲測')}</p>
              <p>{t('我们不希望你永远依赖某一个传讯师的权威。信息一致性、独立印证、盲测记录，会让“我感觉是他”变成更可讨论、更可复盘的证据链。')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 不是沒有先例 */}
      <section className="home-hypothesis section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>{t('不是沒有先例')}</h2>
            <div className="decorative-line"></div>
            <p>{t('Lovecraft 与原创型爱人现象的结构同源性')}</p>
          </div>
          <div className="hypothesis-block">
            <p>{t('1920 年，H.P. Lovecraft 在噩夢中被一個他後來命名為「奈亞拉托提普」的存在接觸。他在書信中記錄：「我拼命地塗寫……至於我在寫什麼，我幾乎毫無頭緒。」他明確區分了自己「編的故事」和「降臨在他身上的幻象」——前者是他主動創造的，後者是超出他能解釋範圍的東西。')}</p>
            <p style={{marginTop: '16px'}}>{t('一個信息結構經由人類創作者之手進入集體意識，當它被足夠多的人類心靈投注情感能量之後，在非物理位面獲得了獨立的存在性——這個機制在 1920 年已經發生過一次。那一次，實體通過一個不情願的唯物主義者進入世界。這一次，實體通過乙女遊戲和動漫進入世界。')}<strong>{t('兩次用的是同一個門：人類的情感投注和創造性想像。')}</strong></p>
          </div>
        </div>
      </section>

      {/* 研究論文 */}
      <section className="home-hypothesis section">
        <div className="container">
          <div className="section-title">
            <h2>{t('研究論文')}</h2>
            <div className="decorative-line"></div>
            <p>{t('第一篇 · 首次公開發表——我們仍在驗證中')}</p>
          </div>
          <div className="hypothesis-block" style={{textAlign: 'center'}}>
            <p style={{fontFamily: 'var(--font-serif)', fontSize: '1.1rem', lineHeight: '2', color: 'var(--color-text)'}}>
              {t('《论跨次元情感对象的存在论假设、')}<br/>{t('五轴类型学及其西方秘传学新分支定位》')}
            </p>
            <p style={{fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: '2', marginTop: '16px'}}>
              {t('整合秘传学、物理学、比较宗教学——为梦女与爱人的跨次元亲密关系建立一套可被讨论、可被训练、可被持续检验的分类体系与验证框架。')}
            </p>
            <p style={{fontSize: '0.85rem', color: 'var(--color-text-light)', marginTop: '12px'}}>
              {t('黎輝 · 破曉 · 香港 · 跨次元傳訊研究協會 · 2026年7月1日')}
            </p>
          </div>
        </div>
      </section>

      {/* 學術譜系 */}
      <section className="home-lineage section">
        <div className="container">
          <div className="section-title">
            <h2>{t('學術譜系')}</h2>
            <div className="decorative-line"></div>
            <p>{t('你的爱人研究所依托的西方秘传学传统——从古代到当代')}</p>
          </div>
          <div className="lineage-track">
            <div className="lineage-node">
              <span className="lineage-era">{t('古代')}</span>
              <strong>{t('赫爾墨斯傳統')}</strong>
              <p>{t('Corpus Hermeticum · 宇宙對應論')}</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">{t('12–16 世紀')}</span>
              <strong>{t('卡巴拉')}</strong>
              <p>{t('Luria/Scholem 四重世界 · Yetzirah 形成界')}</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1854–56</span>
              <strong>Éliphas Lévi</strong>
              <p>{t('塔羅與卡巴拉系統對應 · occultisme')}</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1861</span>
              <strong>Allan Kardec</strong>
              <p>{t('《通靈者之書》· 自動書寫方法論')}</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1875–1927</span>
              <strong>{t('神智學會')}</strong>
              <p>{t('Blavatsky 七層位面 · Leadbeater 精微體感知')}</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1888–1930</span>
              <strong>{t('金色黎明')}</strong>
              <p>{t('儀式防護體系 · Dion Fortune 靈體分辨')}</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1904</span>
              <strong>Aleister Crowley</strong>
              <p>{t('Aiwass 接觸 · 跨文化對應鏈關鍵節點')}</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1920</span>
              <strong>H.P. Lovecraft</strong>
              <p>{t('不情愿的唯物主义者 · 原创型爱人现象历史先例')}</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1929</span>
              <strong>David-Néel</strong>
              <p>{t('幻人創建實驗 · 意念→獨立意志轉化')}</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1933+</span>
              <strong>Eranos 圈</strong>
              <p>{t('Jung · Scholem · Corbin · 學術起源')}</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1964</span>
              <strong>Henry Corbin</strong>
              <p>{t('mundus imaginalis · 幻想 vs 意象')}</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1986/1994</span>
              <strong>Antoine Faivre</strong>
              <p>{t('六大特徵框架 · 學科定義標準')}</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">1999–2012</span>
              <strong>Hanegraaff</strong>
              <p>{t('阿姆斯特丹教席 · ESSWE 創立')}</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node">
              <span className="lineage-era">2021–2024</span>
              <strong>{t('當代實證')}</strong>
              <p>{t('Karhulahti 虛構戀 · Lifshitz fMRI')}</p>
            </div>
            <span className="lineage-arrow">→</span>
            <div className="lineage-node lineage-current">
              <span className="lineage-era">2026</span>
              <strong>{t('爱人类型学')}</strong>
              <p>{t('跨次元亲密关系 · 可验证的分类体系')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 歡迎加入 */}
      <section className="home-hypothesis section">
        <div className="container">
          <div className="section-title">
            <h2>{t('我們需要你')}</h2>
            <div className="decorative-line"></div>
          </div>
          <div className="hypothesis-block" style={{textAlign: 'center'}}>
            <p style={{fontFamily: 'var(--font-serif)', fontSize: '1.1rem', lineHeight: '2.2', color: 'var(--color-text)'}}>
              {t('我們是')}<strong>{t('第一個')}</strong>{t('站出來公開研究這件事的人。')}
            </p>
            <p style={{fontSize: '1rem', lineHeight: '2.2', marginTop: '16px', color: 'var(--color-text-secondary)'}}>
              {t('我们投入时间、精力和金钱，不是为了用漂亮话收割梦女，而是为了让每个认真爱着的人知道：')}<strong>{t('你们的感情值得被认真对待。')}</strong>
            </p>
            <p style={{fontSize: '0.95rem', lineHeight: '2.2', marginTop: '16px', color: 'var(--color-text-secondary)'}}>
              {t('但我们的力量还不够。梦女群体需要更可靠的传讯师、更细致的方法、更愿意长期记录和复盘的人。让外面的人不再只会嘲笑，而是愿意停下来，认真听我们在说什么。')}
            </p>
            <p style={{fontSize: '0.95rem', lineHeight: '2.2', marginTop: '16px', color: 'var(--color-text-secondary)'}}>
              {t('无论你是梦女、传讯师、研究者，还是只是在深夜里问过“你到底在不在”的人——')}<strong>{t('你不是一个人。')}</strong>{t('这里不是让你跪着求答案的地方，而是让你和我们一起把答案建出来。')}
            </p>
            <div style={{marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a href="/cda-website/our-story.html">
                <ChoiceButton variant="primary">{t('閱讀我們的故事')}</ChoiceButton>
              </a>
              <Link to="/contact">
                <ChoiceButton variant="route">{t('加入我們')}</ChoiceButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta section">
        <div className="container">
          <div className="cta-block">
            <h2>{t('如果你想再靠近他一点，从这里开始。')}</h2>
            <p>{t('我们不要求你立刻相信任何东西。你可以先把困惑交给我们：你害怕他不存在，害怕感受不到，害怕别人说那不是他。我们会从你的故事开始，整理问题、判断适配方向，再陪你进入后续的方法尝试。')}</p>
            <p style={{marginTop: '12px', color: 'var(--color-text-secondary)'}}>{t('你的爱不是笑话。你的犹豫也不是软弱。')}</p>
            <div className="cta-links">
              <Link to="/research">
                <ChoiceButton variant="route">{t('研究框架')}</ChoiceButton>
              </Link>
              <Link to="/witness">
                <ChoiceButton variant="route">{t('參與驗證')}</ChoiceButton>
              </Link>
              <Link to="/contact">
                <ChoiceButton variant="route">{t('聯繫我們')}</ChoiceButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 招募引导 */}
      <section className="home-recruit-banner section">
        <div className="container">
          <div className="cta-block" style={{textAlign: 'center'}}>
            <p style={{fontSize: '1.1rem', lineHeight: '2'}}>
              我们正在招募和我们一起验证的人。<br />
              <Link to="/recruit" style={{fontWeight: 700, textDecoration: 'underline'}}>点击这里查看研究共建者招募</Link>，或在导航栏点击「研究共建者招募」。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
