import { CartContext } from "context/Cart";
import CCartSummaryText from "pages/Cart/CartSummary/CCartSummaryText";
import { Component } from "react";
import * as S from "./styled";

class CartSummary extends Component {
  static contextType = CartContext;

  render() {
    const { state } = this.context;
    return this.props.className === "cart" ? (
      <S.SCartSummaryWrapper>
        <CCartSummaryText title="Tax 21%:" value="$42.00" />
        <CCartSummaryText title="Quantity:" value={state.itemCount} />
        <CCartSummaryText
          title="Total:"
          value={`${state.curCurrency}${state.totalPrice}`}
          className="total"
        />
      </S.SCartSummaryWrapper>
    ) : (
      <CCartSummaryText
        title="Total:"
        value={`${state.curCurrency}${state.totalPrice}`}
        className={`${this.props.className} total`}
      />
    );
  }
}

export default CartSummary;
