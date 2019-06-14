
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as firebase from 'firebase';
import 'firebase/firestore';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './router';

class App extends Component {

   componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDxzJ7YQSLp3POTrjmt7DBmiaHNsMUc0_U',
      authDomain: 'blockcare-3e340.firebaseapp.com',
      databaseURL: 'https://blockcare-3e340.firebaseio.com',
      projectId: 'blockcare-3e340',
      storageBucket: 'blockcare-3e340.appspot.com',
      messagingSenderId: '1033334096745',
      appId: '1:1033334096745:web:551e5721e448c09f'
    });
  }


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />
      </Provider>

    );
  }
}

export default App;
    
