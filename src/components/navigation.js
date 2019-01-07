import React from 'react';
import './navigation.css';

export default function Navigaition(props) {

  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href="#what" className="what" onClick={() => props.onWhatClick()}>WHAT ?</a>
        </li>
        <li className="float-right">
          <a href="#new-game" className="new-game" onClick={() => props.onNewGameClick()}>+ NEW GAME</a>
        </li>
      </ul>        
    </nav>
  );
};