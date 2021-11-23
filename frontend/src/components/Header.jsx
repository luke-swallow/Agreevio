import { Navbar, Nav, Container, Image } from 'react-bootstrap';

function Header(){
  return(
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav.Link href="/"><Navbar.Brand><Image src="../../assets/logos/logo.png" fluid /></Navbar.Brand></Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/analyze">Analyze</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;