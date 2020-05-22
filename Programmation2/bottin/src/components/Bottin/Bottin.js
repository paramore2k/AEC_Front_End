/**
 * Créé par David Champagne
 * 2020/05/19
 *
 */
import React from "react";
import { Employe } from '../Employe/Employe'
import {Col, Container, Row} from "react-bootstrap";

export class Bottin extends React.Component {
    render() {
        return  (
            <>
                <Container fluid>
                    <Row>
                        <Col lg="12" className="text-center pt-3">
                            <h4>Bottin des employés</h4>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col lg="3">
                            <Employe/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
