import React from 'react'
// import {SVG} from '@svgdotjs/svg.js'
// import style from "../styling/index.module.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import AndWeContinue from '../components/andWeContinue'
import NavigationImages from '../components/NavigationImages'
import Footer from '../components/Footer'
// import ImageGallery from "../components/imageGallery"
// import HomeSVG from "../components/homeSVG"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home"/>
      <Hero andwecontinue={new AndWeContinue()}/>
      <NavigationImages data={[
        {
          title: "music",
          image: "piano-hands.jpg",
          path: "/music",
        },
        {
          title: "video",
          image: "and-we-continue-background.png",
          path: "/video",
        },
        {
          title: "code",
          image: "midi-keyboard.jpg",
          path: "/code",
        },
      ]}/>
      <Footer />
    </Layout>
  )
}
export default IndexPage
