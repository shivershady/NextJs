import { all } from "redux-saga/effects";
import ProductSaga from "./product";
import CategorySaga from "./category";
import SlideSaga from "./slide";
import ArticleSaga from "./article";
import OrderSaga from "./order";

export default function* rootSaga() {
  yield all([
    ProductSaga(),
    SlideSaga(),
    CategorySaga(),
    ArticleSaga(),
    OrderSaga()
  ]);
}
