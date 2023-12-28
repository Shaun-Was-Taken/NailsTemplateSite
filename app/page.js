import React from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Testimonial from "@/components/Testimonial/Testimonial";
import PriceAcrylic from "@/components/PriceAcrylic/PriceAcrylic";
import ContactUs from "@/components/ContactUs/ContactUs";
//import hand from "../public/hand.png";

export default function Home() {
  return (
    <>
      <div className={styles.mainContainer}>
        <main className={styles.container}>
          <div className={styles.logoImageContainer}>
            <Image
              className={styles.logo}
              src="/pink_logo.png"
              width={144}
              height={131}
              alt="PinkLotus Logo"
            />
            <div className={styles.logoText}>
              <p>Store Name</p>
              <small>Nails Salon</small>
            </div>
          </div>

          <div className={styles.titleContainer}>
            <div className={styles.text}>
              <div className={styles.wordContainer}>
                <div className={styles.h1Container}>
                  <h1>Give yourself a </h1>
                  <h1>little pampering</h1>
                </div>
                <div className={styles.pContainer}>
                  <p>Relax, sit back, get your nails done—we got you!</p>
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <Link
                  href={
                    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0aFTQ3nnG2zLf4vAKQalSi39Oc1SlYFzorY5Cd-ZtHUENN-Pva2OD6wn5C01ayLAm4rakfv7F1"
                  }
                  className={styles.link}
                >
                  Book An Appointment
                </Link>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                className={styles.img}
                src="/hand_large.png"
                layout="fill"
                alt="Hand Image"
              />
            </div>
          </div>
        </main>
      </div>
      <Testimonial />
      <PriceAcrylic />
      <ContactUs />
    </>
  );
}
