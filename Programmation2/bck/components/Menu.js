/**
 * Créé par David Champagne
 * 2020/06/30
 *
 */
import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ExempleLink} from "./ExempleLink";

export class Menu extends React.Component {


    render() {
        const activeStyle = { color : "orange" };
        return(
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">SORTIE D'ÉTÉ</Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavLink to="/" activeStyle={activeStyle}>Accueil</NavLink>
                        <NavLink to="/Photos" activeStyle={activeStyle}>Photos</NavLink>
                    </Nav>
                </Navbar>
                    <ExempleLink/>
            </>
        );
    }

}