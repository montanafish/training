import React from 'react'
import Display from './Display'

export default class VendingMachineDisplay extends Display {
  render() {
    const balance = this.props.balance
    const isJuiceSelected = this.props.isJuiceSelected || false
    const juicePrice = this.props.juicePrice

    let message = ''

    if (isJuiceSelected) {
      // display juice name and remainging balance
      message = ''
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
