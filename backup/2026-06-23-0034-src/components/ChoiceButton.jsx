import './ChoiceButton.css'

export default function ChoiceButton({
  children,
  onClick,
  variant = 'primary',
  locked = false,
  className = '',
  ...props
}) {
  return (
    <button
      className={`choice-btn choice-${variant} ${locked ? 'locked' : ''} ${className}`}
      onClick={onClick}
      disabled={locked}
      {...props}
    >
      <span className="choice-icon-left">▶</span>
      <span className="choice-label">{children}</span>
      {locked && <span className="choice-lock">&#9678;</span>}
      {!locked && <span className="choice-icon-right">◀</span>}
      {variant === 'route' && <span className="choice-sparkle">&#10022;</span>}
    </button>
  )
}
