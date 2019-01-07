import React from 'react';
import './comment.css';

export default function Comment(props) {
  return (
    <h2 className="comment">{props.instruction}</h2>
  );
};