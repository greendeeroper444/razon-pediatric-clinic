import React from 'react'
import styles from './SidebarComponent.module.css'
import { Link, useLocation } from 'react-router-dom'
import { CircleDot, Calendar, Image, Pill, LogOut } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faClinicMedical, 
    faTachometerAlt, 
    faCalendarCheck, 
    faProcedures, 
    faPills, 
    faSignOutAlt, 
    faArchive
} from '@fortawesome/free-solid-svg-icons';

function SidebarComponent() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
            <h2>
                <FontAwesomeIcon icon={faClinicMedical} color='#4169ff' size="1x" />
                <span className={styles.logoText}>Dr. Nice</span>
            </h2>
        </div>

        <div className={styles.sidebarMenu}>
            <div className={styles.menuTitle}>NAVIGATION</div>

            <Link
                to='/dashboard'
                className={`${styles.menuItem} ${isActive('/dashboard') ? styles.active : ''}`}
            >
                <FontAwesomeIcon icon={faTachometerAlt} color='#94a3b8' />
                <span>Dashboard</span>
            </Link>

            <Link
                to='/appointments'
                className={`${styles.menuItem} ${isActive('/appointments') ? styles.active : ''}`}
            >
                <FontAwesomeIcon icon={faCalendarCheck} color='#94a3b8' />
                <span>Appointments</span>
            </Link>

            <Link
                to='/patients'
                className={`${styles.menuItem} ${isActive('/patients') ? styles.active : ''}`}
            >
                <FontAwesomeIcon icon={faProcedures} color='#94a3b8' />
                <span>Patients</span>
            </Link>

            <Link
                to='/inventory'
                className={`${styles.menuItem} ${isActive('/inventory') ? styles.active : ''}`}
            >
                <FontAwesomeIcon icon={faPills} color='#94a3b8' />
                <span>Inventory</span>
            </Link>

            <Link
                to='/archives'
                className={`${styles.menuItem} ${isActive('/archives') ? styles.active : ''}`}
            >
                <FontAwesomeIcon icon={faArchive} color='#94a3b8' />
                <span>Archive</span>
            </Link>

            <Link
                to='/logout'
                className={styles.menuItem}
            >
                <FontAwesomeIcon icon={faSignOutAlt} color='#94a3b8' />
                <span>Logout</span>
            </Link>
        </div>
    </div>
  )
}

export default SidebarComponent