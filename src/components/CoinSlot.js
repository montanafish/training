import React, { Component } from 'react'

export default class CoinSlot extends Component {
  constructor(props) {
    super(props)
    this.coinSlot = React.createRef()
  }

  render() {
    return (
      <div
        style={{
          margin: '50px',
        }}
      >
        Yen: <input type="number" name="money" ref={this.coinSlot} />
        <br />
        <button onClick={() => this.props.addCoin(this.coinSlot.current.value)}>Add</button>
      </div>
    )
  }
}
