import { Component, createContext } from "react";
import * as Types from "./types";
import { cartReducer } from "context/Cart/reducer";
import { loadState } from "store/localStorage";

export const CartContext = createContext();

class CartProvider extends Component {
  state = loadState();

  reducer(actionType) {
    return async (action) => {
      try {
        let _action = await action;
        _action.type = actionType;
        this.setState(cartReducer.reducer(this.state, _action));
      } catch (err) {
        console.error("error--", err);
      }
    };
  }

  render() {
    const state = this.state;
    const addToCart = this.reducer(Types.ADD_TO_CART);
    const increase = this.reducer(Types.INCREASE);
    const decrease = this.reducer(Types.DECREASE);
    const updateCurrency = this.reducer(Types.UPDATE_CURRENCY);
    const checkout = this.reducer(Types.CHECKOUT);

    return (
      <CartContext.Provider
        value={{
          state,
          addToCart,
          increase,
          decrease,
          updateCurrency,
          checkout,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartProvider;
