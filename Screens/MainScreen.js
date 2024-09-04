import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MenuScreen from './MenuScreen';
import { TabRouter } from '@react-navigation/native';

import Home from './Home'
const Drawer= createDrawerNavigator();
const MainScreen = () => {
  return (
    <Drawer.Navigator drawerContent={props => <MenuScreen {...props}/>}>
<Drawer.Screen
name='Tutor App'
component={Home}
options={{headerShown: TabRouter}}/>
    </Drawer.Navigator>
  )
}

export default MainScreen
