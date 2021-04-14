import React from "react"
import style from "../styling/Websites.module.css"
import CImage from "./CImage"
function Websites({ nodes }) {
  return (
    <div className={style.container}>
      <div className={style.box1}>
        <a href={nodes[0].frontmatter.url} target="__blank">
          <CImage
            cloudName="casperleerink"
            photoId={nodes[0].frontmatter.image}
            className={style.image}
            crop="fill"
            aspectRatio={1}
          />
        </a>
        <h1 className={style.title}>{nodes[0].frontmatter.title}</h1>
      </div>
      <div className={style.box2}>
        <a href={nodes[1].frontmatter.url} target="__blank">
          <CImage
            cloudName="casperleerink"
            photoId={nodes[1].frontmatter.image}
            className={style.image}
            crop="fill"
          />
        </a>
        <h1 className={style.title}>{nodes[1].frontmatter.title}</h1>
      </div>
      <div className={style.box3}>
        <a href={nodes[2].frontmatter.url} target="__blank">
          <CImage
            cloudName="casperleerink"
            photoId={nodes[2].frontmatter.image}
            className={style.image}
            crop="fill"
          />
        </a>
        <h1 className={style.title}>{nodes[2].frontmatter.title}</h1>
      </div>
      <div className={style.box4}>
        <a href={nodes[3].frontmatter.url} target="__blank">
          <CImage
            cloudName="casperleerink"
            photoId={nodes[3].frontmatter.image}
            className={style.image}
            crop="fill"
          />
        </a>
        <h1 className={style.title}>{nodes[3].frontmatter.title}</h1>
      </div>
      <div className={style.box5}>
        <a href={nodes[4].frontmatter.url} target="__blank">
          <CImage
            cloudName="casperleerink"
            photoId={nodes[4].frontmatter.image}
            className={style.image}
            crop="fill"
          />
        </a>
        <h1 className={style.title}>{nodes[4].frontmatter.title}</h1>
      </div>
    </div>
  )
}

export default Websites
