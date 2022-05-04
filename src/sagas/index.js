import { all } from "redux-saga/effects";
import ProductSaga from "./product";
import CategorySaga from "./category";

export default function* rootSaga() {
  yield all([
    ProductSaga(),
    CategorySaga()
  ]);
}
