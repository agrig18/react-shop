import * as Types from "./types";

export const addToCart = (dispatch) => async (item) => {
  try {
    await dispatch({
      type: Types.ADD_TO_CART,
      payload: item,
    });
  } catch (err) {
    console.error("error--", err);
  }
};

export const increaseItem = (dispatch) => async (item) => {
  try {
    await dispatch({
      type: Types.INCREASE,
      payload: item,
    });
  } catch (err) {
    console.error("error--", err);
  }
};

export const decreaseItem = (dispatch) => async (item) => {
  try {
    await dispatch({
      type: Types.DECREASE,
      payload: item,
    });
  } catch (err) {
    console.error("error--", err);
  }
};

export const updateCurrency = (dispatch) => async (currency, currencyIndex) => {
  try {
    await dispatch({
      type: Types.UPDATE_CURRENCY,
      currency: currency,
      currencyIndex: currencyIndex,
    });
  } catch (err) {
    console.error("error--", err);
  }
};
