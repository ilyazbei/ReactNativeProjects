import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC1x5rqQLp_Ndvbzh-IjYCtiWHHyREhIKo',
      authDomain: 'authentication-39ffa.firebaseapp.com',
      databaseURL: 'https://authentication-39ffa.firebaseio.com',
      projectId: 'authentication-39ffa',
      storageBucket: 'authentication-39ffa.appspot.com',
      messagingSenderId: '747093635894'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPressOfThisButton={() => firebase.auth().signOut()}>
              Log Out!!!
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner spinnerSize="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
