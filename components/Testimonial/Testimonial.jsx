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
                &quot;I walked in just before they closed and they still took
                me. My nails are beautiful they were so kind and personable.
                Definitely going back! 10 out of 10 recommend!&quot;
              </p>
              <p className={styles.author}>- Marcar P. ⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.testimonial}>
              <p>
                &quot;This was my first visit. The ladies here are wonderful and
                do a great job making you feel fabulous. Their salon is clean
                and comfortable. These ladies are so nice and professional. I
                recommend that you make an appointment because Lush Nails Spa is
                a popular place. I will be back.&quot;
              </p>
              <p className={styles.author}>- Melody F. ⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.testimonial}>
              <p>
                &quot;I saw Sonia and she did an amazing job on my dip set. I
                loved how friendly and happy the atmosphere was. My nails still
                look freshly done a week later. They have extremely talented
                nail techs and do a terrific job.&quot;
              </p>
              <p className={styles.author}>- Babe S. ⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.linebreak}></div>
    </>
  );
}
