import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLoginClick = () => {
      navigate("/login"); // Redirect to login page
    };
  
    const handleLogout = () => {
      // Implement logout logic
      setIsLoggedIn(false);
      navigate("/"); // Redirect to home page after logout
    };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: 'gold' }}>
          <FontAwesomeIcon icon={faVideoSlash} /> RateYourMovie
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/watchList">Watch List</NavLink>
          </Nav>
          {isLoggedIn ? (
            <Button variant="outline-info" className="me-2" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button variant="outline-info" className="me-2" onClick={handleLoginClick}>
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
