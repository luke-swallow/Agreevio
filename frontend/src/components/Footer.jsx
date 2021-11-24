import { Navbar, Nav, Container } from 'react-bootstrap';
import "../styles/Footer.css";
function Footer() {
  // style={{backgroundColor: "#43ADE2"}}
  return(
    <Navbar className="footer" style={{backgroundColor: "#43ADE2"}}>
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/terms">Terms and Conditions</Nav.Link>
          <Nav.Link href="/enterprise">Enterprise System</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>      
  );
}
export default Footer;