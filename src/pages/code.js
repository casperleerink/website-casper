import React, { useState } from "react"
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
            mollitia provident aspernatur aperiam illum culpa laudantium maiores
            quaerat! Delectus expedita, a dignissimos incidunt mollitia quos sit
            eligendi ad enim vero!
          </p>
        </div>
        <Websites nodes={nodes} />
        {/* <CodeItem
          node={currentNode}
          idx={currentIndex}
          amt={nodes.length - 1}
          nodes={nodes}
          callback={idx => setCurrentIndex(idx)}
        /> */}
        {/* <ImageGallery imgs={Items} amount={data.allMarkdownRemark.nodes.length}/> */}
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
