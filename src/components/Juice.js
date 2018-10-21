import React, { Component } from 'react'

export default class Juice extends Component {
  state = {}
  render() {
    return (
      <div
        style={{
          display: 'inline-block',
          margin: '10px',
        }}
      >
        <div
          style={{
            width: '10px',
            borderRadius: '2px',
            padding: '20px',
            border: 'solid 2px',
            background: this.props.color,
            margin: 'auto',
          }}
        />
        <button onClick={() => this.props.pushCoke(this.props.price)}>{this.props.name}</button>
      </div>
    )
  }
}
