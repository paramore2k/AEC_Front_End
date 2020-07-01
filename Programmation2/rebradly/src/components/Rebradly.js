/**
 * Créé par David Champagne
 * 2020/06/23
 *
 */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button, Form, Jumbotron} from "react-bootstrap";


export class Rebradly extends React.Component {

    constructor(props) {
        super(props);
        this.state = { shortURL: "" };
        this.getData = this.getData.bind(this);

    }

    async getData() {

        const valeurURLEntree = document.getElementById('urlUsager').value;
        const apiKey = "2a3f902defd84dfb957f3fa50d0bacbc";

            try{
                const response = await fetch('https://api.rebrandly.com/v1/links/', {
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'apikey': apiKey
                    },
                    body: JSON.stringify({ destination: valeurURLEntree })
                });

                if(response.ok){

                    const jsonResponse = await response.json();
                    console.log(jsonResponse);
                    this.setState({ shortURL: jsonResponse.shortUrl });
                    return jsonResponse;
                }

                throw new Error('Request failed!');
            }

            catch(error){
                console.log(error);
            }

    }
    render() {
        return (
            <>
                <Jumbotron>
            <Container>
                <Row>
                    <Col className={"text-center pb-3"}>
                        <h5>Rebrandly</h5>
                    </Col>
                </Row>
                <Row>
                    <Col className={"text-center py-2"}>
                        <p>Enter the url to rebrand</p>
                    </Col>
                </Row>
                <Row className={"text-center"}>
                    <Col className={" py-2 border border-black"}>
                    <Form className={"py-1"}>
                        <Form.Control
                        className={""}
                        type={"text"}
                        placeholder={"https://logic-sunrise.com/"}
                        id="urlUsager"/>
                    </Form>
                    </Col>
                </Row>
                <Row className={"text-center"}>
                    <Col className={"py-3 text-white"}>
                        <Button
                            className={"btn-primary p-3"}
                        onClick={this.getData}
                        >
                         Raccourcir URL
                        </Button>
                    </Col>
                </Row>
            </Container>
                <Container>
                    <Row className={"text-center"}>
                        <Col>
                            <div className={"p-3"}>
                                <p className={"text-black"}>{this.state.shortURL}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </Jumbotron>
                </>
        );

    }
            }
