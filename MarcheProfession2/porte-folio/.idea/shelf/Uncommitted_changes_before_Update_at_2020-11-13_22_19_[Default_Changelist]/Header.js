/**
 * Créé par David Champagne
 *
 */

import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Container from "react-bootstrap/Container";

export class Header extends React.Component{
    render() {

        /* Section du composant smoothscrool */

        const SmoothScroll = () => (
            <div className={"navbar-a maNav"}>
            <AnchorLink href='#realisations'>Mes réalisations</AnchorLink>
            <AnchorLink href='#me_joindre'>Me joindre</AnchorLink>
            </div>
        )
        const name = "< David Champagne />";
        return(
            <>
                {/* Section menu de navigation */}
                <Container>
                    <Navbar expand="md" fixed={"top"} variant="dark">
                    <Navbar.Brand className="col"> {name}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-a maNav">
                    <SmoothScroll/>
                    </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </Container>
                </>
        );
    }
}
