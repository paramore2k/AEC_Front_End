/**
 * Créé par David Champagne
 * 2020/06/30
 *
 */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ExempleLink} from "./ExempleLink";
import {Jumbotron} from "react-bootstrap";
import {Footer} from "./Footer";

export class Carte extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <Container className={"d-flex justify-content-center my-3"}>
                    <Row>
                        <Col lg={"12"}>
                            <h5 className={"text-center my-4"}>Voici la carte de l'emplacement du Parc Safari</h5>
                        </Col>
                        <Col className={"text-center"}>
                            <Jumbotron>
                            <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1409.5569795025783!2d-73.5176265661934!3d45.042909270403584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9804e85be5f05%3A0xb364f96f2a5b8c1c!2sParc%20Safari!5e0!3m2!1sfr!2sca!4v1593701438062!5m2!1sfr!2sca"
    width="600" height="450" frameBorder="0" style={{border: 2}} allowFullScreen="allowFullScreen"
    aria-hidden="false" tabIndex="0"/>
                            </Jumbotron>
                        </Col>

                    </Row>
                </Container>
                <Footer/>

            </>
        )
    }
}