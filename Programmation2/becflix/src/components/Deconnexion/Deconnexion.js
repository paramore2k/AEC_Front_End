/**
 * Créé par David Champagne
 * 2020/05/19
 *
 */
import React from "react";
import Button from "react-bootstrap/Button";
import {Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export class Deconnexion extends React.Component {
    handleDeconnexion() {
        this.props.onClick(false);
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Button variant="primary" onClick={() => this.handleDeconnexion()}>
                            Déconnexion
                        </Button>
                    </Col>
                </Row>
            </Container>

        );
    }
}
