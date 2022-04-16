import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './reducers'

const root = createRoot(document.getElementById('root'));
const store = createStore(allReducers)

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);