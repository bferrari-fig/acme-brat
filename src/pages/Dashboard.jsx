import { Link } from 'react-router-dom'
import AppShell from '../components/AppShell.jsx'
import { CardThing } from '../components/CardThing.jsx'
import { TableV2 } from '../components/TableV2.jsx'

const tableStuff = {
  headers: ['Customer', 'Plan', 'MRR', 'Status'],
  dataRows: [
    { cells: ['Northwind LLC', 'Enterprise', '$4,200', 'Active'] },
    { cells: ['Contoso', 'Pro', '$890', 'Active'] },
    { cells: ['Fabrikam', 'Starter', '$120', 'At risk'] },
    { cells: ['Adventure Co', 'Pro', '$650', 'Active'] },
    { cells: ['Tailspin Toys', 'Enterprise', '$12,400', 'Active'] },
  ],
}

const linkClass =
  'border-2 border-ink bg-white px-[18px] py-3 text-[15px] font-bold lowercase text-ink no-underline'

export default function Dashboard() {
  return (
    <AppShell>
      <p className="m-0 text-[13px] font-medium text-mute">Good afternoon</p>
      <h1 className="m-0 mt-2 font-black text-5xl lowercase tracking-tight">overview</h1>
      <p className="mt-3 text-base text-mute">Last updated 2 minutes ago · internal only</p>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="mr-2 text-sm font-bold">Other flows</span>
        <Link to="/billing" className={linkClass}>billing</Link>
        <Link to="/team" className={linkClass}>team</Link>
        <Link to="/integrations" className={linkClass}>integrations</Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <CardThing tone="paper" stat="users" subtext="12,480" footerNote="+3.2% vs last week" />
        <CardThing tone="ink" stat="revenue" subtext="$842k" footerNote="month to date" />
        <CardThing tone="brat" stat="tickets" subtext="37 open" footerNote="sla 94%" />
        <CardThing tone="charcoal" stat="uptime" subtext="99.98%" footerNote="30 day rolling" />
      </div>

      <section className="mt-6 bg-white p-6 shadow-hard">
        <h2 className="m-0 font-black text-[22px] lowercase">recent accounts</h2>
        <p className="mb-0 mt-2 text-[13px] font-medium text-mute">Preview numbers, still the same customers.</p>
        <TableV2 headers={tableStuff.headers} dataRows={tableStuff.dataRows} />
      </section>
    </AppShell>
  )
}
