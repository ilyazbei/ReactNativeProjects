// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
// Functional Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#4ff278',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    marginTop: 20

  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app
export { Header };
