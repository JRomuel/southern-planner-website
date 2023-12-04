import React from 'react'
import Nav from './Nav'
import Logo from './Logo'
import styles from './styles.module.scss'

function Header() {
  return (
    <div className={styles.nav_wrapper}>
        <Logo/>
    </div>
  )
}

export default Header