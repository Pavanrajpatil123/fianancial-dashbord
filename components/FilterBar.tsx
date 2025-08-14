
'use client'
import type { Range } from '@/lib/types'
import { clsx } from 'clsx'

const options: {label: string, value: Range}[] = [
  { label: '3 Days', value: '3d' },
  { label: '7 Days', value: '7d' },
  { label: '10 Days', value: '10d' },
  { label: '30 Days', value: '30d' },
]

export default function FilterBar({ value, onChange }: { value: Range, onChange: (v: Range)=>void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(o => (
        <button key={o.value}
          className={clsx('btn', value===o.value && 'btn-primary')}
          onClick={() => onChange(o.value)}
        >{o.label}</button>
      ))}
    </div>
  )
}
