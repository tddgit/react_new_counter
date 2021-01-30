import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    console.log("props", this.props);
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            selected={true}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
