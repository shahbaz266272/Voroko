import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faSearchLocation,
  faCheckDouble,
  faListOl,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import Pricing from "../components/pricing";
import ReadyX from "../components/ready";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Varoko | Home</title>
        <meta name="keywords" content="varoko" />
      </Head>
      <div>
        {/* Header start */}
        <Header />
        {/* Header End */}
      </div>
      {/* 1st Text Section  */}
      <div className={styles.startcontent}>
        <h2 className={styles.stheading}> How Varoko Order Works</h2>
        <p className={styles.stcontent}>
          Ordering online has never been this easy
        </p>
      </div>

      {/* ICONS */}

      <div className={styles.iconz}>
        <div>
          <div className={styles.iconA}>
            <FontAwesomeIcon icon={faBuilding} color="#B91569" size="3x" />
          </div>
          <h4 className={styles.text}>
            Enter Building <br />
            Name
          </h4>
        </div>

        <hr className={styles.hr} />

        <div>
          <div className={styles.iconA}>
            <FontAwesomeIcon
              icon={faSearchLocation}
              color="#B91569"
              size="3x"
            />
          </div>
          <h4 className={styles.text}>
            Select Store
            <br />
            Type
          </h4>
        </div>
        <hr className={styles.hr} />
        <div>
          <div className={styles.iconA}>
            <FontAwesomeIcon icon={faListOl} color="#B91569" size="3x" />
          </div>
          <h4 className={styles.text}>
            Place Multiple <br />
            Orders
          </h4>
        </div>
        <hr className={styles.hr} />
        <div>
          <div className={styles.iconA}>
            <FontAwesomeIcon icon={faCheckDouble} color="#B91569" size="3x" />
          </div>
          <h4 className={styles.text}>
            Confirn Your <br />
            Order
          </h4>
        </div>
        <hr className={styles.hr} />
        <div className={styles.align}>
          <div className={styles.iconA}>
            <FontAwesomeIcon icon={faTaxi} color="#B91569" size="3x" />
          </div>
          <h4 className={styles.text}>
            Delivered At <br /> Your DoorStep
          </h4>
        </div>
      </div>
      {/* Iconz End */}

{/* Pricing Section */}

<div >
  
  < Pricing  />
</div>

{/* about section */}
<div className={styles.about}>
  <h2>About Voroko</h2>
  <div className={styles.contentx}>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
  </div>
 
</div>
 <div>
   <ReadyX />
 </div>
    </div>
  );
}
