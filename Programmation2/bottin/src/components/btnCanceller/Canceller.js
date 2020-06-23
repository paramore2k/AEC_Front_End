/**
 * Créé par David Champagne
 * 2020/06/01
 *
 */

import React from "react";

export class CancellerRecherche extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
        this.GererCanceller = this.GererCanceller.bind(this);
    }

    render(){
        return(
            <button type="reset" onClick={this.GererCanceller}>Annuler</button>
        )
    }






}