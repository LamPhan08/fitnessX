import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/home'
import Register from '../screens/Register/register'
import CompleteProfile from '../screens/CompleteProfile/complete_profile';
import ChooseGoal from '../screens/ChooseGoal/choose_goal';

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='choose_goal'>
          <Stack.Screen name='home' component={Home} options={{headerShown: false}}/>

          <Stack.Screen name='register' component={Register} options={{headerShown: false}}/>

          <Stack.Screen name='complete_profile' component={CompleteProfile} options={{headerShown: false}}/>

          <Stack.Screen name='choose_goal' component={ChooseGoal} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default RootNavigation
