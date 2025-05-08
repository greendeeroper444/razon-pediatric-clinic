import React, { createContext, useContext, useEffect, useState } from 'react'
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
  UserAppointmentPage
} from './pages'
import NavigationComponent from './components/NavigationComponent/NavigationComponent'
import SidebarComponent from './components/SidebarComponent/SidebarComponent'
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import styles from './pages/public/HomePage/HomePage.module.css'
import ModalComponent from './components/ModalComponent/ModalComponent'

//modal context to avoid prop drilling
const ModalContext = createContext()

export const useModal = () => useContext(ModalContext)


const routes = [
  //public routes
  { path: '/', component: HomePage, layout: 'user' },
  { path: '/login', component: LoginPage, layout: 'user' },
  { path: '/signup', component: SignupPage, layout: 'user' },
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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('')

  //modal functions
  const openModal = (type) => {
    setModalType(type)
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData)
    console.log('Form type:', modalType)
    
    //handle the data based on modal type
    switch (modalType) {
      case 'appointment':
        console.log('New appointment created')
        break
      case 'patient':
        console.log('New patient created')
        break
      case 'item':
        console.log('New inventory item created')
        break
      default:
        break
    }
    closeModal()
  }

  //modal context value
  const modalValue = { openModal }

  return (
    <BrowserRouter>
      <ModalContext.Provider value={modalValue}>
        <PageTitle />
        <Routes>
          {
            routes.map((route) => (
              <Route 
                key={route.path}
                path={route.path} 
                element={
                  <Layout type={route.layout}>
                    <route.component />
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
      </ModalContext.Provider>
    </BrowserRouter>
  )
}

//dynamic Layout component that handles both admin and user layouts
function Layout({children, type}) {
  const { openModal } = useModal()
  
  //clone children to pass openModal prop for backward compatibility
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { openModal })
    }
    return child
  })
  
  return (
    <div className="app-container">
      {
        type === 'admin' && (
          <div className="sidebar">
            <SidebarComponent />
          </div>
        )
      }
      <div className="main-content">
        {
          type === 'admin' ? (
            <NavbarComponent />
          ) : (
            <header className={styles.header}>
              <NavigationComponent />
            </header>
          )
        }
        <div className="content-area">
          {childrenWithProps}
        </div>
      </div>
    </div>
  )
}

//component that sets page title based on current route
function PageTitle() {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname === '/' ? ' - home' : ` - ${location.pathname.substring(1)}`
    document.title = `Razon Pediatric Clinic${path}`
  }, [location.pathname])

  return null
}

export default App