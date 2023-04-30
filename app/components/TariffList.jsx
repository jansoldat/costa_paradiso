import React from "react"
import { SvgIcon } from "./SvgIcon";

export const TariffList = ({ itemsCollection }) => (
  <div className="tariff-list row">
    {itemsCollection.map(item => <div key={item.id} className="tariff-list__element column">
      <SvgIcon icon={item.icon} className="tariff-list__icon" />
      <h3 className="tariff-list__heading mt-1">{item.title}</h3>
      <ul className="tariff-list__list mt-1" dangerouslySetInnerHTML={{ __html: item.description }}>
      </ul>
    </div>)}
  </div>
)
