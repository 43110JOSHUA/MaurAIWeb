import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    const { data, error } = await supabase.auth.signUp({ email, password });
    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    if (data.user && data.user.identities?.length === 0) {
      setMessage("An account with this email already exists.");
    } else if (data.session) {
      navigate("/dashboard");
    } else {
      setMessage("Check your email for a confirmation link.");
    }
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="card" style={{ width: "100%", maxWidth: 420 }}>
          <div className="card-body p-4">
            <h4 className="mb-4 text-center">Create Account</h4>
            {error && <div className="alert alert-danger">{error}</div>}
            {message && <div className="alert alert-info">{message}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  className="form-control"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label">Confirm Password</label>
                <input
                  className="form-control"
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? (
                  <span className="spinner-border spinner-border-sm" />
                ) : (
                  "Create Account"
                )}
              </button>
            </form>
            <div className="text-center mt-3">
              <span className="text-muted">
                Already have an account?{" "}
                <button
                  className="btn btn-link p-0"
                  onClick={() => navigate("/dashboard")}
                >
                  Sign in
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
