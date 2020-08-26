/**
 * Créé par David Champagne
 * 2020/08/03
 *
 */
import './App.css';
import React from 'react';
import * as actions from './Albums';
import Col from "react-bootstrap/Col";
import { Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import About from "./SingleAlbum";


export class DetailsAlbum extends React.Component {

    state = {
        album: '',
        tracks: [],
    }

    componentDidMount() {

        actions.getAlbum(this.props.match.params.id).then(album => {
            this.setState({
                album,
                tracks: album.tracks.data
            })
        })


    }

    renderTracks = () => {
        const {tracks} = this.state;
        return tracks && tracks.length ?
            tracks.map((track,index)=> (


                <tr key={index}>
                    <th>
                    {track.title}
                </th>
                </tr>



        ))
            : null
    }


    renderAlbum = () => {

        const {album} = this.state;
        console.log(this.state);
            return(
                <>

                <Col lg={"4"}>

                    <img src={album.cover_medium} alt={album.title}/>

                </Col>
                 <Col lg={"8"}>
                    <h5 className="pb-3">Chansons</h5>
                   <table className="table table-striped">

                       <tbody>

                    {this.renderTracks()}
                       </tbody>

                   </table>
                 </Col>
                    <Col lg={"12"}>

                    </Col>
                    </>


            )

    }


    render(){


        return(
            <Container>
                <Row className="d-flex justify-content-around align-content-around">
                    <Col lg={"12"} className="mb-3">
                        <About/>
                    </Col>
                    {this.renderAlbum()}
                </Row>
            </Container>

        )
    }

}

