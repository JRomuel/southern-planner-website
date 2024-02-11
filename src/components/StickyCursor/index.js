import React, { useEffect } from 'react';
import styles from './style.module.scss';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function StickyCursor() {


  const cursorSize = 36;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  //Smooth out the mouse values
  const smoothOptions = {damping: 20, stiffness: 200, mass: 0.5}
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  }


  useEffect( () => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove)
    }
  })
  return (
    <div className={styles.cursorContainer}>
      <motion.div 
        style={{
          left: smoothMouse.x, 
          top: smoothMouse.y
        }}
        className={styles.cursor}>
      </motion.div>
    </div>

  )
}
