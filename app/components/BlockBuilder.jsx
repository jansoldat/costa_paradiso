import React from "react"
import PropTypes from "prop-types"
import { Quote } from "./Quote"
import { HTMLTextBlock } from "./HTMLTextBlock"
import { ApartmentRow } from "./ApartmentItem"
import { BeachList } from "./BeachList"
// import { Gallery } from "./Gallery"
import { Table } from "./Table"
import { TariffList } from "./TariffList"
import Gallery from "./Gallery"

export const BlockBuilder = ({ collection, ...rest }) => {
  if (collection === "quote") {
    return <Quote {...rest.item} />
  }
  if (collection === "htmlText") {
    return <HTMLTextBlock {...rest.item} />
  }
  if (collection === "apartmentItems") {
    return <ApartmentRow {...rest.item} />
  }

  if (collection === "beachItems") {
    return <BeachList {...rest.item} />
  }

  if (collection === "gallery") {
    return <Gallery {...rest.item} />
  }

  if (collection === "priceTable") {
    return <Table {...rest.item} />
  }

  if (collection === "iconItems") {
    return <TariffList {...rest.item} />
  }



  return (
    <div>BlockBuilder</div>
  )
}

BlockBuilder.propTypes = { __component: PropTypes.string }
