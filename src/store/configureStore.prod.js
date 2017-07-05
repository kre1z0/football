import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist-immutable';
import { REHYDRATE } from 'redux-persist-immutable/constants';
import createActionBuffer from 'redux-action-buffer';
import localForage from 'localforage';

import reducers, { StateRecord } from '../ducks';

const configureStore = (preloadedState = new StateRecord()) => {
    const middlewares = compose(
        applyMiddleware(thunk, createActionBuffer(REHYDRATE)),
        autoRehydrate(),
    );

    const store = createStore(reducers, preloadedState, middlewares);

    persistStore(store, {
        storage: localForage,
        //blacklist: ['user', 'objects'],
        whitelist: [],
    });

    return store;
};

export default configureStore;
