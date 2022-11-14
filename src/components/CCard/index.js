import CImage from "components/CImage";
import { CartContext } from "context/Cart";
import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as S from "./styled";

class CCard extends Component {
  static contextType = CartContext;

  constructor(props) {
    super(props);
    this.state = {
      selectedAttributes: Array(props.product?.attributes.length).fill(0),
    };
  }

  render() {
    const { product } = this.props;
    const { state, addToCart } = this.context;

    return (
      <S.SCard inStock={product.inStock}>
        <Link to={`/product/${product.id}`}>
          <div className="product_image_wrapper">
            <CImage imgUrl={product.gallery?.[0]} className="product_image" />
            <div className="out_of_stock">Out Of Stock</div>
            <S.SCardItemButton
              disabled={!product.inStock}
              onClick={(e) => {
                e.preventDefault();
                const cartItem = { ...product };
                cartItem["selectedAttributes"] = this.state.selectedAttributes;
                addToCart({ payload: cartItem });
              }}
            >
              <CImage fileName={"item-empty-cart"} />
            </S.SCardItemButton>
          </div>
          <S.SProductTitle className="title">
            {product.brand} {product.name}
          </S.SProductTitle>
          <S.SProductPrice>
            {product.prices?.[state.curCurrencyIndex]?.currency.symbol}{" "}
            {product.prices?.[state.curCurrencyIndex]?.amount.toFixed(2)}
          </S.SProductPrice>
        </Link>
      </S.SCard>
    );
  }
}

export default withRouter(CCard);
