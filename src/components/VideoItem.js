import React, {useEffect, useState, useRef} from 'react'
import CImage from './CImage'
import style from '../styling/video.module.css'
import {gsap} from 'gsap'
import ScrollMagic from 'scrollmagic'

function VideoItem({node}) {
    const [expanded, setExpanded] = useState(false);
    const containerRef = useRef(null);
    const youtubeRef = useRef(null);
    const imageRef = useRef(null);
    // const animation = (el) => {
    //     const top = el.getBoundingClientRect().top;
    //     if ((top + offset) >= 0 && (top - offset) <= window.innerHeight) {
    //         gsap.to(containerRef.current, {x: 0, duration: 1});
    //     }
    // }

    useEffect(() => {
        const controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({triggerElement: containerRef.current})
            .on('enter', () => {
                gsap.to(imageRef.current, {x: 0, duration: 0.5});
                gsap.to(youtubeRef.current, {opacity: 1, duration: 1, delay: 0.5});
            })
            .on('leave', () => {
                gsap.to(youtubeRef.current, {opacity: 0, duration: 1});
                gsap.to(imageRef.current, {x: "-120%", duration: 0.5});
            })
            .addTo(controller);
    }, []);

    
    //YOUTUBE BUSINESS
    const getEmbedSrc = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11) ? match[2] : null;
    }
    const embedUrl = getEmbedSrc(node.frontmatter.youtube);

    return (
        <li className={style.item} key={node.frontmatter.title} ref={containerRef}>
            <div className={style.left} ref={imageRef} style={{transform: "translateX(-120%)"}}>
                <button onClick={() => {setExpanded(!expanded)}}>
                    <CImage 
                        cloudName="casperleerink" 
                        photoId={node.frontmatter.image}
                        className={style.image}
                        crop="fill"
                        aspectRatio={16/9}
                    />
                </button>
                <h1>{node.frontmatter.title}</h1>
                {expanded && <div dangerouslySetInnerHTML={{__html: node.html}}/>}
            </div>
            <div className={style.right} ref={youtubeRef} style={{opacity: 0}}>
                {embedUrl && 
                    <div className={style.videoWrapper}>
                        <iframe src={`https://www.youtube.com/embed/${embedUrl}`} width="100%" title={node.frontmatter.title} frameBorder="0" allowFullScreen={true}/>
                    </div>
                }
            </div>
        </li>
    )
}

export default VideoItem
