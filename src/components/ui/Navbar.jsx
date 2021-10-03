import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { AuthContext } from '../../auth/AuthContext'
import Button from '@restart/ui/esm/Button'
import { types } from '../../types/types';

const NavBar = () => {

    const { user: { name }, dispatch } = useContext(AuthContext);
    const { replace } = useHistory();

    const handleLogout = () => {
        dispatch({
            type: types.logout
        });
        replace('/login');
    }

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
                    <Navbar.Text>{name}</Navbar.Text>
                    <Button style={{color:'white'}} className="btn btn-outline-dark" onClick={ handleLogout }>
                       Logout
                   </Button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar