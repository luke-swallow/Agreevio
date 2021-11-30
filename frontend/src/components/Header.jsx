import { Navbar, Nav, Container, Figure } from 'react-bootstrap';
import logo from "../assets/logos/logo.jpg";
import "../styles/Header.css";

function Header(){
  return(
    <Navbar>
      <Container className="navbar">
        <Nav.Link href="/"><Navbar.Brand>
          <Figure>
            <Figure.Image width={150} height={100} src={logo} />
          </Figure>
          </Navbar.Brand></Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto header-buttons">
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/analyze">Analyze</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;