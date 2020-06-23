/**
 * Créé par David Champagne
 * 2020/06/16
 *
 */
import React from "react";

export class PersonnageV1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data : []};
    }

    // Monter le api pour aller chercher les données
    componentDidMount(){
        fetch('https://swapi.dev/api/people/5/')
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }
    render() {
        console.log(this.state.data);
        return(
            <>
                <h1>{this.state.data.name}</h1>

                </>
        )
    }

}