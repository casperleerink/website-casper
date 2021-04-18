import React from "react"
import style from "../styling/Websites.module.css"
import CImage from "./CImage"
import { Link } from "gatsby"
function Websites({ nodes }) {
  return (
    <div className={style.container}>
      <div className={style.box1}>
        <Link to={nodes[0].fields.slug}>
          <CImage
            cloudName="casperleerink"
            photoId={nodes[0].frontmatter.image}
            className={style.image}
            crop="fill"
            aspectRatio={1}
          />
        </Link>
        <h1 className={style.title}>{nodes[0].frontmatter.title}</h1>
      </div>
      <div className={style.box2}>
        <Link href={nodes[1].fields.slug}>
          <CImage
            cloudName="casperleerink"
            photoId={nodes[1].frontmatter.image}
            className={style.image}
            crop="fill"
          />
        </Link>
        <h1 className={style.title}>{nodes[1].frontmatter.title}</h1>
      </div>
      <div className={style.box3}>
        <Link href={nodes[2].fields.slug}>
          <CImage
            cloudName="casperleerink"
            photoId={nodes[2].frontmatter.image}
            className={style.image}
            crop="fill"
          />
        </Link>
        <h1 className={style.title}>{nodes[2].frontmatter.title}</h1>
      </div>
      <div className={style.box4}>
        <Link href={nodes[3].fields.slug}>
          <CImage
            cloudName="casperleerink"
            photoId={nodes[3].frontmatter.image}
            className={style.image}
            crop="fill"
          />
        </Link>
        <h1 className={style.title}>{nodes[3].frontmatter.title}</h1>
      </div>
      <div className={style.box5}>
        <Link href={nodes[4].fields.slug}>
          <CImage
            cloudName="casperleerink"
            photoId={nodes[4].frontmatter.image}
            className={style.image}
            crop="fill"
          />
        </Link>
        <h1 className={style.title}>{nodes[4].frontmatter.title}</h1>
      </div>
    </div>
  )
}

export default Websites
