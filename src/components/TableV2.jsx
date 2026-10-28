import { Fragment } from 'react'

export function TableV2(props) {
  const headers = props.headers
  const rows = props.dataRows

  return (
    <div className="mt-3 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-ash">
            {headers.map((h) => (
              <th key={h} className="px-3 py-3 font-bold text-ink">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <Fragment key={idx}>
              <tr>
                {row.cells.map((cell, j) => (
                  <td key={j} className="px-3 py-3 font-bold text-ink">
                    {cell}
                  </td>
                ))}
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}
