import React, { Component } from "react";

export default class Display extends Component {
  render() {
    return (
      <div
        style={{
          width: "170px",
          height: "80px",
          border: "solid 5px",
          padding: "5px",
          margin: "30px"
        }}
      >
        <p>{this.props.message}</p>
      </div>
    );
  }
}
