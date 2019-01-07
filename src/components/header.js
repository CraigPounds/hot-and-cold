import React from 'react';
import './header.css';

export default function Header(props) {
 
  return (
    <header className="header" role="banner">
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
      <h1>HOT or COLD</h1>
    </header>
  );
};