//make eslint work, run: npm install --save-dev eslint-config-rallycoding and add new file .eslintrc
// in the commend line run: react-native run-ios
// to get delited folder back run: react-native eject
// to change icon, run: yo rn-toolbox:assets --icon ./blue.png
// firebase run: npm install --save firebase

import { AppRegistry } from 'react-native';
import App from './src/app';

AppRegistry.registerComponent('auth', () => App);
