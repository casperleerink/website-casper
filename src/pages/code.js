import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import style from "../styling/code.module.css"
// import CImage from '../components/CImage'
// import ImageGallery from '../components/imageGallery'
// import {gsap} from 'gsap'
import { FaGithub } from "react-icons/fa"
// import CodeItem from "../components/CodeItem"
import Footer from "../components/Footer"
import Websites from "../components/Websites"

function CodePage({ data }) {
  // const itemsRef = useRef([]);
  //   const [currentIndex, setCurrentIndex] = useState(0)
  const { nodes } = data.allMarkdownRemark
  //   const currentNode = nodes[currentIndex]
  return (
    <Layout>
      <SEO title="Code" />
      <div className={style.container}>
        <div className={style.intro}>
          <h1>Web Portfolio</h1>
          <p>
            Below you can see some of the websites that I have made. It includes
            personal websites for some of my clients as well as web applications
            for art projects.
            <br />
            Are you looking for someone to create and/or design a website for
            you? Scroll down to send me an email!
            <br />
            For all of my code, please refer to my{" "}
            <a href="https://github.com/casperleerink">Github</a> page!
          </p>
        </div>
        <Websites nodes={nodes} />
        <div className={style.github}>
          <a
            href="https://github.com/casperleerink"
            target="__blank"
            aria-label="Github Page"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default CodePage

export const codeQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "code" } } }
    ) {
      nodes {
        frontmatter {
          title
          image
          url
        }
        html
      }
    }
  }
`
