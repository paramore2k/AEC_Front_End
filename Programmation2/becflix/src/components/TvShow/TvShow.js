/**
 * Créé par David Champagne
 * 2020/05/05
 *
 */
import React from 'react';
import Col from 'react-bootstrap/Col';

// Contient l'inage de Outlander, l'attribut alt et source et title.



export class TvShow extends React.Component {
    render() {
        return (
            <Col lg="2">
                <img
                    src={this.props.src}
                    alt={this.props.alt}
                    title={this.props.title}
                    className="img-fluid"
                    onClick={this.props.onClick}
                />
            </Col>

        );
    }
}