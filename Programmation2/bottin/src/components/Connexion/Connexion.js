
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.handleConnexion = this.handleConnexion.bind(this);
    }

    handleConnexion() {
        let connecter = false;
        const pass = document.getElementById('password').value;

        if (pass.toLowerCase() === "alibaba"){
            connecter = true;
        }
        this.props.onClick(connecter);

    }

    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col lg="6">
                        <Form className="">

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