import React from 'react'
import styles from './AppointmentPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { OpenModalProps } from '../../../hooks/hook';


const AppointmentPage: React.FC<OpenModalProps> = ({openModal}) => {
    const appointments = [
        {
            id: 'PT-1001',
            patientName: 'John Doe',
            patientInitials: 'JD',
            time: '10:30 AM',
            date: 'Today',
            doctor: 'Dr. Smith',
            type: 'Checkup',
            typeClass: ''
        },
        {
            id: 'PT-2045',
            patientName: 'Mary Smith',
            patientInitials: 'MS',
            time: '11:15 AM',
            date: 'Today',
            doctor: 'Dr. Johnson',
            type: 'Follow-up',
            typeClass: 'checkup'
        },
        {
            id: 'PT-3120',
            patientName: 'Robert Johnson',
            patientInitials: 'RJ',
            time: '2:00 PM',
            date: 'Today',
            doctor: 'Dr. Williams',
            type: 'Emergency',
            typeClass: 'emergency'
        },
        {
            id: 'PT-1876',
            patientName: 'Sarah Brown',
            patientInitials: 'SB',
            time: '3:30 PM',
            date: 'Today',
            doctor: 'Dr. Anderson',
            type: 'Vaccination',
            typeClass: ''
        }
    ];
  return (
    <div className={styles.content}>
        <div className={styles.contentHeader}>
            <h1 className={styles.contentTitle}>Appointments</h1>
            <div className={styles.contentActions}>
                <button 
                    className={styles.btnPrimary} 
                    id='newAppointmentBtn' 
                    onClick={() => openModal && openModal('appointment')}
                >
                    <FontAwesomeIcon icon={faPlus} /> New Appointment
                </button>
            </div>
        </div>

      {/* appointments */}
        <div className={styles.appointmentsSection}>
            <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Appointments</h3>
                <div className={styles.sectionActions}>
                    <a href="#">
                    <span>View All</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                    </a>
                </div>
            </div>

            <table className={styles.appointmentsTable}>
                <thead>
                    <tr>
                        <th>Patient</th>
                        <th>Time</th>
                        <th>Doctor</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appointment) => (
                            <tr key={appointment.id}>
                                <td>
                                    <div className={styles.patientInfo}>
                                        <div className={styles.patientAvatar}>{appointment.patientInitials}</div>
                                        <div>
                                            <div className={styles.patientName}>{appointment.patientName}</div>
                                            <div className={styles.patientId}>#{appointment.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.appointmentTime}>{appointment.time}</div>
                                    <div className={styles.appointmentDate}>{appointment.date}</div>
                                </td>
                                <td>{appointment.doctor}</td>
                                <td>
                                    <span className={`${styles.appointmentType} ${appointment.typeClass ? styles[appointment.typeClass] : ''}`}>
                                        {appointment.type}
                                    </span>
                                </td>
                                <td>
                                    <button className={`${styles.actionBtn} ${styles.view}`}>View</button>
                                    <button className={`${styles.actionBtn} ${styles.cancel}`}>Cancel</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default AppointmentPage