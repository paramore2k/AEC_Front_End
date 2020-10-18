/**
 * Créé par David Champagne
 *
 */

import React from "react";
import {Nav, Navbar, Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";


export class MenuSansPostBack extends React.Component {

    render() {
        return (
            <>
                <Container>
                    <Navbar expand="lg" bg="dark" variant="dark">
                        <Link to="/"><Navbar.Brand>Projet Final PWA</Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto navbar-a">
                            <Link to="/">Films</Link>
                            <Link to="/ajouterFilm">Ajouter un Film</Link>
                            <Link to="/About">À Propos</Link>
                        </Nav>
                            <Button variant="info" id="boutonInstall">Installer l'application</Button>
                        </Navbar.Collapse>

                    </Navbar>
                </Container>

            </>
        );
    }
}
