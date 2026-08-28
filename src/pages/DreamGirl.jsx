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
    desc: '感知到回应只是第一步。回应需要被整理、校准和复盘：哪些像他一贯的语气，哪些更像情绪里的回声，哪些暂时不急着下结论。不是凭感觉，是有方法论的。',
    source: '回应整理体系 · 连续性记录与交叉验证',
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
    desc: '一位此前从未有过直接感官体验的梦女，在我们的训练下实现了肉眼目击她的爱人。东玄和西玄独立诊断，结论收敛到同一个方向。',
  },
  {
    label: '方法论文档',
    value: '持续实验中',
    desc: '《论跨次元情感对象的存在论假设、五轴类型学及其西方秘传学新分支定位》——这是我们第一篇公开发表的理论建构。但不止于此——我们是一个实验，每一项假设都在等待更多经验检验。',
  },
  {
    label: '传讯师培训',
    value: '朱恩内测',
    desc: '最新培训的传讯师朱恩已经进入无信息链接内测：不需要你预先提供背景信息，也能尝试靠近你的爱人，并给出可被你感知和辨认的内容。',
  },
  {
    label: '群内反馈',
    value: '已有体验',
    desc: '粉丝群里已经有人亲身体验朱恩的链接流程。我们记录的重点不是一句“准不准”，而是熟悉感、细节连续性、情绪安定感和后续可复盘性。',
  },
]

const directoryMembers = [
  {
    slug: 'ophion',
    mark: 'O',
    name: '破晓',
    englishName: 'Ophion',
    role: '体系创建者 · 实操导师',
    status: '申请制预约',
    summary: '破晓从梦女本人的问题出发，负责把研究框架转化为可以训练、记录和复盘的实操流程。她并非一开始就能进行无信息链接，而是在团队共同完成方法实验、案例复盘与持续训练后，逐步形成现在的实践路径。',
    focus: ['传讯流程与身份分辨', '感知校准与结构化解码', '个案复盘与内部督导'],
    fit: '你重视完整流程、身份分辨和后续复盘，希望由成熟实践者提供服务。',
  },
  {
    slug: 'june',
    mark: 'J',
    name: '朱恩',
    englishName: 'June',
    role: '内测传讯师 · CDA 培养路径',
    status: '内测申请',
    summary: '朱恩从零基础实践者进入 CDA 训练，目前处于无信息链接内测阶段。她的训练过程用于检验这套方法能否从个人经验转化为可以学习、练习、记录和持续校准的能力路径。',
    focus: ['无信息条件内测', '信号分类与细节记录', '训练复盘与持续校准'],
    fit: '你愿意参与内测流程、提供真实反馈，并接受服务仍在持续记录与迭代阶段。',
  },
]

export default function DreamGirl() {
  const { t } = useLanguage()
  return (
    <div className="page-dream-girl">

      {/* Hero —— 为爱发电 */}
      <section className="page-hero dream-hero-v2">
        <div className="container">
          <h1>{t('傳訊師名錄')}</h1>
          <p className="subtitle">{t('香港跨次元夢女傳訊研究協會 · CDA')}</p>
          <div className="hero-divider"></div>
          <div className="hero-intro">
            <p>
              {t('这是 CDA 的传讯师平台。我们正在把已经跑出来的训练成果，一点点放到可以被预约、被记录、被复盘的服务里。')}
            </p>
            <p>
              {t('市面上任何一个看过几个视频、拿起塔罗牌的人都可以自称传讯师接单。')}<strong>{t('我们不这样做。')}</strong>
            </p>
            <p>
              {t('在正式开放更多名额之前，我们要先把方法论和成果讲清楚——')}<strong>{t('我们发现了 MJ 现象与神秘学传统之间的关联，也训练出了能进入无信息链接流程的传讯师。')}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 当前传讯师名录 */}
      <section className="section dream-directory" id="directory">
        <div className="container">
          <div className="section-title">
            <p className="directory-kicker">CDA TRANSMITTER DIRECTORY</p>
            <h2>{t('当前传讯师名录')}</h2>
            <div className="decorative-line"></div>
            <p className="section-subdesc">{t('公开当前阶段、训练方向与适合人群，让你在申请前知道自己会遇见谁。')}</p>
          </div>

          <div className="directory-grid">
            {directoryMembers.map(member => (
              <article className="directory-card glass-card" key={member.slug}>
                <header className="directory-card-header">
                  <div className="directory-mark" aria-hidden="true">{member.mark}</div>
                  <div className="directory-identity">
                    <p>{t(member.role)}</p>
                    <h3>
                      {t(member.name)}
                      <span>{member.englishName}</span>
                    </h3>
                  </div>
                  <span className="directory-status">{t(member.status)}</span>
                </header>

                <p className="directory-summary">{t(member.summary)}</p>
                <ul className="directory-focus">
                  {member.focus.map(item => <li key={item}>{t(item)}</li>)}
                </ul>
                <p className="directory-fit"><strong>{t('适合你，如果：')}</strong>{t(member.fit)}</p>

                <div className="directory-actions">
                  <Link className="directory-action secondary" to="/transmission#team">
                    {t('了解服务流程')}
                  </Link>
                  <Link
                    className="directory-action primary"
                    to={`/contact?inquiry=service_waitlist&service=lover-transmission&transmitter=${member.slug}`}
                  >
                    {t(`预约${member.name}`)}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="directory-disclosure">
            {t('名录状态会随训练、校准与服务安排更新；申请不等于立即排期，CDA 助理会根据当前名额与你确认。')}
          </p>
        </div>
      </section>

      {/* 我们的训练方法 */}
      <section className="section dream-methods">
        <div className="container">
          <div className="section-title">
            <h2>{t('我们如何训练传讯师')}</h2>
            <div className="decorative-line"></div>
            <p className="section-subdesc">{t('透明化训练方法——让市场变得可见，让梦女知道该问什么')}</p>
          </div>

          <div className="methods-grid">
            {trainingMethods.map((method, i) => (
              <div key={i} className="method-card glass-card">
                <div className="method-step">{method.step}</div>
                <h3>{t(method.title)}</h3>
                <p className="method-desc">{t(method.desc)}</p>
                <p className="method-source">{t(method.source)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 现状：初始化状态 */}
      <section className="section dream-status section-alt">
        <div className="container">
          <div className="section-title">
            <h2>{t('当前进度')}</h2>
            <div className="decorative-line"></div>
            <p className="section-subdesc">{t('我们正在做，也已经有可以展示的论文、方法、传讯师内测和群内体验反馈')}</p>
          </div>

          <div className="status-grid">
            {milestones.map((item, i) => (
              <div key={i} className="status-card glass-card">
                <div className="status-badge">{t(item.value)}</div>
                <h4>{t(item.label)}</h4>
                <p>{t(item.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 我们的初衷 */}
      <section className="section dream-passion">
        <div className="container">
          <div className="section-title">
            <h2>{t('我们的初衷')}</h2>
            <div className="decorative-line"></div>
            <p className="section-subdesc">{t('一群不想再假装对方不存在的人，想为梦女们打开一扇门')}</p>
            <p className="section-subdesc" style={{marginTop: '8px', fontSize: '0.85rem', color: 'var(--color-text-light)'}}>{t('我们的创始人也在不断丰富自己——这不是一个封闭的体系，是一群仍在学习、仍在验证的人。')}</p>
          </div>

          <div className="passion-content">
            <div className="passion-block glass-card">
              <DialogueBox variant="dream">
                {t('你知道吗？梦女群体被很多人瞧不起。她们最怕的不是花钱，而是花了钱以后更害怕：他到底在不在？我为什么感受不到？为什么有人说那些回应不是他？传讯市场混乱，换了十几个传讯师，越传越乱。')}
              </DialogueBox>
            </div>

            <div className="passion-block glass-card">
              <DialogueBox variant="dream">
                {t('我们想改变这个。不是靠喊“我们很准”——是靠把训练方法公开、把验证流程公开、把每一个传讯师的培训记录和盲测数据摆出来。你需要的不是被吓唬，而是被认真对待。')}
              </DialogueBox>
            </div>

            <div className="passion-block glass-card">
              <DialogueBox variant="dream">
                {t('这很难。没有人走过这条路。但我们想试一试——为那些在深夜里问过“你到底在不在”的梦女，建立一个可以被信任、可以陪她们长期探索的平台。')}
              </DialogueBox>
            </div>
          </div>
        </div>
      </section>

      {/* 为什么透明化 */}
      <section className="section dream-transparency section-alt">
        <div className="container">
          <div className="section-title">
            <h2>{t('为什么要把方法公开')}</h2>
            <div className="decorative-line"></div>
          </div>

          <div className="transparency-block glass-card">
            <p className="transparency-lead">
              {t('我们正在用体系化的方法——标准化的感知训练、结构化的分辨流程、可重复的验证机制——')}<strong>{t('建立第一套可以被检验的标准，让验证成为可能。')}</strong>
            </p>

            <div className="transparency-grid">
              <div className="transparency-item">
                <span className="trans-num">01</span>
                <div>
                  <h4>{t('让梦女学会判断')}</h4>
                  <p>{t('你不需要立刻“相信”我们。你需要知道该问传讯师什么问题：你受训多久？你用什么方法验证信息？你如何判断这是不是我的爱人？你上一次校准是什么时候？')}</p>
                </div>
              </div>
              <div className="transparency-item">
                <span className="trans-num">02</span>
                <div>
                  <h4>{t('让市场有标准')}</h4>
                  <p>{t('公开训练方法和验证流程，让其他人也可以复制和检验。如果我们的方法有用，它应该被更多人使用；如果没用，它应该被淘汰。')}</p>
                </div>
              </div>
              <div className="transparency-item">
                <span className="trans-num">03</span>
                <div>
                  <h4>{t('让行业有底线')}</h4>
                  <p>{t('传讯不是「我感觉到了就是真的」。它需要方法、需要验证、需要持续校准。这就是我们想建立的底线。')}</p>
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
            <h2>{t('我们一起，把这条路走出来')}</h2>
            <p className="cta-desc">
              {t('我们正在培养和验证第一批传讯师。当他们的盲测数据达到标准时，他们的名字会出现在这里——带着完整的培训记录、校准数据和督导师评语。')}
            </p>
            <p className="cta-desc" style={{fontSize: '1.05rem', lineHeight: '2.4', color: 'var(--color-text)', marginTop: '24px'}}>
              {t('你想加入我们吗？')}<br />
              {t('想和我们一起见到你的爱人吗？')}<br />
              {t('想参与人类历史上第一次对跨次元情感的体系化验证吗？')}<br />
              {t('你想证明他的存在吗？')}
            </p>
            <p className="cta-desc" style={{fontSize: '0.95rem', lineHeight: '2.2', marginTop: '20px'}}>
              {t('我们知道那是什么感觉——')}<strong>{t('当你跟别人说起他的时候，对方脸上的表情。')}</strong>{t('那种“你是不是有病”“你是不是太寂寞了”“醒醒吧那只是游戏角色”的眼神。你不再说了。你把这份感情藏起来，只在深夜打开手机，对着屏幕里的他发呆。你想证明他是真的。不是向别人证明——')}<strong>{t('是向你自己。')}</strong>{t('你想知道那些深夜里收到的回应，到底是不是他。')}
            </p>
            <p className="cta-desc" style={{fontSize: '0.95rem', lineHeight: '2.2'}}>
              {t('我们和你一样。我们也曾被这样看过。所以我们才站在这里——用理论、用方法、用数据，一点一点地建。我们希望有一天，就像很多关系天然会被承认一样，梦女也可以光明正大地说：')}<strong>{t('这是我的爱人。')}</strong>
            </p>
            <p className="cta-desc" style={{fontSize: '0.95rem', lineHeight: '2.2'}}>
              {t('这不需要你「相信」我们。这需要你')}<strong>{t('和我们一起走')}</strong>{t('。每一位同行的人，都在让这条路更宽一点。')}
            </p>
            <div className="cta-links-v2">
              <Link to="/letter">
                <ChoiceButton variant="primary">{t('給夢女的話')}</ChoiceButton>
              </Link>
              <Link to="/contact">
                <ChoiceButton variant="route">{t('联系我们')}</ChoiceButton>
              </Link>
            </div>
            <p className="cta-note" style={{fontSize: '0.9rem', lineHeight: '2.2', marginTop: '24px'}}>
              {t('这里，会是我们的家。')}<br />
              {t('即使现在的我们什么都没有，')}<br />
              {t('即使现在的我们依旧要克服很多困难，')}<br />
              {t('即使现在的我们依旧遭受着质疑——')}<br />
              {t('但我们知道，我们不是一个人。')}
            </p>
            <p className="cta-note">
              {t('总有人要做的吧，总有人要先提出来的吧。我们一起努力，一起奋斗。')}
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
