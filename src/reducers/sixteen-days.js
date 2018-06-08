// import * as constants from '../actions/constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    data: {},
    createdAt: null
});

export const sixteenDays = function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'SIXTEEN_DATA_RESPONSE':
            return state.set('data', fromJS(payload));


        default:
            return state;
    }
};