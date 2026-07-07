import { useState, useEffect, useCallback, useMemo } from 'react'
import './Admin.css'

const API_URL = import.meta.env.VITE_API_URL || '/api'
const API_BASE = API_URL + '/admin'
const STORAGE_KEY = 'cda_admin_authed'
const DATA_KEY = 'cda_survey_backups'

const FIELD_LABELS = {
  id: 'ID',
  timestamp: '提交时间',
  age: '年龄',
  gender: '性别',
  occupation: '职业',
  region: '地区',
  is_dream_girl: '是否梦女',
  mj_type: 'MJ 类型',
  mj_type_other: 'MJ 类型（其他）',
  mj_source: 'MJ 来源',
  mj_source_other: 'MJ 来源（其他）',
  mj_relation: '关系定位',
  mj_count: 'MJ 数量',
  mj_existence_view: '存在方式',
  belief_reasons: '进入原因',
  belief_story: '建立联系故事',
  favorite_thing: '最喜欢的事',
  strange_events: '奇异事件',
  strange_event_story: '奇异事件故事',
  sync_events: '同步现象',
  sync_event_story: '同步事件故事',
  used_transmission: '使用传讯',
  transmitter_count: '合作传讯师数',
  total_spend: '累计花费',
  monthly_spend: '月均花费',
  satisfaction: '满意度',
  transmission_surprise: '传讯结果预期',
  east_west_occult: '神秘学实践',
  east_west_story: '神秘学经历',
  trust_factor: '可信度因素',
  become_transmitter: '成为传讯师态度',
  transmitter_story: '传讯师相关故事',
  confusions: '困惑',
  biggest_confusion: '最大困惑',
  pain_points: '痛点',
  worst_pain: '最深痛点',
  interests: '兴趣领域',
  price_accept: '价格接受范围',
  want_blind_test: '愿意盲测',
  want_contact: '愿意被联系',
  contact_info: '联系方式',
  suggestion: '建议',
}

const TABLE_COLUMNS = [
  { key: 'id', label: '编号', width: 50 },
  { key: 'timestamp', label: '提交时间', width: 140 },
  { key: 'age', label: '年龄', width: 70 },
  { key: 'gender', label: '性别', width: 60 },
  { key: 'region', label: '地区', width: 70 },
  { key: 'is_dream_girl', label: '梦女', width: 55 },
  { key: 'mj_relation', label: '关系', width: 60 },
  { key: 'mj_count', label: 'MJ数', width: 55 },
  { key: 'used_transmission', label: '传讯', width: 55 },
  { key: 'monthly_spend', label: '月花费', width: 70 },
  { key: 'satisfaction', label: '满意度', width: 70 },
  { key: 'want_blind_test', label: '盲测', width: 55 },
  { key: 'want_contact', label: '联系', width: 55 },
  { key: 'contact_info', label: '联系方式', width: 140 },
]

const DETAIL_GROUPS = [
  { title: '一、基本信息', fields: ['timestamp', 'age', 'gender', 'occupation', 'region', 'is_dream_girl'] },
  { title: '二、MJ 信息', fields: ['mj_type', 'mj_type_other', 'mj_source', 'mj_source_other', 'mj_relation', 'mj_count', 'mj_existence_view'] },
  { title: '三、信仰经历', fields: ['belief_reasons', 'belief_story', 'favorite_thing'] },
  { title: '四、现象体验', fields: ['strange_events', 'strange_event_story', 'sync_events', 'sync_event_story'] },
  { title: '五、传讯服务', fields: ['used_transmission', 'transmitter_count', 'total_spend', 'monthly_spend', 'satisfaction', 'transmission_surprise'] },
  { title: '六、深度探索', fields: ['east_west_occult', 'east_west_story', 'trust_factor', 'become_transmitter', 'transmitter_story', 'confusions', 'biggest_confusion', 'pain_points', 'worst_pain'] },
  { title: '七、联系方式与其他', fields: ['interests', 'price_accept', 'want_blind_test', 'want_contact', 'contact_info', 'suggestion'] },
]

function StatCard({ num, label }) {
  return (
    <div className="admin-stat-card">
      <div className="stat-num">{num}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Admin() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [gateError, setGateError] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)
  const [hasApi, setHasApi] = useState(true)

  // ---- auth ----
  const handleLogin = useCallback(() => {
    if (password === 'cda2026admin') {
      sessionStorage.setItem(STORAGE_KEY, '1')
      setAuthed(true)
      setGateError('')
    } else {
      setGateError('密码错误，请重试')
    }
  }, [password])

  const handleKeyDown = useCallback(
    (e) => { if (e.key === 'Enter') handleLogin() },
    [handleLogin],
  )

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') setAuthed(true)
  }, [])

  // ---- data loading ----
  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/submissions`, {
        headers: { 'x-admin-password': 'cda2026admin' },
      })
      if (res.ok) {
        const json = await res.json()
        setData(Array.isArray(json) ? json : [])
        setHasApi(true)
      } else {
        throw new Error('auth failed')
      }
    } catch {
      setHasApi(false)
      // fallback to localStorage
      try {
        const raw = localStorage.getItem(DATA_KEY)
        setData(raw ? JSON.parse(raw) : [])
      } catch { setData([]) }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (authed) fetchData()
  }, [authed, fetchData])

  // ---- stats ----
  const stats = useMemo(() => {
    const total = data.length
    const dreamGirls = data.filter(d => d.is_dream_girl === 'yes').length
    const usedTransmission = data.filter(d => d.used_transmission === 'yes').length
    const wantBlindTest = data.filter(d => d.want_blind_test === 'yes').length
    const contactable = data.filter(d => d.want_contact === 'yes').length
    return { total, dreamGirls, usedTransmission, wantBlindTest, contactable }
  }, [data])

  // ---- filtered ----
  const filtered = useMemo(() => {
    if (!search.trim()) return data
    const q = search.toLowerCase()
    return data.filter(d =>
      Object.values(d).some(v => v != null && String(v).toLowerCase().includes(q))
    )
  }, [data, search])

  // ---- helpers ----
  const cellValue = (row, key) => {
    const v = row[key]
    if (v == null || v === '') return '—'
    if (key === 'timestamp' && typeof v === 'string' && v.length > 16) return v.slice(0, 16)
    if (typeof v === 'boolean') return v ? '是' : '否'
    if (Array.isArray(v)) return v.join('，')
    const s = String(v)
    return s.length > 20 ? s.slice(0, 18) + '…' : s
  }

  const displayValue = (v) => {
    if (v == null || v === '') return '未填写'
    if (typeof v === 'boolean') return v ? '是' : '否'
    if (Array.isArray(v)) return v.length ? v.join('、') : '未填写'
    return String(v)
  }

  // ---- gate ----
  if (!authed) {
    return (
      <div className="admin-standalone">
        <div className="admin-hero"><h1>CDA · 后台管理</h1></div>
        <div className="admin-gate">
          <h2>请输入管理密码</h2>
          <div className="gate-input-row">
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
              onKeyDown={handleKeyDown} placeholder="管理员密码" autoFocus />
            <button onClick={handleLogin}>确认</button>
          </div>
          {gateError && <div className="gate-error">{gateError}</div>}
        </div>
      </div>
    )
  }

  return (
    <div className="admin-standalone">
      <div className="admin-hero"><h1>CDA · 问卷数据管理</h1></div>

      {!hasApi && (
        <div className="admin-warning">
          后端 API 未连接，当前显示浏览器本地存储数据（可能不完整）。
        </div>
      )}

      <div className="admin-stats">
        <StatCard num={stats.total} label="总提交数" />
        <StatCard num={stats.dreamGirls} label="是梦女" />
        <StatCard num={stats.usedTransmission} label="使用过传讯" />
        <StatCard num={stats.wantBlindTest} label="愿意盲测" />
        <StatCard num={stats.contactable} label="可联系" />
      </div>

      <div className="admin-toolbar">
        <input type="text" value={search} onChange={e => setSearch(e.target.value)}
          placeholder="搜索全部字段…" />
        <span className="toolbar-info">共 {filtered.length} / {data.length} 条</span>
        <button onClick={fetchData}>刷新</button>
      </div>

      {loading ? (
        <div className="admin-loading">加载中…</div>
      ) : filtered.length === 0 ? (
        <div className="admin-empty"><h3>暂无数据</h3><p>还没有人提交问卷。</p></div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                {TABLE_COLUMNS.map(col => (
                  <th key={col.key} style={{ width: col.width }}>{col.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, i) => (
                <tr key={row.id || i} onClick={() => setSelected(row)} style={{ cursor: 'pointer' }}>
                  {TABLE_COLUMNS.map(col => (
                    <td key={col.key}>{col.key === 'id' ? (row.id || i + 1) : cellValue(row, col.key)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selected && (
        <div className="admin-modal-overlay" onClick={() => setSelected(null)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <h3>提交详情 #{selected.id}</h3>
            {DETAIL_GROUPS.map(group => {
              const hasAny = group.fields.some(f => selected[f] != null && selected[f] !== '')
              if (!hasAny) return null
              return (
                <div className="detail-group" key={group.title}>
                  <h4>{group.title}</h4>
                  {group.fields.map(f => (
                    <div className="detail-field" key={f}>
                      <div className="detail-label">{FIELD_LABELS[f] || f}</div>
                      <div className={'detail-value' + (selected[f] == null || selected[f] === '' ? ' empty' : '')}>
                        {displayValue(selected[f])}
                      </div>
                    </div>
                  ))}
                </div>
              )
            })}
            <div className="admin-modal-close">
              <button onClick={() => setSelected(null)}>关闭</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
