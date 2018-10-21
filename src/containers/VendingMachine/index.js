import React, { Component } from 'react'
import './VendingMachine.css'

import CoinSlot from '../../components/CoinSlot'
import Juice from '../../components/Juice'
import VendingMachineDisplay from '../../components/VendingMachineDisplay'

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

  selectJuice = price => {
    this.state.balance >= price
      ? this.setState({
          message: 'Thank you',
          balance: this.state.balance - price,
        })
      : this.setState({ message: 'The money is not enough ' })
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
          <Juice name="Coke" price={130} color="red" selectJuice={this.selectJuice} />
          <Juice name="Sprite" price={120} color="Green" selectJuice={this.selectJuice} />
          <Juice name="Fanta" price={150} color="Blue" selectJuice={this.selectJuice} />
        </div>

        <VendingMachineDisplay message={this.state.message} balance={this.state.balance} />
        <CoinSlot addCoin={this.addCoin} />
      </div>
    )
  }
}

export default VendingMachine
