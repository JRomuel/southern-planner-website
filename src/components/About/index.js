import Image from "next/image"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import about_image from "../../../public/images/about-image.jpg"
import styles from './about.module.scss'


export default function About() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end start']
  })
  const speed = useTransform(scrollYProgress, [0, 1], [0, 320]);


  return (
    <section ref={container} className="section">
        <div className="container">
          <div className={styles.content_wrapper}>
            <div className={styles.parallax_image}>
                <figure className={styles.figure}>
                  <motion.div 
                    style={{y: speed, scale: 1.4}} 
                    className={styles.image_wrapper}>
                    <Image 
                        className={styles.image}
                        src={about_image} 
                        placeholder="blur"/>
                  </motion.div>
                </figure>
            </div>
            <div className={styles.text_content}>
                <h3 className={`${styles.title} section-title`}>Southern Planners</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            </div>
          </div>

        </div>

        <div style={{height: '100vh'}}>
          
        </div>
    </section>
  )
}
