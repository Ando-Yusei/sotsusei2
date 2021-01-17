import React from 'react';
import { View , Text , StyleSheet} from 'react-native';
import { Pedometer } from 'expo-sensors';

export default class MainWalk extends React.Component {
  state = {
    isPedometerAvailable: 'checking',
    pastStepCount: 0,
    currentStepCount: 0,
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps,
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result),
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: 'Could not get isPedometerAvailable: ' + error,
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: 'Could not get stepCount: ' + error,
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

 render() {
    return (
      <View style={styles.mainWalk}>
        {/* <Text style={styles.mainText1}>＜本日の歩数＞{this.state.isPedometerAvailable}</Text> */}
        <Text style={styles.mainText2}>24時間内の歩数: {this.state.pastStepCount}</Text>
        <Text>★1日に8000歩以上歩くと喜笑助くんが1つもらえます。: {this.state.currentStepCount}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainWalk:{
  justifyContent : 'center',
  alignItems : 'center',

  },
  mainText1:{
    fontSize:30,
    margin:10,

  },
  mainText2:{
     fontSize:30,
     margin:10,

  },

});
