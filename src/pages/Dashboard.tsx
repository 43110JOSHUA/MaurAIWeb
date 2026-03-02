import { Container, Row, Col, Card } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import LoginModal from '../components/LoginModal'

function Dashboard() {
  const { user, loading } = useAuth()

  return (
    <>
      <LoginModal show={!loading && !user} />

      <Container className="py-5">
        <h2 className="mb-4">Dashboard</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Stat One</Card.Title>
                <Card.Text className="display-6">0</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Stat Two</Card.Title>
                <Card.Text className="display-6">0</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Stat Three</Card.Title>
                <Card.Text className="display-6">0</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard
