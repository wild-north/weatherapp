import { createImmutableSelector } from '../helpers';

const data = state => state.common;

export const selectedCity = createImmutableSelector(
    data,
    data => data.get('selectedCity')
);

export const isFetching = createImmutableSelector(
    data,
    data => data.get('isFetching')
);

export const isError = createImmutableSelector(
    data,
    data => data.get('isError')
);

export const errorMessage = createImmutableSelector(
    data,
    data => data.get('errorMessage')
);

export const selectedView = createImmutableSelector(
    data,
    data => data.get('selectedView')
);
