import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Aviso from '../screens/Aviso';
import Denuncia from '../screens/Denuncia';
import Home from '../screens/Home';
import Perfil from '../screens/Perfil';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='home' component={Home}
      />
      <Tab.Screen
        name='denuncia' component={Denuncia}
      />
      <Tab.Screen
        name='aviso' component={Aviso}
      />
      <Tab.Screen
        name='perfil' component={Perfil}
      />
    </Tab.Navigator>
  );
}