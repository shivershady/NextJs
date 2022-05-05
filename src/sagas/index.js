import { all } from "redux-saga/effects";
import ProductSaga from "./product";
import CategorySaga from "./category";
import SlideSaga from "./slide";

export default function* rootSaga() {
  yield all([
    ProductSaga(),
    SlideSaga(),
    CategorySaga()
  ]);
}
