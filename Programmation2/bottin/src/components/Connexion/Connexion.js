
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
        let connected = false;
        const pass = document.getElementById('password').value;
        if (pass.toLowerCase() === "alibaba")
            connected = true;
        this.props.onClick(connected);


    }

    render() {
        return (

                <Row className="justify-content-center mt-5">
                    <Col lg="6">
                        <h4 className="text-center my-5">Connection au bottin des employés</h4>
                        <Form>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control type="password" placeholder="Mot de passe" id="password"/>
                            </Form.Group>

                            <Button type={"submit"} variant="primary" onClick={this.handleConnexion}>
                                Soumettre
                            </Button>

                        </Form>

                    </Col>
                </Row>

        );
    }
}