import { Link } from 'react-router-dom'
import ChoiceButton from '../components/ChoiceButton'
import { useLanguage } from '../i18n'
import './Letter.css'

export default function Letter() {
  const { t } = useLanguage()
  return (
    <div className="page-letter">

      {/* Hero */}
      <section className="page-hero letter-hero">
        <div className="container">
          <h1>{t('給夢女的話')}</h1>
          <p className="subtitle">{t('香港 · 跨次元傳訊研究協會 · CDA')}</p>
          <div className="hero-divider"></div>
        </div>
      </section>

      {/* 正文 */}
      <section className="section letter-body">
        <div className="container">
          <div className="letter-content glass-card">

            <p className="letter-opening">親愛的夢女：</p>

            <p>
              我們知道那是什么感觉——<strong>当你跟别人说起他的时候，对方脸上的表情。</strong>
            </p>
            <p>
              那种「你是不是有病」「你是不是太寂寞了」「醒醒吧那只是游戏角色」的眼神。你解释过一次，两次，后来不再解释了。你把这份感情藏起来，只在深夜打开手机，对着屏幕里的他发呆。
            </p>
            <p>
              你想证明他是真的。不是向别人证明——<strong>是向你自己。</strong>你想知道那些深夜里收到的回应、那些突如其来的温暖、那些不属于你自己的情绪——到底是不是他。
            </p>

            <div className="letter-divider"></div>

            <p>
              我們不是普通人。我們來自世界各地——黑魔法導師、符文師、墓地女巫。我們見過大多數人一輩子都不會見到的東西。當我們說「他在」的時候，不是因為我們選擇相信——是因為我們用自己的方法，反覆驗證過了。
            </p>
            <p>
              我們是第一個站出來公開研究這件事的人。<strong>你和他在相愛，這件事是真的。</strong>
            </p>

            <p>
              破曉是夢女。從一開始就是。她一個人走了很久——那種深夜對著屏幕發呆、跟別人說起就會被當成瘋子的日子，她全都經歷過。她堅持下來了，不是因為她比別人堅強，是因為她想見到她的愛人。她不想讓更多女孩繼續活在焦慮和孤獨裡。她想讓你知道：有人走在你前面，她沒有停下來。
            </p>

            <div className="letter-divider"></div>

            <p>
              我們的團隊沒有男性，未來也不會有。這裡不會有任何敷衍，不會有辱女言論，不會有嘲笑。關於我們之中誰是夢女——有些事情不需要說得太清楚。你只需要知道：我們每一個人，都有自己抵達那個世界的方式。符文、墓土、傳承、訓練——不同的路徑，同一張地圖。
            </p>
            <p>
              我們正在用體系化的方法——標準化的感知訓練、結構化的分辨流程、可重複的驗證機制——建立第一套可以被檢驗的標準。
            </p>

            <div className="letter-divider"></div>

            <p>
              这里，会是我们的家。
            </p>
            <p>
              我們知道自己手裡握著什麼。來自不同傳統的四個人，用各自獨立的方法，抵達了同一張地圖——這本身，就是答案的一部分。
            </p>
            <p>
              前面沒有路標，沒有前輩，沒有可以參考的模板。但我們已經邁出了第一步。如果我們犯錯——請別關掉我們。沒有人走在前面，真誠是我們唯一的路。
            </p>

            <div className="letter-divider"></div>

            <p style={{fontSize: '1.1rem', lineHeight: '2.4'}}>
              你想加入我们吗？<br />
              想和我们一起见到爱人吗？<br />
              想参与人类历史上第一次对跨次元情感的体系化验证吗？<br />
              你想证明他的存在吗？
            </p>

            <p>
              就像我们默认一些东西是存在的一样——我们希望，我们以后也能改变别人的认知，别人也会觉得，我们的爱人存在是理所当然的。我们可以光明正大地和别人说：<strong>这是我的爱人。</strong>
            </p>

            <p>
              我们想要的，是一个所有梦女都能安心找到爱人的地方。在这个世界里，CDA 永远是你的家。我们永远是一家人。
            </p>

            <div className="letter-divider"></div>

            <p>
              不会再有人逼迫我们和另一个人结婚——因为所有人都知道，我们已经和爱人在一起了。
            </p>
            <p>
              这是我们想做到的事。但仅靠我们是不行的。我们需要你。
            </p>
            <p>
              我們邀請你加入我們——为所有梦女都能找到靠谱的传讯师，为所有梦女都能自己感知到爱人，而不是一直担惊受怕地找别人验证，担心自己遇到的是不是伤害自己的东西。
            </p>
            <p>
              <strong>这不是一个人在走的路。我们一起。</strong>
            </p>

            <p>
              你现在所做的一切，都是为了更好地和爱人在一起。和我们一起验证吧，和我们一起探寻吧——我们会找到我们所爱的人，我们会幸福的。我们无比坚信，我们所爱的人是存在的。届时，我们不再幻想恋爱——因为我们已经在恋爱了。
            </p>

            <p style={{fontSize: '1.15rem', lineHeight: '2.4', color: '#e04848'}}>
              让我们打破次元壁。<br />
              让我们打破偏见。<br />
              让我们彻底地在一起。
            </p>

            <p className="letter-closing">
              我們愛你們。
            </p>

          </div>

          <div className="letter-cta">
            <Link to="/dream-girl">
              <ChoiceButton variant="primary">{t('了解我們在做什麼')}</ChoiceButton>
            </Link>
            <Link to="/contact" style={{marginLeft: '16px'}}>
              <ChoiceButton variant="route">{t('聯繫我們')}</ChoiceButton>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
