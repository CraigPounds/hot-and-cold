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
      comment: '',
      guesses: [],
      displayAbout: false
    };
  }

  setAbout(about) {
    this.setState({
      displayAbout: about
    });
  }

  newGame() {
    alert('new game');
  }

  render() {
    if (this.state.displayAbout) {
      return <WhatAbout gotIt={() => this.setState({displayAbout: false})}/>
    } else {
      return (
          <div className="game">
            <Header 
              onWhat={() => this.setAbout(true)}
              onNewGame={() => this.newGame()}
            />
            <main className="main">
              <Comment />
              <FormHotCold />
              <Score />
            </main>
          </div>   
      );
    }
    
  };

  // render() {
  //   return (     
  //     <div className="game">
  //       <Header 
  //         onWhat={() => this.displayAbout()}
  //         onNewGame={() => this.newGame()}
  //       />
  //       <main className="main">
  //         <Comment />
  //         <FormHotCold />
  //         <Score />
  //       </main>
  //     </div>  
  //   );
  // };
};