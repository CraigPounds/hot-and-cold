import React from 'react';
import './game.css';
import WhatAbout from './what-about';
import Header from './header';
import Comment from './comment';
import FormHotCold from './form-hot-cold';
import Score from './score';

export default class Game extends React.Component {

  aboutPage() {
    alert('what');
  }

  newGame() {
    alert('new game');
  }

  // render() {
  //   return (
  //     <div className="page">
  //     <WhatAbout />
  //       <div className="game">
  //         <Header 
  //           onWhat={() => this.aboutPage()}
  //           onNewGame={() => this.newGame()}
  //         />
  //         <main className="main">
  //           <Comment />
  //           <FormHotCold />
  //           <Score />
  //         </main>
  //       </div>        
  //     </div>
  //   );
  // };

  render() {
    return (     
      <div className="game">
        <Header 
          onWhat={() => this.aboutPage()}
          onNewGame={() => this.newGame()}
        />
        <main className="main">
          <Comment />
          <FormHotCold />
          <Score />
        </main>
      </div>  
    );
  };
};