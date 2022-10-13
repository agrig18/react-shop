export const initialState = {
  cartItems: [],
  itemCount: 0,
  totalPrice: 0,
  curCurrencyIndex: 0,
  curCurrency: "$",
};

export const loadState = () => {
  try {
    if (localStorage.getItem("state") === null) {
      saveState(initialState);
    }
    return JSON.parse(localStorage.getItem("state"));
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch {
    // ignore write errors
  }
};
