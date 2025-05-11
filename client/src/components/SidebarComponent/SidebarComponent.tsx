import { useState, useEffect } from 'react'
import styles from './SidebarComponent.module.css'
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faClinicMedical, 
    faTachometerAlt, 
    faCalendarCheck, 
    faProcedures, 
    faPills, 
    faSignOutAlt, 
    faArchive,
    faBars,
    faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

const SidebarComponent: React.FC<SidebarProps> = ({sidebarCollapsed, toggleSidebar}) => {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(false);
    
    //check if screen size is mobile
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        //initial check
        checkScreenSize();
        
        //add event listener
        window.addEventListener('resize', checkScreenSize);
        
        //cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    
    const isActive = (path: string): boolean => location.pathname === path;

  return (
    <> 
        {
            isMobile && sidebarCollapsed && (
                <button 
                    className={styles.mobileToggle}
                    onClick={toggleSidebar}
                    aria-label='Open sidebar'
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            )
        }
    
        <div className={`
            ${styles.sidebar} 
            ${sidebarCollapsed ? styles.collapsed : ''} 
            ${isMobile && sidebarCollapsed ? styles.hidden : ''}
        `}>
            <div className={styles.sidebarHeader}>
                <h2>
                    <FontAwesomeIcon icon={faClinicMedical} color='#4169ff' size='1x' />
                    <span className={styles.logoText}>Dr. Nice</span>
                </h2>
                
                {/* toggle button */}
                <button 
                    className={styles.toggleButton}
                    onClick={toggleSidebar}
                    aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            </div>

            <div className={styles.sidebarMenu}>
                <div className={styles.menuTitle}>NAVIGATION</div>

                <Link
                    to='/dashboard'
                    className={`${styles.menuItem} ${isActive('/dashboard') ? styles.active : ''}`}
                    title='Dashboard'
                >
                    <FontAwesomeIcon icon={faTachometerAlt} color='#94a3b8' />
                    <span className={styles.menuText}>Dashboard</span>
                </Link>

                <Link
                    to='/appointments'
                    className={`${styles.menuItem} ${isActive('/appointments') ? styles.active : ''}`}
                    title='Appointments'
                >
                    <FontAwesomeIcon icon={faCalendarCheck} color='#94a3b8' />
                    <span className={styles.menuText}>Appointments</span>
                </Link>

                <Link
                    to='/patients'
                    className={`${styles.menuItem} ${isActive('/patients') ? styles.active : ''}`}
                    title='Patients'
                >
                    <FontAwesomeIcon icon={faProcedures} color='#94a3b8' />
                    <span className={styles.menuText}>Patients</span>
                </Link>

                <Link
                    to='/inventory'
                    className={`${styles.menuItem} ${isActive('/inventory') ? styles.active : ''}`}
                    title='Inventory'
                >
                    <FontAwesomeIcon icon={faPills} color='#94a3b8' />
                    <span className={styles.menuText}>Inventory</span>
                </Link>

                <Link
                    to='/archives'
                    className={`${styles.menuItem} ${isActive('/archives') ? styles.active : ''}`}
                    title='Archive'
                >
                    <FontAwesomeIcon icon={faArchive} color='#94a3b8' />
                    <span className={styles.menuText}>Archive</span>
                </Link>

                <Link
                    to='/'
                    className={styles.menuItem}
                    title='Logout'
                >
                    <FontAwesomeIcon icon={faSignOutAlt} color='#94a3b8' />
                    <span className={styles.menuText}>Logout</span>
                </Link>
            </div>
        </div>
    </>
  )
}

export default SidebarComponent