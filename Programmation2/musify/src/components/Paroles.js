/**
 * Créé par David Champagne
 * 2020/06/06
 *
 */

import React from "react";

export class Paroles extends React.Component {

        render() {
            return(
                this.props.paroles
            );
        }

}

Paroles.defaultProps = { paroles: 'Les paroles ne sont pas encore disponibles'};