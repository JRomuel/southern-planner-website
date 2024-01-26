import React from 'react'
import styles from './asides.module.scss'

export default function Asides() {
  return (
    <>
        <aside className={`${styles.laside} ${styles.aside}`}>
            <a className={styles.aside_content} href="#" data-cursor="link" data-cursor-caption="#MyWorld">
                <span class="aside-link"><span><strong>#</strong>SouthernPlanners</span></span>
            </a>
        </aside>
        <aside className={`${styles.raside} ${styles.aside}`}>
            <a className={styles.aside_content} href="#" data-cursor="link" data-cursor-caption="#MyWorld">
                <span class="aside-link"><span><strong>#</strong>MyWorld</span></span>
            </a>
        </aside>
    </>
  )
}
