import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from '../Screen/Homepage';
import Main from '../Screen/Main';
import Second from '../Screen/Second';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainPage = () =>{
    return(
        <Tab.Navigator 
          initialRouteName='Home' 
          activeColor='#DD58D6' 
          inactiveColor='#FFCDA8' 
          style={{backgroundColor:'#FFAAC9'}}
        >
            <Tab.Screen 
              name="Home"
              component={Main} 
              options={{
                headerShown: false
                }}
            />
            <Tab.Screen 
              name='Pesanan' 
              component={Second} 
              options={{
                headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}
const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home Page' component={HomePage} options={{headerShown: false}}/>
        <Stack.Screen name='Main' component={MainPage} options={{headerShown: false}}/>
        <Stack.Screen name='Second' component={Second}/>
    </Stack.Navigator>
  )
}



export default Router
