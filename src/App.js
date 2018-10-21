import React, { Component } from "react";
import "./App.css";

class Coin extends Component {
  render() {
    return (
      <div
        style={{
          margin: "50px"
        }}
      >
        <input
          type="number"
          name="money"
          value={this.props.totalMoney}
          onChange={e => this.props.coinAmount(e)}
        />
        <br />
        <button onClick={() => this.props.addCoin()}>coin</button>
      </div>
    );
  }
}

class Juice extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "inline-block",
          margin: "10px"
        }}
      >
        <div
          style={{
            width: "10px",
            borderRadius: "2px",
            padding: "20px",
            border: "solid 2px",
            background: this.props.color,
            margin: "auto"
          }}
        />
        <button onClick={() => this.props.pushCoke(this.props.price)}>
          {this.props.name}
        </button>
      </div>
    );
  }
}

class Display extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          width: "150px",
          height: "80px",
          border: "solid 5px",
          textAlign: "center",
          margin: "50px"
        }}
      >
        <th>{this.props.message}</th>
        <tr>{this.props.totalMoney}</tr>
      </div>
    );
  }
}

class VendingMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      totalMoney: 0
    };
  }

  addCoin = () => {
    this.setState({ message: "Please Choose Your Drink" });
    this.setState({ totalMoney: 0 });
  };

  buyCoke = price => {
    this.state.totalMoney >= price
      ? this.setState({
          message: "Thank you",
          totalMoney: this.state.totalMoney - price
        })
      : this.setState({ message: "The money is not enough " });
  };

  coinAmount = e => {
    this.setState({ totalMoney: e.target.value });
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
          <Juice name="Coke" price={130} color="red" pushCoke={this.buyCoke} />
          <Juice
            name="Sprite"
            price={120}
            color="Green"
            pushCoke={this.buyCoke}
          />
          <Juice
            name="Fanta"
            price={150}
            color="Blue"
            pushCoke={this.buyCoke}
          />
        </div>

        <Display
          message={this.state.message}
          totalMoney={this.state.totalMoney}
        />
        <Coin
          addCoin={this.addCoin}
          coinAmount={this.coinAmount}
          totalMoney={this.state.totalMoney}
        />
      </div>
    );
  }
}

export default VendingMachine;
