'use client';
import Image from 'next/image'
import styles from './page.module.scss'
import Hero from "@/components/Hero"
import About from "@/components/About";
import Weddings from "@/components/Weddings";
import HappyClients from "@/components/HappyClients";
import Services from "@/components/Services";

export default function Home() {

  return (
    <main className={styles.main}>
      <Hero/>
      <About/>
      <Weddings/>
      <HappyClients/>
      <Services/>
    </main>
  )
}

