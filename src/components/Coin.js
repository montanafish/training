import React, { Component } from 'react'

export default class Coin extends Component {
  render() {
    return (
      <div
        style={{
          margin: '50px',
        }}
      >
        <input type="number" name="money" value={this.props.totalMoney} onChange={e => this.props.coinAmount(e)} />
        <br />
        <button onClick={() => this.props.addCoin()}>coin</button>
      </div>
    )
  }
}
