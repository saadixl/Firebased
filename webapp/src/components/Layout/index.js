import React from "react";
import { useState } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../Sidebar';
import { auth } from '../../data/firebase';
import { logout } from '../../data/auth';
import { getCache } from '../../data/cache';
import { loginWithGoogle } from '../../data/auth';
import './style.css';

function Layout(props) {
    const [currentUser, setCurrentUser] = useState(auth.currentUser || getCache('currentUser'));

    const onLogout = () => {
        const confirm = window.confirm('Do you want to logout from your account?');
        if (confirm) {
            logout();
            setCurrentUser()
        }
    };

    const authenticatedState = <Row>
        <Col md={2} className="sidebar-wrapper">
            <Sidebar onLogout={onLogout} currentUser={currentUser} activePage={props.activePage} />
        </Col>
        <Col md={10} className="main-content-wrapper">
            {props.children}
        </Col>
    </Row>;

    const unAuthenticatedState = <Row className="unathenticated-wrapper">
        <Col md={4}></Col>
        <Col md={4}>
            <Alert className='login-error-alert' key='secondary' variant='secondary'>
                <span className="login-bar-text">
                    <h4>
                        Firebased
                    </h4>
                </span>
                <Button size="sm" onClick={() => {
                    loginWithGoogle(setCurrentUser);
                }} variant="outline-danger">Login with Google</Button>
            </Alert>

        </Col>
    </Row>;

    const layoutPresentation = currentUser ? authenticatedState : unAuthenticatedState;

    return (layoutPresentation);
}

Layout.propTypes = {
    children: PropTypes.object
};

export default Layout;
