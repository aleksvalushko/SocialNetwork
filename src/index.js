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
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import usersReducer from "./redux/usersReducers";
import authReducer from "./redux/authReducers";
import loginReducer from "./redux/loginReducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    friends: friendsReducer,
    users: usersReducer,
    auth: authReducer,
    login: loginReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

/*
store.subscribe(() => {
    let state = store.getState();
    rerenderWholeTree(state);
});
*/

window.store = store;

// let rerenderWholeTree = () => {
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>

            <App
                // store={store} state={state}
            />

        </BrowserRouter>
    </Provider>, document.getElementById('root'));
// };

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more Info service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// rerenderWholeTree(store.getState());