import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/Ch.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Coins from './pages/Coins';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';



const Navigation= ()=> {
  return (
    <Navbar  fixed="top"  bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img style={{width:'60px'}} src={logo}/>Hunter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="#home">Home</Nav.Link>
            <Nav.Link href='/Coins'>Coins</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Exchange</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Defi
              </NavDropdown.Item>
              <NavDropdown.Item href="#footer">Bottom</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contact us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation ;