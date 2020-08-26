/**
 * Créé par David Champagne
 * 2020/08/02
 *
 */
import React from 'react';
import {Col, Row, Button, FormGroup} from "react-bootstrap";


export class Search extends React.Component {

    state = {
        term: ''
    }
    // Prise en charge de la recherche
    // Lors du changement de la zone de recherche, le statut de de la recherche change pour les mots inscrits

    handleInputChange = (event) => {
        this.setState({term: event.target.value})
    }
    submitSearch = (event) => {
        event.preventDefault();
        let {term} = this.state;
        this.props.searchAlbums(term);
    }

    render(){
        console.log(this.state);
        return(
            <div className="search mb-2 mt-2">
                <form onSubmit={(event) => this.submitSearch(event)}>
                    <Row>
                        <Col md={"10"}>
                            <FormGroup>
                                <input type="text"
                                placeholder="Rechercher"
                                className="form-control p-3"
                                value={this.state.term}
                                onChange={(event) => this.handleInputChange(event)}/>
                            </FormGroup>
                        </Col>
                        <Col md="2">
                            <FormGroup>
                                <Button className="btn btn-danger">
                                    <i className="fas fa-search"/>
                                </Button>
                            </FormGroup>
                        </Col>
                    </Row>
                </form>
            </div>
        )
    }
}

