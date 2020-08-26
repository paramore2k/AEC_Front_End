/**
 * Créé par David Champagne
 * 2020/07/07
 *
 */

import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Container from "react-bootstrap/Container";



export class MenuSansPostBack extends React.Component {

    render() {

        const activeStyle = { color: "pink" };
        return (
            <>
                <Container>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Prime API</Navbar.Brand>
                    <Nav className="mr-auto justify-content-center">
                        <NavLink exact to="/" activeStyle={activeStyle} >Accueil</NavLink>
                    </Nav>
                </Navbar>
                </Container>
            </>
        );
    }




}



