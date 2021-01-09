import React from "react"
import CImage from "../components/CImage"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{padding: "5%"}}>
      <h1 style={{
        fontSize: "2rem",
        fontWeight: "bold"
      }}>4'33" SOUND NOT FOUND (404)</h1>
      <div style={{width: "50%", paddingTop: "2rem"}}>
      <CImage 
          cloudName="casperleerink" 
          photoId="casper-website/johncage.jpg"
          className=""
          crop="fill"
          aspectRatio="1"
      />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
