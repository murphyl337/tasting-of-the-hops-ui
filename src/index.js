import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'

const onSubmitHandler = (val) => {
    store.dispatch({type: 'SUBMIT_BEER', payload: val})
}

const render = () => {
    const state = store.getState()
    ReactDOM.render(<App beers={state.beers} onSubmit={onSubmitHandler}/>, document.getElementById('root'))
}


render()
store.subscribe(render)

serviceWorker.register()
