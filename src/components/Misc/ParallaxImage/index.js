import React from 'react'
import Image from "next/image"
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './parallax_image.module.scss'


export default function ParallaxImage({src, container, alt, label}) {

  const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end start']
  })
  const speed = useTransform(scrollYProgress, [0, 1], [0, 320]);

  return (
    <div className={styles.parallax_image}>
        <div className={styles.label}>
          <span>{label}</span>
        </div>
        <figure className={styles.figure}>
          <motion.div 
            style={{y: speed, scale: 1.4}} 
            className={styles.image_wrapper}>
            <Image 
                className={styles.image}
                src={src} 
                placeholder="blur"
                alt={alt}/>
          </motion.div>
        </figure>
    </div>
  )
}
