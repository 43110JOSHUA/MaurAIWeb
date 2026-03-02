import { Navbar, Nav } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'

function AppNavbar() {
  const { user, signOut } = useAuth()

  return (
    <Navbar bg="dark" variant="dark" className="px-0">
      <div className="page-border d-flex align-items-center w-100">
        <Navbar.Brand className="fw-bold fs-4" href="/">Maureen AI</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          {user && (
            <>
              <Nav.Link onClick={signOut} style={{ cursor: 'pointer' }}>Logout</Nav.Link>
            </>
          )}
        </Nav>
      </div>
    </Navbar>
  )
}

export default AppNavbar
