import React from 'react'
import styles from './hero.module.scss'
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';
import { useRef } from 'react';


export default function Hero() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })


    const padding = useTransform(scrollYProgress, [0, 1], [0, 85]);

    return (
        <>
             <div ref={container} className={styles.hero}>
                <section className={styles.content}>
                    <div className={styles.bg}>
                    <video autoPlay playsInline muted loop>
                        <source src="./videos/Hero_Cluadia_720.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </div>
                    <div className={styles.text_content}>
                        <h1>Wedding Planner</h1>
                        <p>LET’S PLAN YOUR BIG DAY, STRESS FREE!</p>
                    </div>
                    <motion.div className={styles.mask} style={{borderWidth: padding}}></motion.div>
                </section>
            </div>
            <div className={styles.test_content}>
                <h1>New section</h1>
            </div>
        
        </>
   
    )
}
