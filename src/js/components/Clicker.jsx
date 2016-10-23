'use strict'
import React from 'react';
import ReactDOM from 'react-dom';

class Clicker extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0
    }
  }
  render() {
    return (
      <div className="clicker">
        <h2>Clicker</h2>
        <span>{this.state.value}</span>
        <button className="btn_click" onClick={() => this.setState({value: this.state.value + 1})}>Click</button>
      </div>
    )
  }
}

ReactDOM.render(<Clicker/>, document.getElementById('clicker'));
