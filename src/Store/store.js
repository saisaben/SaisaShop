import {createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import cartReduer from "./Reducers";
import throttle from 'lodash.throttle';

function loadState(){
    try{
        const state = localStorage.getItem('card');

        if(state !== null){
            return JSON.parse(state);
        }        
    } catch(e){
        // ignore errors
    }

    return {
        card: []
    };
}

function saveState(state){
    console.log('saveState..')
    localStorage.setItem('card', JSON.stringify(state));
}

const appReducers = combineReducers({
    card: cartReduer,
});

const store = createStore(appReducers, loadState(), compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 2000));

export default store;
