/**
 * Créé par David Champagne
 * 2020/05/19
 *
 */

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../img/becflix.png";
import {Connexion} from "../Connexion/Connexion";
import {Catalogue} from "../Catalogue/Catalogue";
import React from "react";
import {Deconnexion} from "../Deconnexion/Deconnexion";

export class Accueil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {connecter: false};
        this.gererConnexion = this.gererConnexion.bind(this);
        this.verifierConnexion = this.verifierConnexion.bind(this);
    }

    // Vérification de l'état de la connexion

    verifierConnexion(connexion) {
        this.setState({connecter: connexion});
    }

    // Gérer le statut de la connexion

    gererConnexion() {
        if (this.state.connecter) {
            return (
                <Container fluid>
                    <Row>
                        <Col>
                            <img src={logo} alt="BecFlix" width="180px"/>
                        </Col>
                        <Col>
                            <Deconnexion onClick={this.verifierConnexion} />
                        </Col>
                    </Row>
                <Catalogue/>
                </Container>
            )
        } else{
            return (
                <Connexion onClick={this.verifierConnexion}/>
            )
    }
}
    // Affichage de l'acceuil pour la connexion

    render () {
        return (
            this.gererConnexion()
        );
    }
}

export default Accueil;