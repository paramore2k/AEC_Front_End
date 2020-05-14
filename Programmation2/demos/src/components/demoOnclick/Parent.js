import React from 'react';
// import ReactDOM from 'react-dom';
import { Child } from './Child';

export class Parent extends React.Component {
    // Endroit du constructor
    constructor(props) {
        // Variable super pour le props
        super(props);
        // On attribue le nom Patate à l'état, ce qui sera le nom d'affichage au départ
        this.state = { name: 'David' };
        // On attribut la variable bind a changeName
        this.changeName = this.changeName.bind(this);
    }
    // Function qui change le nom

    changeName(newName) {
        this.setState({
            name: newName
        });
    }
    render() {
        // On retourne le nom lors du changement
        return <Child name={this.state.name} onChange={this.changeName}/>
    }
}