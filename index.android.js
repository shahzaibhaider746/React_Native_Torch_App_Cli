
import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  NativeModules,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Torch from 'react-native-torch';

export default class TorchDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTorchOn: false,
    };
  }

  _handlePress() {
    const { isTorchOn } = this.state;
    Torch.switchState(!isTorchOn);
    this.setState({ isTorchOn: !isTorchOn });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          RCTTorch Demo
        </Text>
        <Button
          onPress={this._handlePress.bind(this)}
          title="Toggle Torch"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize:20
  },
});

AppRegistry.registerComponent('TorchDemo', () => TorchDemo);
