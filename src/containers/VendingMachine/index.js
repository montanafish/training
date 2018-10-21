import React, { Component } from 'react'
import './VendingMachine.css'

import CoinSlot from '../../components/CoinSlot'
import Juice from '../../components/Juice'
import VendingMachineDisplay from '../../components/VendingMachineDisplay'

class VendingMachine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 0,
      selectedJuiceName: '',
      selectedJuicePrice: 0,
      isJuiceSelected: false,
    }
  }

  addCoin = coin => {
    this.setState({
      balance: this.state.balance + coin,
      isJuiceSelected: false,
      selectedJuiceName: '',
      selectedJuicePrice: 0,
    })
  }

  cancel = () => {
    this.setState({
      balance: 0,
      isJuiceSelected: false,
      selectedJuiceName: '',
      selectedJuicePrice: 0,
    })
  }

  selectJuice = (price, name) => {
    this.state.balance >= price
      ? this.setState({
          balance: this.state.balance - price,
          isJuiceSelected: true,
          selectedJuiceName: name,
          selectedJuicePrice: price,
        })
      : this.setState({ isJuiceSelected: true, selectedJuiceName: name, selectedJuicePrice: price })
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

        <VendingMachineDisplay
          balance={this.state.balance}
          isJuiceSelected={this.state.isJuiceSelected}
          juiceName={this.state.selectedJuiceName}
          juicePrice={this.state.selectedJuicePrice}
        />
        <CoinSlot addCoin={this.addCoin} cancel={this.cancel} />
      </div>
    )
  }
}

export default VendingMachine
