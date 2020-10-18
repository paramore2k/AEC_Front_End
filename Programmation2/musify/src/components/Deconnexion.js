import React from "react";

import Button from "react-bootstrap/Button";

export class Deconnexion extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeconexion = this.handleDeconexion.bind(this);
    }


    handleDeconexion() {

        this.props.onClick(false);
    }

    render() {
        return (
            <Button variant="danger" onClick={this.handleDeconexion}>
                Déconnexion
            </Button>



        );
    }
}
