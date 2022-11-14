import CImage from "components/CImage";
import CNav from "components/Nav";
import Currencies from "./Currency";
import { Component, createRef } from "react";
import * as S from "./styled";
import CMiniCart from "components/CMiniCart";
import { CartContext } from "context/Cart";

class Header extends Component {
  static contextType = CartContext;
  constructor() {
    super();
    this.state = {
      showCurrencies: false,
      showMiniCart: false,
    };
    this.currencyRef = createRef();
    this.miniCartRef = createRef();
  }

  dropDownCurrencyHandler() {
    this.setState((prevState) => {
      return { showCurrencies: !prevState.showCurrencies };
    });
  }

  updateCurrencyHandler(currency, currencyIndex) {
    this.setState({ showCurrencies: false });
    this.context.updateCurrency({ currency, currencyIndex });
  }

  miniCartPopUpHandler() {
    this.setState((prevState) => {
      return { showMiniCart: !prevState.showMiniCart };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.showCurrencies !== prevState.showCurrencies ||
      this.state.showMiniCart !== prevState.showMiniCart
    ) {
      const checkIfClickedOutside = (event) => {
        if (
          this.currencyRef.current &&
          !this.currencyRef.current.contains(event.target)
        ) {
          if (this.state.showCurrencies)
            this.setState({ showCurrencies: false });
        }

        if (
          this.miniCartRef.current &&
          !this.miniCartRef.current.contains(event.target)
        ) {
          if (this.state.showMiniCart) this.setState({ showMiniCart: false });
        }
      };

      document.addEventListener("mousedown", checkIfClickedOutside);
      return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside);
      };
    }
  }

  render() {
    const { state } = this.context;
    return (
      <S.SHeader>
        <S.SHeaderWrapper>
          <CNav />
          <S.SLogo>
            <CImage fileName={"shop-bag"} />
          </S.SLogo>
          <S.SIcons>
            <S.SDropDown ref={this.currencyRef}>
              <button onClick={this.dropDownCurrencyHandler.bind(this)}>
                <S.SCurrencyIconWrapper>
                  <S.SCurrencyIcon>{state.curCurrency}</S.SCurrencyIcon>
                  <S.SArrowIcon>
                    <CImage
                      fileName={
                        this.state.showCurrencies ? "arrow-up" : "arrow-down"
                      }
                    />
                  </S.SArrowIcon>
                </S.SCurrencyIconWrapper>
              </button>
              {this.state.showCurrencies && (
                <S.SDropDownContent>
                  <Currencies
                    onCurrencyUpdate={this.updateCurrencyHandler.bind(this)}
                  />
                </S.SDropDownContent>
              )}
            </S.SDropDown>
            <S.SMiniCart ref={this.miniCartRef}>
              <S.SMiniCartIcon onClick={this.miniCartPopUpHandler.bind(this)}>
                <CImage fileName="empty-cart" />
                {state.itemCount > 0 && (
                  <S.SMiniCartItemCounter>
                    {state.itemCount}
                  </S.SMiniCartItemCounter>
                )}
              </S.SMiniCartIcon>
              {this.state.showMiniCart && (
                <CMiniCart
                  miniCartPopUpHandler={this.miniCartPopUpHandler.bind(this)}
                />
              )}
            </S.SMiniCart>
          </S.SIcons>
        </S.SHeaderWrapper>
        {this.state.showMiniCart && <S.SCartOverlay />}
      </S.SHeader>
    );
  }
}

export default Header;
