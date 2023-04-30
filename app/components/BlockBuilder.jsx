import React from "react"
import PropTypes from "prop-types"
import { Quote } from "./Quote"
import { HTMLTextBlock } from "./HTMLTextBlock"
import { ApartmentRow } from "./ApartmentItem"
import { BeachList } from "./BeachList"
import { Table } from "./Table"
import { TariffList } from "./TariffList"
import Gallery from "./Gallery"

export const BlockBuilder = ({ collection, __component, ...rest }) => {
  if (__component === "common.quote") {
    return <Quote {...rest} />
  }
  if (__component === "common.html-text") {
    return <HTMLTextBlock {...rest} />
  }
  if (__component === "apartment.rows") {
    return <ApartmentRow {...rest} />
  }

  if (__component === "gallery") {
    return <Gallery images={rest.imageGal?.data} />
  }

  if (__component === "beach.collection") {
    return <BeachList {...rest} />
  }

  if (__component === "price-table.collection") {
    return <Table {...rest} />
  }

  if (__component === "icon-items.collection") {
    return <TariffList {...rest} />
  }



  return (
    <div>BlockBuilder</div>
  )
}

BlockBuilder.propTypes = { __component: PropTypes.string }
