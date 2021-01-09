import React, {useState} from 'react'
import Layout from "../components/layout"
import {graphql} from "gatsby"
import style from "../styling/about.module.css"
import CImage from "../components/CImage"

function About({data}) {
    const [composerTitle, setComposerTitle] = useState("");
    const [composerDescription, setComposerDescription] = useState("");
    const { frontmatter, html } = data.markdownRemark;

    const fetchComposer = async () => {
        const listFetch = await fetch("https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=categorymembers&cmtitle=Category:21st-century_classical_composers&cmlimit=500&format=json");
        const jsonFetch = await listFetch.json();
        const list = jsonFetch.query.categorymembers;
        const randomIdx = Math.floor(Math.random() * 495) + 4;
        const pageid = list[randomIdx].pageid;
        const composerFetch = await fetch(`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&pageids=${pageid}`);
        const composerJson = await composerFetch.json();
        const composer = composerJson.query.pages[pageid];
        setComposerTitle(composer.title);
        setComposerDescription(composer.extract);
    }
    return (
        <Layout>
            <div className={style.container}>
                <div className={style.textContainer}>
                    <h1 className={style.title}>{frontmatter.title}</h1>
                    <div
                        className={style.text}
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
                <CImage 
                    cloudName="casperleerink" 
                    photoId={frontmatter.image} 
                    className={style.imgContainer}
                    crop="scale"
                />
            </div>
            <div className={style.wikiContainer}>
                <h1 className={style.quote}><em>'Casper, your bio is so short! I want to read more!'</em></h1>
                <button className={style.button} onClick={fetchComposer}>Fetch Composer Biography!</button>
                {composerTitle && <h1 className={style.title}>{composerTitle}</h1>}
                {composerDescription && <div 
                    dangerouslySetInnerHTML={{ __html: composerDescription }}
                    className={style.wikiContent}
                />}
                <div/>
                <p><em><a href="https://en.wikipedia.org/wiki/List_of_21st-century_classical_composers">
                    Sourced from Wikipedia
                </a></em></p>
            </div>
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