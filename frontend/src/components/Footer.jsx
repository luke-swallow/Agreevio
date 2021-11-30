import { Navbar, Nav, Container } from 'react-bootstrap';
import "../styles/Footer.css";
function Footer() {
  
  return(
    <Navbar className="footer" style={{backgroundColor: "#43ADE2"}} fixed="bottom">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="me-auto footer-buttons">
          
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/terms">Terms and Conditions</Nav.Link>
          <Nav.Link href="/enterprise">Enterprise Service</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>      
  );
}
export default Footer;