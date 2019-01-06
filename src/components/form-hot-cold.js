import React from 'react';
import './form-hot-cold.css';

export default class FormHotCold extends React.Component {

  render() {

    return (
      <form className="form-hot-cold">
        <input type="text" className="text-input" placeholder="Enter your Guess" required/>
        <button type="submit" className="submit-button">Guess</button>
      </form>
    );
  }
}