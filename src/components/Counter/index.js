import React from "react";



class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  render() {
    return (
      <div>
        <p>current count: {this.state.count}</p>

        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
        minus
        </button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        plus
        </button>
      </div>
    );
  };
};


export default Counter;
