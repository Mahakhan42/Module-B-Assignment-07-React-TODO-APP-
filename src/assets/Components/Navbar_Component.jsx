import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Logo_Component } from './Logo_Component';

const Navbar_Component = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#"><Logo_Component /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="me-auto">
          <Nav.Link href="#" active>Home</Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="navbarDropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>Disabled</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export { Navbar_Component };
