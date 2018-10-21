import React from 'react'
import Display from './Display'

export default class VendingMachineDisplay extends Display {
  render() {
    const balance = this.props.balance
    const isJuiceSelected = this.props.isJuiceSelected || false
    const juiceName = this.props.juiceName
    const juicePrice = this.props.juicePrice

    let message = ''

    if (isJuiceSelected) {
      // display juice name and remainging balance
      if (balance >= juicePrice) {
        message = `Bought ${juiceName}. ${this.props.balance} yen remainig.`
      } else {
        message = `Please insert ${juicePrice - this.props.balance} yen`
      }
    } else {
      // display balance
      if (balance === 0) {
        message = 'Please insert coin'
      } else {
        message = `${this.props.balance} yen`
      }
    }

    return <Display message={message} />
  }
}
