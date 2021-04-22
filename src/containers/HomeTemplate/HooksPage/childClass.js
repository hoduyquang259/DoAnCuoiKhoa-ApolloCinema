import React, { Component } from "react";

export default class ChildClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  handleTangSo = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    return (
      <div>
        <p>Number: {this.state.number}</p>
        <button className="btn btn-success" onClick={handleTangSo}>
          Tăng số
        </button>
      </div>
    );
  }
}
