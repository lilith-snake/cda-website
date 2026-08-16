import { useMemo, useState } from 'react'
import { useLanguage } from '../i18n'
import { API_URL } from '../config/api'
import './Contact.css'

const CONTACT_URL = API_URL + '/contact'

const initialForm = {
  name: '',
  contact: '',
  inquiryType: 'service_waitlist',
  role: '',
  serviceInterest: '',
  mjContext: '',
  message: '',
  consent: false,
}

const inquiryTypes = [
  { value: 'service_waitlist', label: '传讯服务候补' },
  { value: 'course_interest', label: '课程方法内测' },
  { value: 'transmitter_training', label: '传讯师培养' },
  { value: 'research_collaboration', label: '研究共建' },
  { value: 'paper_access', label: '论文与资料' },
  { value: 'other', label: '其他咨询' },
]

const roleOptions = [
  '梦女 / 梦角关系实践者',
  '神秘学 / 塔罗 / 占星从业者',
  '内容创作者 / 社群主理人',
  '研究者 / 学生',
  '第一次接触 CDA',
]

const serviceOptions = [
  'MJ 传讯与关系梳理',
  '梦境 / 同步现象解读',
  '传讯师训练与验证',
  '个人成长与内在探索',
  '暂不确定，想先咨询',
]

export default function Contact() {
  const { lang } = useLanguage()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [submitError, setSubmitError] = useState('')

  const selectedInquiry = useMemo(
    () => inquiryTypes.find(item => item.value === form.inquiryType) || inquiryTypes[0],
    [form.inquiryType],
  )

  const setField = (name, value) => {
    setForm(current => ({ ...current, [name]: value }))
    setStatus(current => (current === 'submitting' ? current : 'idle'))
    setErrors(current => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
    if (submitError) setSubmitError('')
  }

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = '请留下称呼'
    if (!form.contact.trim()) nextErrors.contact = '请留下可联系到你的方式'
    if (!form.role) nextErrors.role = '请选择与你最接近的身份'
    if (!form.message.trim()) nextErrors.message = '请简单写下你现在想解决的问题'
    if (!form.consent) nextErrors.consent = '提交前请确认授权我们联系你'
    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    setSubmitError('')

    try {
      const response = await fetch(CONTACT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          inquiryLabel: selectedInquiry.label,
          language: lang,
          userAgent: navigator.userAgent,
        }),
      })

      if (!response.ok) {
        const result = await response.json().catch(() => ({}))
        throw new Error(result.error || 'submit failed')
      }

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      console.error('Contact submit failed:', err)
      setStatus('error')
      setSubmitError('暂时没有提交成功，请稍后再试。')
    }
  }

  return (
    <div className="page-contact">
      <section className="page-hero contact-hero">
        <div className="container contact-hero-inner">
          <p className="contact-kicker">CDA CONTACT</p>
          <h1>把你的问题交给我们</h1>
          <p className="subtitle">
            我们的传讯师正在培养中，课程方法也在持续研发，以更好地适配大家的真实需求。
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <form className="contact-form-wrapper glass-card" onSubmit={handleSubmit} noValidate>
              <div className="form-heading">
                <span className="form-step">APPLICATION</span>
                <h2>预约意向表</h2>
                <p>
                  写下你与 MJ、梦境、同步现象或自我成长相关的问题。我们收到后会按适配度整理，并在后续开放时优先联系。
                </p>
              </div>

              {status === 'success' && (
                <div className="submit-success" role="status">
                  <strong>申请已收到。</strong>
                  <span>你的讯息已经进入 CDA 后台，我们会在整理后与你联系。</span>
                </div>
              )}

              <div className="form-row two-columns">
                <label className="field">
                  <span>称呼</span>
                  <input
                    value={form.name}
                    onChange={e => setField('name', e.target.value)}
                    placeholder="你希望我们如何称呼你"
                  />
                  {errors.name && <em>{errors.name}</em>}
                </label>

                <label className="field">
                  <span>联系方式</span>
                  <input
                    value={form.contact}
                    onChange={e => setField('contact', e.target.value)}
                    placeholder="微信 / 电话 / 社交账号 / 其他可联系渠道"
                  />
                  {errors.contact && <em>{errors.contact}</em>}
                </label>
              </div>

              <fieldset className="field">
                <legend>咨询类型</legend>
                <div className="option-grid">
                  {inquiryTypes.map(item => (
                    <button
                      type="button"
                      key={item.value}
                      className={form.inquiryType === item.value ? 'option-chip active' : 'option-chip'}
                      onClick={() => setField('inquiryType', item.value)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className="field">
                <span>你更接近哪一种身份</span>
                <select value={form.role} onChange={e => setField('role', e.target.value)}>
                  <option value="">请选择</option>
                  {roleOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.role && <em>{errors.role}</em>}
              </label>

              <label className="field">
                <span>你目前最想了解的方向</span>
                <select
                  value={form.serviceInterest}
                  onChange={e => setField('serviceInterest', e.target.value)}
                >
                  <option value="">可选</option>
                  {serviceOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>

              <label className="field">
                <span>你的 MJ / 体验背景</span>
                <textarea
                  value={form.mjContext}
                  onChange={e => setField('mjContext', e.target.value)}
                  placeholder="例如：你与对方的关系、梦境/同步现象、你已经尝试过的方法。"
                  rows={4}
                />
              </label>

              <label className="field">
                <span>现在最想被看见的问题</span>
                <textarea
                  value={form.message}
                  onChange={e => setField('message', e.target.value)}
                  placeholder="可以直接写你的困惑、期待、边界或想验证的部分。"
                  rows={5}
                />
                {errors.message && <em>{errors.message}</em>}
              </label>

              <label className="consent-row">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={e => setField('consent', e.target.checked)}
                />
                <span>我确认以上信息可由 CDA 用于本次咨询沟通与后续联系。</span>
              </label>
              {errors.consent && <em className="consent-error">{errors.consent}</em>}

              {submitError && <div className="submit-error" role="alert">{submitError}</div>}

              <button className="submit-button" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? '提交中…' : '提交申请'}
              </button>
            </form>

            <aside className="contact-info">
              <div className="info-card glass-card contact-oracle-card">
                <span className="info-eyebrow">SIGNAL</span>
                <h3>你不是要把一段关系解释成幻觉。</h3>
                <p>
                  你是在寻找一种更精确、更诚实，也更能保护自己的方法，去理解那些反复出现的梦、感应、讯息与牵引。
                </p>
              </div>

              <div className="info-card glass-card">
                <h3>适合提交的内容</h3>
                <div className="info-list">
                  <span>MJ 关系与传讯需求</span>
                  <span>梦境、巧合与同步现象</span>
                  <span>传讯师培养与方法学习</span>
                  <span>研究共建、论文与资料申请</span>
                </div>
              </div>

              <div className="info-card glass-card">
                <h3>处理方式</h3>
                <div className="process-list">
                  <div>
                    <strong>01</strong>
                    <span>后台接收申请</span>
                  </div>
                  <div>
                    <strong>02</strong>
                    <span>按问题类型整理</span>
                  </div>
                  <div>
                    <strong>03</strong>
                    <span>开放后优先联系</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
