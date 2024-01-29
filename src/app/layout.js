'use client'

import { Poppins } from 'next/font/google'
import './globals.css'
import { useEffect, useRef } from 'react'
import Nav from "@/components/Nav"
import Lenis from '@studio-freight/lenis'
import Asides from "@/components/Asides"
import StickyCursor from "@/components/StickyCursor"

const poppins =  Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {

  useEffect( () => {
      const lenis = new Lenis()
      
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      
      requestAnimationFrame(raf)
  }, [])


  return (
    <html lang="en">
      <body className={poppins.className}>
        <StickyCursor/>
        <Nav/>
        <Asides/>
        {children}
        
      </body>
    </html>
  )
}
