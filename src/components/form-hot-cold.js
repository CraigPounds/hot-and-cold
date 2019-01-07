import React from 'react';
import './form-hot-cold.css';

export default class FormHotCold extends React.Component {

  onSubmit(event) {
    event.preventDefault();
    const NUM = this.textInput.value.trim();
    if (NUM && this.props.onGuessClick) {
      this.props.onGuessClick(NUM);
    }
    this.textInput.value = '';
  }

  render() {

    return (
      <form className="form-hot-cold" onSubmit={(e) => this.onSubmit(e)}>
        <input type="number" className="text-input" ref={input => this.textInput = input} placeholder="Enter your Guess" min="1" max="100"required/>
        <button type="submit" className="submit-button">
          Guess
        </button>
      </form>
    );
  }
}