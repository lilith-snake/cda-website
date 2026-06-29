import { useTheme } from './ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? '切換至暗色模式' : '切換至亮色模式'}
      title={theme === 'light' ? '暗色模式' : '亮色模式'}
    >
      {theme === 'light' ? '暗' : '亮'}
    </button>
  )
}
