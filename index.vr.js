import React from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';
import { Provider } from 'react';
import { createStore } from 'redux';

import IdeaContainer from './src/Idea/IdeaContainer.js';
import reducer from './src/redux/reducers/reducer.js'

const store = createStore(reducer)

console.log(store.getState())

export default class frontend extends React.Component {
  render() {
    return (
        <View>
          <Pano source={asset('sky.jpg')}/>
          <IdeaContainer/>
        </View>
    );
  }
};

AppRegistry.registerComponent('frontend', () => frontend);
