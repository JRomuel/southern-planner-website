import React from 'react'
import styles from './styles.module.scss'
import Button from '../Common/Button'

function Banner() {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.banner_background}></div>
        <div className="container mx-auto">
          <div className={styles.banner_content}>
            <div>
              <p>Hello</p>
              <h1 className={styles.main_title}>Let us Plan<br/> Your Wedding</h1>
              <p className={styles.sub_title}>Congratulations, you’re getting married! This is a time for joy, so definitely take it all in for life.</p>
              <Button/>
            </div>
    
          </div>
        </div>
   
      </div>
    </>
   
  )
}

export default Banner