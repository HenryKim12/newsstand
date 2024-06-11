import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
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
            <Nav.Link href="#action1">News</Nav.Link>
            <Nav.Link href="#action2">Sport</Nav.Link>
            <Nav.Link href="#action3">Travel</Nav.Link>
            <Nav.Link href="#action4">Fashion</Nav.Link>
            <Nav.Link href="#action5">Food</Nav.Link>
            <Nav.Link href="#action6">Entertainment</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action7">???</NavDropdown.Item>
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
          <Button variant='light'>Login</Button>
          <Button variant='dark'>Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;