import React from 'react';

const Card = (props) => {
    const {id, name, email} = props;
    return (
        <div 
        className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5"
        >
            <img
                src={`https://robohash.org/MTM.png/${id}?set=set4&size=200x200`}
                alt="kittens"
            />
            <div>
                <h2> {name}</h2>
                <p> {email} </p>
            </div>
        </div>
    )
}

export default Card;