import cs from "classnames";
import { SvgIcon } from "./SvgIcon";

const List = ({ items }) => <ul className="apartment-item__list">
  {items.split("</br>").map(li => <li key={li}>{li}</li>)}
</ul>

export const ApartmentRow = ({ items }) => {
  const listItem = items.filter(item => !item?.icon).map(item => item.translations[0].description).join("</br>");

  return (<div className="apartment-list">
    {items.map(item => (
      <div key={item.id} className={cs("apartment-item", { "apartment-item--bigSize": !item?.icon })}>
        {item.icon
          ?
          <>
            <SvgIcon icon={item.icon} className="apartment-item__icon" />
            <p className="apartment-item__text" dangerouslySetInnerHTML={{ __html: item.translations[0].description }} />
          </>
          :
          <List items={item.translations[0].description} />
        }
      </div>
    ))}
    <div className="apartment-item apartment-item--smallSize">
      <List items={listItem} />
    </div>
  </div>)
}
