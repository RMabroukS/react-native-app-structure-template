import * as React from 'react';
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';
import {
  Home,
} from '../screens';

import {
  HomeStackTypes
} from './navigation-types';
import TabButtonsStack from './tab-buttons-stack';

const Stack = createNativeStackNavigator<HomeStackTypes>();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="TabButtonsStack"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="TabButtonsStack"
        component={TabButtonsStack}
      />

      <Stack.Screen
        name="Home"
        component={Home}
      />


    </Stack.Navigator>
  );
}
export default HomeStack