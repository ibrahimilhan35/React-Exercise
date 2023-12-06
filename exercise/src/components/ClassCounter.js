import React, { Component } from "react";

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0, // Initialize count as a number
      showMessage: false, // Track whether to show the message
    };
  }

  handleIncrease = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      showMessage: false, // Set showMessage to false when increasing the count
    }));
  };

  handleDecrease = () => {
    this.setState(
      (prevState) => ({
        count: prevState.count > 0 ? prevState.count - 1 : prevState.count,
        showMessage: prevState.count === 1, // Set showMessage to true when count transitions to zero
      })
    );
  };

  render() {
    return (
      <div>
        <h3>Class Component Eaxample: Counter</h3>
        <p>Count: {this.state.count}</p>
        <button className="btn btn-dark mt-2" onClick={this.handleIncrease}>
          Increase
        </button>
        <button className="btn btn-dark mt-2" onClick={this.handleDecrease}>
          Decrease
        </button>
        {this.state.showMessage && <p>Count cannot be negative.</p>}
      </div>
    );
  }
}

export default ClassCounter;
