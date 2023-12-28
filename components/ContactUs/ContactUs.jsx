// pages/contactus.js

import Link from "next/link";
import styles from "./ContactUs.module.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Intro from "../Intro";

export default function ContactUs() {
  return (
    <div className={styles.allContainer}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <div className={styles.title}>
            <h1>We would love to</h1>
            <h1>
              hear <span>from you!</span>
            </h1>
          </div>

          <div className={styles.infoBox}>
            <div className={styles.infoBoxContainer}>
              <p>
                <span>Phone:</span> (XXX) Your-Number
              </p>
            </div>
            <div className={styles.infoBoxContainer}>
              <p>
                <span>Email: </span>
                example@email.com
              </p>
            </div>
            <div className={styles.SocialBoxContainer}>
              <p>
                <span>Social: </span>
              </p>

              <div className={styles.social}>
                <Link href={"/"} className={styles.link}>
                  <FaInstagram className={styles.icons} size={35} />
                </Link>
                <Link href={"/"} className={styles.link}>
                  <FaFacebook className={styles.icons} size={35} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.map}>
          <Intro />
        </div>
      </div>
    </div>
  );
}
