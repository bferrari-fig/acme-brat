import { Link, useNavigate } from 'react-router-dom'
import AppShell from '../components/AppShell.jsx'
import BigButton from '../components/BigButton.jsx'

const buckets = [
  { label: 'Current', amount: '$18,400', tone: 'bg-paper text-ink' },
  { label: '1–30 days', amount: '$3,200', tone: 'bg-ink text-white' },
  { label: '31–60 days', amount: '$890', tone: 'border-2 border-ink bg-brat text-ink' },
  { label: '61+ days', amount: '$120', tone: 'bg-charcoal text-white' },
]

export default function BillingAgingReport() {
  const navigate = useNavigate()

  return (
    <AppShell>
      <p className="m-0 text-[13px] font-bold">
        <Link to="/billing" className="text-ink no-underline">billing</Link>
        <span className="text-mute"> / </span>
        <span>aging</span>
      </p>
      <h1 className="m-0 mt-3 font-black text-5xl lowercase tracking-tight">accounts receivable aging</h1>
      <p className="mt-3 text-base text-mute">A snapshot, not a live ledger.</p>

      <div className="mt-6 flex max-w-xl flex-col gap-3">
        {buckets.map((b) => (
          <div key={b.label} className={`flex items-center justify-between px-5 py-4 text-[15px] font-bold ${b.tone}`}>
            <span>{b.label}</span>
            <span>{b.amount}</span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <BigButton variant="ghost" onClick={() => navigate('/billing')}>
          back to invoices
        </BigButton>
      </div>
    </AppShell>
  )
}
