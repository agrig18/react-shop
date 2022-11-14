import CartCard from "components/CartCard";
import { SText } from "components/CartCard/styled";
import CButton from "components/CButton";
import CEmptyCart from "components/CEmptyCart";
import { CartContext } from "context/Cart";
import CartSummary from "pages/Cart/CartSummary";
import { Component } from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";

class CMiniCart extends Component {
  static contextType = CartContext;

  render() {
    const { state, checkout } = this.context;

    return state.cartItems.length > 0 ? (
      <S.SMiniCartWrapper>
        <S.SMiniCartHeader>
          <SText fontSize="16px" fontWeight="700">
            My Bag,{" "}
          </SText>
          <SText fontSize="16px" fontWeight="500">
            {state.itemCount} {state.itemCount === 1 ? "item" : "items"}
          </SText>
        </S.SMiniCartHeader>
        {state.cartItems.map((item, index) => {
          return <CartCard className="mini-cart" product={item} key={index} />;
        })}
        <CartSummary className="mini-cart" />
        <S.SButtonWrapper>
          <Link to={`/cart`}>
            <CButton
              className="view-bag"
              name="View Bag"
              onClick={this.props.miniCartPopUpHandler}
            />
          </Link>
          <CButton className="checkout" name="Check Out" onClick={checkout} />
        </S.SButtonWrapper>
      </S.SMiniCartWrapper>
    ) : (
      <S.SMiniCartWrapper className="empty-cart">
        <CEmptyCart />
      </S.SMiniCartWrapper>
    );
  }
}

export default CMiniCart;
