import { Link } from "gatsby"
import React from "react"
import style from "../styling/header.module.css"
// import { useStaticQuery, graphql } from "gatsby"
import { FaSnowman, FaMusic, FaVideo, FaCode } from "react-icons/fa"

const Header = () => {
  // const [show, setShow] = useState(false);
  return (
    <header className={style.header}>
      <Link className={style.title} to="/">Casper Leerink</Link>
      <ul className={style.navItems}>
        <li className={style.navItem}>
          <Link className={style.link} to="/about" activeClassName={style.active}><FaSnowman/></Link>
          <p className={`sideText ${style.aboutSide}`}>Find out who I am!</p>
        </li>
        <li className={style.navItem}>
          <Link className={style.link} to="/music" activeClassName={style.active}><FaMusic/></Link>
          <p className={`sideText ${style.musicSide}`}>For the ear!</p>
        </li>
        <li className={style.navItem}>
          <Link className={style.link} to="/video" activeClassName={style.active}><FaVideo/></Link>
          <p className={`sideText ${style.videoSide}`}>And eye!</p>
        </li>
        <li className={style.navItem}>
          <Link className={style.link} to="/code" activeClassName={style.active}><FaCode/></Link>
          <p className={`sideText ${style.codeSide}`}>And the brain!</p>
        </li>
      </ul>
    </header>
  )
}

export default Header
