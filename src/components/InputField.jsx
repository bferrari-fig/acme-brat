export function InputField({ labelText, id, value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-ink">
        {labelText}
      </label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border-2 border-ink bg-brat px-3.5 py-3 text-base text-ink outline-none"
      />
    </div>
  )
}
