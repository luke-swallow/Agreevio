import { Navbar, Nav, Container, Image, Figure } from 'react-bootstrap';
import logo from "../assets/logos/logo.png";


function Header(){
  return(
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav.Link href="/"><Navbar.Brand>
          <Figure>
            <Figure.Image width={150} height={100} src={logo} />
          </Figure>
          </Navbar.Brand></Nav.Link>
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