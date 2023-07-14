import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function HomeView() {
    const navigation= useNavigation();
    function desconetar(){
        navigation.navigate("login");
    }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "whitesmoke",
      }}
    >
     <Text>
        Você está logado
     </Text>

     <TouchableOpacity
        onPress={desconetar}
        style={{
          backgroundColor: "whitesmoke",
          height: "10%",
          width: "10%",
          borderRadius: 10,
        }}
      >
        <Text>logout</Text>
      </TouchableOpacity>

    </View>
  );
}
