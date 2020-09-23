/**
 * Créé par David Champagne
 * 2020/07/07
 *
 */
import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import {toast} from "react-toastify";


export class Films extends React.Component {

    constructor(props) {
        super(props);
        this.removeFilm = this.removeFilm.bind(this);

    }

    async removeFilm() {
        try{
            const response = fetch('https://api.npoint.io/f0d07f8b699e0233b373'+ this.props.id, {
                method:'delete',
            });
            if(response.ok){
                console.log("SUPPRESSION!");
                toast.success("Supression du film" + this.props.nom);
            }
        }
        catch(error){
            console.log(error);
        }
    }




    render() {

        return(

            <>
            <Col lg="3" className="mt-3 d-flex align-content-end">
                <Card className="justify-content-center align-content-end">
                    <Card.Header>
                        <Card.Img variant={"top"} src={this.props.photo} className={"img-fluid"} alt={this.props.photo}/>
                    </Card.Header>
                    <Card.Body className="text-center">
                            <Card.Text>{this.props.nom}</Card.Text>
                            <Link to={ '/Films/' + this.props.nom + "?id=" + this.props.id } className="text-center">
                                <button className="btn btn-info text-center">Éditer</button>
                            </Link>
                                <button className="btn btn-danger ml-2" id={this.props.id} onClick={this.removeFilm}>Supprimer</button>
                    </Card.Body>

                </Card>

            </Col>
                </>
        );

    }

}

