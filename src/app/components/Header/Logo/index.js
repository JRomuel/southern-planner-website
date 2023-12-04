import React from 'react'
import Image from 'next/image'
import logo from '/public/images/southern-planners-logo-colored.png'

function Logo() {
  return (
    <div>
        <Image 
            src={logo}
            width={300}
            height={0}
            alt="image"
        />
    </div>
  )
}

export default Logo