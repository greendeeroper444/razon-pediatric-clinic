import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
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
  ContactPage,
  UserAppointmentPage,
  ForgotPasswordPage,
} from './pages'
import NavigationComponent from './components/NavigationComponent/NavigationComponent'
import SidebarComponent from './components/SidebarComponent/SidebarComponent'
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import styles from './pages/public/HomePage/HomePage.module.css'
import ModalComponent from './components/ModalComponent/ModalComponent'
import { ModalContext, useModal, OpenModalProps } from './hooks/hook'

//define modal types to match what ModalComponent is expecting
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

//define the route type
interface RouteType {
  path: string;
  component: React.ComponentType<OpenModalProps>;
  layout: 'user' | 'admin';
}

//define layout props - UPDATED to include the missing props
interface LayoutProps {
  children: React.ReactNode;
  type: 'user' | 'admin';
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

const routes: RouteType[] = [
  //public routes
  { path: '/', component: HomePage, layout: 'user' },
  { path: '/login', component: LoginPage, layout: 'user' },
  { path: '/signup', component: SignupPage, layout: 'user' },
  { path: '/forgot-password', component: ForgotPasswordPage, layout: 'user' },
  { path: '/about', component: AboutPage, layout: 'user' },
  { path: '/services', component: ServicesPage, layout: 'user' },
  { path: '/contact', component: ContactPage, layout: 'user' },
  { path: '/user/appointments', component: UserAppointmentPage, layout: 'user' },
  
  //admin routes
  { path: '/dashboard', component: DashboardPage, layout: 'admin' },
  { path: '/appointments', component: AppointmentPage, layout: 'admin' },
  { path: '/patients', component: PatientsPage, layout: 'admin' },
  { path: '/inventory', component: InventoryPage, layout: 'admin' },
  { path: '/archives', component: ArchivePage, layout: 'admin' },
]

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>('appointment');
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  
  //check for mobile view on initial load and window resize
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        setSidebarCollapsed(true);
      }
    };
    
    //initial check
    checkMobile();
    
    //listen for resize events
    window.addEventListener('resize', checkMobile);
    
    //cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  //modal functions
  const openModal = (type: ModalType): void => {
    setModalType(type);
    setIsModalOpen(true);
  }

  const closeModal = (): void => setIsModalOpen(false);

  const handleSubmit = (formData: FormDataType): void => {
    console.log('Form submitted:', formData);
    console.log('Form type:', modalType);
    
    //handle the data based on modal type
    switch (modalType) {
      case 'appointment':
        console.log('New appointment created');
        break;
      case 'patient':
        console.log('New patient created');
        break;
      case 'item':
        console.log('New inventory item created');
        break;
      default:
        break;
    }
    closeModal();
  }
  
  //handle sidebar toggle
  const toggleSidebar = (): void => {
    setSidebarCollapsed(!sidebarCollapsed);
  }

  return (
    <BrowserRouter>
      <ModalContext.Provider value={{ openModal }}>
        <div className={`app-container ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
          <PageTitle />
          <Routes>
            {
              routes.map((route) => (
                <Route 
                  key={route.path}
                  path={route.path} 
                  element={
                    <Layout 
                      type={route.layout}
                      sidebarCollapsed={sidebarCollapsed}
                      toggleSidebar={toggleSidebar}
                    >
                      <route.component openModal={openModal} />
                    </Layout>
                  } 
                />
              ))
            }
          </Routes>
          <ModalComponent
            isOpen={isModalOpen}
            onClose={closeModal}
            modalType={modalType}
            onSubmit={handleSubmit}
          />
        </div>
      </ModalContext.Provider>
    </BrowserRouter>
  )
}

//dynamic Layout component that handles both admin and user layouts
function Layout({children, type, sidebarCollapsed, toggleSidebar}: LayoutProps) {
  const {openModal} = useModal();
  
  //clone children to pass openModal prop for backward compatibility
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      //using type assertion to fix the cloneElement typing error
      return React.cloneElement(child, {openModal} as OpenModalProps);
    }
    return child;
  });
  
  return (
    <div className={`app-container ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      {
        type === 'admin' && (
          <div className='sidebar'>
            <SidebarComponent 
              sidebarCollapsed={sidebarCollapsed}
              toggleSidebar={toggleSidebar}
            />
          </div>
        )
      }
     
        {
          type === 'admin' ? (
           <div className='main-content-admin'>
              <NavbarComponent 
                sidebarCollapsed={sidebarCollapsed}
                toggleSidebar={toggleSidebar}
              />
               <div className='content-area'>
                {childrenWithProps} 
              </div>
           </div>
          ) : (
            <div className='main-content-public'>
              <header className={styles.header}>
                <NavigationComponent />
              </header>

               <div className='content-area'>
                {childrenWithProps} 
              </div>
            </div>
            
          )
        }
       
    </div>
  )
}

//component that sets page title based on current route
function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname === '/' ? ' - home' : ` - ${location.pathname.substring(1)}`;
    document.title = `Razon Pediatric Clinic${path}`;
  }, [location.pathname]);

  return null;
}

export default App;