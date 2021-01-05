import React, { Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown} from "react-bootstrap";
import logo from "../../assets/icons/logo.webp.png";
import "./navbarStyle.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
// import AboutMeComponent from "../../pages/About/AboutComponent";
// import HomeComponent from "../../pages/Home/HomeComponent";
// import SkillsComponent from "../../pages/Skills/SkillsComponent";
// import ExperienceComponent from "../../pages/Experience/ExperienceComponent";
// import ProjectsComponent from "../../pages/Projects/ProjectsComponent";
// import ContactComponent from "../../pages/Contact/ContactComponent";

const NavbarComponent = () => {
    return(
        <Router>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark"
                    className="animate-navbar nav-theme justify-content-between">
                <Navbar.Brand href="#home">
                    <img className="logo" src={logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/*<Switch>*/}
            {/*    <Route path="/">*/}
            {/*        <HomeComponent />*/}
            {/*    </Route>*/}
            {/*    <Route path="/About">*/}
            {/*        <AboutMeComponent />*/}
            {/*    </Route>*/}
            {/*    <Route path="/Skills">*/}
            {/*        <SkillsComponent />*/}
            {/*    </Route>*/}
            {/*    <Route path="/Experience">*/}
            {/*        <ExperienceComponent />*/}
            {/*    </Route>*/}
            {/*    <Route path="/Projects">*/}
            {/*        <ProjectsComponent />*/}
            {/*    </Route>*/}
            {/*    <Route path="/Contact">*/}
            {/*        <ContactComponent />*/}
            {/*    </Route>*/}
            {/*</Switch>*/}
        </Router>
    )
}

export default NavbarComponent;

