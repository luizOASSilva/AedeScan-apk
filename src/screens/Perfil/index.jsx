import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";

export default function Perfil() {
  const navigation = useNavigation()
  const handleNavigate = () => navigation.navigate("Aviso")
  return (
    <View>
      <Text>Perfil</Text>
      <Button title="Ir para 'Avisos'" onPress={handleNavigate}/>
    </View>
  );
}
