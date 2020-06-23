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

export class PersonnageV4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data : []};
    }

    // Gestion des erreurs


    async componentDidMount() {

                let tabTMP = [];
                for (let i=1;i <= 12;i++) {
                 try {
                     const response = await fetch('https://swapi.dev/api/people/' + i + "/");
                     const json = await response.json();
                     tabTMP.push(json);
                     this.setState({data: tabTMP});
                     console.log(json);
                 }
                 catch (error) {
                     console.log(error);

                 }
             }
        }

        render() {

            return(
                <Container>
                    <Row>

                    {this.state.data.map(key => (
                        <Col className="col-4"
                             key={key.name}>
                            <Perso nom={key.name}
                            />
                        </Col>
                    ))}
                    </Row>
                </Container>


            )

        }
}