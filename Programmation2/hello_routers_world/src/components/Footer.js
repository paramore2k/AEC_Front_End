/**
 * Créé par David Champagne
 * 2020/07/02
 *
 */
import React from "react";

import {ExempleLink} from "./ExempleLink";
import {Container, Row} from "react-bootstrap";

export class Footer extends React.Component {

    constructor(props) {
        super(props);


    }


    render() {
        return(
            <>
                <Container className={"mt-2"}>
                    <Row>
                        <ExempleLink/>
                    </Row>
                </Container>
            </>
        );
    }

}