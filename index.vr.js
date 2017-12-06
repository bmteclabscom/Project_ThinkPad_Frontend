// React Style Imports

import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, VideoPano, Scene } from 'react-vr';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//Project Imports

import SpaceContainer from './src/Space/SpaceContainer.js';
import { rootReducer } from './src/redux/reducers/rootReducer';
importScripts('https://js.pusher.com/4.1/pusher.worker.min.js');


// -----------------------WITHOUT VIDEO------------------------------

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

let { dispatch, getState } = store;

export default class frontend extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Pano style={{transform: [{rotateY: '300deg'}]}} source={asset('sky3.jpg')}/>
          <SpaceContainer/>
        </View>
      </Provider>
    );
  }
};

AppRegistry.registerComponent('frontend', () => frontend);

// ---------------------WITH VIDEO------------------------------

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
//
// let { dispatch, getState } = store;
//
// export default class frontend extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <View>
//           <VideoPano source={asset('test.mp4')} loop={true}/>
//           <SpaceContainer/>
//         </View>
//       </Provider>
//     );
//   }
// };
//
// AppRegistry.registerComponent('frontend', () => frontend);
