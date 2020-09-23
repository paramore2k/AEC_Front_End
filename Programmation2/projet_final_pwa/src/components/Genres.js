/**
 * Créé par David Champagne
 * 2020/07/07
 *
 */

import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import Select from "react-select";

export class Genres extends React.Component {
    constructor(props) {
        super(props);
        this.state = { donneesRecues: [] };
    }

    //Ajout de la gestion des erreurs
    async componentDidMount() {
        try {
            const response = await fetch("https://jsonserv.herokuapp.com/genres");
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
            <>

            </>

        );
    }
}
export default Genres;