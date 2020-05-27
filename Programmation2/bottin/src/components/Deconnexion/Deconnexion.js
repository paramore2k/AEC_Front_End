/**
 * Créé par David Champagne
 * 2020/05/19
 *
 */
import React from "react";

import Button from "react-bootstrap/Button";

export class Deconnexion extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeconexion = this.handleDeconexion.bind(this);
    }

    handleDeconexion() {

        // Ceci retourne un erreur 'cannot read property' 
        //Regarde le fichier Accueiil. ton erreur est la
        this.props.onClick(false);
    }

    render() {
        return (
            // <div className="d-flex justify-content-end">
            <Button variant="danger" onClick={this.handleDeconexion}>
                Déconnexion
            </Button>
            // </div>


        );
    }
}
