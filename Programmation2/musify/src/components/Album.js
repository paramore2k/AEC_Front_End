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
        this.state = { hovered: false, visible: false}
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick(){
        this.props.SingleAlbum(true);
        this.props.onClick(true);
    }


    render() {
            return (
                <>
                    <Col xl={"3"} lg={"3"}>
                            <Card className={"my-2"}
                                  onMouseOver={() => this.setState({hovered: true})}
                                  onMouseOut={() => this.setState({hovered: false})}
                                  style={this.state.hovered ? filtered : null}
                                  onClick={()=>this.handleOnClick()}>

                                <CardImg className="card-img img-fluid top" src={this.props.src}/>


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
const filtered = {
    position: 'relative',
    pointer: 'cursor',
    filter: 'drop-shadow(0 0 0.60rem green)',
    border: 'darkblack',
    borderWidth: '.3em',
    borderColor: 'black',

}

