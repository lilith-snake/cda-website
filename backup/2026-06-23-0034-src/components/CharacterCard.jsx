import './CharacterCard.css'

export default function CharacterCard({
  name,
  title,
  image,
  stats = [],
  quote,
  affinity = 0,
  type = 'character',
  children,
  className = ''
}) {
  return (
    <div className={`char-card char-${type} ${className}`}>
      {/* 裝飾框 */}
      <div className="char-frame">
        <div className="char-frame-corner tl" />
        <div className="char-frame-corner tr" />
        <div className="char-frame-corner bl" />
        <div className="char-frame-corner br" />

        {/* 頭像區 */}
        <div className="char-avatar">
          <div className="char-avatar-inner">
            {image ? (
              <img src={image} alt={name} />
            ) : (
              <div className="char-avatar-placeholder">
                <span>{type === 'character' ? '&#10025;' : type === 'service' ? '&#10022;' : '&#9678;'}</span>
              </div>
            )}
          </div>
          {affinity > 0 && (
            <div className="char-affinity">
              <span className="affinity-heart">&#9825;</span>
              <div className="affinity-bar">
                <div
                  className="affinity-fill"
                  style={{ width: `${affinity}%` }}
                />
              </div>
              <span className="affinity-value">{affinity}%</span>
            </div>
          )}
        </div>

        {/* 信息區 */}
        <div className="char-info">
          <h3 className="char-name">{name}</h3>
          {title && <p className="char-title">{title}</p>}
        </div>

        {/* 屬性 */}
        {stats.length > 0 && (
          <div className="char-stats">
            {stats.map((s, i) => (
              <div key={i} className="char-stat">
                <span className="stat-label">{s.label}</span>
                <div className="stat-bar">
                  <div
                    className="stat-fill"
                    style={{ width: `${s.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 名言 */}
        {quote && (
          <div className="char-quote">
            <span>「{quote}」</span>
          </div>
        )}

        {/* 自定義內容 */}
        {children && (
          <div className="char-body">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}
