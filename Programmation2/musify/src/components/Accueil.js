

import React from "react";
import Container from 'react-bootstrap/Container';
import { Connexion } from "./Connexion";
import './Connexion.css';
import {Catalogue} from "./Catalogue";
import { Deconnexion } from "./Deconnexion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";





export class Accueil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            connected : true
};
        this.gererConnection = this.gererConnection.bind(this);
        this.verifierConnexion = this.verifierConnexion.bind(this);
        this.Header = this.Header.bind(this);
    }
    // Section Header

    Header() {
        return (

            <Row className="d-flex align-items-center pt-2 pb-3">
                <Col>
                    <Navbar bg="light" className={"navbar-light"}>

                        <Navbar.Brand>Musify</Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto d-flex justify-content-center">
                                <Form className="search form-inline my-2 my-lg-0" id="SearchForm" onSubmit={e => {e.preventDefault()}}>
                                    <input className="form-control mr-sm-2" placeholder="Rechercher"
                                           aria-label='Rechercher' id='inputRechercher'
                                    />
                                    <Button variant="success" type="button" onClick={this.Rechercher}>Recherche</Button>
                                </Form>
                            </Nav>
                            <Deconnexion onClick={this.verifierConnexion}/>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>


        )
    }

    // Vérification de la connexion

    verifierConnexion(connexion) {
        this.setState({ connected: connexion });
    }
    gererConnection () {
        if (this.state.connected) {
            return (
                <Container>
                    {this.Header()}
                    <Catalogue/>
                </Container>
            )
        }
        else {
            return (
                <Connexion onClick={this.verifierConnexion}/>
            )
        }
    }
    render() {
        return (
            <>
            {this.gererConnection()}
            </>

        );
    }
}