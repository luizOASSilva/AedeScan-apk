import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home'; 
import Perfil from './src/screens/Perfil';
import Aviso from './src/screens/Aviso';
import Denuncia from './src/screens/Denuncia';
import Splash from './src/screens/Splash';

import { View } from 'react-native';
import react from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{backgroundColor: '#2B2D42', flex: 1}}>
      <Splash />
    </View>
  );
}
