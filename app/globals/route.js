/* eslint-disable arrow-body-style */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer mode="modal">
      <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="HomeScreen" component={SplashScreen} options={{ headerShown: false }} />

        <Stack.Screen
          name="TimerScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SaveNowScreen"
          component={SplashScreen}
          options={{ headerTitle: 'Save Now' }}
        />

        <Stack.Screen
          name="SaveLaterScreen"
          component={SplashScreen}
          options={{ headerTitle: 'Save Later' }}
        />

        <Stack.Screen
          name="StatisticsScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SummaryScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
