import React, { useState } from 'react'
import styles from './NavigationComponent.module.css'
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import rpcLogo from '../../assets/icons/rpc-logo.png';


function NavigationComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };


  return (
    <nav className={styles.nav}>
        <div className={styles.navContainer}>
            <div className={styles.logoArea}>
                <img src={rpcLogo} alt="RPC Logo" />
            </div>
            
            
            <div className={styles.desktopMenu}>
                <div className={styles.navLinks}>
                    <Link to='/' className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>Home</Link>
                    <Link to='/about' className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}>About</Link>
                    <Link to='/services' className={`${styles.navLink} ${isActive('/services') ? styles.active : ''}`}>Services</Link>
                    <Link to='/contact' className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}>Contact</Link>
                </div>
                
                <div className={styles.authLinks}>
                    <Link to='/login' className={`${styles.loginLink} ${isActive('/login') ? styles.active : ''}`}>
                        <FontAwesomeIcon icon={faUser} className={styles.authIcon} />
                        Login
                    </Link>
                    <Link to='/signup' className={`${styles.signupLink} ${isActive('/signup') ? styles.active : ''}`}>Sign Up</Link>
                </div>
            </div>
            
            <button className={styles.menuToggle} onClick={toggleMenu} aria-label='Toggle menu'>
                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
            
            {/*mobile menu overlay */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
                <div className={styles.mobileNavLinks}>
                    <Link to='/' 
                          className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
                          onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link to='/about' 
                          className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
                          onClick={toggleMenu}>
                        About
                    </Link>
                    <Link to='/services' 
                          className={`${styles.navLink} ${isActive('/services') ? styles.active : ''}`}
                          onClick={toggleMenu}>
                        Services
                    </Link>
                    <Link to='/contact' 
                          className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
                          onClick={toggleMenu}>
                        Contact
                    </Link>
                </div>
                
                <div className={styles.mobileAuthLinks}>
                    <Link to='/login' 
                          className={`${styles.loginLink} ${isActive('/login') ? styles.active : ''}`}
                          onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faUser} className={styles.authIcon} />
                        Login
                    </Link>
                    <Link to='/signup' 
                          className={`${styles.signupLink} ${isActive('/signup') ? styles.active : ''}`}
                          onClick={toggleMenu}>
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavigationComponent