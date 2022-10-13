import { saveState } from "store/localStorage";
import * as Types from "./types";

class CartReducer {
  reducer(state, action) {
    switch (action.type) {
      case Types.ADD_TO_CART:
        return this.addToCart(state, action.payload);
      case Types.INCREASE:
        return this.increase(state, action.payload);
      case Types.DECREASE:
        return this.decrease(state, action.payload);
      case Types.UPDATE_CURRENCY:
        return this.updateCurrency(
          state,
          action.currency,
          action.currencyIndex
        );
      case Types.CHECKOUT:
        return this.checkout(state);
      default:
        return state;
    }
  }

  sumItems(cartItems, curCurrencyIndex) {
    let itemCount = cartItems.reduce(
      (total, product) => total + product.count,
      0
    );
    let totalPrice = cartItems
      .reduce(
        (total, product) =>
          total + product.prices[curCurrencyIndex].amount * product.count,
        0
      )
      .toFixed(2);
    return { itemCount, totalPrice };
  }

  addToCart(state, payload) {
    const cartItems = JSON.parse(JSON.stringify(state.cartItems));

    const index = state.cartItems.findIndex((item) => {
      return (
        item.id === payload.id &&
        JSON.stringify(item.selectedAttributes) ===
          JSON.stringify(payload.selectedAttributes)
      );
    });

    if (index !== -1) {
      cartItems[index].count++;
    } else {
      cartItems.push({
        ...payload,
        count: 1,
      });
    }

    const newState = {
      ...state,
      ...this.sumItems(cartItems, state.curCurrencyIndex),
      cartItems: [...cartItems],
    };
    saveState(newState);
    return newState;
  }

  increase(state, payload) {
    const cartItems = JSON.parse(JSON.stringify(state.cartItems));
    cartItems[
      state.cartItems.findIndex(
        (item) =>
          item.id === payload.id &&
          JSON.stringify(item.selectedAttributes) ===
            JSON.stringify(payload.selectedAttributes)
      )
    ].count++;

    const newState = {
      ...state,
      ...this.sumItems(cartItems, state.curCurrencyIndex),
      cartItems: [...cartItems],
    };

    saveState(newState);
    return newState;
  }

  decrease(state, payload) {
    const cartItems = JSON.parse(JSON.stringify(state.cartItems));
    const index = state.cartItems.findIndex(
      (item) =>
        item.id === payload.id &&
        JSON.stringify(item.selectedAttributes) ===
          JSON.stringify(payload.selectedAttributes)
    );

    if (cartItems[index].count > 1) {
      cartItems[index].count--;
    } else {
      cartItems.splice(index, 1);
    }

    const newState = {
      ...state,
      ...this.sumItems(cartItems, state.curCurrencyIndex),
      cartItems: [...cartItems],
    };

    saveState(newState);
    return newState;
  }

  updateCurrency(state, currency, currencyIndex) {
    const cartItems = JSON.parse(JSON.stringify(state.cartItems));

    const newState = {
      ...state,
      ...this.sumItems(cartItems, currencyIndex),
      curCurrencyIndex: currencyIndex,
      curCurrency: currency,
    };

    saveState(newState);
    return newState;
  }

  checkout(state) {
    const newState = {
      ...state,
      cartItems: [],
      ...this.sumItems([], state.curCurrencyIndex),
    };
    saveState(newState);
    return newState;
  }
}

export const cartReducer = new CartReducer();
