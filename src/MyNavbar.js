// MyNavbar.js
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand><Link to="/" className="nav-link">Migrate</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/weather" className="nav-link">WeatherApp</Link>
                    <Link to="/news" className="nav-link">NewsApp</Link>
                    <Link to="/fullcalendar" className="nav-link">FullCalendar</Link>
                    <Link to="/empmanagement" className="nav-link">Empmanagement</Link>
                </Nav>
                <Nav>
                    {/* Link for Sign In */}
                    <Link to="/signin" className="nav-link">
                        <Button variant="outline-light">Sign In</Button>
                    </Link>

                    {/* Example Link for Sign Up */}
                    <Link to="/signup" className="nav-link">
                        <Button variant="outline-light">Sign Up</Button>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
