import './DialogueBox.css'

export default function DialogueBox({
  speaker,
  children,
  variant = 'default',
  className = ''
}) {
  return (
    <div className={`dialogue-box dialogue-${variant} ${className}`}>
      {speaker && <span className="dialogue-speaker">{speaker}</span>}
      <div className="dialogue-content">
        <span className="dialogue-quote">「</span>
        <span className="dialogue-text">{children}</span>
        <span className="dialogue-quote">」</span>
      </div>
      <div className="dialogue-indicator">▼</div>
    </div>
  )
}
