import React, { Component } from "react";
import "./VendingMachine.css";

import CoinSlot from "../../components/CoinSlot";
import Juice from "../../components/Juice";
import VendingMachineDisplay from "../../components/VendingMachineDisplay";

class VendingMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      selectedJuiceName: "",
      selectedJuicePrice: 0,
      isJuiceSelected: false,
      stock: { coke: 2, sprite: 2, fanta: 2, fantaOrange: 2, asahiSuperDry: 2 }
    };
  }

  addCoin = coin => {
    this.setState({
      balance: this.state.balance + coin,
      isJuiceSelected: false,
      selectedJuiceName: "",
      selectedJuicePrice: 0
    });
  };

  cancel = () => {
    this.setState({
      balance: 0,
      isJuiceSelected: false,
      selectedJuiceName: "",
      selectedJuicePrice: 0
    });
  };

  selectJuice = (price, name, stock) => {
    if (this.state.balance >= price) {
      if (name === "Coke") {
        this.setState({
          stock: { ...this.state.stock, coke: this.state.stock.coke - 1 }
        });
      } else if (name === "Sprite") {
        this.setState({
          stock: { ...this.state.stock, sprite: this.state.stock.sprite - 1 }
        });
      } else if (name === "Fanta") {
        this.setState({
          stock: { ...this.state.stock, fanta: this.state.stock.fanta - 1 }
        });
      } else if (name === "Fanta Orange") {
        this.setState({
          stock: {
            ...this.state.stock,
            fantaOrange: this.state.stock.fantaOrange - 1
          }
        });
      } else if (name === "Asahi Super Dry") {
        this.setState({
          stock: {
            ...this.state.stock,
            asahiSuperDry: this.state.stock.asahiSuperDry - 1
          }
        });
      }
      this.setState({
        balance: this.state.balance - price,
        isJuiceSelected: true,
        selectedJuiceName: name,
        selectedJuicePrice: price
      });
    } else {
      this.setState({
        isJuiceSelected: true,
        selectedJuiceName: name,
        selectedJuicePrice: price
      });
    }
  };

  render() {
    return (
      <div
        style={{
          width: "250px",
          height: "400px",
          border: "solid 10px",
          margin: "auto"
        }}
      >
        <div>
          <Juice
            name="Coke"
            price={130}
            color="red"
            selectJuice={this.selectJuice}
            stock={this.state.stock.coke}
          />
          <Juice
            name="Sprite"
            price={120}
            color="Green"
            selectJuice={this.selectJuice}
            stock={this.state.stock.sprite}
          />
          <Juice
            name="Fanta"
            price={150}
            color="Blue"
            selectJuice={this.selectJuice}
            stock={this.state.stock.fanta}
          />
          <Juice
            name="Fanta Orange"
            price={150}
            color="Orange"
            selectJuice={this.selectJuice}
            stock={this.state.stock.fantaOrange}
          />
          <Juice
            name="Asahi Super Dry"
            price={300}
            color="Silver"
            selectJuice={this.selectJuice}
            stock={this.state.stock.asahiSuperDry}
          />
        </div>

        <VendingMachineDisplay
          balance={this.state.balance}
          isJuiceSelected={this.state.isJuiceSelected}
          juiceName={this.state.selectedJuiceName}
          juicePrice={this.state.selectedJuicePrice}
        />
        <CoinSlot addCoin={this.addCoin} cancel={this.cancel} />
      </div>
    );
  }
}

export default VendingMachine;
