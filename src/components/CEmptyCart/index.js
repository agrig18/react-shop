import { Component } from "react";
import * as S from "./styled";

class CEmptyCart extends Component {
  render() {
    return (
      <S.SEmptyCartWrapper>
        <p>Cart</p>
        <p>Your cart is empty. Please place some items in your cart</p>
      </S.SEmptyCartWrapper>
    );
  }
}

export default CEmptyCart;
