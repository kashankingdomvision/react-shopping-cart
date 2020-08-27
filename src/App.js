import React from 'react';
import './App.css';

import Routes from './Route';
import store from './store';
import { Provider } from 'react-redux'

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

export default App;
