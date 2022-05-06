import * as TYPE from "../contants/order";

export const postOrder = (payload) => ({
    type: TYPE.POST_ORDER,
    payload
});
export const postOrderSuccess = (data, total) => ({
    type: TYPE.POST_ORDER_SUCCESS,
    data: data,
    total: total,
});
export const postOrderError = (errMess) => ({
    type: TYPE.POST_ORDER_ERROR,
    errMess,
});
