import { createAction } from '../helpers';
import * as constants from './constants';

export const selectCity = createAction(constants.CITY_SELECT);
export const selectView = createAction(constants.VIEW_SELECT);