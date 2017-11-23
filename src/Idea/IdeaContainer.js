import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';
import IdeaText from './IdeaText.js';
import { ideas } from '../../ideaSeed.js';


export default class IdeaContainer extends Component {
  render() {
    return (
      <View>
      <IdeaText text={ideas[0]} location={[1,3,-9]}/>
      <IdeaText text={ideas[1]} location={[3,3,-12]}/>
      <IdeaText text={ideas[2]} location={[6,3,-8]}/>
      <IdeaText text={ideas[3]} location={[9,3,-7]}/>
      <IdeaText text={ideas[4]} location={[12,3,-6]}/>
      <IdeaText text={ideas[5]} location={[-1,3,-12]}/>
      <IdeaText text={ideas[6]} location={[-3,3,-12]}/>
      <IdeaText text={ideas[7]} location={[-6,3,-12]}/>
    </View>

    );
  }
}
