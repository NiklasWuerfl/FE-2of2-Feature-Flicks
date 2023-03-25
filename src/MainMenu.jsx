import Nav from "react-bootstrap/Nav";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

export default function MainMenu() {
  return (
    <>
       <Navbar bg="primary" expand="md" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-primary mx-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Container>
          <Nav  variant="dark" defaultActiveKey="/">
            <Nav.Item>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/movie-list" className="nav-link">
                Movie List
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/screening-list" className="nav-link">
                Screening List
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/information" className="nav-link">
                Information
              </NavLink>
              </Nav.Item>
              </Nav>
          </Container>
          </Navbar.Collapse>
      </Navbar>
      <Outlet/>
    </>
  );
}
