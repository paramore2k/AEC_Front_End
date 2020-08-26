/**
 * Créé par David Champagne
 * 2020/08/06
 *
 */

import React from "react";
import {useLocation, useHistory} from "react-router";
import backarrow from "../backarrow.png";


function About(){
    const location = useLocation();
    const history = useHistory();

    function goBackHandle(){
        history.goBack();
    }
    console.log(location);
    return(
        <>
            <img src={backarrow} alt={"Retour"} onClick={goBackHandle} className="img-fluid"/>
            </>
    )
}

export default About;