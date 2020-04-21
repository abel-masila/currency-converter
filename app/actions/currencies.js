export const SWAP_CURRENCY = "SWAP_CURRENCY";
export const CHANGE_CURRENCY_AMOUNT = "CHANGE_CURRENCY_AMOUNT";
export const CHANGE_BASE_CURRENCY = "CHANGE_BASE_CURRENCY";
export const CHANGE_QOUTE_CURRENCY = "CHANGE_QOUTE_CURRENCY";

export const swapCurrency = () => ({
  type: SWAP_CURRENCY,
});

export const changeCurrencyAmount = (amount) => ({
  type: CHANGE_CURRENCY_AMOUNT,
  amount: parseFloat(amount),
});

export const changeBaseCurrency = (currency) => ({
  type: CHANGE_BASE_CURRENCY,
  currency,
});

export const changeQuoteCurrency = (currency) => ({
  type: CHANGE_QOUTE_CURRENCY,
  currency,
});
