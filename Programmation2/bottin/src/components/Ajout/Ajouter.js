/**
 * Créé par David Champagne
 * 2020/06/01
 *
 */
import React from "react";

export class Ajouter extends React.Component {

    constructor(props) {
        super(props);
        this.AjoutEmploye = this.AjoutEmploye.bind(this);
    }



    AjoutEmploye(e){
        e.preventDefault();
        let list = this.state.list;
        const newEmploye = document.getElementById('addInput')
    }

}