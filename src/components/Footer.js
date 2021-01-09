import React from 'react'
import style from '../styling/Footer.module.css'
import {MdSend} from "react-icons/md"
import {FaSoundcloud, FaYoutube, FaGithub} from 'react-icons/fa'

function Footer() {
    return (
        <div className={style.container}>
            <h1>Contact Me!</h1>
            <label className={style.email}>
                Your E-Mail
                <input type="email" name="email" />
            </label>
            <label className={style.message}>
                Message
                <textarea name="message" rows="6" maxLength="10000"/>
            </label>
            <div className={style.buttonContainer}>
                <button className={style.button}><MdSend aria-label="Send"/></button>
                <div className={style.social}>
                    <FaSoundcloud/>
                    <FaYoutube/>
                    <FaGithub/>
                </div>
            </div>
        </div>
    )
}

export default Footer
