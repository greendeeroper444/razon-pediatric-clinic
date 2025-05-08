import React, { useState } from 'react'
import styles from './ArchivePage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter, faUser, faCalendarAlt, faArchive, faClock } from '@fortawesome/free-solid-svg-icons'

function ArchivePage() {
    const [searchQuery, setSearchQuery] = useState('')

    const archivedPatients = [
        { id: 1, name: 'John Doe', lastVisit: '12 Mar 2023', archivedDate: '12 Mar 2025', reasonForArchive: 'Inactivity (2+ years)' },
        { id: 2, name: 'Sarah Johnson', lastVisit: '05 Feb 2023', archivedDate: '05 Feb 2025', reasonForArchive: 'Inactivity (2+ years)' },
        { id: 3, name: 'Michael Brown', lastVisit: '24 Jan 2023', archivedDate: '24 Jan 2025', reasonForArchive: 'Moved out of state' },
        { id: 4, name: 'Emily Wilson', lastVisit: '18 Dec 2022', archivedDate: '18 Dec 2024', reasonForArchive: 'Inactivity (2+ years)' }
    ]

  return (
    <div className={styles.content}>
        <div className={styles.contentHeader}>
            <div className={styles.titleSection}>
                <h1 className={styles.contentTitle}>
                    {/* <FontAwesomeIcon icon={faArchive} className={styles.headerIcon} /> */}
                    Patient Archive
                </h1>
                <p className={styles.pageSubtitle}>
                    Manage and review patients who have been inactive for 2+ years
                </p>
            </div>
            
            <div className={styles.actionSection}>
                <div className={styles.searchWrapper}>
                    <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
                    <input 
                    type="text"
                    placeholder="Search archived patients..."
                    className={styles.searchInput}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                
                <button className={styles.filterButton}>
                    <FontAwesomeIcon icon={faFilter} />
                    <span>Filter</span>
                </button>
            </div>
        </div>

        <div className={styles.contentCards}>
            <div className={styles.statsCard}>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>4</span>
                    <span className={styles.statLabel}>This Month</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>23</span>
                    <span className={styles.statLabel}>This Year</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>182</span>
                    <span className={styles.statLabel}>Total Archived</span>
                </div>
            </div>
        </div>

        <div className={styles.archiveSection}>
            <div className={styles.archiveHeader}>
                <div className={styles.archiveHeaderItem}>Patient</div>
                <div className={styles.archiveHeaderItem}>Last Visit</div>
                <div className={styles.archiveHeaderItem}>Archive Date</div>
                <div className={styles.archiveHeaderItem}>Reason</div>
            </div>
            
            {
                archivedPatients.map(patient => (
                    <div key={patient.id} className={styles.archiveRow}>
                        <div className={styles.patientInfo}>
                            <div className={styles.patientAvatar}>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <span>{patient.name}</span>
                        </div>
                        
                        <div className={styles.lastVisitDate}>
                            <FontAwesomeIcon icon={faCalendarAlt} className={styles.dateIcon} />
                            <span>{patient.lastVisit}</span>
                        </div>
                        
                        <div className={styles.archivedDate}>
                            <FontAwesomeIcon icon={faClock} className={styles.dateIcon} />
                            <span>{patient.archivedDate}</span>
                        </div>
                        
                        <div className={styles.archiveReason}>
                            {patient.reasonForArchive}
                        </div>
                    </div>
                ))
            }
        </div>
        
        <div className={styles.archiveActions}>
            <button className={styles.restoreButton}>
                Restore Selected
            </button>
            <div className={styles.pagination}>
                <button className={`${styles.pageButton} ${styles.active}`}>1</button>
                <button className={styles.pageButton}>2</button>
                <button className={styles.pageButton}>3</button>
                <button className={`${styles.pageButton} ${styles.nextPage}`}>Next</button>
            </div>
        </div>
    </div>
  )
}

export default ArchivePage