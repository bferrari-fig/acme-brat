import { Link, useNavigate } from 'react-router-dom'
import AppShell from '../components/AppShell.jsx'
import { CardThing } from '../components/CardThing.jsx'
import BigButton from '../components/BigButton.jsx'

export default function IntegrationsPage() {
  const navigate = useNavigate()

  return (
    <AppShell>
      <h1 className="m-0 font-black text-5xl lowercase tracking-tight">integrations & webhooks</h1>
      <p className="mt-3 text-base text-mute">
        Connect tools, then pipe metrics into reports or billing alerts.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <CardThing tone="paper" stat="slack" subtext="Connected" footerNote="#ops-alerts" />
        <CardThing tone="ink" stat="zapier" subtext="2 zaps" footerNote="last run 1h ago" />
        <CardThing tone="charcoal" stat="segment" subtext="Paused" footerNote="needs api key" />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <BigButton variant="ghost" onClick={() => navigate('/empty')}>View report pipeline</BigButton>
        <BigButton variant="primary" onClick={() => navigate('/team')}>Pick notify channel</BigButton>
      </div>

      <p className="mt-4 text-xs font-medium text-mute">
        API tokens live in{' '}
        <Link to="/settings" className="font-bold text-ink">workspace settings</Link>.
      </p>
    </AppShell>
  )
}
