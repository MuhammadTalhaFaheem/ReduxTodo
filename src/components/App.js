import React, { Component } from 'react';
import './css/App.css';
import { createStore,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';
import allReducers from '../reducers';
import MainComponent from './MainComponent';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger({
  collapsed: true,
});
const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk, logger))
  );
  store.subscribe(() => store.getState())

class App extends Component {
  render() {
    console.log(store.getState());
    return (
      
      <div className="App">
        <h2>Todo List</h2>
        <Provider store = {store}>
          <MainComponent />
        </Provider>
      </div>
    );
  }
}

export default App;
