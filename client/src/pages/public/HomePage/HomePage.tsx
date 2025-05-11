import styles from './HomePage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faUserMd, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import FooterComponent from '../../../components/FooterComponent/FooterComponent';

const HomePage = () => {
  return (
    <div>
        <section className={styles.hero}>
            <h1>Book Your Appointment Online</h1>
            <p>Accessible. Reliable. Fast healthcare booking at your fingertips.</p>
            <button className={styles.btnPrimary}>Book Now</button>
        </section>

        <section className={styles.features}>
            <h2>Why Choose MediCare?</h2>
            <div className={styles.featureGrid}>
                <div className={styles.featureCard}>
                    <FontAwesomeIcon icon={faCalendarCheck} className={styles.featureIcon} />
                    <h3>Easy Booking</h3>
                    <p>
                    Set appointments online anytime, anywhere with just a few clicks.
                    </p>
                </div>
                <div className={styles.featureCard}>
                    <FontAwesomeIcon icon={faUserMd} className={styles.featureIcon} />
                    <h3>Professional Doctors</h3>
                    <p>Meet our experienced and licensed medical practitioners.</p>
                </div>
                <div className={styles.featureCard}>
                    <FontAwesomeIcon icon={faShieldAlt} className={styles.featureIcon} />
                    <h3>Safe & Secure</h3>
                    <p>Your medical data is protected with strict confidentiality.</p>
                </div>
            </div>
        </section>

        <FooterComponent />
    </div>
  )
}

export default HomePage