// import * as constants from '../actions/constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    isFetching: false,
    isError: false,
    errorMessage: null,
    selectedCity: null,
});

export const common = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case 'SIXTEEN_DATA_REQUEST':
            return state.set('isFetching', true);
        case 'SIXTEEN_DATA_FAILURE':
            return state.set('isError', true)
                .set('errorMessage', payload)
                .set('isFetching', false);
        case 'SIXTEEN_DATA_RESPONSE':
            return state.set('isFetching', false);

        case 'CITY_SELECT':
            return state.set('selectedCity', payload);

        default:
            return state;
    }
};