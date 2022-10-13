import { client } from "client";
import { GET_CURRENCIES } from "GraphQL/Queries";
import { Component } from "react";
import CurrencyItem from "./CurrencyItem";
import * as S from "./styled";

class Currencies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    client
      .query({
        query: GET_CURRENCIES,
      })
      .then(({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        this.setState({ data: data });
        return data;
      });
  }

  currencyUpdateHandler(currency, currencyIndex) {
    return () => {
      this.props.onCurrencyUpdate(currency, currencyIndex);
    };
  }

  render() {
    return (
      <S.SCurrencies>
        <ul>
          {this.state.data?.currencies.map((currency, index) => (
            <CurrencyItem
              key={index}
              symbol={currency.symbol}
              onCurrencyUpdate={this.currencyUpdateHandler(
                currency.symbol,
                index
              ).bind(this)}
            >
              {currency.symbol} {currency.label}
            </CurrencyItem>
          ))}
        </ul>
      </S.SCurrencies>
    );
  }
}

export default Currencies;
