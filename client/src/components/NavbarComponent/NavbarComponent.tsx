import { useState, useEffect, useRef } from 'react'
import styles from './NavbarComponent.module.css'
import NotificationComponent from '../NotificationComponent/NotificationComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons'

interface NavbarProps {
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

const NavbarComponent: React.FC<NavbarProps> = ({sidebarCollapsed, toggleSidebar}) => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);
    
    const toggleNotifications = () => {
        setShowNotifications(prev => !prev);
    };

    const toggleMobileSearch = () => {
        setShowMobileSearch(prev => !prev);
        //focus the input when search bar is shown
        setTimeout(() => {
            if (!showMobileSearch && searchInputRef.current) {
                searchInputRef.current.focus();
            }
        }, 100);
    };

    //close notifications when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as Element;
        if (!target.closest(`.${styles.notificationIcon}`) && showNotifications) {
            setShowNotifications(false);
        }
        
        //close mobile search when clicking outside
        if (!target.closest(`.${styles.searchContainer}`) && 
            !target.closest(`.${styles.mobileSearchOverlay}`) && 
            showMobileSearch) {
            setShowMobileSearch(false);
        }
    };

    //handle window resize to close mobile search when returning to desktop size
    const handleResize = () => {
        
        const desktopBreakpoint = 768;
        
        if (window.innerWidth >= desktopBreakpoint && showMobileSearch) {
            setShowMobileSearch(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        window.addEventListener('resize', handleResize);
        
        return () => {
            document.removeEventListener('click', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, [showNotifications, showMobileSearch]);

  return (
    <div className={styles.navbar}>
        <div className={styles.navbarLeft}>
            <button 
                className={styles.toggleButton} 
                onClick={toggleSidebar}
                aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
            </button>
            
            {/* desktop search bar */}
            <div className={styles.searchBar}>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder='Search patients, medicines...' />
            </div>
        </div>
       
        
        {/* mobile search overlay - moved outside navbar structure */}
        {
            showMobileSearch && (
                <div className={styles.mobileSearchOverlay}>
                    <div className={styles.mobileSearchBar}>
                        <FontAwesomeIcon icon={faSearch} />
                        <input 
                            ref={searchInputRef}
                            type="text" 
                            placeholder='Search patients, medicines...' 
                        />
                    </div>
                </div>
            )
        }
        <div className={styles.navbarRight}>
            {/* mobile search icon & bar */}
            <div className={styles.searchContainer}>
                <div className={styles.mobileSearchIcon} onClick={toggleMobileSearch}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
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