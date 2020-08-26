/**
 * Créé par David Champagne
 * 2020/08/02
 *
 */
import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link, NavLink, Switch, withRouter} from "react-router-dom";




export class Menu extends React.Component {




    render() {
        const activestyle = {
            color : 'white',
            border: 'border',
            borderStyle : 'solid',
            borderColor: 'grey',
            borderWidth: '3px'};

        return(
            <>

                <Navbar bg="dark" variant="dark" className={"mb-3"}>
                    <Switch>
                        <React.Fragment>
                        <Link exact="true" to={"/"} ><Navbar.Brand>Deezer App</Navbar.Brand></Link>
                        </React.Fragment>
                    </Switch>
                    <Nav className="justify-content-center">
                        <NavLink to="/" className={"px-2"} activeatyle={activestyle}>Accueil</NavLink>
                    </Nav>
                </Navbar>

            </>
        );
    }

}
export default withRouter(Menu);