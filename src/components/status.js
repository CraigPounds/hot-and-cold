import React from 'react';
import './status.css';

export default function Status(props) {

  return (
    <div className="status">
      <p className="guess-number">Guess #<span>0</span>!</p>
      <ul className="previous-guesses">
        <li>99</li>
        <li>99</li>
        <li>99</li>
      </ul>
    </div>
  );
};