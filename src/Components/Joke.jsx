import React from 'react';

const Joke = (props) => {
    return (
        <div>
            <h3>Joke: {props.joke}</h3>
            <h4>Punchline: {props.punchline}</h4>
        </div>
    );
}

export default Joke;
