
import { NextResponse } from 'next/server'

const palette = ['rgba(59,130,246,0.6)','rgba(34,197,94,0.6)','rgba(244,63,94,0.6)','rgba(234,179,8,0.6)','rgba(168,85,247,0.6)']

function gen(range: '3d'|'7d'|'10d'|'30d') {
  const mult = range === '3d' ? 1 : range === '7d' ? 1.2 : range === '10d' ? 1.4 : 1.8
  return Array.from({ length: 6 }).map((_,i) => ({
    label: `Client ${String.fromCharCode(65+i)}`,
    x: Math.round(Math.random()*100),
    y: Math.round(Math.random()*100),
    r: Math.max(8, Math.round(Math.random()*20*mult)),
    color: palette[i % palette.length]
  }))
}

export function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const range = (searchParams.get('range') || '7d') as '3d'|'7d'|'10d'|'30d'
  return NextResponse.json(gen(range))
}
