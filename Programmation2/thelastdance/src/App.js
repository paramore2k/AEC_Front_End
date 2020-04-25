import React from 'react';
import netflix from './img/netflix.png';
import michael from './img/michaeljordan.jpg';
import dennis from './img/dennisrodman.jpg';
import bill from './img/billwennington.png';
import scot from './img/scottiepipen.jpg';
import steve from './img/stevekeer.jpg';
import './App.css';

function App() {
  return (
    <div className="textAfficher">

        <h1>THE LAST DANCE</h1>
        <p>Une production de</p>
        <img src={netflix} alt={"Logo Netflix"} />
        <p>Mettant en vedette</p>

    </div>
  );
}

export default App;
