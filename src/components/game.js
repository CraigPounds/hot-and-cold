import React from 'react';
import './game.css';
import Header from './header';
import Result from './result';
import FormHotCold from './form-hot-cold';
import Status from './status';

export default class Game extends React.Component {

  aboutPage() {
    alert('what');
  }

  newGame() {
    alert('new game');
  }

  render() {
    return (
      <div className="game">
        <Header 
          onWhat={() => this.aboutPage()}
          onNewGame={() => this.newGame()}
        />
        <main className="main">
          <Result />
          <FormHotCold />
          <Status />
        </main>
      </div>
    );
  };
};