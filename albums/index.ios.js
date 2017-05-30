//make eslint work, run: npm install --save-dev eslint-config-rallycoding and add new file .eslintrc
// in the commend line run: react-native run-ios
// to get delited folder back run: react-native eject
// to change icon, run: yo rn-toolbox:assets --icon ./blue.png


// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
