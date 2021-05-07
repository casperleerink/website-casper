import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import style from "../styling/code.module.css"
import CImage from "../components/CImage"
// import ImageGallery from '../components/imageGallery'
// import {gsap} from 'gsap'
import { FaGithub, FaMedium } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import { AiFillFile } from "react-icons/ai"
// import CodeItem from "../components/CodeItem"
import Footer from "../components/Footer"
// import Websites from "../components/Websites"

function CodePage({ data }) {
  // const itemsRef = useRef([]);
  //   const [currentIndex, setCurrentIndex] = useState(0)
  const { nodes } = data.allMarkdownRemark

  const Cards = () =>
    nodes.map(node => {
      const year = new Date(node.frontmatter.date).getFullYear()
      return (
        <li key={node.id} className={style.card}>
          <Link to={node.fields.slug} className={style.cardLink}>
            <CImage
              cloudName="casperleerink"
              photoId={node.frontmatter.image}
              className={style.cardImage}
              crop="fill"
              aspectRatio={14 / 9}
            />
            <h2 className={style.cardSubtitle}>
              {year} - {node.frontmatter.subtitle}
            </h2>
            <h1 className={style.cardTitle}>{node.frontmatter.title}</h1>
          </Link>
          <div className={style.cardContent}>
            <ul className={style.cardStack}>
              {node.frontmatter.stack.map((item, idx) => {
                return <li>{item}</li>
              })}
            </ul>
            <div className={style.cardActions}>
              <a href={node.frontmatter.url}>
                <button>
                  <FiExternalLink /> Project
                </button>
              </a>
              {node.frontmatter.github_url && (
                <a href={node.frontmatter.github_url}>
                  <button>
                    <FaGithub /> Github
                  </button>
                </a>
              )}
            </div>
          </div>
        </li>
      )
    })
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
          </p>
          <div className={style.icons}>
            <a
              href="https://github.com/casperleerink"
              target="__blank"
              aria-label="Github"
            >
              <FaGithub /> Github
            </a>
            <a
              href="https://casperleerink.medium.com/"
              target="__blank"
              aria-label="Medium"
            >
              <FaMedium /> Blog
            </a>
            <a
              href="/assets/resume-casper-leerink.pdf"
              target="__blank"
              aria-label="Resume"
            >
              <AiFillFile /> Resume
            </a>
          </div>
        </div>
        <ul className={style.cards}>
          <Cards />
        </ul>
      </div>
      <Footer />
    </Layout>
  )
}

export default CodePage

export const codeQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "codeItem" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          date
          subtitle
          stack
          image
          url
          github_url
        }
        fields {
          slug
        }
        html
        id
      }
    }
  }
`
