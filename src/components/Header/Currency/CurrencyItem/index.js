import { Component } from "react";

class CurrencyItem extends Component {
  render() {
    return <li onClick={this.props.onCurrencyUpdate}>{this.props.children}</li>;
  }
}

export default CurrencyItem;
