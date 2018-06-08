import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

export function configureStore(preloadedState) {
    return createStore(
        reducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware( ...middlewares )
        )
    );
}

