import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

function NavBar({ user, onLogout }) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        My App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          {user && (
            <>
              <Nav.Link as={Link} to="/reviews">
                Reviews
              </Nav.Link>
              <Nav.Link as={Link} to="/form">
                Form
              </Nav.Link>
            </>
          )}
        </Nav>
        {user ? (
          <Button variant="outline-success" onClick={onLogout}>
            Logout
          </Button>
        ) : (
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

