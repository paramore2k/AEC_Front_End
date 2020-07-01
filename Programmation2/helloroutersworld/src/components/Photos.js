/**
 * Créé par David Champagne
 * 2020/06/30
 *
 */
import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";


export class Photos extends React.Component {

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