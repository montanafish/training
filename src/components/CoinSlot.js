import React, { Component } from 'react'

export default class CoinSlot extends Component {
  render() {
    return (
      <div
        style={{
          margin: '50px',
        }}
      >
        Yen: <input type="number" name="money" value={this.props.coin} />
        <br />
        <button onClick={() => this.props.addCoin()}>Add</button>
      </div>
    )
  }
}
