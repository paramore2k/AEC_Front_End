import React from 'react';

export class Child extends React.Component {
    // Endroit du constructor
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    // Endroit du handleChange pour le changement de nom
    handleChange(e) {
        const name = e.target.value;
        this.props.onChange(name);
    }
    render() {
        return (
            <div>
                <h1>
                    Mon nom est {this.props.name}
                </h1>
                {/* Le great-names ici est fort probablement aléatoire */}
                <select id="great-names" onChange={this.handleChange}>
                    <option value="David">
                        David
                    </option>

                    <option value="Champagne">
                        Champagne
                    </option>

                    <option value="Rebecka">
                        Rebecka
                    </option>

                    <option value="Champagne">
                        Champagne
                    </option>
                </select>
            </div>
        );
    }
}