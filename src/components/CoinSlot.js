import React, { Component } from 'react'

export default class CoinSlot extends Component {
  constructor(props) {
    super(props)
    this.coinSlot = React.createRef()
  }

  componentDidMount() {
    this.coinSlot.current.focus()
  }

  addCoin() {
    this.props.addCoin(parseInt(this.coinSlot.current.value || 0))
    this.coinSlot.current.value = ''
  }

  cancel() {
    this.props.cancel()
    this.coinSlot.current.value = ''
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.addCoin()
    }
  }

  render() {
    return (
      <div
        style={{
          margin: '50px',
        }}
      >
        Yen: <input type="number" name="money" ref={this.coinSlot} onKeyPress={e => this.handleKeyPress(e)} />
        <br />
        <button onClick={() => this.addCoin()}>Add</button>
        <button onClick={() => this.cancel()}>Cancel</button>
      </div>
    )
  }
}
