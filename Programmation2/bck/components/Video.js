/**
 * Créé par David Champagne
 * 2020/06/30
 *
 */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";

export class Videos extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(

            <Container className={"jumbotron text-center"}>
                <Row>
                    <Col lg={"12"} xs={"12"}>
                        <h4>Cet été, allons tous au parc Safari !! </h4>
                    </Col>
                </Row>
                <Row>
                    <Col lg={"4"} xs={"12"} className={"text-center d-flex justify-content-center mx-auto pt-4"}>
                        <img className={"img-fluid thumbnail text-center"} src="https://parcsafari.com/wp-content/themes/Divi/assets/images/download-app-visual.png" alt={"Parc Safari"}/>
                    </Col>
                </Row>
            </Container>

        )}

}