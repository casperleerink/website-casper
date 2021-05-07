import React from "react"
import style from "../styling/Footer.module.css"
import { MdSend } from "react-icons/md"
import { FaSoundcloud, FaYoutube, FaGithub, FaMedium } from "react-icons/fa"

function Footer() {
  return (
    <form
      name="Contact Form"
      method="POST"
      data-netlify="true"
      className={style.container}
    >
      <input type="hidden" name="form-name" value="Contact Form" />
      <h1>Contact Me!</h1>
      <label className={style.email}>
        Your E-Mail
        <input type="email" name="email" />
      </label>
      <label className={style.message}>
        Message
        <textarea name="message" rows="6" maxLength="10000" />
      </label>
      <div className={style.buttonContainer}>
        <button className={style.button} type="submit">
          <MdSend aria-label="Send" />
        </button>
        <div className={style.social}>
          <a
            href="https://casperleerink.medium.com/"
            target="__blank"
            aria-label="Medium"
          >
            <FaMedium />
          </a>
          <a
            href="https://soundcloud.com/casper-leerink"
            target="__blank"
            aria-label="Soundcloud"
          >
            <FaSoundcloud />
          </a>
          <a
            href="https://www.youtube.com/channel/UC0dDP_jMQ8_U8Mm81o1YgXA"
            target="__blank"
            aria-label="Youtube Channel"
          >
            <FaYoutube />
          </a>
          <a
            href="https://github.com/casperleerink"
            target="__blank"
            aria-label="Github"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </form>
  )
}

export default Footer
