/**
 * Créé par David Champagne
 * 2020/06/05
 *
 */

import React from "react";
import Form from "react-bootstrap/Form";



export class Rechercher extends React.Component {

    constructor(props) {
        super(props);
        this.state = { rechercher: false };
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e){
        let inputRecherche = e.target.value;
        this.props.rechercher(inputRecherche);
        // if (inputRecherche.length > 0) {
        //     this.setState({rechercher: true});
        //     document.getElementById('btnRecherche').innerHTML = 'Annuler la recherche';
        // }

    }



    render(){
        return (
            // Section bouton pour la recherche

            <Form className="form search inline my-2 my-lg-0" id="SearchForm" onSubmit={e => {e.preventDefault()}}>

                <input
                className={"mr-auto form-control"}
                id='inputRecherche'
                type="search"
                onChange={this.handleSearch}
                aria-label='Rechercher'
                placeholder="Rechercher"
                />

            </Form>

        )
    }


}
