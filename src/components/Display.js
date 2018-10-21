import React, { Component } from 'react'

export default class Display extends Component {
  state = {}
  render() {
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
        <th>{this.props.message}</th>
        <tr>{this.props.totalMoney}</tr>
      </div>
    )
  }
}
