import React from 'react';
import './App.css';
import Header from './Header';
import CardInput from './CardInput';
import ValidityOutput from './ValidityOutput';
export default class App extends React.Component {
  state = {
    number: "79927398713"
  };

  setNumber = number => {
    this.setState({
      number
    });
  };

  render() {
    return (
      <div>
        <Header />
        <CardInput handleChange={this.setNumber} />
        <ValidityOutput number={this.state.number} />
      </div>
    );
  }
}