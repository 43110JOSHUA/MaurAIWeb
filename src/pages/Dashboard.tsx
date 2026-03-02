import { Container, Row, Col, Card, Navbar, Nav } from 'react-bootstrap'

function Dashboard() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="px-4">
        <Navbar.Brand href="#">MyApp</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#">Profile</Nav.Link>
          <Nav.Link href="/">Logout</Nav.Link>
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
