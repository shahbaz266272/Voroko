import React from 'react'
import styles from "../styles/ready.module.css";
import Image from 'next/image';


export default function ReadyX() {
    return (
        <div className={styles.maindiv}>
            <div className={styles.background}>
                <div className={styles.content}>
<h2>You’ve got stuff to do.<br /> We’ve got options.</h2>
<p>Get it delivered right to your door. Or, try Pickup on your way home.<br /> It’s mealtime on your time.</p>
<div className={styles.buton}>
          <button className={styles.btnx}>Order Now</button>
          <button className={styles.btn}>Find Store</button>
        
        </div>
</div>
{/* for image */}
<div className={styles.img}>
    <Image src="/imageX.png" width={450} height={450} />
</div>
            </div>

            <div className={styles.readyorder}>
            <div className={styles.readycontent}>
          <h1 className={styles.heading}>Ready To Order?</h1>
          <p className={styles.para}>
          Browse local stores and items available for delivery by<br /> entering your address below.          </p>
          <div className={styles.searchbar}>
          <input
            type="search"
            className={styles.search}
            placeholder=" type your building adress here..."
          />
          <button className={styles.btns}>Find Food</button>
        </div>
        </div>
        
            </div>
        </div>
    )
}
