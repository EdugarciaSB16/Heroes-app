import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext)

    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/'

        dispatch({
            type: types.login,
            payload: {
                name: 'Eduardo'
            }
        })
        history.replace(lastPath)
    }

    return (
        <div className="login-screen">
            <Container>
                <h1 className="mt-5">Login</h1>
                <hr />
                <Button className="primary" onClick={handleLogin}>Login</Button>
            </Container>
        </div>
    );
};

export default LoginScreen;