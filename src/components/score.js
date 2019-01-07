import React from 'react';
import './score.css';
import Guesses from './guesses.js';

export default function Score(props) {
  
  return (
    <section className="score">
      <p className="guess-number">Guess #<span>{props.guesses.length}</span>!</p>
      <Guesses guesses={props.guesses}/>
    </section>
  );
}