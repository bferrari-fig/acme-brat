import { Link } from 'react-router-dom'
import AppShell from '../components/AppShell.jsx'
import { TableV2 } from '../components/TableV2.jsx'
import BigButton from '../components/BigButton.jsx'

const invoiceRows = {
  headers: ['Invoice', 'Customer', 'Amount', 'Status'],
  dataRows: [
    { cells: ['INV-2401', 'Northwind LLC', '$4,200', 'Paid'] },
    { cells: ['INV-2402', 'Contoso', '$890', 'Paid'] },
    { cells: ['INV-2403', 'Fabrikam', '$120', 'Overdue'] },
  ],
}

export default function BillingInvoices() {
  return (
    <AppShell>
      <h1 className="m-0 font-black text-5xl lowercase tracking-tight">billing & invoices</h1>
      <p className="mt-3 text-base text-mute">
        Finance flow. Split charges by team, or push totals to the ERP.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 bg-paper px-6 py-5">
        <div>
          <div className="font-black text-[22px] lowercase">accounts receivable aging</div>
          <p className="m-0 mt-1 text-[13px] font-medium text-ink">A snapshot, not a live ledger.</p>
        </div>
        <Link to="/billing/aging" className="border-2 border-ink bg-ink px-[18px] py-3 text-[15px] font-bold lowercase text-brat no-underline">
          open report
        </Link>
      </div>

      <section className="mt-6 bg-white p-6 shadow-hard">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="m-0 font-black text-[22px] lowercase">open invoices</h2>
          <BigButton variant="primary" onClick={() => {}}>Record payment</BigButton>
        </div>
        <TableV2 headers={invoiceRows.headers} dataRows={invoiceRows.dataRows} />
      </section>

      <p className="mt-6 text-[13px] font-medium text-mute">
        Next: assign cost centers by team, or connect QuickBooks.
      </p>
    </AppShell>
  )
}
