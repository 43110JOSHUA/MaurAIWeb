import { Container, Row, Col, Card, Navbar, Nav } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import LoginModal from '../components/LoginModal'

function Dashboard() {
  const { user, loading, signOut } = useAuth()

  return (
    <>
      <LoginModal show={!loading && !user} />

      <Navbar bg="dark" variant="dark" className="px-4">
        <Navbar.Brand href="/">MyApp</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/">Profile</Nav.Link>
          <Nav.Link onClick={signOut} style={{ cursor: 'pointer' }}>Logout</Nav.Link>
        </Nav>
      </Navbar>

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
