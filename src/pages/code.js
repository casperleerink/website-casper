import React, {useEffect, useRef} from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import SEO from '../components/seo'
import style from '../styling/code.module.css'
import CImage from '../components/CImage'
import ImageGallery from '../components/imageGallery'
import {gsap} from 'gsap';

function CodePage({data}) {
    const itemsRef = useRef([]);
    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, data.allMarkdownRemark.nodes.length);
        itemsRef.current.forEach((ref, idx) => {
            gsap.to(ref, {y: 0, opacity: 1, duration: 1, delay: idx * 0.3 + 0.3});
        });
    }, [data.allMarkdownRemark.nodes]);

    //Items
    const Items = data.allMarkdownRemark.nodes.map((node, idx) => {
        return (
            <a className={style.imageContainer} href={node.frontmatter.url} ref={el => itemsRef.current[idx] = el}>
                <h2>{node.frontmatter.title}</h2>
                <CImage
                    cloudName="casperleerink" 
                    photoId={node.frontmatter.image}
                    className={style.image}
                    crop="scale"
                />
            </a>
        )
    });
    return (
        <Layout>
            <SEO title="Code"/>
            <div className={style.container}>
                <h1>Web Portfolio</h1>
                <ImageGallery imgs={Items} amount={data.allMarkdownRemark.nodes.length}/>
            </div>
        </Layout>
    )
}

export default CodePage

export const codeQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "code"}}}) {
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