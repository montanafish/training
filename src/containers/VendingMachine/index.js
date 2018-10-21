import React, { Component } from 'react'
import './VendingMachine.css'

import CoinSlot from '../../components/CoinSlot'
import Juice from '../../components/Juice'
import Display from '../../components/Display'

class VendingMachine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      balance: 0,
    }
  }

  addCoin = coin => {
    this.setState({ message: 'Please Choose Your Drink', balance: coin })
  }

  buyJuice = price => {
    this.state.balance >= price
      ? this.setState({
          message: 'Thank you',
          balance: this.state.balance - price,
        })
      : this.setState({ message: 'The money is not enough ' })
  }

  coinAmount = e => {
    this.setState({ balance: e.target.value })
  }

  render() {
    return (
      <div
        style={{
          width: '250px',
          height: '400px',
          border: 'solid 10px',
          margin: 'auto',
        }}
      >
        <div>
          <Juice name="Coke" price={130} color="red" selectJuice={this.buyJuice} />
          <Juice name="Sprite" price={120} color="Green" selectJuice={this.buyJuice} />
          <Juice name="Fanta" price={150} color="Blue" selectJuice={this.buyJuice} />
        </div>

        <Display message={this.state.message} balance={this.state.balance} />
        <CoinSlot addCoin={this.addCoin} coinAmount={this.coinAmount} balance={this.state.balance} />
      </div>
    )
  }
}

export default VendingMachine
