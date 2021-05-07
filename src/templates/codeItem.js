import React from "react"
import { graphql } from "gatsby"
import style from "../styling/codeItem.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CImage from "../components/CImage"
import Footer from "../components/Footer"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

const CodeItemPage = ({ data }) => {
  const { markdownRemark: item } = data
  return (
    <Layout>
      <SEO title={item.frontmatter.title} />
      <main className={style.container}>
        <div className={style.textContainer}>
          <h1>{item.frontmatter.title}</h1>
          <div
            className={style.description}
            dangerouslySetInnerHTML={{ __html: item.html }}
          />
          <div className={style.stack}>
            <h1>Stack</h1>
            <ul>
              {item.frontmatter.stack.map((t, idx) => {
                return (
                  <li key={t}>
                    <a
                      href={
                        item.frontmatter.stack_url[idx]
                          ? item.frontmatter.stack_url[idx]
                          : "#"
                      }
                    >
                      {t}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <a
            href={item.frontmatter.url}
            className={style.links}
            target="__blank"
          >
            <button>
              <FiExternalLink /> Project
            </button>
          </a>
          {item.frontmatter.github_url && (
            <a
              href={item.frontmatter.github_url}
              className={style.links}
              target="__blank"
            >
              <button>
                <FaGithub /> Github
              </button>
            </a>
          )}
        </div>
        <div className={style.imgContainer}>
          <CImage
            cloudName="casperleerink"
            photoId={item.frontmatter.image}
            className={style.image}
            crop="fill"
          />
        </div>
      </main>
      <Footer />
    </Layout>
  )
}

export const codeItemQuery = graphql`
  query codeItemPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        url
        github_url
        image
        stack
        stack_url
      }
    }
  }
`

export default CodeItemPage
