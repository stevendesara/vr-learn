import React, { Component } from 'react';
import { Text } from 'react-vr';

export default class Task extends Component {
    render() {
        const { task } = this.props;
        console.log('Task render called', task);
        return (
            <Text style={{ textAlign: 'center', fontSize: 0.2 }}>
                {task}
            </Text>
        );
    }
}
