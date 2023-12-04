'use client';
import Image from 'next/image'
import styles from './page.module.scss'
import { useEffect } from 'react'
import Banner from './components/Banner';

export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])


  return (
    <main className={styles.main}>
      <Banner/>
      <div></div>
      <div></div>
    </main>
  )
}
