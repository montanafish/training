import React from 'react'
import Display from './Display'

const formatter = new Intl.NumberFormat('jp-JP', {
  style: 'currency',
  currency: 'JPY',
  minimumFractionDigits: 0,
})

export default class VendingMachineDisplay extends Display {
  render() {
    const balance = this.props.balance
    const isJuiceSelected = this.props.isJuiceSelected || false
    const juiceName = this.props.juiceName
    const juiceCode = this.props.juiceCode
    const juicePrice = this.props.juicePrice
    const stock = this.props.stock

    let message = ''

    if (isJuiceSelected) {
      // out of stock
      if (stock[juiceCode] === 0) {
        message = `${juiceName} is out of stock. ${formatter.format(this.props.balance)} remainig.`
      } else {
        // display juice name and remainging balance
        if (balance >= juicePrice) {
          message = `Bought ${juiceName}.${formatter.format(this.props.balance)} remainig.`
        } else {
          message = `Please insert ${formatter.format(
            juicePrice - this.props.balance
          )}.  Your balance is ${formatter.format(this.props.balance)}`
        }
      }
    } else {
      // display balance
      if (balance === 0) {
        message = 'Please insert coin'
      } else {
        message = `${formatter.format(this.props.balance)}`
      }
    }

    return <Display message={message} />
  }
}
