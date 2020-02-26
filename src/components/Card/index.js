import React from "react"

import { Content, Number } from "./styles"

export default function Card({ items }) {
  return (
    <>
      {items &&
        items.map(item => (
          <Content>
            <Number>{item}</Number>
          </Content>
        ))}
    </>
  )
}
