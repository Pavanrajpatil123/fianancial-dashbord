
'use client'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  const isDark = resolvedTheme === 'dark'
  return (
    <button
      aria-label="Toggle dark mode"
      className="btn"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? <Sun size={18}/> : <Moon size={18}/>}
      <span className="ml-2 hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}
