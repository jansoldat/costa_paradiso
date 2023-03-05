import React from "react"
import cs from "classnames"

export const Table = ({ items, translations }) => (
  <>
    <h2 className='tariff__heading'>{translations?.[0].heading}</h2>
    <table>
      <tbody>
        {items.map((row) => {
          let content = [];
          try { content = JSON.parse(row.translations[0].content) } catch (error) { content = []; }

          return (
            <tr key={row.id}>
              {content.map(item => (
                <td key={`${row.id}__${item}`} className={cs({ "text-high": row.isBold })}>
                  {item}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  </>
)
