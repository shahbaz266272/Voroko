import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div>
      <div className={styles.trip}>
        <div className={styles.buton}>
          <button className={styles.btnx}>Login</button>
          <button className={styles.btn}>SignUp</button>
        </div>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="site logo" width={141} height={141} />
        </div>
        <div>
          <h1 className={styles.heading}>Anything, Anytime, Anywhere</h1>
          <p className={styles.para}>
            Food, Drinks and Groceries available for delivery and pickup
          </p>
        </div>
        <div className={styles.searchbar}>
          <input
            type="search"
            className={styles.search}
            placeholder=" type your building adress here..."
          />
          <button className={styles.btn}>Find Food</button>
        </div>
      </div>
    </div>
  );
}
