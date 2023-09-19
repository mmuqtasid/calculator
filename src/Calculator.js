import React, { Component } from 'react';
import './Calculator.css';
import Button from './Button';
import Display from './Display';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(this.state.input);
        this.setState({ input: result });
      } catch (error) {
        this.setState({ input: 'Error' });
      }
    } else if (value === 'C') {
      this.setState({ input: '' });
    } else {
      this.setState({ input: this.state.input + value });
    }
  };

  render() {
    return (
      <div className="calculator">
        <Display input={this.state.input} />
        <div className="buttons">
          <Button value="1" onClick={this.handleButtonClick} />
          <Button value="2" onClick={this.handleButtonClick} />
          <Button value="3" onClick={this.handleButtonClick} />
          <Button value="+" onClick={this.handleButtonClick} />
          <Button value="4" onClick={this.handleButtonClick} />
          <Button value="5" onClick={this.handleButtonClick} />
          <Button value="6" onClick={this.handleButtonClick} />
          <Button value="-" onClick={this.handleButtonClick} />
          <Button value="7" onClick={this.handleButtonClick} />
          <Button value="8" onClick={this.handleButtonClick} />
          <Button value="9" onClick={this.handleButtonClick} />
          <Button value="*" onClick={this.handleButtonClick} />
          <Button value="C" id="btn-clear" onClick={this.handleButtonClick} />
          <Button value="0" onClick={this.handleButtonClick} />
          <Button value="=" onClick={this.handleButtonClick} />
          <Button value="/" onClick={this.handleButtonClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
