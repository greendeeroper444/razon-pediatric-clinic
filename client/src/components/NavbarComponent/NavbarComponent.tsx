import { useState, useEffect } from 'react'
import styles from './NavbarComponent.module.css'
import NotificationComponent from '../NotificationComponent/NotificationComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const NavbarComponent = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleNotifications = () => {
        setShowNotifications(prev => !prev);
    };

    //close notifications when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as Element;
        if (!target.closest(`.${styles.notificationIcon}`) && showNotifications) {
            setShowNotifications(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showNotifications]);

  return (
    <div className={styles.navbar}>
        <div className={styles.navbarLeft}>
            <div className={styles.searchBar}>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder="Search patients, medicines..." />
            </div>
        </div>
        <div className={styles.navbarRight}>
            <div className={styles.notificationIcon} onClick={toggleNotifications}>
                <FontAwesomeIcon icon={faBell} />
                <span className={styles.notificationBadge}>2</span>
                <NotificationComponent isVisible={showNotifications} />
            </div>
            <div className={styles.userProfile}>
                <div className={styles.userAvatar}>AD</div>
                <div className={styles.userName}>Admin</div>
                <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8rem' }} />
            </div>
        </div>
    </div>
  )
}

export default NavbarComponent