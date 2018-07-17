import React from "react";
import ListCard from '../components/list-card.js';

export default (props) => (
  <div>
    <p>Category is: {props.category}</p>
    {(props.theseposts.length = 0) ? "no posts to display" : props.theseposts.map(post =>(
      <h3>{props.theseposts.node.title}</h3>
    ))}
   
  </div>
);



