import { selectCity, selectView } from './actions';
import { createImmutableSelector, createConnectorForSelector } from './helpers';
import { selectedCity, selectedView } from './selectors/common';

const headerSelector = createImmutableSelector(
    [selectedCity, selectedView],
    (selectedCity, selectedView) => ({
        selectedCity,
        selectedView
    })
);

export const headerConnector = createConnectorForSelector(headerSelector, {
    onSelectCity: selectCity
});

const contentSelector = createImmutableSelector(
    [selectedCity, selectedView],
    (selectedCity, selectedView) => ({
        selectedCity,
        selectedView
    })
);

export const contentConnector = createConnectorForSelector(contentSelector, {});

const navSelector = createImmutableSelector(
    selectedCity,
    selectedCity => ({
        selectedCity
    })
);

export const navConnector = createConnectorForSelector(navSelector, {
    onSelectView: selectView
});

/*///////////////////////////////////////////////////////*/

const pageSelector = createImmutableSelector(
    [selectedCity, selectedView],
    (selectedCity, selectedView) => ({
        selectedCity,
        selectedView
    })
);

export const pageConnector = createConnectorForSelector(pageSelector, {});
