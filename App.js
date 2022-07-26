import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home'

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {}, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
          name='Home'
          component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
