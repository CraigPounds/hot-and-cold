import React from 'react';
import './header.css';

export default function Header(props) {

  

  return (
    <div className="header">
      <nav className="navigation">
        <ul>
          <li>
            <a href="#what" className="what" onClick={() => props.onWhat()}>WHAT ?</a>
          </li>
          <li className="float-right">
            <a href="#new-game" className="new-game" onClick={() => props.onNewGame()}>+ NEW GAME</a>
          </li>
        </ul>        
      </nav>
      <h1>HOT or COLD</h1>
    </div>
  );
};