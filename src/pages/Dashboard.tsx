import { useAuth } from "../context/AuthContext";
import LoginModal from "../components/login/LoginModal";

function Dashboard() {
  const { user, loading } = useAuth();

  return (
    <>
      <LoginModal show={!loading && !user} />

      <div className="container vh-100 py-5">
        <h2 className="mb-4">Dashboard</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Stat One</h5>
                <p className="card-text display-6">0</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Stat Two</h5>
                <p className="card-text display-6">0</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Stat Three</h5>
                <p className="card-text display-6">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
