import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Main from '../../Screen/Main';
import Second from '../../Screen/Second';
const Tab = createMaterialBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Main Screen' component={Main} activeColor="#f0edf6"/>
        <Tab.Screen name='Second Screen' component={Second}/>
    </Tab.Navigator>
  )
}

export default BottomNavigator
