import { takeEvery } from "redux-saga/effects";
import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
} from "./../actions/currencies";
//swap currency

//base currency change
//App Initial Load
function* fetchLatestConversionRates(action) {
  console.log("TODO", action);
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
}
