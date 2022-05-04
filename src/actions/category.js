import * as TYPE from "../contants/category";

export const getCategory = (offset, page) => ({
    type: TYPE.GET_CATEGORY,
    offset,
    page,
});
export const getCategorySuccess = (data, total) => ({
    type: TYPE.GET_CATEGORY_SUCCESS,
    data: data,
    total: total,
});
export const getCategoryError = (errMess) => ({
    type: TYPE.GET_CATEGORY_ERROR,
    errMess,
});
