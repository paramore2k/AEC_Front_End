/**
 * Créé par David Champagne
 * 2020/07/02
 *
 */
import React from "react";
import Col from "react-bootstrap/Col";


export class PageNotFound extends React.Component {

    render() {
        return (
            <>
                <Col lg={"12"} md={"12"} xs={"12"} className={"text-center"}>
                <img src={require("../images/banner_error_404.jpg")} alt={"Page not found"} className={"py-3 img-fluid"}/>
                </Col>
            </>
        );
    }

}