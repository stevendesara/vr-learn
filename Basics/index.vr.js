import React, { Component } from 'react';
import { View, AppRegistry, Pano, asset, Text } from 'react-vr';
import Task from './components/Task.vr';

let timeOut = () => { };
export default class Basics extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        'Get grocery',
        'Get chicken',
        'Buy books'
      ],
      showSign: true
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        showSign: !this.state.showSign
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval();
  }

  render() {
    const { tasks, showSign } = this.state;
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')} />
        <View
          style={{
            layoutOrigin: [0.5, 0.5],
            transform: [{ translate: [0, 0, -3] }]
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 0.2 }}>
            {showSign ? 'Blink' : ''}
          </Text>
          {tasks.map(task => <Task task={task} />)}
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('Basics', () => Basics);
