
'use client'
import { useEffect, useState } from 'react'
import { Bubble, Line, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import type { Range } from '@/lib/types'
import { ChartSkeleton } from './Loading'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend, Filler)

export function ClientsBubble({ range }: { range: Range }) {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetch(`/api/clients?range=${range}`).then(r=>r.json()).then(setData).finally(()=>setLoading(false))
  }, [range])
  if (loading || !data) return <ChartSkeleton/>
  const config = {
    datasets: data.map((c: any) => ({
      label: c.label,
      data: [{ x: c.x, y: c.y, r: c.r }],
      backgroundColor: c.color
    }))
  }
  const options = { plugins: { legend: { position: 'bottom' as const } }, scales: { x: { grid: { display:false } }, y: { grid: { display:false } } } }
  return <div className="card p-4"><h3 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Clients</h3><Bubble data={config} options={options}/></div>
}

export function SipBusiness({ range }: { range: Range }) {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetch(`/api/sip-business?range=${range}`).then(r=>r.json()).then(setData).finally(()=>setLoading(false))
  }, [range])
  if (loading || !data) return <ChartSkeleton/>
  const chartData = {
    labels: data.labels,
    datasets: [
      { type: 'bar' as const, label: 'SIP Volume', data: data.dataBar, borderWidth: 1, backgroundColor: 'rgba(99, 102, 241, 0.5)' },
      { type: 'line' as const, label: 'SIP Growth', data: data.dataLine, fill: false, tension: 0.3, borderColor: 'rgba(34, 197, 94, 1)' }
    ]
  }
  const options = { responsive: true, plugins: { legend: { position: 'bottom' as const } } }
  return <div className="card p-4"><h3 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">SIP Business</h3><Bar data={chartData} options={options}/></div>
}

export function MonthlyMIS({ range }: { range: Range }) {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetch(`/api/monthly-mis?range=${range}`).then(r=>r.json()).then(setData).finally(()=>setLoading(false))
  }, [range])
  if (loading || !data) return <ChartSkeleton/>
  const chartData = {
    labels: data.labels,
    datasets: data.series.map((s: any) => ({
      label: s.label,
      data: s.data,
      fill: false,
      borderColor: s.color,
      tension: 0.3
    }))
  }
  const options = { responsive: true, plugins: { legend: { position: 'bottom' as const } } }
  return <div className="card p-4"><h3 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Monthly MIS</h3><Line data={chartData} options={options}/></div>
}
