
import { NextResponse } from 'next/server'

const base = {
  '3d': { aum: { value: 125_00_00_000, mom: 0.8 }, sip: { value: 85_00_000, mom: 1.1 } },
  '7d': { aum: { value: 126_50_00_000, mom: 1.2 }, sip: { value: 92_50_000, mom: 2.3 } },
  '10d': { aum: { value: 127_20_00_000, mom: -0.4 }, sip: { value: 96_20_000, mom: 0.9 } },
  '30d': { aum: { value: 132_80_00_000, mom: 3.4 }, sip: { value: 1_12_40_000, mom: 4.1 } }
}

export function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const range = (searchParams.get('range') || '7d') as keyof typeof base
  return NextResponse.json(base[range])
}
