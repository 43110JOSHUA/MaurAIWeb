import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.tsx'
import Dashboard from './pages/Dashboard.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
