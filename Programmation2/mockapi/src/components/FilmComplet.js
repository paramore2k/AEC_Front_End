/**
 * Créé par David Champagne
 * 2020/07/02
 *
 */
import React from "react";
import {Container} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {toast} from "react-toastify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class FilmComplet extends React.Component {

    constructor(props) {
        super(props);
        //Afin d'éviter une erreur undefined lorsqu'on lit le tableau abilities, on l'initialise à un tableau vide pour débuter.
        this.state = {
            donneesRecues : {nom: '', photo: '', genre: '', name: '', acteurs: ["", ""]},
        setErrors : {}};
        this.handleEdit = this.handleEdit.bind(this);
        this.handlePhoto = this.handlePhoto.bind(this);
        this.editFilm = this.editFilm.bind(this);

    }

    async componentDidMount() {

        try {
            await this.setState({ filmID: this.props.location.search.substring(4,this.props.location.search.length)});
            const response = await fetch("http://localhost:3001/films/" + this.state.filmID);
            const reponseDeApi = await response.json();
            this.setState({ donneesRecues: reponseDeApi });
            console.log(this.state.donneesRecues);
            if (!response.ok) {
                throw Error(response.statusText);
            }
        } catch (error) {
            console.log(error);
        }
    }


    async editFilm(nom,photo,genre, acteur1, acteur2) {
        try{
            const response = await fetch('http://localhost:3001/films/'+ this.state.filmID, {
                method:'PUT',
                headers: {'Content-Type': 'application/json'  },
                body:JSON.stringify({id : this.state.filmID,
                    name: nom,
                    genre: genre,
                    picture: photo,
                    acteurs: [
                        {
                            name: acteur1
                        },
                        {
                            name: acteur2
                        }
                    ]
                })
            });
            if(response.ok){
                const jsonResponse = await response.json();
                this.props.history.push("/");
                toast.success("Modification du film " + nom + " effectué avec succès");

                return jsonResponse;
            }
            throw new Error('Request failed!');
        }
        catch(error){
            console.log(error);
        }
    }

    handleEdit(event){
        event.preventDefault();

        const nom = document.getElementById('nomFilm').value;
        const photo = document.getElementById('photoFilm').value;
        const genre = document.getElementById('genreFilm').value;
        const acteur1 = document.getElementById('acteur1').value;
        const acteur2 = document.getElementById('acteur2').value;

        this.editFilm(nom,photo, genre,acteur1,acteur2);
    }

    handlePhoto(){
        const photos = document.getElementById('photoFilm').value;
        this.setState( {photo : photos});
    }

    render() {

        return <>
            <Container>
                <Row>
                <Col className={"mt-3 p-0"}><a href={"/"}><button className={"btn btn-primary"}>Retourner à l'accueil</button></a>
                        <h5 className={"py-3 text-center"}>Édition du film</h5>
                            <Form className="form">

                                <Form.Group controlId="photoFilm">
                                    <Form.Label>URL du film</Form.Label>
                                    <Form.Control type="text" placeholder="Entrer une URL valide" onChange={this.handlePhoto} defaultValue={this.state.donneesRecues.picture}/>
                                </Form.Group>

                                    <Form.Group controlId="nomFilm">
                                        <Form.Label><Card.Title>Titre</Card.Title></Form.Label>
                                        <Form.Control type="text" defaultValue={this.state.donneesRecues.name}/> {/*/ Faire le test avec value*/}
                                    </Form.Group>

                                <Form.Group controlId="genreFilm">
                                    <Form.Label><Card.Title>Genre:</Card.Title></Form.Label>
                                    <Form.Control type="text" defaultValue={this.state.donneesRecues.genre}/> {/*/ Faire le test avec value*/}
                                </Form.Group>

                                <Form.Group controlId="acteur1">
                                    <Form.Label><Card.Title>Acteur 1:</Card.Title></Form.Label>
                                    <Form.Control type="text" defaultValue={this.state.donneesRecues.acteurs[0].name}/>
                                </Form.Group>

                                <Form.Group controlId="acteur2">
                                    <Form.Label><Card.Title>Acteur2:</Card.Title></Form.Label>
                                    <Form.Control type="text" defaultValue={this.state.donneesRecues.acteurs[1].name}/>
                                </Form.Group>

                                <Button variant="primary" type="submit" className={"mb-2"} onClick={this.handleEdit}>
                                    Enregistrer
                                </Button>
                            </Form>


                    </Col>
                </Row>

            </Container>
        </>;
    }


}