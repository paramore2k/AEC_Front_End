
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Connexion.css';
import Logo from '../img/logo_spotify_black_100.png';

import {Col, Row, Container, Image} from "react-bootstrap";

export class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.handleConnection = this.handleConnection.bind(this);
    }

    handleConnection() {
        var connected = false;
        const username = document.getElementById('username').value;
        const pass = document.getElementById('password').value;
        if (username.toLowerCase() === "david" && pass.toLowerCase() === "david")
            connected = true;
        this.props.onClick(connected);

    }

    render() {
        return (
            <Container className={"justify-content-center h-100 mx-auto"}>
                <Row className=" pt-5 mx-5 mt-5 h-100">
                    <Col lg="6" className="py-5 mx-auto mt-5 bg">

                        <h4 className="text-center m-auto text-white"><Image src={Logo}/> Musify</h4>
                        <Form>
                            <Form.Group>
                                <Form.Label className={"text-white"}>Identifiant</Form.Label>
                                <Form.Control type="username" placeholder="Nom d'utilisateur" id="username"/>
                            </Form.Group>

                            <Form.Group>

                                <Form.Label className={"text-white"}>Mot de passe</Form.Label>
                                <Form.Control type="password" placeholder="Entrez votre Mot de passe" id="password"/>
                            </Form.Group>
                            <Col className={"text-center"}>
                                <Button type="submit" variant="" onClick={this.handleConnection} className={"btn bg-btn text-white p-2 text-uppercase text-center mt-3 mx-auto"}>
                                    Se connecter
                                </Button>
                            </Col>

                        </Form>
                    </Col>
                </Row>
            </Container>

        );
    }
}