import React from 'react'
import Layout from '../components/layout';
import style from '../styling/video.module.css';
import SEO from '../components/seo';
import {graphql} from 'gatsby';
import VideoItem from '../components/VideoItem';
// import ScrollMagic from 'scrollmagic';
import {FaYoutube} from 'react-icons/fa'
import Footer from '../components/Footer'

function VideoPage({data}) {
    const {nodes} = data.allMarkdownRemark;
    // const [controller, setController] = useState(false);
    // useEffect(() => {
    //     setController(new ScrollMagic.Controller());
    // }, []);
    return (
        <Layout>
            <SEO title="Video"/>
            <div className={style.container}>
                <h1>Selected Videos</h1>
                    <ul className={style.ul}>
                        {nodes.map(node => {
                            return (
                                <VideoItem node={node} key={node.frontmatter.title}/>
                            )
                        })}
                    </ul>
                    <div className={style.youtube}>
                        <a href="https://www.youtube.com/channel/UC0dDP_jMQ8_U8Mm81o1YgXA" target="__blank" aria-label="Youtube Channel"><FaYoutube /></a>
                    </div>
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
