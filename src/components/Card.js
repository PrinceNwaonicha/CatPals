/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";


const Card = ({ name, email, id }) => {
    return (
        <div className="bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='photo' src={`https://robohash.org/${id}?set=set4`}  />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>    
            </div>
        </div>   
    );
}

export default Card;