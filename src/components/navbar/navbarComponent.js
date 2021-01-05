import React, { Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown} from "react-bootstrap";
import logo from "../../assets/icons/logo.webp.png";
import "./navbarStyle.css";

const NavbarComponent = () => {
    return(
        <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark"
                    className="animate-navbar nav-theme justify-content-between">
                <Navbar.Brand href="#home">
                    <img classNmae="logo" src={logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#Skills">Skills</Nav.Link>
                        <Nav.Link href="#Experience">Experience</Nav.Link>
                        <Nav.Link href="#Projects">Projects</Nav.Link>
                        <Nav.Link href="#Conatct">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavbarComponent;

