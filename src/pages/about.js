import React, { useState, useEffect, useRef } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import style from "../styling/about.module.css"
import CImage from "../components/CImage"
import { gsap } from "gsap"
import Footer from "../components/Footer"
import SEO from "../components/seo"

function About({ data }) {
  const [composerTitle, setComposerTitle] = useState("")
  const [composerDescription, setComposerDescription] = useState("")
  const { frontmatter, html } = data.markdownRemark
  const imageRef = useRef(null)

  const fetchComposer = async () => {
    const listFetch = await fetch(
      "https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=categorymembers&cmtitle=Category:21st-century_classical_composers&cmlimit=500&format=json"
    )
    const jsonFetch = await listFetch.json()
    const list = jsonFetch.query.categorymembers
    const randomIdx = Math.floor(Math.random() * 495) + 4
    const pageid = list[randomIdx].pageid
    const composerFetch = await fetch(
      `https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&pageids=${pageid}`
    )
    const composerJson = await composerFetch.json()
    const composer = composerJson.query.pages[pageid]
    setComposerTitle(composer.title)
    setComposerDescription(composer.extract)
  }

  useEffect(() => {
    gsap.fromTo(imageRef.current, { opacity: 0 }, { opacity: 1, duration: 4 })
  }, [])
  return (
    <Layout>
      <SEO title="About" />
      <div className={style.container}>
        <div className={style.textContainer}>
          <h1 className={style.title}>{frontmatter.title}</h1>
          <div
            className={style.text}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div ref={imageRef} className={style.gridImage}>
          <CImage
            cloudName="casperleerink"
            photoId={frontmatter.image}
            className={style.imgContainer}
            crop="fill"
            aspectRatio={9 / 12}
          />
        </div>
      </div>
      <div className={style.wikiContainer}>
        <button className={style.button} onClick={fetchComposer}>
          Fetch Composer Biography!
        </button>
        {composerTitle && <h1 className={style.title}>{composerTitle}</h1>}
        {composerDescription && (
          <div
            dangerouslySetInnerHTML={{ __html: composerDescription }}
            className={style.wikiContent}
          />
        )}
        <div />
        <p>
          <em>
            <a href="https://en.wikipedia.org/wiki/List_of_21st-century_classical_composers">
              Sourced from Wikipedia
            </a>
          </em>
        </p>
      </div>
      <Footer />
    </Layout>
  )
}

export default About

export const aboutQuery = graphql`
  query {
    markdownRemark(frontmatter: { key: { eq: "about" } }) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`
