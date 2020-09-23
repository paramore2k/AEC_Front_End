import React from "react";
import {Nav, Navbar, NavLink} from "react-bootstrap";
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
                        <Nav className="mr-auto">
                            <Nav.Link as={NavLink} href="/Films">Films</Nav.Link>
                            <Link to="/ajouterFilm" className="mr-auto">Ajouter un Film</Link>
                            <Nav.Link href="/About" className="mr-auto">À Propos</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>

            </>
        );
    }
}
