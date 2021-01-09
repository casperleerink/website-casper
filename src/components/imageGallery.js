import React from 'react'
import style from '../styling/imageGallery.module.css'

function ImageGallery({imgs, amount}) {
    const columnClass = () => {
        if (amount < 5) {
            if (amount === 1) {
                return style.column1
            } else {
                return style.column2
            }
        } else {
            return style.column3
        }
    }
    return (
        <section className={`${style.section} ${columnClass()}`}>
            {imgs}
        </section>
    )
}

export default ImageGallery
