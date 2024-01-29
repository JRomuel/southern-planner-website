import React from 'react'
import styles from './nav.module.scss'
import Image from "next/image"
import logo from "../../../public/southernplanner-logo-removebg-preview.png"
import icon from "../../../public/southernplanner-icon-logo.png"

export default function Nav() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <Image className={styles.icon_image} src={icon}/>
      </div>
      <div className={styles.menu_wrapper}>
        <div className={styles.logo}>
          <Image src={logo} style={{width:'auto', height:"100%"}}/>
        </div>
        <div className={styles.menu}>
          <ul>
            <li><a href="">About</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Services</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.hamburger}>
          <a href="#">
            <span></span>
            <span></span>
          </a>
      </div>
    </div>
  )
}
