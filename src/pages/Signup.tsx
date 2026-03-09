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
      <div className="vh-100">
        <div className="pt-5 d-flex align-items-center justify-content-center">
          <div
            className="card bg-tan border border-light-grey p-4 shadow w-100"
            style={{ maxWidth: 450 }}
          >
            <h5 className="mb-2 fw-bold text-center">Create Account</h5>
            <p className="text-center text-muted mb-3">
              Sign up to get started.
            </p>

            {error && (
              <div
                className="alert alert-danger text-center small py-2"
                role="alert"
              >
                <i className="bi bi-exclamation-triangle me-2"></i>
                {error}
              </div>
            )}
            {message && (
              <div
                className="alert alert-info text-center small py-2"
                role="alert"
              >
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mb-2">
              <div className="form-floating mb-2">
                <input
                  id="email"
                  className="form-control bg-tan border border-light-grey"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  required
                  autoFocus
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="form-floating mb-2">
                <input
                  id="password"
                  className="form-control bg-tan border border-light-grey"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=""
                  required
                />
                <label htmlFor="password">Password</label>
              </div>

              <div className="form-floating mb-2">
                <input
                  id="confirm"
                  className="form-control bg-tan border border-light-grey"
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder=""
                  required
                />
                <label htmlFor="confirm">Confirm Password</label>
              </div>

              <hr />

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={
                  loading ||
                  !email.trim() ||
                  !password.trim() ||
                  !confirm.trim()
                }
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" />
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            <div className="text-center mt-2">
              <p className="text-muted small mb-0">
                Already have an account?{" "}
                <button
                  className="btn btn-link p-0 mb-1 small text-decoration-none fw-semibold"
                  onClick={() => navigate("/dashboard")}
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
