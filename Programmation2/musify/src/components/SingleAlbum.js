/**
 * Créé par David Champagne
 * 2020/06/04
 *
 */
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import backarrow from '../img/backarrow.png';
import './Catalogue.css';
import {Songs} from "./Songs";
import { Paroles } from "./Paroles";

export class SingleAlbum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {paroles: false, songs: null, hovered: false, filtered: false}
    }

render() {
    if (this.state.paroles === false) {
        return (
            <>
                {/* Section image à cliquer pour revenir au catalogue */}
                <Row>
                    <Col lg={"12"}>
                        <img
                            onClick={() => this.props.back(true)}

                            className={"img-fluid white"} alt={"Retour"}
                            title={"Retourner au catalogue"}
                            src={backarrow}
                             />

                    </Col>
                </Row>

                {/* Section affichage de la pochette, nom de l'album (année de parution) et nom de l'artiste */}

                <Row className="mt-3">
                    <Col lg="4">
                        <img
                            src={this.props.album.src}
                            alt={this.props.album.src}
                            className={"img-fluid img-thumbnail"}/>
                    </Col>
                    <Col lg="8" className="text-white">
                        <ul>
                            <li><h2>{this.props.album.nom_album} ({this.props.album.annee_parution})</h2></li>
                            <li className={"h4 mt-2"}><i>{this.props.album.artiste}</i></li>
                        </ul>
                    </Col>
                </Row>

                {/* Section de la liste des chansons */}
                <Row>
                    <Col className="mt-5">
                        <h3 className={"mb-3 text-white"}>Chansons</h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={"4"}>
                    {this.props.album.chansons.map((element, i) =>

                        <Songs onClick={() => this.setState({paroles: true, chanson: this.props.album.chansons[i]})}
                               key={"single_album"+i}

                               chanson={this.props.album.chansons[i].nom}
                            />

                    )}
                    </Col>

                    <Col lg={"8"}>
                        <img
                            className=""
                            alt={this.props.album.src2}
                            src={this.props.album.src2}
                        />
                        <br/>
                        <img
                            className=""
                            alt={this.props.album.src2}
                            src={this.props.album.src2}
                        />
                    </Col>

                </Row>
            </>
        )

    //     Section de l'affiche des paroles
    } else if (this.state.paroles === true) {

        return (
            <>
                <Row>
                    <Col lg={"12"}>
                        {/* On clique sur la flèche ou sur la pochette pour revenir aux chansons */}
                        <img
                            onClick={() => this.setState({paroles: false})}
                            className="img-fluid white border-light" alt={"Retour"}
                            title={"Retourner au catalogue"}
                            src={backarrow}/>
                    </Col>
                </Row>

                <Row className="mt-3">

                    <Col lg="4">
                        <img src={this.props.album.src}
                             alt={this.props.album.src}
                             className={"img-fluid img-thumbnail"}
                            onClick={() => this.setState({paroles: false})}/>
                    </Col>

                    <Col lg="8" className="text-white">
                        <ul>
                            <li><h2>{this.props.album.nom_album}</h2></li>
                            <li className={"h4 mt-2"}><i>{this.state.chanson.nom}</i></li>
                        </ul>
                    </Col>
                </Row>

                {/* Affichage des paroles */}
                <Row>
                    <Col lg={"12"} className="mt-2">
                        <h3 className={"mb-3 mt-2 text-white"}>Paroles</h3>
                    </Col>
                    <Col lg={"6"} className={"text-white text-shadow"}>

                        <Paroles paroles={this.state.chanson.lyrics}/>
                    </Col>

                </Row>
            </>
        )
    }
}

}







