/**
 * Créé par David Champagne
 * 2020/06/16
 *
 */


import React from "react";

import '../App.css';
import {Card, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as actions from './Albums';
import {Search} from "./SearchBar";




export class PersonnageV3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {albums: []};

    }


    // async componentDidMount() {
    //     const url = "https://deezerdevs-deezer.p.rapidapi.com/album/156907002/";
    //
    //     const response = await fetch(url, {
    //         method: 'GET',
    //         mode: 'cors',
    //         cache: 'default',
    //         headers: {
    //             "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    //             "x-rapidapi-key": "48298e718cmsh2aa6d92ef8b706bp1ccfe0jsnd64e1b450a13",
    //         }
    //
    //
    //     })
    //     const json = await response.json();
    //     this.setState({data: json});
    //     if (!response.ok) {
    //         throw Error(response.statusText);
    //     }
    // }


    // async search() {
    //
    //     const SEARCH_URL = "https://api.spotify.com/v1/search?";
    //
    //     const response = await fetch(SEARCH_URL + this.state.query + "&type=artist&limit=10", {
    //         // Le token
    //
    //
    //         method: "GET",
    //         mode: "cors",
    //         cache: "default",
    //         headers: {
    //             "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    //             "x-rapidapi-key": "48298e718cmsh2aa6d92ef8b706bp1ccfe0jsnd64e1b450a13"
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => this.setState({data: data}))
    // }

    componentDidMount() {
        actions.getAlbums().then(item => this.setState({
            albums: item
        }));
    }

    searchAlbums = (term) => {
        actions.getAlbums(term).then(item=> this.setState({
            albums: item
        }))
    }

    renderAlbums = () => {
        const {albums} = this.state;

        return albums && albums.length ?

            albums.map((item,index) => (

                <Col key={index} lg={"3"} md={"3"} className={"my-3"}>
                    <div className="card">
                        <Card.Img src={item.album.cover_medium}/>
                        <Card.Body>
                            <Card.Text>{item.title}</Card.Text>
                            <Card.Text>{item.artist.name}</Card.Text>
                            <Card.Text>{item.artist.id}</Card.Text>
                        </Card.Body>
                    </div>
                </Col>

            ))

            : null;
    }

    render() {
        console.log(this.state);
        return (
            <Container>
                <Row className="d-flex justify-content-around align-content-around">
                    <Col lg={"12"}>
                        <Search searchAlbums={this.searchAlbums}/>
                        {/*<div>*/}
                        {/*    <input type="text" className={"ml-1 mt-3"} onChange={event => {*/}
                        {/*        this.setState({query: event.target.value});*/}
                        {/*    }}/>*/}
                        {/*    <button type={"button"} className={"btn btn-info ml-2"} onClick={() => {*/}
                        {/*        this.search();*/}
                        {/*    }}>Recherche*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </Col>
                            {this.renderAlbums()}
                </Row>
            </Container>)
    }
}

