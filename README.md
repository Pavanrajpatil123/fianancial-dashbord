<<<<<<< HEAD

# Financial Dashboard (Next.js 14 + Tailwind + Chart.js)

A responsive financial dashboard built with Next.js App Router, Tailwind CSS, and Chart.js via react-chartjs-2.

## Features
- Top navigation with required menu items
- AUM & SIP summary cards with MoM trend and "View Report" button
- Time range filter (3d, 7d, 10d, 30d) that triggers data refetch
- Stat cards (Purchases, Redemptions, Rejected Transactions, SIP Rejections, New SIP)
- Charts:
  - Clients bubble chart
  - SIP Business combined bar + line chart
  - Monthly MIS multi-line chart
- Dark mode toggle
- Loading skeletons/animations
- Mock API routes that return JSON and vary by selected range

## Getting Started
```bash
npm i
npm run dev
# open http://localhost:3000
```

## Build & Run
```bash
npm run build && npm start
```

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Chart.js + react-chartjs-2
- next-themes for dark mode

## Dependencies
### Production
```
next react react-dom chart.js react-chartjs-2 next-themes lucide-react clsx
```
### Dev
```
typescript @types/react @types/react-dom tailwindcss postcss autoprefixer eslint eslint-config-next
```

## Notes
- Data is mock and randomized server-side for charts to simulate live changes.
- All components are responsive and optimized for mobile, tablet, and desktop.
=======
# financial-dashboard
>>>>>>> eda23483b56aa69f21d9979bd2a0449ae84496e9
