import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
import {increment, decrement} from './actions/count'
import {Provider} from 'react-redux' //npm install react-redux

const store=configureStore()
console.log(store.getState())

store.subscribe(()=> {
    console.log(store.getState())
})


const jsx=(
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
