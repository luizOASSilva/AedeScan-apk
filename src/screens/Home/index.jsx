import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '2B2D42'}}>
      <Text>Home Screen</Text>
      <Button
        title="Ir para perfil!"
        onPress={() => {
          navigation.navigate('Perfil')
        }}
      />
      <Button
        title="Ir para denuncia!"
        onPress={() => {
          navigation.navigate('Denuncia')
        }}
      />
    </View>
  );
}