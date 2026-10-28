const TONES = {
  paper: 'bg-paper text-ink',
  ink: 'bg-ink text-white',
  brat: 'border-2 border-ink bg-brat text-ink',
  charcoal: 'bg-charcoal text-white',
}

export function CardThing({ stat, subtext, footerNote, tone = 'paper' }) {
  return (
    <div className={`p-5 ${TONES[tone] || TONES.paper}`}>
      <p className="m-0 text-sm font-bold lowercase">{stat}</p>
      <div className="mt-2 font-black text-4xl leading-none tracking-tight">{subtext}</div>
      {footerNote && <div className="mt-2 text-[13px] font-medium opacity-80">{footerNote}</div>}
    </div>
  )
}
