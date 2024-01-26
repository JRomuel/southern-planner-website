import React from 'react'
import styles from './nav.module.scss'

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <p>SB</p>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>About</li>
          <li>About</li>
          <li>About</li>
        </ul>
      </div>
      <div className={styles.hamburger}>
        <div>
          menu
        </div>
      </div>
    </div>
  )
}
