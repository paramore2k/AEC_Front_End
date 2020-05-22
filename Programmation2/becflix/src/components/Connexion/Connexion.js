/**
 * Créé par David Champagne
 * 2020/05/19
 *
 */
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import logo from "../../img/becflix.png";

export class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.handleConnexion = this.handleConnexion.bind(this);
    }

    handleConnexion() {
        let connecter = false;

        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;

        if (email.toLowerCase() === "david@david.com" && pass.toLowerCase() === "david"){
            connecter = true;
        }
        this.props.onClick(connecter);

    }

    render() {
        return (
            <Container>
                    <Row className="pt-3">
                        <Col>
                            <img src={logo} alt="BecFlix" width="100px"/>
                        </Col>
                    </Row>
                <Row className="justify-content-center">
                    <Col lg="6">
                            <Form className="">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" id="email"/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" id="password"/>
                                </Form.Group>

                                <Button variant="primary" onClick={this.handleConnexion}>
                                    Soumettre
                                </Button>
                            </Form>
                        </Col>
                    </Row>
            </Container>
        );
    }
}