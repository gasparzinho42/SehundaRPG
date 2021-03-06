// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ficha from './ficha';
import home from './home';
import create from './create';





const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
       {/* descomentar abaixo para acessar a ficha final */}
        
        {/* <Stack.Screen name="Sehunda" component={ home } /> */}
        
        {/* <Stack.Screen name="criação" component={ create } /> */}
        <Stack.Screen name="personagem" component={ ficha } />
        
        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;