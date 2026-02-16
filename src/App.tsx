import { BrowserRouter as Router } from "react-router-dom"
import { useState } from "react"
import PrivateRoute from './routes/private-route'
import Layout from "./components/Layout"
// import Login from "./view/auth/login"

const App = () => {
  return (
    <Router>
      <AppContent />
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
    </Router>
  )
}

const AppContent = () => {
  // const { pathname } = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  
  // Check If user is authorized
  // const isAuthenticated = document.cookie.includes('access_token')

  // Check public page
  // const isPublicPage = pathname.includes('/login') || pathname.includes('/register') || pathname.includes('/reset-password') || pathname.includes('/reset-password-request') || pathname.includes('/forget-password-request') || pathname.includes('/forget-password');

  // check if user is login or access_token return back it to home page
  // if (isAuthenticated && isPublicPage) {
  //   return <Navigate to="/" replace />
  // }
  
  return (
    <>
      {/* {!isPublicPage ? (
        <Layout 
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          closeSidebar={closeSidebar}
        >
          <PrivateRoute />
        </Layout>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )} */}
      <Layout 
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        closeSidebar={closeSidebar}
      >
        <PrivateRoute />
      </Layout>
    </>
  )
}

export default App