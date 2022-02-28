import * as React from 'react';
import {
    createNativeStackNavigator
} from '@react-navigation/native-stack';
import {
    Splash,
} from '../screens';
import {
    MainAppStackTypes
} from './navigation-types';
import HomeStack from './home-stack';

const Stack = createNativeStackNavigator<MainAppStackTypes>();


function MainStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Splash"
        >
            <Stack.Screen
                name="Splash"
                component={Splash}
            />
            <Stack.Screen
                name="HomeStack"
                component={HomeStack}
            />
        </Stack.Navigator>
    );
}

export default MainStack


