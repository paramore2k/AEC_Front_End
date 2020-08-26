/**
 * Créé par David Champagne
 * 2020/06/16
 *
 */
import React from "react";


import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export class PersonnageV2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data : []};
    }

    // Gestion des erreurs


    async componentDidMount() {

        await fetch("https://swapi.dev/api/people/1")
            .then(response => response.json())
            .then(json => this.setState({ data: json}));
    }

    render() {
    console.log(this.state.data);
        return(
            <Container>
                <Row>
                    <Col>
                    <div>
                        <ul>
                            {Object.keys(this.state.data).map(key => (
                                <li key={key}>{key} : {this.state.data[key]}</li>
                            ))}
                        </ul>
                    </div>
                    </Col>

                </Row>
            </Container>


        )

    }
}