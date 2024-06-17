import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import "./NavigationBar.css";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import Cookies from "js-cookie"

function NavigationBar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  //const [cookies, setCookies] = useState(null);
  const [isCookieSet, setIsCookieSet] = useState(Cookies.get("cookieConsent"));

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearch = (e) => {
    navigate(`/search/${searchQuery}`)
    setSearchQuery("");
  }

  // TODO: conditionally render accounts tab in navbar and login/logout based on cookie token 
  const checkCookies = () => {
    const cookie = Cookies.get()
    if (cookie) {
      Cookies.set("cookieConsent", true);
      setIsCookieSet(true)
    } else {
      Cookies.set("cookieConsent", false)
      setIsCookieSet(false)
    }
  }

  useEffect(() => {
    checkCookies();
  })

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className="brand">Newsstand</Navbar.Brand>
        <div class="vr"></div>
        <Navbar.Collapse id="navbarScroll" className="nav-collapse">
          <Nav className="nav" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link className="nav-link" onClick={() => navigate("/")}>
              News
            </Nav.Link>
            <Nav.Link className="nav-link" onClick={() => navigate("/sports")}>
              Sports
            </Nav.Link>
            <Nav.Link className="nav-link" onClick={() => navigate("/travel")}>
              Travel
            </Nav.Link>
            <Nav.Link className="nav-link" onClick={() => navigate("/technology")}>
              Technology
            </Nav.Link>
            <Nav.Link className="nav-link" onClick={() => navigate("/health")}>
              Health
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              onClick={() => navigate("/entertainment")}
            >
              Entertainment
            </Nav.Link>
            {isCookieSet != null && 
            <NavDropdown title="Account" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action7" onClick={() => navigate("/account/favourites")}>Favourites</NavDropdown.Item>
            </NavDropdown>}
          </Nav>
          <div className="search-buttons">
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={handleChange}
              />
              <Button variant="light" type="submit">
                <CiSearch />
              </Button>
            </Form>
            <div className="user-buttons">
              <Button variant="light" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button variant="dark" onClick={() => navigate("/register")}>
                Sign Up
              </Button>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
