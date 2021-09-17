import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTaxi,
  faStoreAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/pricing.module.css";


function Pricing() {
  return (
   
      <div className={styles.pricing__section}>
        <div className={styles.pricing__wrapper}>
          {/* <h1 className={styles.pricing__heading}>Pricing</h1> */}
          <div className={styles.pricing__container}>
           
              <div className={styles.pricing__container_cardInfo}>
                <div className={styles.icon}>
                <FontAwesomeIcon icon={faUser} color="#B91569" size="2x" />
                </div>
                <h3>User</h3>
                <h4>$30</h4>
                <h5>per month</h5>
                <p>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. Aperiam, <br />
                nesciunt? Iure, laboriosam eius.
                     </p>
                     <hr className={styles.hr} />
                <ul className={styles. pricingLi}>
                  <li>5 Active Events</li>
                  <li>30 Days Trial</li>
                  <li>_</li>
                  <li>_</li>
                </ul>
                <hr className={styles.hr} />
                <button className={styles.btn}>
                  LET's TRY
                </button>
              </div>
           
          
              <div className={styles.pricing__container_cardInfo}>
                <div className={styles.icon}>
                <FontAwesomeIcon icon={faTaxi} color="#B91569" size="2x" />
                </div>
                <h3>Driver</h3>
                <h4>$40</h4>
                <h5>per month</h5>
                <p>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. Aperiam, <br />
                nesciunt? Iure, laboriosam eius.
                     </p>
                      <hr className={styles.hr} />
                <ul className={styles. pricingLi}>
                  <li>5 Active Events</li>
                  <li>30 Days Trial</li>
                  <li>No Booking Fees</li>
                  <li>_</li>
                </ul>
                 <hr className={styles.hr} />
                <button className={styles.btn}>
                  LET's TRY
                </button>
              </div>
            
           
              <div className={styles.pricing__container_cardInfo}>
                <div className={styles.icon}>
                <FontAwesomeIcon icon={faStoreAlt} color="#B91569" size="2x" />
                </div>
                <h3>Store</h3>
                <h4>$60</h4>
                <h5>per month</h5>
                <p>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. Aperiam, <br />
                nesciunt? Iure, laboriosam eius.
                     </p>
                      <hr className={styles.hr} />
                <ul className={styles. pricingLi}>
                <li>5 Active Events</li>
                  <li>30 Days Trial</li>
                  <li>No Booking Fees</li>
                  <li>30 Days Trial</li>
                </ul>
                 <hr className={styles.hr} />
                <button className={styles.btn}>
                  LET's TRY
                </button>
              </div>
            
          </div>
        </div>
      </div>
   
  );
}
export default Pricing;