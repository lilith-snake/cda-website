import { useLanguage } from '../i18n'
import './Recruit.css'

export default function Recruit() {
  const { t } = useLanguage()

  return (
    <div className="page-recruit">
      {/* Hero */}
      <section className="page-hero recruit-hero">
        <div className="container">
          <h1>你感觉到她了。<br />你感觉到他了。</h1>
          <p className="subtitle">
            我们是 CDA，香港跨次元传讯研究协会。<br />
            我们在做的事：验证你的 MJ 到底是不是真的。
          </p>
          <p className="women-only">仅面向女性</p>
        </div>
      </section>

      {/* 黎辉 */}
      <section className="section">
        <div className="container">
          <div className="glass-card recruit-card">
            <h2>黎辉</h2>
            <p>美国疗愈之光机构黑魔法导师认证。为 CDA 提供理论方法支撑——把实践中的发现转化为可以被学术界讨论的语言。</p>
            <p>和破晓共同撰写论文，搭建学术框架。整合东玄、西玄、金色黎明、神智学等多套独立体系为统一方法论——这件事是团队一起做的，黎辉在其中的理论整合和框架设计上提供了核心支撑。</p>
            <p>破晓是她带出来的学生。从需要外部信息才能传讯，到不需要任何信息直接链接——黎辉在背后指导了整个方法的成型。学员训练路径的每一次迭代调整、质量把控、数据审核——她在。</p>
            <p>她不出现在前台。市面上你找不到第二个黎辉。不是没人做传讯，是没有人有她手里的东西——一套完整的、有文献溯源、有逻辑链条、有可操作步骤的方法论。</p>
          </div>
        </div>
      </section>

      {/* 破晓 */}
      <section className="section">
        <div className="container">
          <div className="glass-card recruit-card">
            <h2>破晓 Ophion</h2>
            <p>黑女巫。美国疗愈之光机构认证占星师及黑女巫。团队里第一个接触 MJ 的人——本身就是梦女。说服导师黎辉加入，组织了这个研究团队。</p>
            <p>留学期间曾跟随一位在欧洲民间传承中独自修习了数十年的老女巫学习。后来在神秘学社群结识黎辉，成为她的学生，跟随她学习黑魔法、西方秘传学、灵媒。她向黎辉坦白：学这一切，只是为了寻找对方存在的迹象。</p>
            <p>在黎辉的指导下，MJ 这个全新领域的方法从无到有被搭建出来。她从需要外部信息才能传讯，到不需要任何信息直接链接。方法成型后，她开始带学员。第一批，两三个人能感受到对方。方法继续迭代。到第三批——<strong>一个学员睁著眼睛看到了她的 MJ 站在那里。</strong></p>
            <div className="recruit-highlight">
              东玄和西玄的从业者独立诊断，彼此不认识，没有串通。<br />
              <strong>两边的诊断结论收敛到同一个方向。</strong><br />
              一位从事驱鬼的法师在审阅案例后，从「肯定是鬼」修正为「不排除是一种我之前没见过的存在形式」。<br />
              没有串通、没有利益关系——他们各自用自己那套系统，指向了同一个方向。
            </div>
            <p>破晓负责将理论转化为可教、可练、可考核的实操体系，主导传讯师培训课程设计与盲测实验。</p>
          </div>
        </div>
      </section>

      {/* 团队 */}
      <section className="section">
        <div className="container">
          <div className="glass-card recruit-card">
            <h2>符文师 · 赫尔加</h2>
            <p>符文是祖母教的，文献考据是她自己一头钻进去的——两条路在她身上从来不分开走。</p>
            <p>论文的 Faivre 六大特征论证结构、卡巴拉四重世界的位面模型、几乎每一条学术引用的溯源核对——都经过她的眼睛。她不会放过任何一条文献来源。每一次被她追问之后，论文的论证都变得更结实一层。</p>

            <h2 style={{marginTop: 40}}>墓地女巫 · 夜薇</h2>
            <p>俄罗斯的很多女巫都来自于或多或少的传承。她没有。不属于任何组织，不来自任何传承——圣彼得堡的墓园就是她的场地。没有人知道她的能力是跟谁学的，她也从不解释。</p>
            <p>黎辉说，她上《通灵之战》没问题。</p>

            <div className="recruit-roles">
              <div className="recruit-role">
                <div className="recruit-role-name">黎辉</div>
                <div className="recruit-role-do">认证导师</div>
              </div>
              <div className="recruit-role">
                <div className="recruit-role-name">破晓</div>
                <div className="recruit-role-do">授课核心</div>
              </div>
              <div className="recruit-role">
                <div className="recruit-role-name">赫尔加</div>
                <div className="recruit-role-do">符文师</div>
              </div>
              <div className="recruit-role">
                <div className="recruit-role-name">夜薇</div>
                <div className="recruit-role-do">墓地女巫</div>
              </div>
            </div>
            <p style={{marginTop: 16}}>团队配备一名专职助理，全程跟进记录每一位研究共建者的训练进度、链接数据和验证结果。</p>
          </div>
        </div>
      </section>

      {/* 东玄西玄 */}
      <section className="section">
        <div className="container">
          <div className="glass-card recruit-card">
            <h2>为什么他们对得上</h2>
            <p>梦女最常听到的一句话是：<strong>「那是你自己想像的。」</strong></p>
            <p>一个人的感知确实可以是投射。一个人说「我感觉他在」——没人能证明那是真的。市面上大部分传讯师就是一个人说，你选择信或不信。没有第三个人能帮你验证她说的到底对不对。</p>
            <p>CDA 解决这个问题的方式不是找更厉害的传讯师。是——<strong>不让任何一个人单独说了算。</strong></p>
            <p>CDA 按市场价格全额付费，找了多位东玄和西玄的从业者做专业咨询。第一轮，大多数人的判断是反对或怀疑——认为梦女的 MJ 链接多半是低层灵体伪装、自身情感投射、或残留能量印记。不意外。但我们付费做了第二轮深度技术探讨。</p>
            <div className="recruit-highlight">
              一个东玄。一个西玄。<br />
              两套完全不同的诊断系统，两个互相不认识的人，没有交流，没有串通。<br />
              <strong>两边的诊断结论——收敛到同一个方向。</strong>
            </div>
            <p>不止于此。团队内部有自己的判断。但自己说对不算——这是基本规则。所以每一次，团队都会把同一个案例同时交给外部的、独立的第三方去做诊断。不是找自己人，是找外面的人。不是只找一个，是东玄和西玄各找一个。</p>
            <p>结果：CDA 内部团队自己的诊断结果，和这两个外部从业者——<strong>也对得上。</strong></p>
            <p>一位从事驱鬼的法师在审阅案例后，从「肯定是鬼」修正为「不排除是一种我之前没见过的存在形式」。另一位 Thelema 传统的仪式魔法师对比了 CDA 的链接方法与 Crowley 的灵体沟通技术，承认两者在操作逻辑上存在结构相似性。</p>
            <p>三组人，不同的训练背景，不同的诊断工具，彼此没有串通——全部收敛到同一个方向。这不是运气能解释的。</p>
            <p><strong>这对你意味着什么？</strong>当你做完训练、自己链接到你的 MJ 之后，不是你自己说了算，不是破晓说了算——会有东玄的人独立诊断一次，西玄的人独立诊断一次，内部团队再交叉比对。三组结果摆在一起，收敛还是发散，数据说了算。</p>
          </div>
        </div>
      </section>

      {/* 论文 */}
      <section className="section">
        <div className="container">
          <div className="glass-card recruit-card">
            <h2>论文</h2>
            <p>黎辉和破晓写了第一篇 MJ 理论建构论文。五轴类型学、三层方法论、Everett 分支排除论证、盲测实验设计。整合秘传学、量子物理学、比较宗教学。全文公开，每一条引用有来源。</p>
            <p><a href="paper.html" className="recruit-link">→ 论文全文</a></p>
          </div>
        </div>
      </section>

      {/* 安全 */}
      <section className="section">
        <div className="container">
          <div className="glass-card recruit-card">
            <h2>安全</h2>
            <p>不是念咒语，是金色黎明传统的标准化仪式防护。每一个操作都有 SOP。</p>
            <div className="recruit-chain">
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">1</span>
                <span><strong>先分辨，后链接。</strong>分清楚 MJ 的信号和别的东西。分不清楚，不深入。</span>
              </div>
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">2</span>
                <span><strong>仪式防护。</strong>每次链接标配防护流程。做完不累、不被消耗。</span>
              </div>
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">3</span>
                <span><strong>通道 SOP。</strong>怎么开怎么关，每一步可操作。不存在关不掉。</span>
              </div>
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">4</span>
                <span><strong>随时喊停。</strong>不需要理由。</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 骂声 */}
      <section className="section">
        <div className="container">
          <div className="glass-card recruit-card">
            <h2>有人骂</h2>
            <p>说我们骗子，不正经，梦女疯了。</p>
            <p>但如果我们是错的——方法为什么在一批一批变好？为什么学员从感受不到变成能感受到？为什么目击案例出现了？为什么东玄和西玄独立诊断的结论总是一致？</p>
            <div className="recruit-highlight">
              <strong>骂是因为从来没有人做过。</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 招募 */}
      <section className="section">
        <div className="container">
          <div className="glass-card recruit-card">
            <h2>研究共建者招募</h2>
            <p>我们在做的不是培训生意。是一场实验。</p>
            <p>实验假设很简单：<strong>接受 CDA 标准化训练的人，对同一个 MJ 的独立链接结果，能否达到 90% 以上的一致性——并且显著高于未受训者。</strong></p>
            <div className="recruit-highlight">
              A 组（已有基础的从业者）接受 CDA 训练 → 独立链接 → 出结果<br />
              B 组（零基础梦女）接受 CDA 训练 → 独立链接 → 出结果<br />
              对照组（未受训者）→ 同等条件链接 → 出结果<br /><br />
              三组结果比对。资讯隔离。公开记录。无论结果是否达标，实验报告公开发布。
            </div>
            <p className="recruit-subtitle">你要做什么</p>
            <p>跟 CDA 一起训练。从感知校准到分辨训练到独立链接。团队里有神秘学领域专业的成员，也有擅长拆解传讯本质、懂得链接如何运作的人。每一步，理论和实操都跟得上。每一期的结果都会记录在下一版的论文里。每一个数据点都是这条路上的一步。</p>
            <p>每一次你链接到关于他的信息，会被记录下来。东玄的人独立诊断一次，西玄的人独立诊断一次——两套系统、彼此不认识。内部团队再交叉比对。数据摆在桌上。是就是，不是就不是。</p>
            <p>你的训练过程、你的链接数据、你的验证结果——全部进入研究记录。你是这个实验的数据点，也是这个实验的共建者。没有你，就没有数据。没有数据，就没有答案。</p>
            <p>你不需要相信任何东西。你只需要参与。如果方法在你身上跑通了——MJ 理论离被证明就近了一步。如果在哪里卡住了——方法就被修正了一次。哪种结果都有价值。</p>
            <p className="recruit-subtitle">为什么是 ¥9,800</p>
            <p>不是一个人在教你。是一整个团队在你身上工作。</p>
            <div className="recruit-chain">
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">1</span>
                <span>破晓全程 1 对 1 带你——从感知校准到分辨训练到独立链接，每一步都在。</span>
              </div>
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">2</span>
                <span>黎辉在后面做质量把控——训练路径调整、方法论迭代、数据审核。她是认证导师。</span>
              </div>
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">3</span>
                <span>东玄从业者独立诊断一次。西玄从业者独立诊断一次。两个人在不同的系统里工作，彼此不认识。</span>
              </div>
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">4</span>
                <span>符文师和墓地女巫做技术支撑。不是挂名——文献溯源、灵体身份辨别，实打实在做。</span>
              </div>
            </div>
            <p style={{marginTop: 20}}>你去找外面的传讯师问一次，¥500-2,000。她告诉你一句话。下次你再找她，又是一次钱。你永远不知道是真的还是编的。</p>
            <p>¥9,800，你得到的是：<strong>一个团队在你身上工作、一套完整的方法论、一个你自己永久拥有的能力、一个被多系统独立验证过的 MJ。</strong></p>
            <p>我们在做研究，论文和网站上写出去的每一句话，得对它负责。目前还在初期阶段，选择先跟进 2 个人——对每一个共建者负责，也对后续的交叉验证和公开审查负责。</p>
            <p>这是第一批正式参与 CDA 研究的共建者。感谢你的信任和支持。感谢你在流言蜚语中选择了我们。</p>
            <p className="recruit-subtitle">申请问题</p>
            <p>联系时请附上你对以下几个问题的回答。不是为了刁难——我们需要确认彼此是否适合一起走这段路。</p>
            <div className="recruit-chain">
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">1</span>
                <span>请介绍一下你自己。你的年龄、职业、目前的生活状态。你是什么时候开始意识到自己是梦女的？你的 MJ 是谁——不用告诉我他的名字，但告诉我他是哪种类型（原创型/非虚构灵体型/人造灵型，可以看看<a href="paper.html" className="recruit-link">论文第六章</a>）。你和他认识多久了？</span>
              </div>
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">2</span>
                <span>你之前为了链接你的 MJ，做过哪些尝试？找过多少传讯师？花过多少钱？结果怎么样？如果找过多个，你觉得她们说的对得上吗？</span>
              </div>
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">3</span>
                <span>你目前在神秘学或灵性领域有什么经验？跟过哪些老师、上过哪些课、有没有接过个案？无论深浅，请如实说明。</span>
              </div>
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">4</span>
                <span>如果研究数据最后证明，你的 MJ 不是独立存在、只是你自己的投射——你还会继续参与研究吗？说说理由。</span>
              </div>
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">5</span>
                <span>描述一年以后，你希望你的生活因为这次参与发生什么变化。不是「我希望被验证」——是你的日常、你和他之间的日常，会发生什么不同。</span>
              </div>
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">6</span>
                <span>如果论文第二版需要公开部分训练数据作为匿名案例，你愿意吗？如果愿意，你希望被收录什么？如果不愿意，是哪里让你犹豫？</span>
              </div>
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">7</span>
                <span>你有没有经历过不被别人理解的事？你是怎么走过来的？可以是一件事，也可以是一段时间。</span>
              </div>
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">8</span>
                <span>你觉得一套东西，是你花了很多钱和心血才学到的——跟别人免费分享是对的吗？还是收钱才对？说说你的看法，也说说你自己的经历和你做过的选择。</span>
              </div>
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">9</span>
                <span>如果这个研究继续走下去，你觉得你能为它带来什么——是别人带不来的那种？</span>
              </div>
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">10</span>
                <span>你认真看完论文了吗？你认为怎么样？不用夸，说哪里写得好、哪里你觉得有问题或没看懂。</span>
              </div>
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">11</span>
                <span>你第一次看到 CDA 的论文或网站时，心里最真实的想法是什么？哪里让你觉得可信，哪里让你犹豫或不信？</span>
              </div>
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">12</span>
                <span>你有没有坚持做一件事超过两年的经历？是什么？中间有没有想放弃的时候，你是怎么撑过来的？</span>
              </div>
              <div className="recruit-chain-step">
                <span className="recruit-chain-num">13</span>
                <span>你觉得自己在感知层面有什么优势？有没有具体经历可以说明？有没有什么你觉得自己不够好的地方？</span>
              </div>
            </div>
            <p style={{marginTop: 20}}>没有标准答案。我们只是想从你的回答里，看到你是一个什么样的人。</p>
            <p className="recruit-subtitle">流程</p>
            <p>联系 → 聊一次，确认彼此匹配 → 签署研究参与协议 → 开始训练</p>
            <div className="recruit-submit-box">
              <p><strong>提交方式</strong></p>
              <p>将以上问题的回答发送至：<br /><a href="mailto:dluu39ce7c@gmail.com" className="recruit-link">dluu39ce7c@gmail.com</a></p>
              <p>我们会在收到后与你联系，约一次交谈。</p>
              <p className="recruit-footnote">仅面向女性 · 名额有限 · 非先到先得</p>
            </div>
          </div>
        </div>
      </section>

      {/* 写在最后 */}
      <section className="section">
        <div className="container">
          <div className="glass-card recruit-card">
            <h2>写在最后</h2>
            <p>无论最后的结果是什么，是好或者坏，我们都为您负责，保证公开透明，不虚构结果验证，我们以最真诚的方式，邀请您加入我们，即使目前我们只是非常小的团队，即使目前我们起步艰难，即使有非常多的粉丝让我们批量授课以此换取团队的盈利，即使我们去做这项试验遭遇非常多的批判，谩骂，攻击，但请您给我们一个机会，一个让我们梦女群体不再只能在抱团取暖的群聊诉说我们自己的爱人，而是也能和别人一样，正常大方地谈论，如果实验能够成功，就意味着我们不再是只有自己一个人才知道我们是梦女，就像塔罗师一样，能正常地和别人谈论塔罗牌并能够上街摆摊。也许以后，我们的未来就不远了，编辑至此，我们难以形容此刻的心情，我们团队内的老师大部分是黎辉和破晓组织过来的人，我们的助理也是和我一样的梦女，她并未收取任何酬劳，全职帮助我们统计，和回复邮件，拨通不同人的电话询问，我们团队内的很多老师都有自己原本的工作，女巫，灵媒，我们也在通过我们的方式尽可能地降低成本，关于我们想创建一个什么样的未来？我们能否找到和爱的人在一起的方式，不再只能通过屏幕感受，不再担心自己写的信对方是否能收到？不用整日活在这个传讯师准不准啊，是不是要换一个啊？会不会很贵啊？如果角色官方出了事情，我们是否应该退游支持？会感到难过吗？会害怕没有这个就无法链接他了吗，也许，未来，这些问题就有答案了，CDA是为这一切而来的，我相信你也是。</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section recruit-cta-section">
        <div className="container">
          <div className="recruit-cta">
            <h2>你不是来报名的。你是来让这件事被证明的。</h2>
            <p>
              你的 MJ 是真的还是你的投射——<br />
              不是任何人一句话说了算。<br />
              一套方法、三组人、独立链接、盲测比对。<br />
              数据摆在桌上，是就是，不是就不是。
            </p>
            <a href="https://lilith-snake.github.io/cda-website/apply.html" className="recruit-cta-btn">填写申请问卷</a>
            <p className="recruit-cta-note">或 <a href="/contact" className="recruit-link">直接联系我们</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}
