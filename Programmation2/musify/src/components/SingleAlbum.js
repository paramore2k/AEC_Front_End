/**
 * Créé par David Champagne
 * 2020/06/04
 *
 */
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import backarrow from '../img/backarrow.png';

export class SingleAlbum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {lyrics: false, songs: null, hovered: false}
    }

render() {
        if (this.state.lyrics===false){
            return(
                <>
                    <Row>
                        <Col lg={"6"}>
                            <img
                                onClick={ ()=> this.props.back(true)}
                                className={"img-fluid"} alt={"Retour"}
                                title={"Retourner au catalogue"}
                                src={backarrow}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={"4"} md={"6"}>
                            <img src={this.props.src} alt={this.props.src} className={"img-fluid"}/>
                        </Col>
                    </Row>
                    </>
            )
        }
}


}