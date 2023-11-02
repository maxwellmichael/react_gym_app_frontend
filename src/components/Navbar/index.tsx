import React from 'react'
import { Container, Navbar as NavbarBS, Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


export default function Navbar() {
  return (
    <NavbarBS bg="primary" data-bs-theme="dark">
      <Container>
        <NavbarBS.Brand href="#home">GymApp</NavbarBS.Brand>
        <Nav>
          <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          
          <LinkContainer to="/members">
          <Nav.Link>Members</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </NavbarBS>
  )
}
