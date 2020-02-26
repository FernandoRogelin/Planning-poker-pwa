import React from "react"

import { Content, Number } from "./styles"

export default function Card({ items, valueClicked, list }) {
  return (
    <>
      {items &&
        items.map((item, index) => (
          <Content
            key={index}
            list={list ? undefined : "true"}
            onClick={() => valueClicked(item)}
          >
            <Number list={list ? undefined : "true"}>{item}</Number>
          </Content>
        ))}
    </>
  )
}
