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
      totalMoney: 0,
    }
  }

  addCoin = () => {
    this.setState({ message: 'Please Choose Your Drink' })
    this.setState({ totalMoney: 0 })
  }

  buyCoke = price => {
    this.state.totalMoney >= price
      ? this.setState({
          message: 'Thank you',
          totalMoney: this.state.totalMoney - price,
        })
      : this.setState({ message: 'The money is not enough ' })
  }

  coinAmount = e => {
    this.setState({ totalMoney: e.target.value })
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
          <Juice name="Coke" price={130} color="red" pushCoke={this.buyCoke} />
          <Juice name="Sprite" price={120} color="Green" pushCoke={this.buyCoke} />
          <Juice name="Fanta" price={150} color="Blue" pushCoke={this.buyCoke} />
        </div>

        <Display message={this.state.message} totalMoney={this.state.totalMoney} />
        <CoinSlot addCoin={this.addCoin} coinAmount={this.coinAmount} totalMoney={this.state.totalMoney} />
      </div>
    )
  }
}

export default VendingMachine
