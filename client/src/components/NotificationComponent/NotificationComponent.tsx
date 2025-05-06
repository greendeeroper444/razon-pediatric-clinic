import React from 'react'
import styles from './NotificationComponent.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faPrescriptionBottleAlt, faFolder, faCheckDouble } from '@fortawesome/free-solid-svg-icons'

function NotificationComponent({isVisible}) {
   
    const notifications = [
        {
            id: 1,
            type: 'appointment',
            title: 'New Appointment',
            message: 'John Doe scheduled an appointment for tomorrow at 10:00 AM',
            time: '5 min ago',
            isRead: false
        },
        {
            id: 2,
            type: 'medical',
            title: 'Prescription Refill',
            message: 'Sarah Wilson requested a prescription refill for Amoxicillin',
            time: '1 hour ago',
            isRead: false
        },
        {
            id: 3,
            type: 'archive',
            title: 'Patient Records Updated',
            message: 'Medical history for Michael Brown has been updated',
            time: '3 hours ago',
            isRead: true
        }
    ];

    if (!isVisible) return null;

  return (
    <div className={styles.notificationPanel}>
        <div className={styles.notificationHeader}>
            <h3>Notifications</h3>
            <span className={styles.notificationCount}>{notifications.filter(n => !n.isRead).length} new</span>
        </div>
        
        <div className={styles.notificationList}>
            {
                notifications.map(notification => (
                    <div 
                        key={notification.id} 
                        className={`${styles.notificationItem} ${!notification.isRead ? styles.unread : ''}`}
                    >
                        <div className={`${styles.notificationIcon} ${styles[notification.type]}`}>
                            {notification.type === 'appointment' && <FontAwesomeIcon icon={faCalendar} />}
                            {notification.type === 'medical' && <FontAwesomeIcon icon={faPrescriptionBottleAlt} />}
                            {notification.type === 'archive' && <FontAwesomeIcon icon={faFolder} />}
                        </div>
                        <div className={styles.notificationContent}>
                            <div className={styles.notificationTitle}>{notification.title}</div>
                            <div className={styles.notificationMessage}>{notification.message}</div>
                            <div className={styles.notificationTime}>{notification.time}</div>
                        </div>
                        {!notification.isRead && <div className={styles.unreadDot}></div>}
                    </div>
                ))
            }
        </div>
        
        <div className={styles.notificationFooter}>
            <button className={styles.markAllRead}>
                <FontAwesomeIcon icon={faCheckDouble} /> Mark all as read
            </button>
            <button className={styles.viewAll}>
                View all
            </button>
        </div>
    </div>
  )
}

export default NotificationComponent