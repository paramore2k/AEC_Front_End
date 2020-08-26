/**
 * Créé par David Champagne
 * 2020/06/30
 *
 */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";
import {Footer} from "./Footer";

export class Videos extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <Container className={"my-3 text-center"}>
                <Row>
                    <Col lg={"12"}>
                        <h5 className="my-4">Voici le vidéo de la bande-annonce du parc-safari</h5>
                    </Col>
                </Row>
                <Row>
                    <Col className={"d-flex jumbotron justify-content-center mx-auto pt-4"}>
                        <iframe width="800" height="600" src="https://www.youtube.com/embed/Nz8Uh4ixWh8"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen/>
                    </Col>
                </Row>
                <Footer/>
            </Container>


        )}

}