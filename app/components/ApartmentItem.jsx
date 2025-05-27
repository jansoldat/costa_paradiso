import cs from "classnames";
import { SvgIcon } from "./SvgIcon";

const List = ({ items }) => (
  <ul className="apartment-item__list">
    {items.split("</br>").map((li) => (
      <li key={li}>{li}</li>
    ))}
  </ul>
);

export const ApartmentRow = ({ itemsCollection }) => {
  const listItem = itemsCollection
    .filter((item) => !item?.icon)
    .map((item) => item.description)
    .join("</br>");
  console.log("listItem: ", listItem);

  return (
    <div className="apartment-list">
      {itemsCollection.map((item) => (
        <div
          key={item.id}
          className={cs("apartment-item", {
            "apartment-item--bigSize": !item?.icon,
          })}
        >
          {item.icon ? (
            <>
              <SvgIcon icon={item.icon} className="apartment-item__icon" />
              <p
                className="apartment-item__text"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </>
          ) : (
            <List items={item.description} />
          )}
        </div>
      ))}
      <div className="apartment-item apartment-item--smallSize">
        <List items={listItem} />
      </div>
    </div>
  );
};
