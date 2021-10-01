import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Heroes</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/dc">DC</Nav.Link>
                    <Nav.Link as={Link} to="/marvel">Marvel</Nav.Link>
                    <Nav.Link as={Link} to="/heroSearch">Search Hero</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/login" className="justify-content-end">Logout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar