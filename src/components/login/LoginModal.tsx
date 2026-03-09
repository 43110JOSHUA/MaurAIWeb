import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'

interface LoginModalProps {
  show: boolean
}

function LoginModal({ show }: LoginModalProps) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
    }
    setLoading(false)
  }

  if (!show) return null

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
      style={{ background: 'rgba(0,0,0,0.4)', zIndex: 2000 }}
    >
      <div className="card bg-tan border border-light-grey p-4 shadow w-100" style={{ maxWidth: 450 }}>
        <h5 className="mb-2 fw-bold text-center">Login Required</h5>
        <p className="text-center text-muted mb-3">Please log in to access your account.</p>

        {error && (
          <div className="alert alert-danger text-center small py-2" role="alert">
            <i className="bi bi-exclamation-triangle me-2"></i>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mb-2">
          <div className="form-floating mb-2">
            <input
              id="email"
              className="form-control bg-tan border border-light-grey"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
              onChange={e => setPassword(e.target.value)}
              placeholder=""
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          <hr></hr>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading || !email.trim() || !password.trim()}
          >
            {loading
              ? <><span className="spinner-border spinner-border-sm me-2" />Logging in...</>
              : 'Log In'
            }
          </button>
        </form>

        <div className="text-center mt-2">
          <p className="text-muted small mb-0">
            Don't have an account?{' '}
            <button className="btn btn-link p-0 mb-1 small text-decoration-none fw-semibold" onClick={() => navigate('/signup')}>
              Create one
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
