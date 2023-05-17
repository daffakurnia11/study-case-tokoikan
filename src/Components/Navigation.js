import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar className="navigation py-4" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="navigation-brand">
            Toko Ikan
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto">
              <Nav.Link
                href="#home"
                className="navigation-link text-center active"
              >
                Beranda
              </Nav.Link>
              <Nav.Link
                href="#features"
                className="navigation-link text-center"
              >
                Keunggulan
              </Nav.Link>
              <Nav.Link href="#pricing" className="navigation-link text-center">
                Fitur Aplikasi
              </Nav.Link>
              <Nav.Link href="#pricing" className="navigation-link text-center">
                Testimonial
              </Nav.Link>
            </Nav>
            <Nav>
              <Button className="btn navigation-button">Download</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
