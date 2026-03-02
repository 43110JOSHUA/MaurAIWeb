import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import AppNavbar from './components/nav/AppNavbar.tsx'
import Landing from './pages/Landing.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Signup from './pages/Signup.tsx'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
