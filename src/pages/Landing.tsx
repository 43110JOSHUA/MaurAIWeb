import { useNavigate } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'

function Landing() {
  const navigate = useNavigate()

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="display-4 fw-bold mb-3">Welcome</h1>
      <p className="lead text-muted mb-4">Your app description goes here.</p>
      <div className="d-flex gap-3">
        <Button variant="primary" onClick={() => navigate('/dashboard')}>
          Get Started
        </Button>
        <Button variant="outline-secondary">Learn More</Button>
      </div>
    </Container>
  )
}

export default Landing
