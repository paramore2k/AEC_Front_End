/**
 * Créé par David Champagne
 * 2020/05/05
 *
 */
import React from 'react';
import Col from 'react-bootstrap/Col';



export class TvShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        }

    }
    toggleHover() {
        this.setState({hover: !this.state.hovered})
    }

    render() {
        return (
            <Col lg="2">
                <img
                    src={this.props.src}
                    alt={this.props.alt}
                    title={this.props.title}
                    className="img-fluid"
                    onMouseOver={this.toggleHover}
                    onMouseOut={this.toggleHover}
                    onClick={this.props.onClick}
                />
            </Col>

        );
    }
}