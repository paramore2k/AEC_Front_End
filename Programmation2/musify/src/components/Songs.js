/**
 * Créé par David Champagne
 * 2020/06/04
 *
 */
import React from "react";




export class Songs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hovered: false }

    }
    render() {
        return(
            <>
                <div onClick={()=> this.props.onClick(true)} className={"text-white"}
                     onMouseOver={() => this.setState({hovered: true})}
                     onMouseOut={() => this.setState({hovered: false})}
                     style={this.state.hovered ? filtered : null}>
                    <div>
                    {this.props.chanson}
                    </div>
                </div>




            </>
        )
    }
}

const filtered = {

    filter: 'drop-shadow(0 0 0.60rem green)',
    border: 'darkblack',
    borderWidth: '3em',
    borderColor: 'black',

}


