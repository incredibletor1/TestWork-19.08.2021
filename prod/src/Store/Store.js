import '../index.css';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { userReducer } from './UserStore/UserReducer';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { customersReducer } from './CustomersStore/CustomersReducer';


const reducers = combineReducers({
  userReducer,
  customersReducer
});

const saveState = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    window.localStorage.setItem('app_state', serialisedState);
  } catch (err) {
    return err;
  }
};

const loadState = () => {
  try {
    const serialisedState = window.localStorage.getItem('app_state');
    if (!serialisedState) return undefined;
    return JSON.parse(serialisedState);
  } catch (err) {
    return err;
  }
};

const oldState = loadState();

export var store = createStore(reducers, oldState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
  saveState(store.getState());
});
