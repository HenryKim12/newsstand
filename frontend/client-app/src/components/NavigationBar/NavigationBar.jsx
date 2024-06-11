import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom"

function NavigationBar() {
    const navigate = useNavigate()

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Newsstand</Navbar.Brand>
        {/* TODO: make a better divider  */}
        <h3>|</h3> 
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={() => navigate("/")}>News</Nav.Link>
            <Nav.Link onClick={() => navigate("/sports")}>Sport</Nav.Link>
            <Nav.Link onClick={() => navigate("/travel")}>Travel</Nav.Link>
            <Nav.Link onClick={() => navigate("/fashion")}>Fashion</Nav.Link>
            <Nav.Link onClick={() => navigate("/food")}>Food</Nav.Link>
            <Nav.Link onClick={() => navigate("/entertainment")}>Entertainment</Nav.Link>
            <NavDropdown title="Account" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action7">Favourites</NavDropdown.Item>
              <NavDropdown.Item href="#action8">???</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* TODO: change to search icon */}
            <Button variant="outline-success">Search</Button>
          </Form>
          <Button variant='light' onClick={() => navigate("/login")}>Login</Button>
          <Button variant='dark' onClick={() => navigate("/register")}>Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;