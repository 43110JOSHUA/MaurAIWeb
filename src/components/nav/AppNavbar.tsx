import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

function AppNavbar() {
  const { user, signOut } = useAuth();
  const [visible, setVisible] = useState(true);

  // Scroll Effect
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastY || currentY < 80);
      lastY = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`navbar-header sticky-top px-3 pt-3 pt-lg-5 pb-1${visible ? "" : " navbar-hidden"}`}
    >
      <nav className="navbar-pill rounded-pill bg-light-tan border border-light-grey d-flex justify-content-between align-items-center px-4 py-2 mx-auto">
        <a className="fw-bold fs-5 text-decoration-none text-body" href="/">
          Maureen AI
        </a>

        <ul className="nav align-items-center gap-1 mb-0">
          <li className="nav-item hover-button">
            <a className="nav-link text-body px-2" href="/dashboard">
              Dashboard
            </a>
          </li>
          {user && (
            <li className="nav-item hover-button">
              <button
                className="nav-link btn btn-link text-body p-0 px-2 border-0"
                onClick={signOut}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default AppNavbar;
