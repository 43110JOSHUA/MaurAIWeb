import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Button, Alert, Spinner, Card } from 'react-bootstrap'
import { supabase } from '../lib/supabase'

function Signup() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setMessage(null)

    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)
    const { data, error } = await supabase.auth.signUp({ email, password })
    setLoading(false)

    if (error) {
      setError(error.message)
      return
    }

    // If email confirmation is required, identities will be empty
    if (data.user && data.user.identities?.length === 0) {
      setMessage('An account with this email already exists.')
    } else if (data.session) {
      navigate('/dashboard')
    } else {
      setMessage('Check your email for a confirmation link.')
    }
  }

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Card style={{ width: '100%', maxWidth: 420 }}>
        <Card.Body className="p-4">
          <h4 className="mb-4 text-center">Create Account</h4>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="info">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100" disabled={loading}>
              {loading ? <Spinner size="sm" /> : 'Create Account'}
            </Button>
          </Form>
          <div className="text-center mt-3">
            <span className="text-muted">
              Already have an account?{' '}
              <Button variant="link" className="p-0" onClick={() => navigate('/dashboard')}>
                Sign in
              </Button>
            </span>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Signup
