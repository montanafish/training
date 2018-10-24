import React, { Component } from "react";

export default class Juice extends Component {
  render() {
    return (
      <div
        style={{
          display: "inline-block",
          margin: "10px"
        }}
      >
        <div
          style={{
            width: "30px",
            height: "40px",
            borderRadius: "2px",
            padding: "2px",
            border: "solid 2px",
            fontSize: "3px",
            background: this.props.color,
            margin: "auto"
          }}
        >
          {this.props.name}
        </div>
        <button
          onClick={() =>
            this.props.selectJuice(this.props.price, this.props.name)
          }
        >
          ¥{this.props.price}
        </button>
      </div>
    );
  }
}
