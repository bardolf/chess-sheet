import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/app.jsx';
import { createStore } from 'redux'
import reducers from './reducers';
import { Provider } from 'react-redux';
import { loadState, saveState } from './localStorage';

import './styles.css';

const persistedState = loadState();
const store = createStore(
    reducers,
    persistedState
);

store.subscribe(() => {
    saveState(store.getState());
});


ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);