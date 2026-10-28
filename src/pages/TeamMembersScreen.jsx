import { Link, useNavigate } from 'react-router-dom'
import AppShell from '../components/AppShell.jsx'
import BigButton from '../components/BigButton.jsx'

const people = [
  { id: '1', initials: 'AR', name: 'Alex Rivera', role: 'Admin', tone: 'bg-paper text-ink' },
  { id: '2', initials: 'JL', name: 'Jordan Lee', role: 'Editor', tone: 'bg-ink text-white' },
  { id: '3', initials: 'SP', name: 'Sam Patel', role: 'Viewer', tone: 'bg-brat text-ink' },
  { id: '4', initials: 'RC', name: 'Riley Chen', role: 'Editor', tone: 'bg-charcoal text-white' },
]

export default function TeamMembersScreen() {
  const navigate = useNavigate()

  return (
    <AppShell>
      <h1 className="m-0 font-black text-5xl lowercase tracking-tight">team & access</h1>
      <p className="mt-3 text-base text-mute">
        Invite members, then wire billing and integrations from the nav.
      </p>

      <ul className="m-0 mt-6 list-none bg-white p-6 shadow-hard">
        {people.map((p) => (
          <li key={p.id} className="flex items-center gap-3.5 py-2 text-sm">
            <span className={`flex h-10 w-10 items-center justify-center text-sm font-bold ${p.tone}`}>
              {p.initials}
            </span>
            <span className="font-bold text-ink">{p.name}</span>
            <span className="ml-auto text-[13px] font-medium text-mute">{p.role}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        <BigButton variant="ghost" onClick={() => {}}>Invite user</BigButton>
        <BigButton variant="primary" onClick={() => navigate('/billing')}>Open billing for seats</BigButton>
      </div>

      <p className="mt-6 text-[13px] font-medium text-mute">
        Slack notifications live in the{' '}
        <Link to="/integrations" className="font-bold text-ink">integrations hub</Link>.
      </p>
    </AppShell>
  )
}
