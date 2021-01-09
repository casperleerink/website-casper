import React, {useState, useEffect} from 'react'
import style from "../styling/Hero.module.css"
import {FaVolumeUp} from "react-icons/fa"
import CImage from "./CImage"

function Hero({andwecontinue}) {
    const [clicked, setClicked] = useState([false, false, false, false, false, false, false]);
    const handleClick = (idx) => {
        const copy = [...clicked];
        copy[idx] = !copy[idx];
        andwecontinue.started(idx);
        setClicked(copy);
    }
    useEffect(() => {
        return () => andwecontinue.cleanup();
    }, [andwecontinue]);
    return (
        <section className={style.container}>
            <div className={style.textSection}>
                <div className={style.bigText}>
                    <p>Pianist</p>
                    <p>Composer</p>
                    <p>Creator</p>
                    <p className={`sideText ${style.bigTextSide}`}>The things I do, apparently...</p>
                </div>
                <a href="#navigationImages">
                    <button className={style.button}>Start Exploring!</button>
                </a>
            </div>
            <div className={style.audioSection}>
                <CImage 
                    cloudName="casperleerink" 
                    photoId="profileimage.jpg" 
                    className={style.image}
                    crop="fill"
                    aspectRatio="0.75"
                />
                <FaVolumeUp className={style.backgroundIcon}/>
                <div className={style.rectangles}>
                    {clicked.map((b, idx) => {
                        return (
                            <div 
                                key={idx}
                                className={style[`rect${idx+1}`]} 
                                id={`rect${idx+1}`}
                                role="button"
                                tabIndex={idx}
                                onClick={() => handleClick(idx)}
                                onKeyDown={() => handleClick(idx)}
                                style={{
                                    opacity: b ? 0.9 : 0.5
                                }}
                            >
                                {b ? <img src={`https://res.cloudinary.com/casperleerink/image/upload/c_scale,w_200/v1609704739/casper-website/gif${idx+1}.gif`} alt=""/> : ""}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={style.nothing} />
        </section>
    )
}

export default Hero
