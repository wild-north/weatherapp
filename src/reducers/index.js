import { combineReducers } from 'redux';
import { common } from './common';
import { sixteenDays } from './sixteen-days';
import { fiveDays } from './five-days';
import { currentDay } from './current-day';

export const reducer = combineReducers({
    common,
    sixteenDays,
    fiveDays,
    currentDay
});

// const data = {
//     meta: {
//         isFetching: false,
//         isError: false,
//         errorMessage: null
//     },
//     selectedCity: null,
//     sixteenDays: {},
//     fiveDays: {},
//     current: {}
// };