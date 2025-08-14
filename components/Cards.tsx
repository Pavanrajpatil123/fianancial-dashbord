
'use client'
import { useEffect, useState } from 'react'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import type { SummaryRes, StatsRes, Range } from '@/lib/types'
import { CardSkeleton } from './Loading'

function Trend({ v }: { v: number }) {
  const up = v >= 0
  const Icon = up ? ArrowUpRight : ArrowDownRight
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${up ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'}`}>
      <Icon size={14} className="mr-1" />{v.toFixed(2)}%
    </span>
  )
}

export function SummaryCards({ range }: { range: Range }) {
  const [data, setData] = useState<SummaryRes | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/summary?range=${range}`).then(r => r.json()).then(setData).finally(() => setLoading(false))
  }, [range])

  if (loading || !data) return (
    <div className="grid gap-4 md:grid-cols-2">
      <CardSkeleton/>
      <CardSkeleton/>
    </div>
  )

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="card p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">AUM</h3>
          <Trend v={data.aum.mom} />
        </div>
        <p className="mt-3 text-3xl font-semibold">₹{data.aum.value.toLocaleString()}</p>
        <div className="mt-4">
          <button className="btn btn-primary">View Report</button>
        </div>
      </div>

      <div className="card p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">SIP</h3>
          <Trend v={data.sip.mom} />
        </div>
        <p className="mt-3 text-3xl font-semibold">₹{data.sip.value.toLocaleString()}</p>
        <div className="mt-4">
          <button className="btn btn-primary">View Report</button>
        </div>
      </div>
    </div>
  )
}

export function StatCards({ range }: { range: Range }) {
  const [data, setData] = useState<StatsRes | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/stats?range=${range}`).then(r => r.json()).then(setData).finally(() => setLoading(false))
  }, [range])

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {['Purchases','Redemptions','Rejected Transactions','SIP Rejections','New SIP'].map((t,i)=> (
        <div key={t} className="card p-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">{t}</p>
          <p className="mt-2 text-2xl font-semibold">{
            loading || !data ? <span className="skeleton inline-block h-7 w-20"/> : (
              i===0? data.purchases.toLocaleString(): i===1? data.redemptions.toLocaleString(): i===2? data.rejectedTransactions.toLocaleString(): i===3? data.sipRejections.toLocaleString(): data.newSip.toLocaleString()
            )
          }</p>
        </div>
      ))}
    </div>
  )
}
