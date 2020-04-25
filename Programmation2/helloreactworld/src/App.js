import React from 'react';

import ReactDOM from 'react-dom';




function makeDoggy(e) {

    e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');

    e.target.setAttribute('alt', 'doggy');

}




const kitty = (

    <img

        src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg"

        alt="kitty"

        onClick={makeDoggy}

    />

);




ReactDOM.render(kitty, document.getElementById('app'));

export default App;
