/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * A sound file is from url.
 * http://www.noiseaddicts.com/free-samples-mp3/?id=4933
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

var Sound = require('react-native-sound');

class sound_test extends Component {
  constructor() {
    super();
    /* Bind Member function for using 'this'. */
    this._onPressPlay   = this._onPressPlay.bind(this);
    this._onPressStop   = this._onPressStop.bind(this);
    this._onPressResume = this._onPressResume.bind(this);
    this._onPressPause  = this._onPressPause.bind(this);

    this.whoosh = new Sound('whoosh.mp3',
                            /* your path here */
                            Sound.DOCUMENT,
                           /* Exit Event */
                           (error) => {

                             if( error ) {
                               console.log('failed to load the sound',error);
                             } else {
                               console.log('duration in seconds: ' + this.whoosh.duration +
                                           'number of channels: ' + this.whoosh.numberOfChannels );
                             }
                           });
    console.log('MAIN_BUNDLE: ',Sound.MAIN_BUNDLE);
    console.log('DOCUMENT:'    ,Sound.DOCUMENT);
    console.log('LIBRARY:'     ,Sound.LIBRARY);
    console.log('CACHES:'      ,Sound.CACHES);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
      </Text>
      <TouchableHighlight onPress={this._onPressPlay}>
        <View style={styles.button}>
          <Text>Play</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={this._onPressStop}>
      <View style={styles.button}>
      <Text>Stop</Text>
      </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={this._onPressResume}>
      <View style={styles.button}>
      <Text>Resume</Text>
      </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={this._onPressPause}>
      <View style={styles.button}>
      <Text>Pause</Text>
      </View>
      </TouchableHighlight>

      </View>
    );
  }

  _onPressPlay() {
    console.log('OnPlay');

    /*     whoosh.setVolume(0.5); */
    this.whoosh.setPan(1);
    this.whoosh.setNumberOfLoops(0);

    console.log('volume: ' + this.whoosh.getVolume());
    console.log('pan: '    + this.whoosh.getPan());
    console.log('loops: '  + this.whoosh.getNumberOfLoops());

    this.whoosh.setCurrentTime(0);

    this.whoosh.play((success)=>{
      if(success) {
        console.log('successfully finished playing');
      }  else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  }

  _onPressStop() {
    console.log('OnStop');
    this.whoosh.stop();
  }

  _onPressResume() {
    console.log('OnResume');
    this.whoosh.play((success)=>{
      if(success) {
        console.log('successfully finished playing');
      }  else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  }

  _onPressPause() {
    console.log('OnPause');
    this.whoosh.pause();
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
  },
  button: {
    margin: 20,
    backgroundColor: 'rgba(52,52,52,0.5)'
  },
});

AppRegistry.registerComponent('sound_test', () => sound_test);
