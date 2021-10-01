import React from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        history.replace('/')
    }

    return (
        <div className="login-screen">
            <Container>
                <h1 className="mt-5">Login</h1>
                <hr />
                <Button className="primary" onClick={ handleLogin }>Login</Button>
            </Container>
        </div>
    );
};

export default LoginScreen;