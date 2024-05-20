import React, { useState } from 'react';
import Routes from './src/Routes';
import Splash from './src/screens/Splash';

import { View } from 'react-native';
import react from "react";

export default function App() {
  return (
    <View style={{backgroundColor: '#2B2D42', flex: 1}}>
      <Splash/>
      <Routes/>
    </View>
  );
}
