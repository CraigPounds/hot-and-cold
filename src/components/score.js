import React from 'react';
import './score.css';

export default function Score(props) {

  return (
    <section className="score">
      <p className="guess-number">Guess #<span>3</span>!</p>
      <ul className="previous-guesses">
        <li>99</li>
        <li>98</li>
        <li>97</li>
      </ul>
    </section>
  );
};