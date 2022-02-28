import React, {
    memo
} from 'react';
import {
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import {
    Home
} from '../screens';
import {
    TabBottomComponent
} from './TabBottomComponent/TabBottomComponent';
import {
    TabButtonStackTypes
} from './navigation-types';

const Tab = createBottomTabNavigator<TabButtonStackTypes>();

function TabButtonsStack() {
    return (
        <Tab.Navigator
            tabBar={(props) => <TabBottomComponent {...props}
            />}
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                initialParams={{ icon: "logo",text:"Home1" }}
                name="Home"
                component={Home}
            />
            <Tab.Screen
                initialParams={{ icon: "logo",text:"Home1"}}
                name="Home2"
                component={Home}
            />
            <Tab.Screen
                initialParams={{ icon: "logo" ,text:"Home1"}}
                name="Home3"
                component={Home}
            />
            <Tab.Screen
                initialParams={{ icon: "logo",text:"Home1" }}
                name="Home4"
                component={Home}
            />
            <Tab.Screen
                initialParams={{ icon: "logo",text:"Home1" }}
                name="Home5"
                component={Home}
            />
        </Tab.Navigator>
    );
}


export default memo(
    TabButtonsStack
)