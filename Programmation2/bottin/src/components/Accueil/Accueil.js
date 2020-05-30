/**
 * Créé par David Champagne
 * 2020/05/19
 *
 */

import React from "react";
import Container from 'react-bootstrap/Container';
import { Connexion } from "../Connexion/Connexion";
import { Bottin } from "../Bottin/Bottin";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



export class Accueil extends React.Component {
    constructor(props) {
        super(props);
        this.state = { connected: true };
        this.gererConnection = this.gererConnection.bind(this);
        this.verifierConnexion = this.verifierConnexion.bind(this);
    }

    verifierConnexion(connexion) {
        this.setState({ connected: connexion });
    }


    gererConnection() {
        if (this.state.connected) {
            return (
                    <Container>

                        <Bottin />

                    </Container>


            )

        }
        else {
            return (
                <Connexion onClick={this.verifierConnexion} />
            )
        }
    }


    render() {
        return (
            this.gererConnection()

        );
    }
}
