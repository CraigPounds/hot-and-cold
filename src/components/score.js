import React from 'react';
import './score.css';

export default function Score(props) {
  const GUESSES = props.guesses.map((guess, i) => (
    <li key={i} index={i}>{guess}</li>
  ))
  return (
    <section className="score">
      <p className="guess-number">Guess #<span>{props.guesses.length}</span>!</p>
      <ul className="previous-guesses">
        {GUESSES}
      </ul>
    </section>
  );
};