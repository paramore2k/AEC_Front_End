/**
 * Créé par David Champagne
 * 2020/06/30
 *
 */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class Carte extends React.Component {

    render() {
        return(
            <>
                <Container>
                    <Row>
                        <Col>
                            <h5>Voici quelques photos du parc safari</h5>
                        </Col>
                    </Row>
                </Container>


            </>
        )
    }
}