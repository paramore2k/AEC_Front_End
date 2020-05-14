import React from 'react';

export class Child extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                Veuillez me cliquer
            </button>
        );
    }
}