
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Connexion.css';

import { Col, Row, Container } from "react-bootstrap";

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
            <Container>
                <Row className="pt-5 mx-5 mt-5">
                    <Col lg="6" className="align-items-center py-5 mx-auto mt-5 justify-content-center mx-auto bg">
                        <h4 className="text-center m-auto text-white">Connexion à Musify</h4>
                        <Form>
                            <Form.Group>
                                <Form.Label className={"text-white"}>Identifiant</Form.Label>
                                <Form.Control type="username" placeholder="Nom d'utilisateur" id="username"/>
                            </Form.Group>

                            <Form.Group>

                                <Form.Label className={"text-white"}>Mot de passe</Form.Label>
                                <Form.Control type="password" placeholder="Entrez votre Mot de passe" id="password"/>
                            </Form.Group>

                            <Button type="submit" variant="primary" onClick={this.handleConnection}>
                                Soumettre
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        );
    }
}