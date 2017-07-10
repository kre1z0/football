import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './Root';

import injectTapEventPlugin from 'react-tap-event-plugin';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import configureStore from './store';

OfflinePluginRuntime.install();
injectTapEventPlugin();

const store = configureStore();

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component store={store} />
        </AppContainer>,
        document.getElementById('root'),
    );
};

render(Root);

if (module.hot) {
    module.hot.accept('./Root', () => render(Root));
}
