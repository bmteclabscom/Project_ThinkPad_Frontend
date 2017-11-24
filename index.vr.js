// React Style Imports
import React from 'react';
import { AppRegistry, asset, Pano, Text, View, VideoPano } from 'react-vr';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Project Imports

import SpaceContainer from './src/Space/SpaceContainer.js';
import { rootReducer } from './src/redux/reducers/rootReducer';


// ------------------------------------------------------------

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

let { dispatch, getState } = store;

export default class frontend extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Pano source={asset('sky.jpg')}/>


          <SpaceContainer/>
        </View>
      </Provider>
    );
  }
};

AppRegistry.registerComponent('frontend', () => frontend);


// <VideoPano source={asset('falls.mp4')}/> //VIDEO EXPERIENCE
// React VR can be loaded as an Iframe!
