import React from "react"
import { SvgIcon } from "./SvgIcon";

export const TariffList = ({ items }) => (
  <div className="tariff-list row">
    {items.map(item => <div key={item.id} className="tariff-list__element column">
      <SvgIcon icon={item.icon} className="tariff-list__icon" />
      <h3 className="tariff-list__heading mt-1">{item.translations[0].title}</h3>
      <ul className="tariff-list__list mt-1" dangerouslySetInnerHTML={{ __html: item.translations[0].description }}>
      </ul>
    </div>)}
  </div>
)
