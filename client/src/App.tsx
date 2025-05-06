import { useEffect } from 'react'
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
import styles from './pages/HomePage/HomePage.module.css';

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
  return (
    <div className='app-container'>
      <div className='main-content'>
        <header className={styles.header}>
          <NavigationComponent />
        </header>
        <div className='content-area'>
          {children}
        </div>
      </div>
    </div>
  );
}

//layout for admin pages
function AdminLayout({children}) {
  return (
    <div className='app-container'>
      <div className='sidebar'>
        <SidebarComponent />
      </div>
      <div className='main-content'>
        <NavbarComponent />
        <div className='content-area'>
          {children}
        </div>
      </div>
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