import React from 'react'
import cart from '../assets/cart.jpg'
import styles from '../styles/style.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h3>Welcome to KiaKia</h3>
        <p>Your number one stop store.Kasd ut nonumy ipsum clita nonumy et, labore consetetur et dolores magna sit magna lorem amet vero, sit dolor erat sanctus takimata diam rebum. Kasd et dolores kasd duo, vero eirmod diam dolor at et sed labore. Sadipscing elitr no clita tempor no et eos. </p>
      </div>
      <div>
          <img src={cart} alt="" className={styles.img} />
      </div>
    </div>
  )
}

export default Hero
