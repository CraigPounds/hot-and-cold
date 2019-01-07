import React from 'react';
import './game.css';
import WhatAbout from './what-about';
import Header from './header';
import Comment from './comment';
import FormHotCold from './form-hot-cold';
import Score from './score';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: (Math.floor(Math.random() * 100) + 1),
      instruction: 'Make your Guess!',
      currentGuess: undefined,
      guesses: [],
      displayAbout: false
    };
  }

  newGame() {
    this.setState({
      answer: (Math.floor(Math.random() * 100) +1),
      instruction: 'Make your Guess!',
      currentGuess: undefined,
      guesses: [],
      displayAbout: false
    });
  }

  setAbout(about) {
    this.setState({
      displayAbout: about
    });
  }

  setCurrentGuess(guess) {
    const NEW_ARRAY = this.state.guesses.concat(guess);
    this.setState({
      currentGuess: guess,
      guesses: NEW_ARRAY
    });
    this.checkGuess(guess);
  }

  setInstruction(instruction) {
    this.setState({ instruction });
  }

  checkGuess(guess) {
    const GUESS = parseInt(guess);
    const DIFFERENCE = Math.abs(this.state.answer - GUESS);
    let instruction = '';
    let alreadyGuessed = false;

    this.state.guesses.forEach((g) => {
      if (g === guess) alreadyGuessed = true;
    });

    if (alreadyGuessed)  {
      alert('You have already guessed this number');
    } else if (GUESS < 1 || GUESS > 100) {
      alert('Please choose a number between zero and 100');         
    } else {

      if (DIFFERENCE > 30) {
        instruction = 'You\'re Very Cold';        
      } else if (DIFFERENCE > 20) {
        instruction = 'You are Cold';
      } else if (DIFFERENCE > 10) {
        instruction = 'You are Warm';
      } else if (DIFFERENCE > 5) {
        instruction = 'You are Hot';
      } else if (DIFFERENCE > 0) {
        instruction = 'You\'re Very Hot';      
      } else {
        instruction = 'You are Correct!';
      }
      this.setInstruction(instruction);
    } 
  }

  render() {

    if (this.state.displayAbout) {
      return <WhatAbout gotItClick={() => this.setState({displayAbout: false})}/>
    } else {
      return (
          <div className="game">
            <Header onWhatClick={() => this.setAbout(true)} onNewGameClick={() => this.newGame()} />
            <main className="main">
              <Comment instruction={this.state.instruction}/>
              <FormHotCold 
                onGuessClick={(guess) => this.setCurrentGuess(guess)}
              />
              <Score guesses={this.state.guesses} />
            </main>
          </div>   
      );
    }    
  }; 
};