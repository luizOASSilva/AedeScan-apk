import React from 'react';
import { TouchableOpacity } from 'react-native';

const NavButtons = ({ children }) => {
  return <TouchableOpacity>{children}</TouchableOpacity>;
};

export default NavButtons;
