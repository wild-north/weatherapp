import * as constants from '../actions/constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    isFetching: false,
    isError: false,
    errorMessage: null,
    selectedCity: 'kharkiv',
    selectedView: '16days'
});

export const common = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case constants.SIXTEEN_DATA_REQUEST:
            return state.set('isFetching', true);

        case constants.SIXTEEN_DATA_FAILURE:
            return state.set('isError', true)
                .set('errorMessage', payload)
                .set('isFetching', false);

        case constants.SIXTEEN_DATA_RESPONSE:
            return state.set('isFetching', false);

        case constants.CITY_SELECT:
            return state.set('selectedCity', payload);

        case constants.VIEW_SELECT:
            return state.set('selectedView', payload);

        default:
            return state;
    }
};