import React from 'react'
import classes from './hero.module.css'
import Image from 'next/image'
import hero from '../../public/assets/hero.png'

const Hero = () => {
  return (
    <div className={classes.container}>
       <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2>What better than a fish with <br />your loved ones</h2>
          <h5>
            We can help you with the experience by providing you<br /> with amazing fish.
            Silver, Highback, Crossback, Red arowana <br/>You Can Get Everything Here
          </h5>
          <div className={classes.buttons}>
            <button className={classes.orderNow}>Order Now</button>
            <button className={classes.seeMore}>See More</button>
          </div>
          <div className={classes.disclaimer}>
            We close earlier on Sunday
          </div>
        </div>
        <div className={classes.right}>
          <Image src={hero} alt="" />
        </div>
       </div>
    </div>
  )
}

export default Hero