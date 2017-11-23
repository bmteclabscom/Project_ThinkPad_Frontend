// React Style Imports

import React from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { BrowserRouter as Router } from 'react-router-dom';

//Project Imports

import IdeaContainer from './src/Idea/IdeaContainer.js';
import { rootReducer } from './src/redux/reducers/rootReducer';


// ------------------------------------------------------------

const store = createStore(rootReducer, applyMiddleware(thunk));

let { dispatch, getState } = store;

console.log(getState())

export default class frontend extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Pano source={asset('sky.jpg')}/>
          <IdeaContainer/>
        </View>
      </Provider>
    );
  }
};

AppRegistry.registerComponent('frontend', () => frontend);
