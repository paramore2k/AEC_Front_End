/**
 * Créé par David Champagne
 * 2020/07/07
 *
 */
import React from "react";
import {Link} from "react-router-dom"
import Col from "react-bootstrap/Col";


export class BoutonAjouterFilm extends React.Component {


    render() {
        return (
            <>
                <Col>
                <Link to="/ajouterFilm" className="btn btn-primary">
                    Ajouter un film
                </Link>
                </Col>
            </>
        );
    }




}