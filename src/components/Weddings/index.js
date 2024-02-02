import React, { useRef } from 'react'
import ParallaxImage from "../Misc/ParallaxImage"
import styles from './weddings.module.scss'
import weddings_image from "../../../public/images/weddings-image.jpg"
import weddings_image_2 from "../../../public/images/wedding-image-2.jpg"


export default function Weddings() {
  const container = useRef(null);

  return (
    <section ref={container} className="section">
        <div className="container">
          <div className={styles.content_wrapper}>
            <div className={styles.text_content}>
                <h3 className={`${styles.title} section-title`}>Memorable Weddings</h3>
                <p className={styles.sub_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>

                <ParallaxImage src={weddings_image} container={container} alt='Southern Planners'/>

            </div>
            <div>
                <div style={{marginBottom: '70px'}}>
                    <ParallaxImage src={weddings_image_2} container={container} alt='Southern Planners'/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>

            </div>
          </div>

        </div>

        <div style={{height: '100vh'}}>
          
        </div>
    </section>
  )
}
