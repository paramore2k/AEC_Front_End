/**
 * Créé par David Champagne
 * 2020/06/30
 *
 */
import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {NavLink, Link} from "react-router-dom";
import Router from "react-router-dom/es/Router";

export class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <Navbar bg="dark" variant="dark">
                    <Router>
                    <Link exact to="/Accueil"><Navbar.Brand href="/">React Router World</Navbar.Brand></Link>
                    </Router>
                    <Nav className="mr-auto">

                        <NavLink to="/">Accueil</NavLink>
                        <NavLink to="/Photos">Photos</NavLink>
                        <NavLink to="/Videos">Vidéos</NavLink>
                        <NavLink to="/Carte">Carte</NavLink>
                    </Nav>
                </Navbar>
            </>
        );
    }

}