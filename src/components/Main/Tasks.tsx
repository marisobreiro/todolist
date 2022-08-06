import React from 'react';
import {ScrollView} from 'react-native';
import {Task} from './Task/Task';

export function Tasks() {
  return (
    <ScrollView>
      <Task>Regar plantas</Task>
      <Task>Daily</Task>
    </ScrollView>
  );
}
