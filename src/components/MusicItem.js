import React, {useState, useRef, useEffect} from 'react'
import style from '../styling/MusicItem.module.css'
import CImage from './CImage'
import AudioPlayer from './AudioPlayer'
import {gsap} from 'gsap';

function MusicItem({node, idx}) {
    const [expanded, setExpanded] = useState(false);
    const containerRef = useRef(null);
    useEffect(() => {
        gsap.fromTo(
            containerRef.current, 
            {x: "200%", rotation: Math.random() * 90 - 45, opacity: 0}, 
            {x: 0, rotation: 0, duration: 1, opacity: 1, delay: idx * 0.3 + 0.3}
        );
    }, [idx]);
    return (
        <li className={style.container} ref={containerRef} style={{transform: "translateX(200%)"}}>
            <button className={style.imageContainer} onClick={() => {setExpanded(!expanded)}}>
                <h2>{node.frontmatter.title}</h2>
                <CImage 
                    cloudName="casperleerink" 
                    photoId={node.frontmatter.image} 
                    className={style.image}
                    crop="fill"
                    aspectRatio="1"
                />
            </button>
            <AudioPlayer src={node.frontmatter.audio} className={style.audioPlayer}/>
            {expanded && <div className={style.description}>
                <div dangerouslySetInnerHTML={{__html: node.html}}/>    
            </div>}
        </li>
    )
}

export default MusicItem
