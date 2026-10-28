export default function ToggleSwitch(props) {
  const on = props.isOn
  const toggle = props.whenToggle

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => toggle(!on)}
      className="flex h-[30px] w-[52px] shrink-0 cursor-pointer items-center border-0 p-1"
      style={{ backgroundColor: on ? '#0A0A0A' : '#BFBFBF', justifyContent: on ? 'flex-end' : 'flex-start' }}
    >
      <span className="block h-[22px] w-[22px] bg-white" />
    </button>
  )
}
