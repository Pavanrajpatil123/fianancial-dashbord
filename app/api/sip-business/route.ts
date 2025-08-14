
import { NextResponse } from 'next/server'

function build(range: '3d'|'7d'|'10d'|'30d') {
  const spans = { '3d': 3, '7d': 7, '10d': 10, '30d': 12 }[range]
  const labels = Array.from({length: spans}, (_,i)=> `D${i+1}`)
  const dataBar = labels.map(()=> Math.round(50 + Math.random()*150))
  const dataLine = dataBar.map((v,i)=> i===0 ? v-10 : Math.round((v + dataBar[i-1]) / 2))
  return { labels, dataBar, dataLine }
}

export function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const range = (searchParams.get('range') || '7d') as '3d'|'7d'|'10d'|'30d'
  return NextResponse.json(build(range))
}
