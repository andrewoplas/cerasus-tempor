/* eslint-disable arrow-body-style */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SaveLaterScreen from '../screens/SaveScreen/SaveLaterScreen';
import SaveNowScreen from '../screens/SaveScreen/SaveNowScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer mode="modal">
      <Stack.Navigator screenOptions={{ gestureEnabled: false, headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TimerScreen" component={SplashScreen} />
        <Stack.Screen name="SaveNowScreen" component={SaveNowScreen} />
        <Stack.Screen name="SaveLaterScreen" component={SaveLaterScreen} />
        <Stack.Screen name="StatisticsScreen" component={SplashScreen} />
        <Stack.Screen name="SummaryScreen" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
