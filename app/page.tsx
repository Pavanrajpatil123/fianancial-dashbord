
'use client'
import { SummaryCards, StatCards } from '@/components/Cards'
import FilterBar from '@/components/FilterBar'
import { ClientsBubble, MonthlyMIS, SipBusiness } from '@/components/Charts'
import type { Range } from '@/lib/types'
import { useState } from 'react'

export default function Page() {
  const [range, setRange] = useState<Range>('7d')

  return (
    <main className="container-app space-y-6 py-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-xl font-semibold">Financial Dashboard</h1>
        <FilterBar value={range} onChange={setRange} />
      </div>

      <SummaryCards range={range} />
      <StatCards range={range} />

      <div className="grid gap-4 lg:grid-cols-2">
        <ClientsBubble range={range} />
        <SipBusiness range={range} />
      </div>

      <MonthlyMIS range={range} />
    </main>
  )
}
