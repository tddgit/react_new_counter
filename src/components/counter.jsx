import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };
  //   tags: ["tag1", "tag2", "tag3"],
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // style = {
  //   fontSize: 10,
  //   fontWeight: "bold",
  // };
  handleIncrement = () => {
    // console.log("Increment Clicked", product);
    this.setState({ value: this.state.value + 1 });
  };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    // console.log("props", this.props);
    return (
      <div>
        {/*{this.state.tags.length === 0 && "Please create a new tag"}*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/*<ul>{this.renderTags()}</ul>*/}
      </div>
    );
  }

  // renderTags() {
  //   if (this.state.tags.lengh === 0) return <p>There are no tags</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // const { count } = this.state.count;
    return this.state.value === 0 ? <h1>Zero</h1> : this.state.value;
  }
}

export default Counter;
