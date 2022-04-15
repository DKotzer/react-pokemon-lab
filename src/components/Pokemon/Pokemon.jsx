import React from "react";

export default function Pokemon(props) {
  return (
    <div className='Pokemon'>
      <h1>{props.name}</h1>
      <h1>{props.hp}</h1>
      <img src={props.image} alt='' />
      <button onClick={props.attack}>Attack</button>
    </div>
  );
}
