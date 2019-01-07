import React from 'react';
import './header.css';
import Navigation from './navigation';

export default function Header(props) {
 
  return (
    <header className="header" role="banner">
      <Navigation onWhatClick={props.onWhatClick} onNewGameClick={props.onNewGameClick} />
      <h1>HOT or COLD</h1>
    </header>
  );
};