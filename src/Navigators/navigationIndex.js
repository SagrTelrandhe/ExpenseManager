import React from 'react';
import {TextBase, View, Button} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Camera from '../screen/NavigationScreens/cameraIndex';
import Chats from '../screen/NavigationScreens/chatsIndex';
import Status from '../screen/NavigationScreens/statusIndex';
import Calls from '../screen/NavigationScreens/callIndex';
const Tab = createMaterialTopTabNavigator();
whatsAppTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="chats"
      tabBarOptions={{
        labelStyle: {fontSize: 15},
        tabStyle: {width: 100},
        style: {backgroundColor: '#075E54'},
      }}>
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{tabBarLabel: 'camera'}}
      />

      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{tabBarLabel: 'CHATS'}}
      />

      <Tab.Screen
        name="Status"
        component={Status}
        options={{tabBarLabel: 'STATUS'}}
      />

      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{tabBarLabel: 'CALLS'}}
      />
    </Tab.Navigator>
  );
};
export default whatsAppTabs;
