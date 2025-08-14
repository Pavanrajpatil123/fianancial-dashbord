
import { NextResponse } from 'next/server'

function series(range: '3d'|'7d'|'10d'|'30d') {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const labels = months
  const base = range==='30d' ? 1.2 : range==='10d' ? 1.1 : range==='7d' ? 1.05 : 1.0
  const mk = () => months.map(()=> Math.round((50 + Math.random()*100)*base))
  return {
    labels,
    series: [
      { label: 'Equity', data: mk(), color: 'rgba(99,102,241,1)' },
      { label: 'Debt', data: mk(), color: 'rgba(34,197,94,1)' },
      { label: 'Hybrid', data: mk(), color: 'rgba(244,63,94,1)' }
    ]
  }
}

export function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const range = (searchParams.get('range') || '7d') as '3d'|'7d'|'10d'|'30d'
  return NextResponse.json(series(range))
}
