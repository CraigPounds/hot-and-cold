import React from 'react';
import './guesses.css';

export default function Guesses(props) {
  const GUESSES = props.guesses.map((guess, i) => (
    <li key={i} index={i}>{guess}</li>
  ));
  return (
    <ul className="previous-guesses">
      {GUESSES}
    </ul>
  );
};