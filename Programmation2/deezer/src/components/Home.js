/**
 * Créé par David Champagne
 * 2020/08/11
 *
 */
import React from "react";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Search from "./SearchBar";


export default class Home extends React.Component {

    render(){


        return(

            <Container>
                <Row className="d-flex justify-content-around align-content-around">
                    <Col lg={"12"}>
                        <Search searchAlbums={this.searchAlbums}/>
                    </Col>
                    <Col lg={"4"} className="mb-3">
                        <Link to={"/search/eminem"}><img src={"https://img.archambault.ca/images/PG/3031/3031501-gf.jpg?404=default&w=400"} alt={"Eminem'"} className={"img-fluid"}/></Link>
                    </Col>
                    <Col lg={"4"} className="mb-3">
                        <Link to={"/search/skillet"}><img src={"https://img.archambault.ca/images/PG/2891/2891664-gf.jpg?404=default&w=400"} alt={"Skillet"} className={"img-fluid"}/></Link>
                    </Col>
                    <Col lg={"4"} className="mb-3">
                        <Link to={"/search/Taylor Swift"}><img src={"https://img.archambault.ca/images/PG/3226/3226051-gf.jpg?404=default&w=400"} alt={"Catherine Major"} className={"img-fluid"}/></Link>
                    </Col>
                    <Col lg={"4"}>
                        <Link to={"/search/alanis morissette"}><img src={"https://img.archambault.ca/images/PG/3222/3222627-gf.jpg?404=default&w=400"} alt={"Alanis Morissette"} className={"img-fluid"}/></Link>
                    </Col>
                    <Col lg={"4"}>
                        <Link to={"/search/july talk"}><img src={"https://img.archambault.ca/images/PG/3209/3209693-gf.jpg?404=default&w=400"} alt={"July Talk"} className={"img-fluid"}/></Link>
                    </Col>
                    <Col lg={"4"}>
                        <Link to={"/search/ellie goulding"}><img src={"https://img.archambault.ca/images/PG/3209/3209692-gf.jpg?404=default&w=400"} alt={"Ellie Goulding"} className={"img-fluid"}/></Link>
                    </Col>
                </Row>
            </Container>

        )
    }

}
