import React from "react";
//const Card = props => {
const Card = ({ id, name, email }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow ba b--black-10 shadow-5 ">
      <img src={`https://robohash.org//${id}?200x200`} alt="robots"></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
