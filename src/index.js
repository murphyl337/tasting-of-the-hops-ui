import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store'
import { bindActionCreators } from 'redux'
import { submitBeer } from './reducers/beer'

const actions = bindActionCreators({
    submitBeer
}, store.dispatch)

ReactDOM.render(
    <Provider store={store}>
        <App onSubmit={actions.submitBeer} />
    </Provider>, 
    document.getElementById('root')
)

serviceWorker.register()
