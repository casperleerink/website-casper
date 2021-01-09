import React from 'react'
import CImage from './CImage'
import style from '../styling/NavigationImages.module.css'
import { FaMusic, FaVideo, FaCode } from "react-icons/fa"
import { Link } from 'gatsby'

function NavigationImages({data}) {
    const Items = () => {
        return data.map((item) => {
            return (
                <Link to={item.path} key={item.title}>
                <li className={style.itemContainer}>
                    {/* <h2 className={style.title}>{item.title}</h2> */}
                        <CImage 
                            cloudName="casperleerink" 
                            photoId={item.image} 
                            className={style.image}
                            crop="fill"
                            aspectRatio="1"
                        />
                        {item.title === "music" && <FaMusic className={style.icon}/>}
                        {item.title === "video" && <FaVideo className={style.icon}/>}
                        {item.title === "code" && <FaCode className={style.icon}/>}
                </li>
                </Link>
            )
        }); 
    }
    return (
        <ul className={style.container} id="navigationImages">
            <Items/>
        </ul>
    )
}

export default NavigationImages
