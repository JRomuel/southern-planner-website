import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

function Button() {
  return (
    <div className={styles.button_holder}>
        <Link href="/" className={styles.button}>
            <span>Button</span>
        </Link>
    </div>
  )
}

export default Button