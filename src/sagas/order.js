import { put, takeLatest, all, call } from "redux-saga/effects";

import Request from "../utils/request";

import {
    postOrderSuccess,
    postOrderError,
} from "../actions/order";

import { POST_ORDER} from "../contants/order";

export function* postOrder(action) {
    const url = `api/orders/add-from-react?id_website=4`;
    try {
        const response = yield call(Request, url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json, text-plain, */*",
                "X-Requested-With": "XMLHttpRequest",
            },
            credentials: "same-origin",
            body: JSON.stringify(action.payload),
        });
        yield put(postOrderSuccess(response));
    } catch (error) {
        yield put(postOrderError(error.message));
    }

}

export default function* SlideSaga() {
    yield all([
        yield takeLatest(POST_ORDER, postOrder),
    ]);
}
