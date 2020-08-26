/**
 * Créé par David Champagne
 * 2020/06/16
 *
 */
import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


export class PersonnageV1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data : []};
    }

    // Monter le api pour aller chercher les données
    async componentDidMount(){

        await fetch('https://swapi.dev/api/people/1')
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
        let tabMP = [];
        for (let i=0;i<json.length;i++){
            console.log(data);
        }
    }

    render() {
        console.log(this.state.data);
            return (

                <>
                    <Container>
                        <Row>
                            <div>
                                <ul>

                                    {Object.keys(this.state.data).map((key, i) =>
                                        <li key={key}>{this.state.data[key]}</li>
                                    )}

                                </ul>
                            </div>

                        </Row>
                    </Container>

                </>
            )
        }

}