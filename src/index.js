// import store from "./ui/store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import profileReducer from "./redux/profileReducers";
import dialogsReducer from "./redux/dialogsReducers";
import friendsReducer from "./redux/friendsReducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    friends: friendsReducer
});

let store = createStore(reducers);

store.subscribe(() => {
    let state = store.getState();
    rerenderWholeTree(state);
});

let rerenderWholeTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} store={store}/>
        </BrowserRouter>, document.getElementById('root'));
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more Info service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

rerenderWholeTree(store.getState());