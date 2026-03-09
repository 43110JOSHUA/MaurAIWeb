import { useAuth } from '../../context/AuthContext'

function AppNavbar() {
  const { user, signOut } = useAuth()

  return (
    <nav className="navbar navbar-dark bg-dark px-0">
      <div className="page-border d-flex align-items-center w-100">
        <a className="navbar-brand fw-bold fs-4" href="/">Maureen AI</a>
        <ul className="navbar-nav ms-auto flex-row gap-2">
          <li className="nav-item">
            <a className="nav-link" href="/dashboard">Dashboard</a>
          </li>
          {user && (
            <li className="nav-item">
              <button className="nav-link btn btn-link p-0" style={{ cursor: 'pointer' }} onClick={signOut}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default AppNavbar
