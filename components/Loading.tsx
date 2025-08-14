
export function CardSkeleton() {
  return <div className="card p-4">
    <div className="h-5 w-40 skeleton"/>
    <div className="mt-3 h-10 w-48 skeleton"/>
    <div className="mt-4 h-8 w-28 skeleton"/>
  </div>
}

export function ChartSkeleton() {
  return <div className="card h-72 p-4">
    <div className="h-5 w-56 skeleton"/>
    <div className="mt-4 h-full w-full skeleton"/>
  </div>
}
