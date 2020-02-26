import React, { useState } from "react"

import SEO from "../components/seo"
import Card from "../components/Card"
import Layout from "../components/layout"
// import Image from "../components/Image/image"
import { faMugHot } from "@fortawesome/free-solid-svg-icons"

import { Wrapper, FontAwesome } from "../components/styles"

const items = [
  "1/2",
  "1",
  "2",
  "3",
  "5",
  "8",
  "13",
  "20",
  "40",
  "100",
  "?",
  <FontAwesome icon={faMugHot} />,
]

export default function IndexPage() {
  const [value, setValue] = useState("")
  const [list, setList] = useState(true)

  function valueClicked(item) {
    list && setValue([item])
    setList(!list)
  }

  return (
    <Layout>
      <SEO title="Planning Poker" />
      <Wrapper>
        {list ? (
          <Card list={list} valueClicked={valueClicked} items={items} />
        ) : (
          <Card list={list} valueClicked={valueClicked} items={value} />
        )}
      </Wrapper>
    </Layout>
  )
}
