import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
// import Image from "../components/Image/image"
import { faMugHot } from "@fortawesome/free-solid-svg-icons"

import Card from "../components/Card"

import { Wrapper, FontAwesome } from "./styles"

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

const IndexPage = () => (
  <Layout>
    <SEO title="Planning Poker" />
    <Wrapper>
      <Card items={items} />
    </Wrapper>
  </Layout>
)

export default IndexPage
