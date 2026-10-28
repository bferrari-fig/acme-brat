import { useNavigate } from 'react-router-dom'
import AppShell from '../components/AppShell.jsx'
import BigButton from '../components/BigButton.jsx'

export default function EmptyThing() {
  const navigate = useNavigate()

  return (
    <AppShell center>
      <h1 className="m-0 font-black text-[32px] lowercase tracking-tight">no reports yet</h1>
      <p className="mb-6 mt-4 max-w-md text-base text-mute">
        Connect a data source or import a CSV to see charts here.
      </p>
      <BigButton variant="ghost" onClick={() => navigate('/dashboard')}>
        Back to dashboard
      </BigButton>
    </AppShell>
  )
}
