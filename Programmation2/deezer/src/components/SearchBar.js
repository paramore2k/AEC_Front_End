/**
 * Créé par David Champagne
 * 2020/08/02
 *
 */
import React from 'react';
import {Col, Row, Button, FormGroup} from "react-bootstrap";

import { withRouter } from 'react-router';


class Search extends React.Component {

    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {

        }
    }



    // Prise en charge de la recherche
    // Lors du changement de la zone de recherche, le statut de de la recherche change pour les mots inscrits

    handleInputChange = (data) => {
        this.setState({data: data.target.value})
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)


    }
    handleSearch(e){
        this.setState({ data: e.target.value})

    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.history.push(`/search/${this.state.data}`)
    }


    render(){


        return(
            <div className="search mb-2 mt-2">
                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col md={"10"}>
                                <input type="text"
                                placeholder="Rechercher"
                                className="form-control p-3"
                                onChange={this.handleSearch}/>
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
export default withRouter(Search);
