'use client';
import Image from 'next/image'
import styles from './page.module.scss'
import Hero from "@/components/Hero"
import About from "@/components/About";

export default function Home() {

  return (
    <main className={styles.main}>
      <Hero/>
      <About/>
    </main>
  )
}

