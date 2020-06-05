/**
 * Créé par David Champagne
 * 2020/06/03
 *
 */

import React from "react";
import {Card, CardImg} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import './Catalogue.css';


export class Album extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hovered: false}
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick(){
        this.props.SingleAlbum(true);
        this.props.onClick(true);
    }


    render() {
            return (
                <>
                    <Col xl={"3"}>
                        <Card bg={"light"} className={"my-2"} onClick={()=>this.handleOnClick()}>
                            <CardImg

                                className={"img-fluid top"} src={this.props.src}
                                onMouseOver={() => this.setState({hovered: true})}
                                onMouseOut={() => this.setState({hovered: false})}
                            >
                            </CardImg>

                            <div className="card-body text-center">
                                <div className="card-title"><i>{this.props.nom}</i></div>
                                <Card.Text className="small"><b>{this.props.artiste}</b></Card.Text>
                            </div>
                        </Card>
                    </Col>

                </>
            );


        }

}
