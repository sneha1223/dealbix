import React from 'react'
import './Topbar.css'
import { Navbar, Container,Nav } from 'react-bootstrap'

function Topbar() {
  return (
    <div>
         <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav-items">
            <Nav.Link href="#home">Motors</Nav.Link>
            <Nav.Link href="#features">Property for rent</Nav.Link>
            <Nav.Link href="#pricing">Property for sale</Nav.Link>
            <Nav.Link href="#pricing">Classifieds</Nav.Link>
            <Nav.Link href="#pricing">Furniture and garden</Nav.Link>
            <Nav.Link href="#pricing">Mobiles & Tablets</Nav.Link>
            <Nav.Link href="#pricing">Job</Nav.Link>
            <Nav.Link href="#pricing">Community</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Topbar