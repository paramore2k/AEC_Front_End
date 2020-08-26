/**
 * Créé par David Champagne
 * 2020/07/02
 *
 */
import React from "react";
import {Container} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class PersonnageComplet extends React.Component {

    render() {

        return <>
            <Container>
            <Row>
                <Col lg={"4 py-4"}>
                    <Card className={"text-center"}>
                        <Card.Title className={"py-3"}>
                            {this.props.match.params.id}
                        </Card.Title>
                    </Card>
                </Col>
            </Row>
            </Container>
            </>;
    }


}