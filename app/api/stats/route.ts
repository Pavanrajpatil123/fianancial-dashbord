
import { NextResponse } from 'next/server'

const data = {
  '3d': { purchases: 420, redemptions: 190, rejectedTransactions: 7, sipRejections: 5, newSip: 55 },
  '7d': { purchases: 980, redemptions: 470, rejectedTransactions: 13, sipRejections: 9, newSip: 120 },
  '10d': { purchases: 1450, redemptions: 730, rejectedTransactions: 21, sipRejections: 12, newSip: 175 },
  '30d': { purchases: 4200, redemptions: 2050, rejectedTransactions: 65, sipRejections: 39, newSip: 520 }
}

export function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const range = (searchParams.get('range') || '7d') as keyof typeof data
  return NextResponse.json(data[range])
}
