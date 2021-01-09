import React from 'react'
import Layout from '../components/layout';
import style from '../styling/video.module.css';
import SEO from '../components/seo';
import {graphql} from 'gatsby';
import VideoItem from '../components/VideoItem';
import ScrollMagic from 'scrollmagic';
import Footer from '../components/Footer'

function VideoPage({data}) {
    const {nodes} = data.allMarkdownRemark;
    const controller = new ScrollMagic.Controller();
    return (
        <Layout>
            <SEO title="Music"/>
            <div className={style.container}>
                <h1>Selected Videos</h1>
                <br/><br/><br/>
                <ul className={style.ul}>
                    {nodes.map(node => {
                        return (
                            <VideoItem node={node} controller={controller} key={node.frontmatter.title}/>
                        )
                    })}
                </ul>
            </div>
            <Footer />
        </Layout>
    )
}

export default VideoPage;

export const videoQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "video"}}}) {
        nodes {
            frontmatter {
                title
                image
                youtube
            }
            html
        }
    }
  }
`
