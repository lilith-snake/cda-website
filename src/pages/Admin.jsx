import { useState, useEffect, useCallback, useMemo } from 'react'
import './Admin.css'

const GAS_URL = ''
const STORAGE_KEY = 'cda_admin_authed'
const DATA_KEY = 'cda_survey_backups'

const FIELD_LABELS = {
  timestamp: '提交时间',
  name: '称呼',
  age: '年龄',
  gender: '性别',
  location: '所在地',
  email: '邮箱',
  phone: '电话',
  wechat: '微信',
  qq: 'QQ',
  mj_name: 'MJ 称呼',
  mj_source: 'MJ 来源类型',
  mj_years: '与 MJ 相识时长',
  dream_girl: '是否为梦女 / 有 MJ',
  perception_type: '感知类型',
  transmission_used: '是否使用过传讯 / 催眠音频',
  transmission_type: '使用过的传讯方式',
  blind_test_willing: '是否愿意参与盲测',
  contactable: '是否愿意被联系',
  experience_level: '经验程度',
  self_description: '自我介绍 / 补充说明',
  interest_areas: '感兴趣的领域',
}

const TABLE_COLUMNS = [
  { key: 'index', label: '编号', width: 60 },
  { key: 'timestamp', label: '提交时间', width: 160 },
  { key: 'name', label: '称呼', width: 100 },
  { key: 'location', label: '所在地', width: 100 },
  { key: 'mj_name', label: 'MJ 称呼', width: 120 },
  { key: 'mj_source', label: 'MJ 来源', width: 120 },
  { key: 'dream_girl', label: '梦中情娘', width: 90 },
  { key: 'transmission_used', label: '使用传讯', width: 90 },
  { key: 'blind_test_willing', label: '愿意盲测', width: 90 },
  { key: 'contactable', label: '可联系', width: 80 },
]

const DETAIL_GROUPS = [
  {
    title: '基本信息',
    fields: ['timestamp', 'name', 'age', 'gender', 'location'],
  },
  {
    title: 'MJ 信息',
    fields: ['mj_name', 'mj_source', 'mj_years', 'dream_girl'],
  },
  {
    title: '感知与传讯',
    fields: ['perception_type', 'transmission_used', 'transmission_type'],
  },
  {
    title: '参与意愿',
    fields: ['blind_test_willing', 'contactable'],
  },
  {
    title: '联系方式',
    fields: ['email', 'phone', 'wechat', 'qq'],
  },
  {
    title: '其他信息',
    fields: ['experience_level', 'self_description', 'interest_areas'],
  },
]

function loadLocalData() {
  try {
    const raw = localStorage.getItem(DATA_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

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

  // ---- auth ----
  const handleLogin = useCallback(() => {
    if (GAS_URL) {
      // GAS authentication flow
      fetch(`${GAS_URL}?action=auth&pwd=${encodeURIComponent(password)}`)
        .then(r => r.json())
        .then(res => {
          if (res.ok) {
            sessionStorage.setItem(STORAGE_KEY, '1')
            setAuthed(true)
            setGateError('')
          } else {
            setGateError('密码错误，请重试')
          }
        })
        .catch(() => setGateError('认证服务暂不可用，请稍后重试'))
    } else {
      if (password === 'cda2026admin') {
        sessionStorage.setItem(STORAGE_KEY, '1')
        setAuthed(true)
        setGateError('')
      } else {
        setGateError('密码错误，请重试')
      }
    }
  }, [password])

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') handleLogin()
    },
    [handleLogin],
  )

  // check existing auth on mount
  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') {
      setAuthed(true)
    }
  }, [])

  // ---- data loading ----
  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      if (GAS_URL) {
        const res = await fetch(`${GAS_URL}?action=list`)
        const json = await res.json()
        setData(Array.isArray(json) ? json : json.data || [])
      } else {
        setData(loadLocalData())
      }
    } catch {
      setData(loadLocalData())
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
    const dreamGirls = data.filter(
      d => d.dream_girl && (String(d.dream_girl).includes('是') || d.dream_girl === true),
    ).length
    const usedTransmission = data.filter(
      d => d.transmission_used && (String(d.transmission_used).includes('是') || d.transmission_used === true),
    ).length
    const wantBlindTest = data.filter(
      d => d.blind_test_willing && (String(d.blind_test_willing).includes('是') || d.blind_test_willing === true),
    ).length
    const contactable = data.filter(
      d => d.contactable && (String(d.contactable).includes('是') || d.contactable === true),
    ).length
    return { total, dreamGirls, usedTransmission, wantBlindTest, contactable }
  }, [data])

  // ---- filtered & sorted data ----
  const filtered = useMemo(() => {
    if (!search.trim()) return data
    const q = search.toLowerCase()
    return data.filter(d =>
      Object.values(d).some(
        v => v != null && String(v).toLowerCase().includes(q),
      ),
    )
  }, [data, search])

  // ---- render helpers ----
  const cellValue = (row, key) => {
    const v = row[key]
    if (v == null || v === '') return '—'
    if (key === 'timestamp' && typeof v === 'string' && v.length > 16) return v.slice(0, 16)
    if (typeof v === 'boolean') return v ? '是' : '否'
    const s = String(v)
    return s.length > 30 ? s.slice(0, 28) + '…' : s
  }

  // ---- gate screen ----
  if (!authed) {
    return (
      <div className="admin-standalone">
        <div className="admin-hero">
          <h1>后台管理</h1>
        </div>
        <div className="admin-gate">
          <h2>请输入管理密码</h2>
          <div className="gate-input-row">
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="管理员密码"
              autoFocus
            />
            <button onClick={handleLogin}>确认</button>
          </div>
          {gateError && <div className="gate-error">{gateError}</div>}
        </div>
      </div>
    )
  }

  // ---- main panel ----
  return (
    <div className="admin-standalone">
      <div className="admin-hero">
        <h1>问卷调查数据管理</h1>
      </div>

      {/* local storage warning */}
      {!GAS_URL && (
        <div
          style={{
            background: '#fff8e1',
            border: '1px solid #f0c040',
            borderRadius: 'var(--border-radius)',
            padding: '12px 20px',
            marginBottom: 24,
            fontSize: '.85rem',
            color: '#8a6d14',
          }}
        >
          当前为本地存储模式，数据仅保存在当前浏览器中。部署后请配置 GAS_URL 以启用云端数据同步。
        </div>
      )}

      {/* stats */}
      <div className="admin-stats">
        <StatCard num={stats.total} label="总提交数" />
        <StatCard num={stats.dreamGirls} label="梦中情娘" />
        <StatCard num={stats.usedTransmission} label="使用过传讯" />
        <StatCard num={stats.wantBlindTest} label="愿意参与盲测" />
        <StatCard num={stats.contactable} label="可联系" />
      </div>

      {/* toolbar */}
      <div className="admin-toolbar">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="搜索全部字段…"
        />
        <span className="toolbar-info">
          共 {filtered.length} / {data.length} 条记录
        </span>
        <button onClick={fetchData}>刷新数据</button>
      </div>

      {/* table */}
      {loading ? (
        <div className="admin-loading">加载中…</div>
      ) : filtered.length === 0 ? (
        <div className="admin-empty">
          <h3>暂无数据</h3>
          <p>还没有人提交问卷，或搜索结果为空。</p>
        </div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                {TABLE_COLUMNS.map(col => (
                  <th key={col.key} style={{ width: col.width }}>
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, i) => (
                <tr
                  key={row.timestamp ? row.timestamp + '_' + i : i}
                  onClick={() => setSelected(row)}
                  style={{ cursor: 'pointer' }}
                >
                  {TABLE_COLUMNS.map(col => (
                    <td key={col.key}>
                      {col.key === 'index' ? i + 1 : cellValue(row, col.key)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* detail modal */}
      {selected && (
        <div className="admin-modal-overlay" onClick={() => setSelected(null)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <h3>提交详情</h3>
            {DETAIL_GROUPS.map(group => {
              const hasAny = group.fields.some(
                f => selected[f] != null && selected[f] !== '',
              )
              if (!hasAny) return null
              return (
                <div className="detail-group" key={group.title}>
                  <h4>{group.title}</h4>
                  {group.fields.map(f => (
                    <div className="detail-field" key={f}>
                      <div className="detail-label">{FIELD_LABELS[f] || f}</div>
                      <div
                        className={
                          'detail-value' +
                          (selected[f] == null || selected[f] === '' ? ' empty' : '')
                        }
                      >
                        {selected[f] == null || selected[f] === ''
                          ? '未填写'
                          : typeof selected[f] === 'boolean'
                            ? selected[f]
                              ? '是'
                              : '否'
                            : String(selected[f])}
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
