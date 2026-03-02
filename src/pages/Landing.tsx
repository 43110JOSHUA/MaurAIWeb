import { useNavigate } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'

function Landing() {
  const navigate = useNavigate()

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="display-4 fw-bold mb-3">THE Maureen</h1>
      <p className="lead text-muted mb-4">AI Therapist.</p>
      <div className="d-flex gap-3">
        <Button variant="primary" onClick={() => navigate('/dashboard')}>
          Get Started
        </Button>
      </div>
    </Container>
  )
}

export default Landing
