import { Component } from "react";
import * as S from "./styled";
import CButton from "components/CButton";
import CSlider from "components/CSlider";
import CRadioButton from "components/CRadioButton";
import { CartContext } from "context/Cart";

class CartCard extends Component {
  static contextType = CartContext;

  constructor(props) {
    super(props);
    this.state = {
      count: props.product.count,
    };
  }

  onAdd() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
    this.context.increase({ payload: this.props.product });
  }

  onSubtract() {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
    this.context.decrease({ payload: this.props.product });
  }

  changeHandler(attributeIndex) {
    return (event) => {
      this.props.attributeChangeHandler(
        attributeIndex,
        parseInt(event.target.value)
      );
    };
  }

  render() {
    const { state } = this.context;
    return (
      <S.SCartCardWrapper>
        {this.props.product ? (
          <S.SCartContainer>
            <S.SCartDetails className={this.props.className}>
              <S.SText
                fontSize={
                  this.props.className === "mini-cart" ? "16px" : "30px"
                }
                fontWeight={
                  this.props.className === "mini-cart" ? "400" : "600"
                }
              >
                {this.props.product?.brand}
              </S.SText>
              <S.SText
                fontSize={
                  this.props.className === "mini-cart" ? "16px" : "30px"
                }
                fontWeight="400"
              >
                {this.props.product?.name}
              </S.SText>
              {this.props.className.includes("cart") && (
                <S.SText
                  fontSize={
                    this.props.className === "mini-cart" ? "16px" : "24px"
                  }
                  fontWeight="700"
                >
                  {state.curCurrency}
                  {this.props.product?.prices[state.curCurrencyIndex].amount}
                </S.SText>
              )}
              {this.props.product?.attributes?.map((attribute, index) => (
                <CRadioButton
                  id={this.props.className}
                  key={index}
                  name={
                    this.props.className === "product-page"
                      ? `${this.props.product.id}-${attribute.name}`
                      : `${this.props.className}-${this.props.product.id}-${attribute.name}-${this.props.product.selectedAttributes}`
                  }
                  type="with-label"
                  label={`${attribute.name}:`}
                  className={attribute.type === "swatch" ? "color" : "size"}
                  gap={
                    attribute.type === "swatch"
                      ? "8px"
                      : this.props.className === "product-page"
                      ? "12px"
                      : "8px"
                  }
                  selectedAttribute={
                    this.props.product.selectedAttributes[index]
                  }
                  items={attribute.items}
                  onChange={this.changeHandler(index).bind(this)}
                />
              ))}
              {this.props.className === "product-page" && (
                <S.SText fontSize="18px" fontWeight="700">
                  PRICE:
                </S.SText>
              )}
              {this.props.className === "product-page" && (
                <S.SText fontSize="24px" fontWeight="700">
                  {state.curCurrency}
                  {this.props.product?.prices[state.curCurrencyIndex]?.amount}
                </S.SText>
              )}
            </S.SCartDetails>
            {this.props.className !== "product-page" && (
              <S.SCartCounterSlider className={this.props.className}>
                <S.SCounter>
                  <CButton
                    id={this.props.className}
                    className="counter"
                    name="+"
                    onClick={this.onAdd.bind(this)}
                  />
                  <S.SText>{this.props.product.count}</S.SText>
                  <CButton
                    id={this.props.className}
                    className="counter"
                    name="-"
                    onClick={this.onSubtract.bind(this)}
                  />
                </S.SCounter>
                <CSlider
                  className={this.props.className}
                  gallery={this.props.product?.gallery}
                />
              </S.SCartCounterSlider>
            )}
          </S.SCartContainer>
        ) : (
          <p>
            Basket Your basket is empty. Please place some items in your basket.
          </p>
        )}
      </S.SCartCardWrapper>
    );
  }
}

export default CartCard;
