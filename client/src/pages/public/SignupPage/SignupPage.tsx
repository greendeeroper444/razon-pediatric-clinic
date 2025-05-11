import { FormEvent, useState } from 'react'
import styles from './SignupPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCalendarCheck, 
    faUserMd, 
    faShieldAlt,
    faEnvelope,
    faLock,
    faEye,
    faEyeSlash, 
    faUser
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [emailOrContactNumber, setEmailOrContactNumber] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Login attempt with:', { name, emailOrContactNumber, password, rememberMe });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

  return (
    <div>

        <section className={styles.hero}>
            <div className={styles.loginContainer}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <h2 className={styles.formTitle}>Hello, welcome!</h2>
                <p className={styles.formSubtitle}>Create your account</p>
                
                <div className={styles.inputGroup}>
                    <div className={styles.inputWithIcon}>
                        <FontAwesomeIcon icon={faUser} className={styles.inputIcon} />
                        <input 
                            type='text' 
                            placeholder='Full Name' 
                            className={styles.formInput}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <div className={styles.inputWithIcon}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.inputIcon} />
                        <input 
                            type='email' 
                            placeholder='Email Address / Contact Number' 
                            className={styles.formInput}
                            value={emailOrContactNumber}
                            onChange={(e) => setEmailOrContactNumber(e.target.value)}
                            required
                        />
                    </div>
                </div>
                
                <div className={styles.inputGroup}>
                <div className={styles.inputWithIcon}>
                        <FontAwesomeIcon icon={faLock} className={styles.inputIcon} />
                        <input 
                            type={showPassword ? 'text' : 'password'} 
                            placeholder='Password' 
                            className={styles.formInput}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button 
                            type='button' 
                            className={styles.passwordToggle}
                            onClick={togglePasswordVisibility}
                            title={showPassword ? 'Hide password' : 'Show password'}
                        >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </button>
                    </div>
                </div>
                
                <div className={styles.formOptions}>
                    <div className={styles.rememberMe}>
                        <input 
                            type='checkbox' 
                            id='rememberMe' 
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label htmlFor='rememberMe'>Remember me</label>
                    </div>
                    <Link to='/forgot-password' className={styles.forgotPassword}>
                        Forgot password?
                    </Link>
                </div>
                
                <button type='submit' className={styles.loginButton}>
                    Log In
                </button>
                
                <div className={styles.formDivider}>
                    <span>or</span>
                    </div>
                    
                    <div className={styles.socialLogin}>
                    <button type='button' className={`${styles.socialButton} ${styles.googleButton}`}>
                        Continue with Google
                    </button>
                </div>
                
                <p className={styles.signupPrompt}>
                    Don't have an account? <Link to='/signup' className={styles.signupLink}>Sign up</Link>
                </p>
            </form>
            </div>
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

        <footer className={styles.footer}>&copy; 2025 MediCare Clinic. All rights reserved.</footer>
    </div>
  )
}

export default SignupPage