import React from "react";
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import './style.css';

function Sidebar(props) {
    const { currentUser = {}, onLogout, activePage } = props;
    const { displayName, photoURL } = currentUser;
    let profile;
    if (displayName && photoURL) {
        profile = <div className='profile'>
            <img src={photoURL} className='avatar' alt='avatar'/>
            {' '}
            <span className='display-name'>{displayName}</span>
        </div>;
    }
    return (
        <section className="sidebar">
            <h4 className="sidebar-title">
                Project Title
            </h4>
            {profile}
            <Nav
                activeKey={activePage}
                onSelect={(selected) => {
                    if (selected === 'logout') {
                        onLogout();
                    }
                }}
                className="flex-column"
            >
                <Nav.Item>
                    <Nav.Link href="home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="page1">Page 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="page2">Page 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="logout">Logout</Nav.Link>
                </Nav.Item>
            </Nav>
        </section>
    );
}

Sidebar.propTypes = {
    onLogout: PropTypes.func,
    currentUser: PropTypes.object,
    activePage: PropTypes.string
};

export default Sidebar;
