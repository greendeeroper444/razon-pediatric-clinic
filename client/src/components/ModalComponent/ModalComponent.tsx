// import React, { useState, useEffect } from 'react'
// import styles from './ModalComponent.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';

// function ModalComponent({ 
//     isOpen, 
//     onClose, 
//     modalType,
//     onSubmit
// }) {
//     const [formData, setFormData] = useState({});

//     //reset form data when modal type changes
//     useEffect(() => {
//         setFormData({});
//     }, [modalType]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleAddMedication = () => {
//         if (!formData.medications) {
//             setFormData({
//                 ...formData,
//                 medications: ['']
//             });
//         } else {
//             setFormData({
//                 ...formData,
//                 medications: [...formData.medications, '']
//             });
//         }
//     };

//     const handleMedicationChange = (index, value) => {
//         const updatedMedications = [...(formData.medications || [])];
//         updatedMedications[index] = value;
//         setFormData({
//             ...formData,
//             medications: updatedMedications
//         });
//     };

//     const handleRemoveMedication = (index) => {
//         const updatedMedications = [...(formData.medications || [])];
//         updatedMedications.splice(index, 1);
//         setFormData({
//             ...formData,
//             medications: updatedMedications
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit(formData);
//         onClose();
//     };

//     //don't render if modal is not open
//     if (!isOpen) return null;

//     let title = '';
//     let formContent = null;

//     //render different form content based on modalType
//     switch (modalType) {
//         case 'appointment':
//         title = 'New Appointment';
//         formContent = (
//             <>
//             <div className={styles.formGroup}>
//                 <label htmlFor="patient">Patient</label>
//                 <select 
//                     id="patient" 
//                     name="patient" 
//                     value={formData.patient || ''} 
//                     onChange={handleChange}
//                     className={styles.formControl}
//                     required
//                 >
//                 <option value="">Select Patient</option>
//                 <option value="1">John Doe</option>
//                 <option value="2">Jane Smith</option>
                
//                 </select>
//             </div>
            
//             <div className={styles.formGroup}>
//                 <label htmlFor="doctor">Doctor</label>
//                 <select 
//                     id="doctor" 
//                     name="doctor" 
//                     value={formData.doctor || ''} 
//                     onChange={handleChange}
//                     className={styles.formControl}
//                     required
//                 >
//                 <option value="">Select Doctor</option>
//                 <option value="1">Dr. Brown</option>
//                 <option value="2">Dr. Garcia</option>
                
//                 </select>
//             </div>
            
//             <div className={styles.formRow}>
//                 <div className={styles.formGroup}>
//                 <label htmlFor="date">Date</label>
//                 <input 
//                     type="date" 
//                     id="date" 
//                     name="date" 
//                     value={formData.date || ''} 
//                     onChange={handleChange}
//                     className={styles.formControl}
//                     required
//                 />
//                 </div>
                
//                 <div className={styles.formGroup}>
//                 <label htmlFor="time">Time</label>
//                 <input 
//                     type="time" 
//                     id="time" 
//                     name="time" 
//                     value={formData.time || ''} 
//                     onChange={handleChange}
//                     className={styles.formControl}
//                     required
//                 />
//                 </div>
//             </div>
            
//             <div className={styles.formGroup}>
//                 <label htmlFor="appointmentType">Appointment Type</label>
//                 <select 
//                     id="appointmentType" 
//                     name="appointmentType" 
//                     value={formData.appointmentType || ''} 
//                     onChange={handleChange}
//                     className={styles.formControl}
//                     required
//                 >
//                     <option value="">Select Type</option>
//                     <option value="checkup">Check-up</option>
//                     <option value="followup">Follow-up</option>
//                     <option value="emergency">Emergency</option>
//                     <option value="procedure">Procedure</option>
//                 </select>
//             </div>
            
//             <div className={styles.formGroup}>
//                 <label htmlFor="notes">Notes</label>
//                 <textarea 
//                     id="notes" 
//                     name="notes" 
//                     value={formData.notes || ''} 
//                     onChange={handleChange}
//                     className={styles.formControl}
//                     rows="4"
//                 ></textarea>
//             </div>
//             </>
//         );
//         break;
        
//         case 'patient':
//         title = 'New Patient';
//         formContent = (
//             <>
//             <div className={styles.formGroup}>
//                 <label htmlFor="name">Full Name</label>
//                 <input 
//                 type="text" 
//                 id="name" 
//                 name="name" 
//                 value={formData.name || ''} 
//                 onChange={handleChange}
//                 className={styles.formControl}
//                 required
//                 />
//             </div>
            
//             <div className={styles.formRow}>
//                 <div className={styles.formGroup}>
//                 <label htmlFor="gender">Gender</label>
//                 <select 
//                     id="gender" 
//                     name="gender" 
//                     value={formData.gender || ''} 
//                     onChange={handleChange}
//                     className={styles.formControl}
//                     required
//                 >
//                     <option value="">Select Gender</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                 </select>
//                 </div>
                
//                 <div className={styles.formGroup}>
//                 <label htmlFor="age">Age</label>
//                 <input 
//                     type="number" 
//                     id="age" 
//                     name="age" 
//                     value={formData.age || ''} 
//                     onChange={handleChange}
//                     className={styles.formControl}
//                     min="0"
//                     required
//                 />
//                 </div>
//             </div>
            
//             <div className={styles.formGroup}>
//                 <label htmlFor="primaryDoctor">Primary Doctor</label>
//                 <select 
//                     id="primaryDoctor" 
//                     name="primaryDoctor" 
//                     value={formData.primaryDoctor || ''} 
//                     onChange={handleChange}
//                     className={styles.formControl}
//                     required
//                 >
//                     <option value="">Select Primary Doctor</option>
//                     <option value="1">Dr. Brown</option>
//                     <option value="2">Dr. Garcia</option>
//                 </select>
//             </div>
            
//             <div className={styles.formRow}>
//                 <div className={styles.formGroup}>
//                 <label htmlFor="height">Height (cm)</label>
//                 <input 
//                     type="number" 
//                     id="height" 
//                     name="height" 
//                     value={formData.height || ''} 
//                     onChange={handleChange}
//                     className={styles.formControl}
//                     min="0"
//                 />
//                 </div>
                
//                 <div className={styles.formGroup}>
//                 <label htmlFor="weight">Weight (kg)</label>
//                 <input 
//                     type="number" 
//                     id="weight" 
//                     name="weight" 
//                     value={formData.weight || ''} 
//                     onChange={handleChange}
//                     className={styles.formControl}
//                     min="0"
//                 />
//                 </div>
//             </div>
            
//             <div className={styles.formGroup}>
//                 <label htmlFor="allergies">Allergies</label>
//                 <textarea 
//                     id="allergies" 
//                     name="allergies" 
//                     value={formData.allergies || ''} 
//                     onChange={handleChange}
//                     className={styles.formControl}
//                     rows="2"
//                 ></textarea>
//             </div>
            
//             <div className={styles.formGroup}>
//                 <label>Medications</label>
//                 {
//                     (formData.medications || []).map((medication, index) => (
//                         <div key={index} className={styles.medicationItem}>
//                             <input
//                                 type="text"
//                                 value={medication}
//                                 onChange={(e) => handleMedicationChange(index, e.target.value)}
//                                 className={styles.formControl}
//                                 placeholder="Enter medication"
//                             />
//                             <button 
//                                 type="button" 
//                                 className={styles.btnRemove} 
//                                 onClick={() => handleRemoveMedication(index)}
//                             >
//                             <FontAwesomeIcon icon={faTimes} />
//                             </button>
//                         </div>
//                     ))
//                 }
//                 <button 
//                     type="button" 
//                     className={styles.btnAdd} 
//                     onClick={handleAddMedication}
//                 >
//                     Add Medication
//                 </button>
//             </div>
//             </>
//         );
//         break;
        
//         case 'item':
//             title = 'New Inventory Item';
//             formContent = (
//                 <>
//                 <div className={styles.formGroup}>
//                     <label htmlFor="medicine">Medicine Name</label>
//                     <input 
//                         type="text" 
//                         id="medicine" 
//                         name="medicine" 
//                         value={formData.medicine || ''} 
//                         onChange={handleChange}
//                         className={styles.formControl}
//                         required
//                     />
//                 </div>
                
//                 <div className={styles.formGroup}>
//                     <label htmlFor="category">Category</label>
//                     <select 
//                         id="category" 
//                         name="category" 
//                         value={formData.category || ''} 
//                         onChange={handleChange}
//                         className={styles.formControl}
//                         required
//                     >
//                         <option value="">Select Category</option>
//                         <option value="antibiotics">Antibiotics</option>
//                         <option value="painkillers">Painkillers</option>
//                         <option value="antihistamines">Antihistamines</option>
//                         <option value="vitamins">Vitamins</option>
//                         <option value="supplies">Medical Supplies</option>
//                     </select>
//                 </div>
                
//                 <div className={styles.formGroup}>
//                     <label htmlFor="minLevel">Minimum Stock Level</label>
//                     <input 
//                         type="number" 
//                         id="minLevel" 
//                         name="minLevel" 
//                         value={formData.minLevel || ''} 
//                         onChange={handleChange}
//                         className={styles.formControl}
//                         min="0"
//                         required
//                     />
//                 </div>
                
//                 <div className={styles.formGroup}>
//                     <label htmlFor="expirationDate">Expiration Date</label>
//                     <input 
//                         type="date" 
//                         id="expirationDate" 
//                         name="expirationDate" 
//                         value={formData.expirationDate || ''} 
//                         onChange={handleChange}
//                         className={styles.formControl}
//                         required
//                     />
//                 </div>
                
//                 <div className={styles.formGroup}>
//                     <label htmlFor="location">Storage Location</label>
//                     <input 
//                         type="text" 
//                         id="location" 
//                         name="location" 
//                         value={formData.location || ''} 
//                         onChange={handleChange}
//                         className={styles.formControl}
//                         required
//                     />
//                 </div>
//                 </>
//             );
//         break;
        
//         default:
//             title = 'Form';
//             formContent = <p>Unknown form type</p>;
//     }
  
//   return (
//     <div className={styles.modalOverlay}>
//         <div className={styles.modalContent}>
//             <div className={styles.modalHeader}>
//                 <h2 className={styles.modalTitle}>{title}</h2>
//                 <button 
//                     className={styles.closeButton} 
//                     onClick={onClose}
//                 >
//                     <FontAwesomeIcon icon={faTimes} />
//                 </button>
//             </div>
            
//             <form onSubmit={handleSubmit}>
//                 <div className={styles.modalBody}>
//                     {formContent}
//                 </div>
                
//                 <div className={styles.modalFooter}>
//                     <button 
//                         type="button" 
//                         className={styles.btnSecondary} 
//                         onClick={onClose}
//                     >
//                         Cancel
//                     </button>
//                     <button 
//                         type="submit" 
//                         className={styles.btnPrimary}
//                     >
//                         Save
//                     </button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default ModalComponent

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import styles from './ModalComponent.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

//define modal types
type ModalType = 'appointment' | 'patient' | 'item';

//define appropriate interfaces for each form data type
interface AppointmentFormData {
    patient?: string;
    doctor?: string;
    date?: string;
    time?: string;
    appointmentType?: string;
    notes?: string;
}

interface PatientFormData {
    name?: string;
    gender?: string;
    age?: string;
    primaryDoctor?: string;
    height?: string;
    weight?: string;
    allergies?: string;
    medications?: string[];
}

interface InventoryItemFormData {
    medicine?: string;
    category?: string;
    minLevel?: string;
    expirationDate?: string;
    location?: string;
}

//union type for all possible form data
type FormDataType = AppointmentFormData | PatientFormData | InventoryItemFormData;

//component props interface
interface ModalComponentProps {
    isOpen: boolean;
    onClose: () => void;
    modalType: ModalType;
    onSubmit: (data: FormDataType) => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
    isOpen,
    onClose,
    modalType,
    onSubmit
}) => {
    const [formData, setFormData] = useState<FormDataType>({});

    //reset form data when modal type changes
    useEffect(() => {
        setFormData({});
    }, [modalType]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };

    const handleAddMedication = () => {
        const patientData = formData as PatientFormData;
        if (!patientData.medications) {
        setFormData({
            ...formData,
            medications: ['']
        });
        } else {
        setFormData({
            ...formData,
            medications: [...patientData.medications, '']
        });
        }
    };

    const handleMedicationChange = (index: number, value: string) => {
        const patientData = formData as PatientFormData;
        const updatedMedications = [...(patientData.medications || [])];
        updatedMedications[index] = value;
        setFormData({
        ...formData,
        medications: updatedMedications
        });
    };

    const handleRemoveMedication = (index: number) => {
        const patientData = formData as PatientFormData;
        const updatedMedications = [...(patientData.medications || [])];
        updatedMedications.splice(index, 1);
        setFormData({
        ...formData,
        medications: updatedMedications
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    //don't render if modal is not open
    if (!isOpen) return null;

    let title = '';
    let formContent: React.ReactElement | null = null;

    //render different form content based on modalType
    switch (modalType) {
        case 'appointment':
        title = 'New Appointment';
        formContent = (
            <>
                <div className={styles.formGroup}>
                    <label htmlFor="patient">Patient</label>
                    <select
                        id="patient"
                        name="patient"
                        value={(formData as AppointmentFormData).patient || ''}
                        onChange={handleChange}
                        className={styles.formControl}
                        required
                    >
                        <option value="">Select Patient</option>
                        <option value="1">John Doe</option>
                        <option value="2">Jane Smith</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="doctor">Doctor</label>
                    <select
                        id="doctor"
                        name="doctor"
                        value={(formData as AppointmentFormData).doctor || ''}
                        onChange={handleChange}
                        className={styles.formControl}
                        required
                    >
                        <option value="">Select Doctor</option>
                        <option value="1">Dr. Brown</option>
                        <option value="2">Dr. Garcia</option>
                    </select>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={(formData as AppointmentFormData).date || ''}
                            onChange={handleChange}
                            className={styles.formControl}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="time">Time</label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            value={(formData as AppointmentFormData).time || ''}
                            onChange={handleChange}
                            className={styles.formControl}
                            required
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="appointmentType">Appointment Type</label>
                    <select
                        id="appointmentType"
                        name="appointmentType"
                        value={(formData as AppointmentFormData).appointmentType || ''}
                        onChange={handleChange}
                        className={styles.formControl}
                        required
                    >
                        <option value="">Select Type</option>
                        <option value="checkup">Check-up</option>
                        <option value="followup">Follow-up</option>
                        <option value="emergency">Emergency</option>
                        <option value="procedure">Procedure</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="notes">Notes</label>
                    <textarea
                        id="notes"
                        name="notes"
                        value={(formData as AppointmentFormData).notes || ''}
                        onChange={handleChange}
                        className={styles.formControl}
                        rows={4}
                    ></textarea>
                </div>
            </>
        );
        break;

        case 'patient':
        title = 'New Patient';
        const patientData = formData as PatientFormData;
        formContent = (
            <>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={patientData.name || ''}
                        onChange={handleChange}
                        className={styles.formControl}
                        required
                    />
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            value={patientData.gender || ''}
                            onChange={handleChange}
                            className={styles.formControl}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={patientData.age || ''}
                            onChange={handleChange}
                            className={styles.formControl}
                            min="0"
                            required
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="primaryDoctor">Primary Doctor</label>
                    <select
                        id="primaryDoctor"
                        name="primaryDoctor"
                        value={patientData.primaryDoctor || ''}
                        onChange={handleChange}
                        className={styles.formControl}
                        required
                    >
                        <option value="">Select Primary Doctor</option>
                        <option value="1">Dr. Brown</option>
                        <option value="2">Dr. Garcia</option>
                    </select>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="height">Height (cm)</label>
                        <input
                            type="number"
                            id="height"
                            name="height"
                            value={patientData.height || ''}
                            onChange={handleChange}
                            className={styles.formControl}
                            min="0"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="weight">Weight (kg)</label>
                        <input
                            type="number"
                            id="weight"
                            name="weight"
                            value={patientData.weight || ''}
                            onChange={handleChange}
                            className={styles.formControl}
                            min="0"
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="allergies">Allergies</label>
                    <textarea
                        id="allergies"
                        name="allergies"
                        value={patientData.allergies || ''}
                        onChange={handleChange}
                        className={styles.formControl}
                        rows={2}
                    ></textarea>
                </div>

                <div className={styles.formGroup}>
                    <label>Medications</label>
                    {
                        (patientData.medications || []).map((medication, index) => (
                            <div key={index} className={styles.medicationItem}>
                                <input
                                    type="text"
                                    value={medication}
                                    onChange={(e) => handleMedicationChange(index, e.target.value)}
                                    className={styles.formControl}
                                    placeholder="Enter medication"
                                />
                                <button
                                    type="button"
                                    className={styles.btnRemove}
                                    onClick={() => handleRemoveMedication(index)}
                                >
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </div>
                        ))
                    }
                    <button
                        type="button"
                        className={styles.btnAdd}
                        onClick={handleAddMedication}
                    >
                        Add Medication
                    </button>
                </div>
            </>
        );
        break;

        case 'item':
        title = 'New Inventory Item';
        const itemData = formData as InventoryItemFormData;
        formContent = (
            <>
                <div className={styles.formGroup}>
                    <label htmlFor="medicine">Medicine Name</label>
                    <input
                        type="text"
                        id="medicine"
                        name="medicine"
                        value={itemData.medicine || ''}
                        onChange={handleChange}
                        className={styles.formControl}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="category">Category</label>
                    <select
                    id="category"
                    name="category"
                    value={itemData.category || ''}
                    onChange={handleChange}
                    className={styles.formControl}
                    required
                    >
                        <option value="">Select Category</option>
                        <option value="antibiotics">Antibiotics</option>
                        <option value="painkillers">Painkillers</option>
                        <option value="antihistamines">Antihistamines</option>
                        <option value="vitamins">Vitamins</option>
                        <option value="supplies">Medical Supplies</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="minLevel">Minimum Stock Level</label>
                    <input
                        type="number"
                        id="minLevel"
                        name="minLevel"
                        value={itemData.minLevel || ''}
                        onChange={handleChange}
                        className={styles.formControl}
                        min="0"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="expirationDate">Expiration Date</label>
                    <input
                        type="date"
                        id="expirationDate"
                        name="expirationDate"
                        value={itemData.expirationDate || ''}
                        onChange={handleChange}
                        className={styles.formControl}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="location">Storage Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={itemData.location || ''}
                        onChange={handleChange}
                        className={styles.formControl}
                        required
                    />
                </div>
            </>
        );
        break;

        default:
            title = 'Form';
            formContent = <p>Unknown form type</p>;
    }

  return (
    <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>{title}</h2>
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>

            <form onSubmit={handleSubmit}>
                <div className={styles.modalBody}>
                    {formContent}
                </div>

                <div className={styles.modalFooter}>
                    <button
                        type="button"
                        className={styles.btnSecondary}
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className={styles.btnPrimary}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ModalComponent