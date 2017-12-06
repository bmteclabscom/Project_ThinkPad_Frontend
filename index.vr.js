// React Style Imports

import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, VideoPano } from 'react-vr';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//Project Imports

import SpaceContainer from './src/Space/SpaceContainer.js';
import { rootReducer } from './src/redux/reducers/rootReducer';



// -----------------------WITHOUT VIDEO------------------------------

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

let { dispatch, getState } = store;

export default class frontend extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Pano style={{transform: [{rotate: '90deg'}]}} source={asset('sky.jpg')}/>
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
