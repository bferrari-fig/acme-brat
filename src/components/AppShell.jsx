import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/dashboard', text: 'dashboard' },
  { to: '/billing', text: 'billing' },
  { to: '/team', text: 'team' },
  { to: '/integrations', text: 'integrations' },
  { to: '/empty', text: 'reports' },
  { to: '/settings', text: 'settings' },
]

function isCurrent(pathname, to) {
  if (to === '/billing') return pathname.startsWith('/billing')
  return pathname === to
}

export default function AppShell({ children, center = false }) {
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-screen bg-brat font-sans text-ink">
      <aside className="flex w-[248px] shrink-0 flex-col bg-ink px-[18px] py-7">
        <Link to="/dashboard" className="no-underline">
          <div className="text-[28px] font-black lowercase leading-none text-brat">brat</div>
          <div className="mt-1 text-[13px] font-medium text-white">acme</div>
        </Link>
        <nav className="mt-8 flex flex-col gap-1">
          {NAV_LINKS.map((item) => {
            const active = isCurrent(pathname, item.to)
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-2.5 px-4 py-2.5 text-[15px] font-bold no-underline ${
                  active ? 'bg-brat text-ink' : 'text-white'
                }`}
              >
                <span className={`h-2 w-2 shrink-0 rounded-full ${active ? 'bg-ink' : 'bg-brat'}`} />
                {item.text}
              </Link>
            )
          })}
        </nav>
        <div className="mt-auto text-[13px] font-medium text-white">summer</div>
      </aside>
      <main
        className={`min-w-0 flex-1 px-9 py-9 ${
          center ? 'flex flex-col items-center justify-center text-center' : ''
        }`}
      >
        {children}
      </main>
    </div>
  )
}
