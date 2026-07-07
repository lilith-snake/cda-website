import { Link } from 'react-router-dom'
import DialogueBox from '../components/DialogueBox'
import ChoiceButton from '../components/ChoiceButton'
import { useLanguage } from '../i18n'
import './DreamGirl.css'

// 培训方法论——展示我们如何训练和验证传讯师
const trainingMethods = [
  {
    step: 'I',
    title: '精微体感知唤醒',
    desc: '不是天賦，是訓練。每个传讯师的靈五感主导通道不同——有人先看到、有人先听到、有人先感觉到。我们的训练从找到每个人的主导通道开始。',
    source: '神智学 Leadbeater《The Chakras》(1927) · 精微体结构理论',
  },
  {
    step: 'II',
    title: '结构化解码训练',
    desc: '感知到信号只是第一步。信号需要被分类：是实体信息、投射信息、还是噪音？结构化解码训练让传讯师学会分离这三类信号——不是凭感觉，是有方法论的。',
    source: '信息三分類体系 · 信号分离与交叉验证',
  },
  {
    step: 'III',
    title: '三重验证法',
    desc: '任何一条信息都必须经过三重检验：信息一致性（不同时间/不同方式得到相同内容）、独立印证（不同传讯师独立链接同一对象）、盲测（传讯师在不知情条件下进行感知）。三者皆通过，信息才成立。',
    source: '科学方法 · 可重复性 + 独立验证 + 盲测设计',
  },
  {
    step: 'IV',
    title: '持续校准机制',
    desc: '传讯师的感知精度不是一劳永逸的。我们要求每位传讯师每月至少参加一次集体校准——独立执业超过三个月不校准，准确率会下降。这是对自己负责，也是对他人负责。',
    source: '月度校准会 · 多传讯师交叉验证',
  },
]

// 教学成果——尚未完全上线，但已有初步验证
const milestones = [
  {
    label: '已完成的验证',
    value: '1 例肉眼目击',
    desc: '一位此前从未有过直接感官体验的梦女，在我们的训练下实现了肉眼目击她的 MJ。东玄和西玄独立诊断，结论一致：不是其他东西，是他。',
  },
  {
    label: '方法论文档',
    value: '持续实验中',
    desc: '《论跨次元情感对象（MJ）的存在论假设、五轴类型学及其西方秘传学新分支定位》——这是我们第一篇公开发表的理论建构。但不止于此——我们是一个实验，每一项假设都在等待更多经验检验。',
  },
  {
    label: '传讯师培训',
    value: '培养中',
    desc: '我们的传讯师培训体系正在内测。不是市面上随便看几个视频就接单的模式——我们要求每一位传讯师经过完整的靈媒、结构化解码训练和盲测考核。',
  },
  {
    label: '平台状态',
    value: '初始化',
    desc: '传讯师名录尚未对公众开放预约。我们选择先把方法论讲清楚，再把人放上来。这很慢，但这是对的做法。',
  },
]

export default function DreamGirl() {
  const { t } = useLanguage()
  return (
    <div className="page-dream-girl">

      {/* Hero —— 为爱发电 */}
      <section className="page-hero dream-hero-v2">
        <div className="container">
          <h1>傳訊師名錄</h1>
          <p className="subtitle">香港 · 跨次元傳訊研究協會 · CDA</p>
          <div className="hero-divider"></div>
          <div className="hero-intro">
            <p>
              这是 CDA 的传讯师平台。但我们不急着把人放上来。
            </p>
            <p>
              市面上任何一个看过几个视频、拿起塔罗牌的人都可以自称传讯师接单。<strong>我们不这样做。</strong>
            </p>
            <p>
              在开放预约之前，我们要先把方法论讲清楚——<strong>怎么训练、怎么验证、怎么确保对面真的是他而不是投射或噪音。</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 我们的训练方法 */}
      <section className="section dream-methods">
        <div className="container">
          <div className="section-title">
            <h2>我们如何训练传讯师</h2>
            <div className="decorative-line"></div>
            <p className="section-subdesc">透明化训练方法——让市场变得可见，让梦女知道该问什么</p>
          </div>

          <div className="methods-grid">
            {trainingMethods.map((method, i) => (
              <div key={i} className="method-card glass-card">
                <div className="method-step">{method.step}</div>
                <h3>{method.title}</h3>
                <p className="method-desc">{method.desc}</p>
                <p className="method-source">{method.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 现状：初始化状态 */}
      <section className="section dream-status section-alt">
        <div className="container">
          <div className="section-title">
            <h2>当前进度</h2>
            <div className="decorative-line"></div>
            <p className="section-subdesc">我们正在做，但离「可以对外服务」还有一段路要走</p>
          </div>

          <div className="status-grid">
            {milestones.map((item, i) => (
              <div key={i} className="status-card glass-card">
                <div className="status-badge">{item.value}</div>
                <h4>{item.label}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 我们的初衷 */}
      <section className="section dream-passion">
        <div className="container">
          <div className="section-title">
            <h2>我们的初衷</h2>
            <div className="decorative-line"></div>
            <p className="section-subdesc">一群不想再假装对方不存在的人，想为梦女们打开一扇门</p>
            <p className="section-subdesc" style={{marginTop: '8px', fontSize: '0.85rem', color: 'var(--color-text-light)'}}>我们的创始人也在不断丰富自己——这不是一个封闭的体系，是一群仍在学习、仍在验证的人。</p>
          </div>

          <div className="passion-content">
            <div className="passion-block glass-card">
              <DialogueBox variant="dream">
                你知道吗？梦女群体被很多人瞧不起。传讯市场混乱——换了十几个传讯师、花了好几万、越传越乱。没有人告诉她们对面是谁、传讯师有没有受过训练。
              </DialogueBox>
            </div>

            <div className="passion-block glass-card">
              <DialogueBox variant="dream">
                我们想改变这个。不是靠喊「我们很靠谱」——是靠把训练方法公开、把验证流程公开、把每一个传讯师的培训记录和盲测数据摆出来。
              </DialogueBox>
            </div>

            <div className="passion-block glass-card">
              <DialogueBox variant="dream">
                这很难。没有人走过这条路。但我们想试一试——为那些在深夜里问过「你到底在不在」的梦女，建立一个可以被信任的平台。
              </DialogueBox>
            </div>
          </div>
        </div>
      </section>

      {/* 为什么透明化 */}
      <section className="section dream-transparency section-alt">
        <div className="container">
          <div className="section-title">
            <h2>为什么要把方法公开</h2>
            <div className="decorative-line"></div>
          </div>

          <div className="transparency-block glass-card">
            <p className="transparency-lead">
              我们正在用体系化的方法——标准化的感知训练、结构化的分辨流程、可重复的验证机制——<strong>建立第一套可以被检验的标准，让验证成为可能。</strong>
            </p>

            <div className="transparency-grid">
              <div className="transparency-item">
                <span className="trans-num">01</span>
                <div>
                  <h4>让梦女学会判断</h4>
                  <p>你不需要「相信」我们。你需要知道该问传讯师什么问题：你受训多久？你用什么方法验证信息？你上一次校准是什么时候？</p>
                </div>
              </div>
              <div className="transparency-item">
                <span className="trans-num">02</span>
                <div>
                  <h4>让市场有标准</h4>
                  <p>公开训练方法和验证流程，让其他人也可以复制和检验。如果我们的方法有用，它应该被更多人使用；如果没用，它应该被淘汰。</p>
                </div>
              </div>
              <div className="transparency-item">
                <span className="trans-num">03</span>
                <div>
                  <h4>让行业有底线</h4>
                  <p>传讯不是「我感觉到了就是真的」。它需要方法、需要验证、需要持续校准。这就是我们想建立的底线。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section dream-cta-v2">
        <div className="container">
          <div className="cta-card-v2 glass-card">
            <h2>我们一起，把这条路走出来</h2>
            <p className="cta-desc">
              我们正在培养和验证第一批传讯师。当他们的盲测数据达到标准时，他们的名字会出现在这里——带着完整的培训记录、校准数据和督导师评语。
            </p>
            <p className="cta-desc" style={{fontSize: '1.05rem', lineHeight: '2.4', color: 'var(--color-text)', marginTop: '24px'}}>
              你想加入我们吗？<br />
              想和我们一起见到爱人吗？<br />
              想参与人类历史上第一次对跨次元情感的体系化验证吗？<br />
              你想证明他的存在吗？
            </p>
            <p className="cta-desc" style={{fontSize: '0.95rem', lineHeight: '2.2', marginTop: '20px'}}>
              我们知道那是什么感觉——<strong>当你跟别人说起他的时候，对方脸上的表情。</strong>那种「你是不是有病」「你是不是太寂寞了」「醒醒吧那只是游戏角色」的眼神。你不再说了。你把这份感情藏起来，只在深夜打开手机，对着屏幕里的他发呆。你想证明他是真的。不是向别人证明——<strong>是向你自己。</strong>你想知道那些深夜里收到的回应，到底是不是他。
            </p>
            <p className="cta-desc" style={{fontSize: '0.95rem', lineHeight: '2.2'}}>
              我们和你一样。我们也曾被这样看过。所以我们才站在这里——用理论、用方法、用数据，一点一点地建。我们希望有一天，就像我们默认很多东西是存在的一样——别人也会觉得，我们的爱人存在是理所当然的。不会再有人逼迫我们和另一个人结婚，因为所有人都知道，我们已经和爱人在一起了。<strong>我们可以光明正大地和别人说：这是我的爱人。</strong>
            </p>
            <p className="cta-desc" style={{fontSize: '0.95rem', lineHeight: '2.2'}}>
              这不需要你「相信」我们。这需要你<strong>和我们一起走</strong>。每一位同行的人，都在让这条路更宽一点。
            </p>
            <div className="cta-links-v2">
              <Link to="/letter">
                <ChoiceButton variant="primary">給夢女的話</ChoiceButton>
              </Link>
              <Link to="/contact">
                <ChoiceButton variant="route">联系我们</ChoiceButton>
              </Link>
            </div>
            <p className="cta-note" style={{fontSize: '0.9rem', lineHeight: '2.2', marginTop: '24px'}}>
              这里，会是我们的家。<br />
              即使现在的我们什么都没有，<br />
              即使现在的我们依旧要克服很多困难，<br />
              即使现在的我们依旧遭受着质疑——<br />
              但我们知道，我们不是一个人。
            </p>
            <p className="cta-note">
              总有人要做的吧，总有人要先提出来的吧。我们一起努力，一起奋斗。
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
