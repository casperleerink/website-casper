import gsap from 'gsap/gsap-core';
import React, {useRef, useEffect} from 'react'
import style from '../styling/code.module.css'
import CImage from '../components/CImage'
import {GrNext, GrPrevious} from 'react-icons/gr'

function CodeItem({node, idx, amt, nodes, callback}) {
    const itemRef = useRef(null);
    useEffect(() => {
        gsap.to(itemRef.current, {opacity: 1, x: 0, duration: 1});
    }, [node]);

    const handleBtn = (i) => {
        gsap.to(
            itemRef.current, 
            {x: i < idx ? "-50vw" : "50vw", opacity: 0, duration: 0.5, onComplete: () => callback(i)}
        );
    }

    return (
        <>
        <div className={style.item} ref={itemRef}>
            <a className={style.imageContainer} href={node.frontmatter.url} target="__blank">
                <CImage
                    cloudName="casperleerink" 
                    photoId={node.frontmatter.image}
                    className={style.image}
                    crop="fill"
                    aspectRatio={16/9}
                />
            </a>
            <div className={style.textContainer}>
                <h2>{node.frontmatter.title}</h2>
                <p><a href={node.frontmatter.url} target="__blank">{node.frontmatter.url}</a></p>
            </div>
        </div>
        <div className={style.navigation}>
            <button className={style.button} aria-label="Previous" onClick={() => handleBtn(idx > 0 ? idx-1 : amt)}><GrPrevious/></button>
            {nodes.map((n, i) => (
                <button className={style.dot} aria-label={`Go to: ${n.frontmatter.title}`} onClick={() => handleBtn(i)}>
                    °
                </button>
            ))}
            <button className={style.button} aria-label="Next" onClick={() => handleBtn(idx >= amt ? 0 : idx+1)}><GrNext/></button>
        </div>
        </>
    )
}

export default CodeItem
