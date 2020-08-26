/**
 * Créé par David Champagne
 * 2020/07/02
 *
 */

import React from "react";
import {Nav, Navbar, Switch} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import {Search} from "./SearchBar";


export class Menu extends React.Component {




    render() {
        const activeStyle = {
            color : 'white',
            border: 'border',
            borderStyle : 'solid',
            borderColor: 'grey',
            borderWidth: '3px'};

        return(
            <>

                <Navbar bg="dark" variant="dark">
                    <Switch>
                        <Link exact="true" to={"/"} ><Navbar.Brand>EXEMPLES D'API</Navbar.Brand></Link>
                    </Switch>
                    <Nav className="justify-content-center">
                        <NavLink to="/PersonnageV1" className={"px-2"} activeStyle={activeStyle}>PersonnageV1</NavLink>
                        <NavLink to="/PersonnageV2" className={"px-2"} activeStyle={activeStyle}>PersonnageV2</NavLink>
                        <NavLink to="/PersonnageV3" className={"px-2"} activeStyle={activeStyle}>PersonnageV3</NavLink>
                        <NavLink to="/PersonnageV4" className={"px-2"} activeStyle={activeStyle}>PersonnageV4</NavLink>
                    </Nav>
                </Navbar>
                <Search/>


            </>
        );
    }

}