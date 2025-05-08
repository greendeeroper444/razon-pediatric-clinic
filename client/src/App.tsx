import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {
  HomePage,
  DashboardPage,
  AppointmentPage, 
  PatientsPage,
  InventoryPage,
  ArchivePage,
  LoginPage,
  SignupPage,
  AboutPage,
  ServicesPage,
  ContactPage
} from './pages';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import SidebarComponent from './components/SidebarComponent/SidebarComponent';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import styles from './pages/public/HomePage/HomePage.module.css';
import ModalComponent from './components/ModalComponent/ModalComponent';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

//component that sets page title based on current route
function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname === '/' ? ' - home' : ` - ${location.pathname.substring(1)}`;
    document.title = `Razon Pediatric Clinic${path}`;
  }, [location.pathname]);

  return null; //this component doesn't render anything
}

//layout for user/public pages
function UserLayout({children}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  //function to open modal with specific type
  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  //function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //function to handle form submission
  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    console.log('Form type:', modalType);
    
    //handle the data based on modal type
    switch (modalType) {
      case 'appointment':
        //save new appointment
        console.log('New appointment created');
        break;
      case 'patient':
        //save new patient
        console.log('New patient created');
        break;
      case 'item':
        //save new inventory item
        console.log('New inventory item created');
        break;
      default:
        break;
    }
    
  };

  //clone the children and pass the openModal function as a prop
  const childrenWithProps = React.Children.map(children, child => {
    //check if the child is a valid React element before cloning
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { openModal });
    }
    return child;
  });

  return (
    <div className='app-container'>
      <div className='main-content'>
        <header className={styles.header}>
          <NavigationComponent />
        </header>
        <div className='content-area'>
          {childrenWithProps}
        </div>
      </div>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={closeModal}
        modalType={modalType}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

//layout for admin pages with modal context
function AdminLayout({children}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  //function to open modal with specific type
  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  //function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //function to handle form submission
  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    console.log('Form type:', modalType);
    
    //handle the data based on modal type
    switch (modalType) {
      case 'appointment':
        //save new appointment
        console.log('New appointment created');
        break;
      case 'patient':
        //save new patient
        console.log('New patient created');
        break;
      case 'item':
        //save new inventory item
        console.log('New inventory item created');
        break;
      default:
        break;
    }
    
  };

  //clone the children and pass the openModal function as a prop
  const childrenWithProps = React.Children.map(children, child => {
    //check if the child is a valid React element before cloning
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { openModal });
    }
    return child;
  });

  return (
    <div className='app-container'>
      <div className='sidebar'>
        <SidebarComponent />
      </div>
      <div className='main-content'>
        <NavbarComponent />
        <div className='content-area'>
          {childrenWithProps}
        </div>
      </div>
      
    
      <ModalComponent
        isOpen={isModalOpen}
        onClose={closeModal}
        modalType={modalType}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

//main content component with routes
function AppContent() {
  return (
    <>
      <PageTitle />
      <Routes>
        {/* public/user Pages */}
        <Route path='/' element={<UserLayout><HomePage /></UserLayout>} />
        <Route path='/login' element={<UserLayout><LoginPage /></UserLayout>} />
        <Route path='/signup' element={<UserLayout><SignupPage /></UserLayout>} />
        <Route path='/about' element={<UserLayout><AboutPage /></UserLayout>} />
        <Route path='/services' element={<UserLayout><ServicesPage /></UserLayout>} />
        <Route path='/contact' element={<UserLayout><ContactPage /></UserLayout>} />
        <Route path='/user/appointments' element={<UserLayout><AppointmentPage /></UserLayout>} />
        
        {/* admin pages */}
        <Route path='/dashboard' element={<AdminLayout><DashboardPage /></AdminLayout>} />
        <Route path='/appointments' element={<AdminLayout><AppointmentPage /></AdminLayout>} />
        <Route path='/patients' element={<AdminLayout><PatientsPage /></AdminLayout>} />
        <Route path='/inventory' element={<AdminLayout><InventoryPage /></AdminLayout>} />
        <Route path='/archives' element={<AdminLayout><ArchivePage /></AdminLayout>} />
      </Routes>
    </>
  )
}

export default App