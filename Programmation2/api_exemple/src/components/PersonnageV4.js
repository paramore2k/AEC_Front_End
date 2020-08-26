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
                for (let i=1;i<=5;i++) {
                 try {
                     const response = await fetch('https://swapi.dev/api/people/' + i + "/");
                     const json = await response.json();
                     tabTMP.push(json);
                     this.setState({data: tabTMP});
                 }
                 catch (error) {
                     console.log(error);

                 }
             }
        }

    render() {
        console.log(this.state.data);
        return (
            <Container>
                <Row>

                {this.state.data.map((key,i) => (
                    <Col lg={"4"} key={key.name}>

                    <Perso nom={key.name} toutLobjet={key} id={i + 1}
                    height={key.height}
                    hair={key.hair_color}/>

                    </Col>
                ))}


                </Row>
            </Container>
        );
    }
}