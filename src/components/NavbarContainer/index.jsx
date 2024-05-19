import React from 'react';
import { View, Text } from 'react-native';

import { Octicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import NavButtons from '../NavButtons';
import styles from './styles';

const NavbarContainer = () => {
  return (
    <View style={styles.navContainer}>
      <NavButtons>
        <View style={styles.iconContainer}>
          <Octicons name="home" size={22} color="#edf2f4" />
          <Text style={styles.iconText}>Início</Text>
        </View>
      </NavButtons>
      <NavButtons>
        <View style={styles.iconContainer}>
          <SimpleLineIcons name="question" size={22} color="#edf2f4" />
          <Text style={styles.iconText}>Dúvidas</Text>
        </View>
      </NavButtons>
      <NavButtons>
        <View style={styles.iconContainer}>
          <AntDesign name="warning" size={22} color="#edf2f4" />
          <Text style={styles.iconText}>Denúncias</Text>
        </View>
      </NavButtons>
      <NavButtons>
        <View style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={22} color="#edf2f4" />
          <Text style={styles.iconText}>Avisos</Text>
        </View>
      </NavButtons>
      <NavButtons>
        <View style={styles.iconContainer}>
          <FontAwesome6 name="circle-user" size={22} color="#edf2f4" />
          <Text style={styles.iconText}>Perfil</Text>
        </View>
      </NavButtons>
    </View>
  );
};

export default NavbarContainer;
