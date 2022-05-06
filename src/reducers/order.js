import * as TYPE from "../contants/order";
import { HYDRATE } from "next-redux-wrapper";
import cloneDeep from "lodash/cloneDeep";

const initialState = {
    order: {
        loading: false,
        data: [],
        errMess: null,
    },
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...cloneDeep(action.payload.order) };

        case TYPE.POST_ORDER:
            return {
                ...state,
                order: {
                    ...state.order,
                    loading: true,
                },
            };
        case TYPE.POST_ORDER_SUCCESS:
            return {
                ...state,
                order: {
                    ...state.order,
                    loading: false,
                    data: action.data,
                    total: action.total,
                },
            };
        case TYPE.POST_ORDER_ERROR:
            return {
                ...state,
                order: {
                    ...state.order,
                    loading: false,
                    errMess: action.errMess,
                },
            };
        default:
            return state;
    }
};

export default orderReducer;
