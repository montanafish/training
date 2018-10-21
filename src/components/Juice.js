import React, { Component } from 'react'

export default class Juice extends Component {
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
        <button onClick={() => this.props.selectJuice(this.props.price, this.props.name)}>{this.props.name}</button>
      </div>
    )
  }
}
