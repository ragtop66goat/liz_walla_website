import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export const Navigation: React.FC = () => {
  // Retrieve the light-teal color from the CSS variable
  const tealColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--light-teal-color")
    .trim()
    .replace("#", "%23");

  // Build the background-image for the toggler using the teal color
  const togglerIcon = `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='${tealColor}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`;

  return (
    <Navbar expand="lg" style={{ backgroundColor: "var(--dark-purple-color)" }}>
      <Container>
        <Navbar.Brand style={{ color: "var(--light-teal-color)" }} href="/">
          FRACTIONAL
          <br />
          WERKS
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            borderColor: "var(--light-teal-color)",
            backgroundImage: togglerIcon,
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Dropdown 1" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Dropdown 2" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
