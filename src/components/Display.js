import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    let message = 'Please insert coin.'

    if (this.props.balance > 0) {
      message = `${this.props.message}. You have inserted ${this.props.balance} yen`
    }

    return (
      <div
        style={{
          width: '150px',
          height: '80px',
          border: 'solid 5px',
          textAlign: 'center',
          margin: '50px',
        }}
      >
        <p>{message}</p>
      </div>
    )
  }
}
