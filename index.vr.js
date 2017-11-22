import React from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';
import IdeaContainer from './src/Idea/IdeaContainer.js';
import { Provider } from 'react';
import { createStore } from 'redux';

console.log(createStore)

export default class frontend extends React.Component {
  render() {
    return (
        <h1>TEST</h1>
        <View>
          <Pano source={asset('sky.jpg')}/>
          <IdeaContainer/>
        </View>
    );
  }
};

AppRegistry.registerComponent('frontend', () => frontend);
