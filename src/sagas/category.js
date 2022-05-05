import { put, takeLatest, all, call } from "redux-saga/effects";

import Request from "../utils/request";

import {
    getCategorySuccess,
    getCategoryError,
    getFilterCategorySuccess,
    getFilterCategoryError
} from "../actions/category";

import { GET_CATEGORY , GET_FILTER_CATEGORY} from "../contants/category";

export function* getCategory(action) {
    const url = `api/categories/get?id_website=4&active=1`;
    try {
        const response = yield call(Request, url);
        yield put(getCategorySuccess(response));
    } catch (error) {
        yield put(getCategoryError(error.message));
    }
}

export function* getFilterCategory(action) {
    const url = `api/filters/get?active=1&id_cat=${action.offset.id}&page=1&id_website=4&id_parent=0`;
    try {
        const response = yield call(Request, url);
        yield put(getFilterCategorySuccess(response));
    } catch (error) {
        yield put(getFilterCategoryError(error.message));
    }
}

export default function* CategorySaga() {
    yield all([
        yield takeLatest(GET_CATEGORY, getCategory),
        yield takeLatest(GET_FILTER_CATEGORY, getFilterCategory),
    ]);
}
