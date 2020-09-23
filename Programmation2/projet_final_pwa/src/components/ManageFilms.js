/**
 * Créé par David Champagne
 * 2020/07/07
 *
 */

import React from "react";
import { Films } from "./Films";
import {Container, Col, Row} from "react-bootstrap";

export class ManageFilms extends React.Component {
    constructor(props) {
        super(props);
        this.state = { donneesRecues: [] };
    }

    //Ajout de la gestion des erreurs
    async componentDidMount() {
        try {
            const response = await fetch("https://jsonserv.herokuapp.com/films");
            const reponseDeApi = await response.json();
            this.setState({ donneesRecues: reponseDeApi });
            if (!response.ok) {
                //Permet d'attraper l'erreur 500 et l'erreur 400
                throw Error(response.statusText);
            }
        } catch (error) {
            //On gère l'erreur
            console.log(error);
        }
    }


    // Affichage de la page d'accueuil, page principal de la liste des films
    render() {
        return (
            <Container>
            <Row className={"d-flex"}>
                <Col lg={"12"}>
                <h2 className={"mt-2 text-center"}>Bienvenue sur Prime</h2>
                </Col>
                {this.state.donneesRecues.map((key,i) => (

                    <Films nom={key.name} id={key.id} key={key.name+key.id} toutLobjet={key} genre={key.genre} photo={key.picture}/>
                ))}
            </Row>
            </Container>
        );
    }
}