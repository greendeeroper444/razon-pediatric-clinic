import React from 'react'
import styles from './AboutPage.module.css'
import { Link } from 'react-router-dom'
import NavigationComponent from '../../components/NavigationComponent/NavigationComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHeart, 
    faStethoscope, 
    faUsers, 
    faShieldAlt, 
    faQuoteLeft
} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebookF,
    faInstagram,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'

function AboutPage() {
  return (
    <div className={styles.aboutPageContainer}>

        <main className={styles.aboutContent}>
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1>Your Child's Health Is Our Priority</h1>
                    <p>Providing compassionate and comprehensive pediatric care since 1995</p>
                </div>
            </section>

            <section className={styles.missionSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeading}>
                        <h2>Our Mission</h2>
                        <div className={styles.underline}></div>
                    </div>
                    <p>At Razon Pediatric Clinic, we are dedicated to providing exceptional healthcare for infants, children, and adolescents in a warm and supportive environment. We believe in treating every child with the same level of care and attention we would give our own families.</p>
                </div>
            </section>

            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeading}>
                        <h2>Our Core Values</h2>
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                            <h3>Compassion</h3>
                            <p>We provide care with kindness, empathy, and respect for all children and their families.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <FontAwesomeIcon icon={faStethoscope} />
                            </div>
                            <h3>Excellence</h3>
                            <p>We are committed to the highest standards of medical care and continuous professional development.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <FontAwesomeIcon icon={faUsers} />
                            </div>
                            <h3>Family-Centered</h3>
                            <p>We recognize the family as an essential part of every child's care and well-being.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <FontAwesomeIcon icon={faShieldAlt} />
                            </div>
                            <h3>Trust</h3>
                            <p>We build lasting relationships based on honesty, integrity, and transparent communication.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.teamSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeading}>
                        <h2>Meet Our Specialists</h2>
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles.teamGrid}>
                        <div className={styles.teamMember}>
                            <div className={styles.memberImage}></div>
                            <h3>Dr. Maria Razon</h3>
                            <p className={styles.memberTitle}>Lead Pediatrician</p>
                            <p>Board Certified with over 20 years of experience in pediatric care.</p>
                        </div>
                        <div className={styles.teamMember}>
                            <div className={styles.memberImage}></div>
                            <h3>Dr. James Stevens</h3>
                            <p className={styles.memberTitle}>Pediatric Specialist</p>
                            <p>Specializing in pediatric behavioral health and development.</p>
                        </div>
                        <div className={styles.teamMember}>
                            <div className={styles.memberImage}></div>
                            <h3>Dr. Sarah Chen</h3>
                            <p className={styles.memberTitle}>Pediatric Nutritionist</p>
                            <p>Expert in childhood nutrition and growth development.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.testimonialSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeading}>
                        <h2>What Parents Say</h2>
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles.testimonialCard}>
                        <div className={styles.quoteIcon}>
                            <FontAwesomeIcon icon={faQuoteLeft} />
                        </div>
                        <p className={styles.testimonialText}>
                            "Dr. Razon and her team have been caring for my three children for over a decade. Their expertise, patience, and genuine concern for my children's wellbeing is unmatched."
                        </p>
                        <p className={styles.testimonialAuthor}>- Jennifer P., Parent</p>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <h2>Schedule Your Visit Today</h2>
                    <p>We're accepting new patients and would be honored to care for your child.</p>
                    <Link to="/appointments" className={styles.ctaButton}>Book an Appointment</Link>
                </div>
            </section>
        </main>

        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerGrid}>
                    <div className={styles.footerCol}>
                        <h3>Razon Pediatric Clinic</h3>
                        <p>123 Healing Way, Suite 200<br/>Wellness City, CA 90000</p>
                    </div>
                    <div className={styles.footerCol}>
                        <h3>Hours</h3>
                        <p>Monday - Friday: 8am - 5pm<br/>Saturday: 9am - 1pm<br/>Sunday: Closed</p>
                    </div>
                    <div className={styles.footerCol}>
                        <h3>Contact</h3>
                        <p>Phone: (555) 123-4567<br/>Email: info@razonpediatrics.com</p>
                    </div>
                    <div className={styles.footerCol}>
                        <h3>Follow Us</h3>
                        <div className={styles.socialIcons}>
                            <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} Razon Pediatric Clinic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default AboutPage