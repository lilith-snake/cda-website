import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { paymentChannels, shopProducts } from '../data/shopProducts'
import './Checkout.css'

const channelMeta = {
  wechat: { mark: '微', className: 'checkout-channel-wechat' },
  alipay: { mark: '支', className: 'checkout-channel-alipay' },
  bank: { mark: '卡', className: 'checkout-channel-bank' },
}

function formatAmount(product) {
  if (product.price == null) return '按助理确认金额'
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: product.currency || 'CNY',
    minimumFractionDigits: 2,
  }).format(product.price)
}

export default function Checkout() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedProduct = searchParams.get('product')
  const initialProduct = shopProducts.some(item => item.id === requestedProduct)
    ? requestedProduct
    : shopProducts[0].id

  const [productId, setProductId] = useState(initialProduct)
  const defaultChannel = paymentChannels.find(item => item.key === 'alipay')
    || paymentChannels.find(item => item.url)
    || paymentChannels[0]
  const [channelKey, setChannelKey] = useState(
    defaultChannel.key,
  )
  const [agreed, setAgreed] = useState(false)

  const product = useMemo(
    () => shopProducts.find(item => item.id === productId) || shopProducts[0],
    [productId],
  )
  const selectedChannel = paymentChannels.find(item => item.key === channelKey)
  const paymentReady = Boolean(
    product.checkoutEnabled
      && selectedChannel?.url,
  )

  const handleProductChange = event => {
    const nextProductId = event.target.value
    setProductId(nextProductId)
    setSearchParams({ product: nextProductId }, { replace: true })
  }

  const handlePayment = () => {
    if (!paymentReady || !agreed) return
    window.location.assign(selectedChannel.url)
  }

  const handleChannelChange = nextChannelKey => {
    setChannelKey(nextChannelKey)
  }

  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <Link to="/" className="checkout-brand" aria-label="返回 CDA 首页">
          <strong>CDA</strong>
          <span>香港跨次元梦女传讯研究协会</span>
        </Link>
        <Link to="/shop" className="checkout-back">返回你和他</Link>
      </header>

      <main className="checkout-main">
        <div className="checkout-heading">
          <div>
            <span className="checkout-kicker">CDA CHECKOUT</span>
            <h1>确认服务与支付方式</h1>
          </div>
          <div className="checkout-progress" aria-label="支付步骤">
            <span className="active"><b>1</b>确认服务</span>
            <span><b>2</b>完成支付</span>
            <span><b>3</b>确认排期</span>
          </div>
        </div>

        <div className="checkout-notice" role="note">
          <strong>仅供已确认预约的来访者使用</strong>
          <p>
            未收到 CDA 助理发出的排期与金额确认前，请不要自行付款。
            <Link to="/contact">尚未预约，先提交申请</Link>
          </p>
        </div>

        <div className="checkout-layout">
          <section className="checkout-form" aria-label="订单支付信息">
            <div className="checkout-section">
              <div className="checkout-section-title">
                <span>01</span>
                <div>
                  <h2>预约服务</h2>
                  <p>请确认助理与你约定的服务项目。</p>
                </div>
              </div>

              <label className="checkout-field">
                <span>服务项目</span>
                <select value={productId} onChange={handleProductChange}>
                  {shopProducts.map(item => (
                    <option key={item.id} value={item.id}>{item.title}</option>
                  ))}
                </select>
              </label>

              <div className="checkout-product-detail">
                <span>{product.badge}</span>
                <strong>{product.title}</strong>
                <p>{product.description}</p>
              </div>
            </div>

            <div className="checkout-section">
              <div className="checkout-section-title">
                <span>02</span>
                <div>
                  <h2>支付方式</h2>
                  <p>选择你方便使用的支付渠道。</p>
                </div>
              </div>

              <div className="checkout-channels" role="radiogroup" aria-label="支付方式">
                {paymentChannels.map(channel => {
                  const meta = channelMeta[channel.key]
                  const selected = channelKey === channel.key
                  return (
                    <button
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      className={`checkout-channel ${selected ? 'selected' : ''}`}
                      key={channel.key}
                      onClick={() => handleChannelChange(channel.key)}
                    >
                      <span className={`checkout-channel-mark ${meta.className}`}>{meta.mark}</span>
                      <span className="checkout-channel-copy">
                        <strong>{channel.label}</strong>
                        <small>
                          {channel.url
                            ? channel.note
                            : channel.key === 'alipay'
                              ? '支付宝直跳待接入'
                              : '支付通道配置中'}
                        </small>
                      </span>
                      <span className="checkout-radio" aria-hidden="true" />
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="checkout-section checkout-confirmation">
              <div className="checkout-section-title">
                <span>03</span>
                <div>
                  <h2>付款确认</h2>
                  <p>付款代表你确认服务内容与排单规则。</p>
                </div>
              </div>

              <label className="checkout-agreement">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={event => setAgreed(event.target.checked)}
                />
                <span>
                  我已与 CDA 助理确认服务项目、金额和排期，并已阅读
                  <Link to="/shop">《CDA 传讯师从业守则》</Link>。
                </span>
              </label>
            </div>
          </section>

          <aside className="checkout-summary" aria-label="订单摘要">
            <span className="checkout-summary-label">订单摘要</span>
            <div className="checkout-summary-product">
              <strong>{product.title}</strong>
              <span>{product.badge}</span>
            </div>

            <ul className="checkout-summary-list">
              {product.includes.slice(0, 4).map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="checkout-amount">
              <span>应付金额</span>
              <strong>{formatAmount(product)}</strong>
            </div>

            {!product.checkoutEnabled && (
              <p className="checkout-pending">
                当前服务暂未开放支付，请先提交预约申请并等待 CDA 助理确认。
              </p>
            )}

            {paymentReady && product.price == null && (
              <p className="checkout-pending">
                经营码由付款人输入金额，请严格按照 CDA 助理与你确认的金额付款。
              </p>
            )}

            <button
              className="checkout-pay-button"
              type="button"
              disabled={!paymentReady || !agreed}
              onClick={handlePayment}
            >
              {!product.checkoutEnabled
                ? '该服务暂未开放支付'
                : !paymentReady
                  ? `${selectedChannel.label}直跳待接入`
                  : `前往${selectedChannel.label}支付`}
            </button>

            <div className="checkout-assurance">
              <p><strong>付款后排单</strong><span>按付款顺序确认服务时间</span></p>
              <p><strong>保留凭证</strong><span>完成支付后请保存付款截图</span></p>
              <p><strong>售后复核</strong><span>争议由服务双方以外成员复核</span></p>
            </div>

            <p className="checkout-payee-note">
              付款前请核对支付页面显示的收款主体与 CDA 助理提供的信息是否一致。
            </p>
          </aside>
        </div>
      </main>
    </div>
  )
}
