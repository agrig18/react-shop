import CartCard from "components/CartCard";
import CButton from "components/CButton";
import CEmptyCart from "components/CEmptyCart";
import { CartContext } from "context/Cart";
import { Component } from "react";
import CartSummary from "./CartSummary";
import * as S from "./styled";

class CartPage extends Component {
  static contextType = CartContext;

  render() {
    const { state, checkout } = this.context;
    return state.cartItems.length ? (
      <S.SCartPageWrapper>
        <S.SCartTitle>CART</S.SCartTitle>
        <S.SBorder />
        {state.cartItems.map((item) => (
          <div>
            <CartCard className="cart" product={item} />
            <S.SBorder />
          </div>
        ))}
        <CartSummary className="cart" />
        <CButton className="order" name="Order" onClick={checkout} />
      </S.SCartPageWrapper>
    ) : (
      <S.SCartPageWrapper className="empty-cart">
        <CEmptyCart />
      </S.SCartPageWrapper>
    );
  }
}

export default CartPage;
