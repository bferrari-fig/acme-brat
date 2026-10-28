const VARIANTS = {
  primary: 'border-ink bg-ink text-brat',
  ghost: 'border-ink bg-white text-ink',
  danger: 'border-ink bg-ink text-white',
}

export default function BigButton({ children, variant = 'primary', onClick, type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer border-2 px-[18px] py-3 text-[15px] font-bold lowercase ${VARIANTS[variant] || VARIANTS.primary}`}
    >
      {children}
    </button>
  )
}
