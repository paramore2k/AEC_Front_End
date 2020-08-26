/**
 * Créé par David Champagne
 * 2020/06/30
 *
 */
import React from "react";
import {Nav, Navbar, Switch} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";



export class Menu extends React.Component {

    constructor(props) {
        super(props);
    }


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
                    <Link exact to={"/"}><Navbar.Brand>SORTIE D'ÉTÉ</Navbar.Brand></Link>
                    </Switch>
                    <Nav className="justify-content-center">
                        <NavLink to="/Accueil" className={"px-2"} activeStyle={activeStyle}>Accueil</NavLink>
                        <NavLink to="/Photos" className={"px-2"} activeStyle={activeStyle}>Photos</NavLink>
                        <NavLink to="/Videos" className={"px-2"} activeStyle={activeStyle}>Vidéos</NavLink>
                        <NavLink to="/Carte" className={"px-2"} activeStyle={activeStyle}>Carte</NavLink>
                    </Nav>
                </Navbar>


            </>
        );
    }

}