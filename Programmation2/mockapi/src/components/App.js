import React from 'react';
import ManageFilmsHooks from "./ManageFilmsHooks";
import { Route, Switch } from "react-router-dom";

import { useLocation } from 'react-router-dom'
import {PageNotFound} from "./PageNotFound";
import {MenuSansPostBack} from "./MenuSansPostBack";
import { AjouterFilm } from "./AjouterFilm";
// import {ManageFilms} from "./ManageFilms";
import {BoutonAjouterFilm} from "./BoutonAjouterFilm";
import Container from "react-bootstrap/Container";
import {FilmComplet} from "./FilmComplet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
    let location = useLocation();
    return (
        <>
            <MenuSansPostBack/>
            <Container>
                <Row className="d-flex justify-content-between">
                    <Col className={"text-right mt-2"}>
                        {location.pathname !== "/ajouterFilm" && <BoutonAjouterFilm/>}
                    </Col>
                    <ToastContainer autoClose={3000} hideProgressBar />
                </Row>
            </Container>

            <Switch>
                <Route path="/" exact={true} component={ManageFilmsHooks} />
                <Route path="/ajouterFilm" component={AjouterFilm}/>
                <Route path="/Films/:id" component={FilmComplet}/>
                <Route component={PageNotFound} />
            </Switch>

        </>
    )

}

export default App;
