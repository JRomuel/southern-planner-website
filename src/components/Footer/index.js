import React from 'react'
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.section}>
        <div className="container">
            <div className={styles.content_wrapper}>
                <div className={styles.brand}>
                    <p className={styles.title}>Southern Planners</p>
                    <p className={styles.sub_text}>Event Planner and Stylist</p>
                </div>
                <div>

                </div>
            </div>
        </div>
        <div className={styles.bottom_spacer}>

        </div>
    </footer>
  )
}
