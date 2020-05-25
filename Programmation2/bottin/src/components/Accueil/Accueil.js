/**
 * Créé par David Champagne
 * 2020/05/19
 *
 */

import React from "react";
import Container from 'react-bootstrap/Container';
import {Connexion} from "../Connexion/Connexion";
import {Employe} from "../Employe/Employe";
import {Deconnexion} from "../Deconnexion/Deconnexion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {Bottin} from "../Bottin/Bottin";




export class Accueil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {connecter: true};
        this.gererConnexion = this.gererConnexion.bind(this);
        this.verifierConnexion = this.verifierConnexion.bind(this);
    }

    verifierConnexion(connexion){
        this.setState({connecter: connexion});
    }

    gererConnexion() {
        if(this.state.connecter){
            return (
                <Container>
                    <Navbar expand="lg" variant="light" bg="light">
                        <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end mr-auto">
                        <Deconnexion onClick={this.verifierConnexion} />
                    </Navbar.Collapse>
                    </Navbar>

                    <Row className="py-4">
                        <Bottin/>
                    </Row>

                </Container>

            )
        }
    else{
        return(
            <Connexion onClick={this.verifierConnexion()} />
        )
        }
    }
    render() {
        return (

                this.gererConnexion()

        );
    }
}
