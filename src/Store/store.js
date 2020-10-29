import {createStore, combineReducers } from "redux";
import cardReduer from "./Reducers";
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
    card: cardReduer,
});

const store = createStore(appReducers, loadState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 2000));

export default store;
