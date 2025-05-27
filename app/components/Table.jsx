import React from "react";
import cs from "classnames";

export const Table = ({ itemsCollection, heading }) => (
  <>
    {heading && <h2 className="tariff__heading">{heading}</h2>}
    <table>
      <tbody>
        {(itemsCollection || []).map((row) => {
          let content = [];
          try {
            content = JSON.parse(row.content);
          } catch (error) {
            content = [];
          }

          return (
            <tr key={row.id}>
              {content.map((item) => (
                <td
                  key={`${row.id}__${item}`}
                  className={cs({ "text-high": row.isBold })}
                >
                  {item}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  </>
);
