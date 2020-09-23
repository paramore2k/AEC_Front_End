import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";


export class MenuSansPostBack extends React.Component {

    render() {

        return (
            <>
                <Container>
                    <Navbar expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/">Projet Final PWA</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="Films">Films</Nav.Link>
                            <Nav.Link href="/ajouterFilm" className="mr-auto">Ajouter Film</Nav.Link>
                            <Nav.Link href="/About" className="mr-auto">À Propos</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>

            </>
        );
    }
}
