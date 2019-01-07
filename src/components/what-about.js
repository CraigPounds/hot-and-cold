import React from 'react';
import './what-about.css';

export default function WhatAbout(props) {

  return(
    <div className="what-about">
      <section className="what-about-section">
        <h3>What do I do?</h3>
        <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
        <ol className="instructions">
          <li>1. I pick a <span className="underlined">random secret number</span> between 1 to 100 and keep it hidden.</li>
          <li>2. You need to <span className="underlined">guess</span> until you can find the hidden secret number.</li>
          <li>3. You will <span className="underlined">get feedback</span> on how close 	&#40;&quot;hot&quot;&#41; or far 	&#40;&quot;cold&quot;&#41; your guess is.</li>
        </ol>
        <p>So, Are you ready?</p>
        <button className="got-it-button" onClick={() => props.gotItClick()}>Got It!</button>
      </section>
    </div>    
  );
};
