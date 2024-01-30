import React, { useEffect, useState } from 'react'
import styles from './nav.module.scss'
import Image from "next/image"
import logo from "../../../public/southernplanner-logo-removebg-preview.png"
import icon from "../../../public/southernplanner-icon-logo.png"
import { motion, useMotionValue, useMotionValueEvent, useScroll } from 'framer-motion'

export default function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if(latest > previous && latest > 150){
      setHidden(true);
    }else{
      setHidden(false);
    }
  })
  
  return (
    <motion.div
      variants={{ 
        visible: { backgroundColor: "rgba(255, 255, 255, 1)" },
        hidden: { backgroundColor: "rgba(255, 255, 255, 0)" }
      }}
      animate={hidden?'hidden':'visible'}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className={styles.wrapper}>

      <div className={styles.icon}>
        <Image className={styles.icon_image} src={icon}/>
      </div>
      <motion.div 
         variants={{ 
          visible: { opacity: 1 },
          hidden: { opacity: 0 }
        }}
        animate={hidden?'hidden':'visible'}
        transition={{ duration: 0.6, ease: 'easeInOut' }}

        className={styles.menu_wrapper}>
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
      </motion.div>
      <div className={styles.hamburger}>
          <a href="#">
            <span></span>
            <span></span>
          </a>
      </div>
    </motion.div>
  )
}
