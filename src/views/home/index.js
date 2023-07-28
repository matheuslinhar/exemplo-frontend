import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function HomeView() {
  const navigation = useNavigation();
  function desconetar() {
    navigation.navigate("login");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Você está logado</Text>

      <TouchableOpacity onPress={desconetar} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Cinza smoke
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#008080", // Azul turquesa
  },
  logoutButton: {
    backgroundColor: "#008080", // Azul turquesa
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 2, // Sombra para adicionar um toque sutil
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
