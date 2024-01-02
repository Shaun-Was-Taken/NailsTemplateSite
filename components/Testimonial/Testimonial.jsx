import styles from "./Testimonial.module.css";

export default function Testimonial() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1>Kind Words From Our Clients</h1>
          <div className={styles.testimonialContainer}>
            <div className={styles.testimonial}>
              <p>
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&quot;
              </p>
              <p className={styles.author}>- XXXXX. ⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.testimonial}>
              <p>
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. &quot;
              </p>
              <p className={styles.author}>- XXXXX. ⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.testimonial}>
              <p>
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .&quot;
              </p>
              <p className={styles.author}>- XXXXX. ⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.linebreak}></div>
    </>
  );
}
