import React from "react"
import style from "../styling/Websites.module.css"
import CImage from "./CImage"
function Websites({ nodes }) {
  return (
    <div className={style.container}>
      <div className={style.box1}>
        <CImage
          cloudName="casperleerink"
          photoId={nodes[0].frontmatter.image}
          className={style.image}
          crop="fill"
          aspectRatio={1}
        />
      </div>
      <div className={style.box2}>
        <CImage
          cloudName="casperleerink"
          photoId={nodes[1].frontmatter.image}
          className={style.image}
          crop="fill"
        />
      </div>
      <div className={style.box3}>
        <CImage
          cloudName="casperleerink"
          photoId={nodes[2].frontmatter.image}
          className={style.image}
          crop="fill"
        />
      </div>
      <div className={style.box4}>
        <CImage
          cloudName="casperleerink"
          photoId={nodes[3].frontmatter.image}
          className={style.image}
          crop="fill"
        />
      </div>
      <div className={style.box5}>
        <CImage
          cloudName="casperleerink"
          photoId={nodes[4].frontmatter.image}
          className={style.image}
          crop="fill"
        />
      </div>
    </div>
  )
}

export default Websites
