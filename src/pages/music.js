import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import SEO from '../components/seo'
import CImage from '../components/CImage'
import style from '../styling/music.module.css'
import {FaSoundcloud} from 'react-icons/fa'
import Footer from '../components/Footer'

// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
// import AudioPlayer from '../components/AudioPlayer'
import MusicItem from '../components/MusicItem'

function Music({data}) {
    const {nodes} = data.allMarkdownRemark;
    
    return (
        <Layout>
            <SEO title="Music"/>
            <div className={style.container}>
                <h1 className={style.selectedWorks}>Selected Works</h1>
                <ul className={style.ul}>
                    {nodes.map((node, idx) => {
                        return (
                            <MusicItem node={node} key={node.frontmatter.title} idx={idx}/>
                        )
                    })}
                </ul>
                <div className={style.banner}>
                    <h1>Breathing Bass</h1>
                    <CImage 
                        cloudName="casperleerink" 
                        photoId="casper-website/breathingbass1.jpg"
                        className={style.bannerImage}
                        crop="fill"
                        aspectRatio="4"
                        gravity="faces"
                    />
                    <p>Breathing Bass is a Vancouver-based composer-performer ensemble dedicated to collaborative story-telling. They were in-residence at Simon Fraser University in 2019-2020, where they produced an improvised opera titled "Coral calls for Cloud" - a love story inspired by the biochemical conversation between coral reefs and cloud formations. They are now developing online audio-visual artworks that incorporate improvisation and audience participation.
                        <br/><br/>
                        Find out more about Breathing Bass <a href="https://www.breathingbass.com/" target="__blank" aria-label="Breathing Bass Website">here</a>.
                    </p>
                </div>
                <div className={style.soundcloud}>
                    <a href="https://soundcloud.com/casper-leerink" target="__blank" aria-label="Soundcloud Page"><FaSoundcloud /></a>
                </div>
            </div>
            <Footer/>
        </Layout>
    )
}

export default Music

export const musicQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "music"}}}) {
        nodes {
            frontmatter {
                title
                image
                audio
            }
            html
        }
    }
  }
`
