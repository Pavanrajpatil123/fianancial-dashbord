
'use client'
import ThemeToggle from './ThemeToggle'
import { Menu } from 'lucide-react'

const items = [
  'CRM','Utilities','Insurance','Assets','Mutual','Research','Transact Online','Goal GPS','Financial Planning','Wealth Report','Other'
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-gray-950/60">
      <div className="container-app flex h-14 items-center gap-3">
        <div className="flex items-center gap-2">
          <Menu className="sm:hidden" />
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-md bg-gray-900 dark:bg-white"/>
            <span className="font-semibold">FinDash</span>
          </div>
        </div>
        <nav className="hidden flex-1 items-center gap-3 overflow-x-auto sm:flex">
          {items.map((it) => (
            <button key={it} className="btn whitespace-nowrap">{it}</button>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
