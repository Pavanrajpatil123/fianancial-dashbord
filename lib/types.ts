
export type Range = '3d' | '7d' | '10d' | '30d'

export interface SummaryRes {
  aum: { value: number; mom: number };
  sip: { value: number; mom: number };
}

export interface StatsRes {
  purchases: number;
  redemptions: number;
  rejectedTransactions: number;
  sipRejections: number;
  newSip: number;
}
