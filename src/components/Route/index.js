import React from "react";

class Route extends React.Component {
  constructor() {
    super()
    this.state = {
      "questions": [{
        "count": 0,
        "number": "1.1",
        "question": "what is the flight speed of an unladen swallow",
        "answers": [
          "label": "50 km/h",
          "label": "60 km/h",
          "label": "70 km/h"
        ],
        "route": "2.1"
      }]
    }
  }
  render() {
    return (
      <div>
        <p>current count: {this.state.questions[0].count}</p>

        <button onClick={() => this.setState({ count: this.state.questions[0].count - 1 })}>
        minus
        </button>
        <button onClick={() => this.setState({ count: this.state.questions[0].count + 1 })}>
        plus
        </button>
      </div>
    );
  };
};


export default Route;
