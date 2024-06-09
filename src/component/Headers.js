import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';



import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';


function Header() {



    return (

        <header>
            <Navbar bg='primary' variant='dark' expand="lg" collapseOnSelect>

                <Nav >

                    <NavDropdown id='username' title={<i className='fas fa-bars'></i>}>
                        <NavDropdown.Item href='/dashboard'>Dashboard</NavDropdown.Item>
                        <NavDropdown.Item href='/pricing'>Pricing</NavDropdown.Item>
                        <NavDropdown.Item href='/account'>Account</NavDropdown.Item>
                    </NavDropdown>
                    <Navbar.Brand href='/ideator'>Ideator</Navbar.Brand>
                    <Nav.Link href='/ideator/login'>Login</Nav.Link>
                </Nav>


            </Navbar>
        </header >

    );
};

export default Header;;