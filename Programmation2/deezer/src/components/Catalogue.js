/**
 * Créé par David Champagne
 * 2020/08/02
 *
 */
import React from "react";

import './App.css';
import {Card, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import {Link} from 'react-router-dom';
import axios from 'axios';
import Search from "./SearchBar";



export class Catalogue extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            albums: []
        };
    }

    // Reçevoir les albums

    getData() {

        axios.get('https://cors-anywhere.herokuapp.com/api.deezer.com/search/album', {
            "headers": {
                SameSite : "none",
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "cors-anywhere.herokuapp.com/api.deezer.com/",
                "x-rapidapi-key": "48298e718cmsh2aa6d92ef8b706bp1ccfe0jsnd64e1b450a13",
                "useQueryString": true,
            },params: {

                q: this.props.match.params.query
            }
        })
            .then(res => {
                console.log(res.data)
                this.setState({albums: res.data.data})
            })
    }

   async componentDidMount(){
        this.getData()
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.location.pathname !== this.props.location.pathname) {
            this.getData();

        }
    }

    // Méthode pour reçevoir les albums en fetch

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
    //
    //     Méthode de recherche en detch
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



    // Seconde méthode pour le Async

    // async componentDidMount() {
    //
    //     actions.getAlbums().then(item => this.setState({
    //         albums: item,
    //         data: item.id
    //     }));
    // }

    // searchAlbums = (data) => {
    //     actions.getAlbums(data).then(item=> this.setState({
    //         albums: data,
    //         data: data
    //     }))
    // }

    //
    // renderAlbums = () => {
    //
    //     const {albums} = this.state;
    //     return albums && albums.length ?
    //
    //         albums.map((item,index) => (
    //
    //             <Col key={index} lg={"3"} md={"3"} className={"my-3"}>
    //                 <div className="card">
    //                     <Link to={
    //                         {
    //                             pathname: `/details/${item.id}`,
    //                             state: {
    //                                 from: "Catalogue"
    //                             }
    //                         }
    //                     } state={"/"}><Card.Img src={item.cover_xl}/></Link>
    //                     <Card.Body>
    //                         <Card.Text>{item.title} ({item.record_type})</Card.Text>
    //                         <Card.Text>{item.artist.name}</Card.Text>
    //                     </Card.Body>
    //                     <Card.Footer className="links">
    //                             <Link to={`/details/${item.id}`} className="link"><i className="fas fa-info"/></Link>
    //                             <i className="fas fa-star"/>
    //
    //                     </Card.Footer>
    //                 </div>
    //             </Col>
    //
    //         ))
    //
    //         : null;
    //
    // }

    render() {
       console.log(this.state.albums);
        return (
            <Container>
                <Row className="d-flex justify-content-around align-content-around">
                    <Col lg={"12"}>
                        <Search searchAlbums={this.searchAlbums}/>
                    </Col>

                    {this.state.albums.map(album =>
                    <Col key={album.id} lg={"3"} md={"3"} className={"my-3"}>
                        <div className="card">
                            <Link to={
                                {
                                    pathname: `/details/${album.id}`,
                                    state: {
                                        from: "Catalogue"
                                    }
                                }
                            }><Card.Img src={album.cover_medium}/></Link>
                            <Card.Body>
                                <Card.Text>{album.title} ({album.type})</Card.Text>
                                <Card.Text>{album.artist.name}</Card.Text>
                            </Card.Body>
                            <Card.Footer className="links">
                                <Link to={`/details/${album.id}`} className="link"><i className="fas fa-info"/></Link>
                                <i className="fas fa-star"/>

                            </Card.Footer>
                        </div>
                    </Col>
                    )}

                </Row>
            </Container>)
    }
}