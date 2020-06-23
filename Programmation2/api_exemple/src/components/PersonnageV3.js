/**
 * Créé par David Champagne
 * 2020/06/16
 *
 */


import React from "react";

import {Perso} from "./Perso";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class PersonnageV3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data : []};
    }

    // Gestion des erreurs


    async componentDidMount() {

        const response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "48298e718cmsh2aa6d92ef8b706bp1ccfe0jsnd64e1b450a13"
            }
        })
        let tabTMP = [];
        const json = await response.json();
        tabTMP.push(json);
        this.setState({ data: tabTMP })
        console.log(json);

    }

    render() {

        return(
            <Container>
                <Row>

                    {this.state.data.map(key => (
                        <Col className="col-4"
                             key={key.id}>
                            <Perso nom={key.data.name}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>


        )

    }
}