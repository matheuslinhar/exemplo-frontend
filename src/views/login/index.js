import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

import api from "../../services/api";

export default function App() {

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const conectar = () => {
    const request = {
      usuario: email,
      senha: senha,
    };
    api
      .post("/login", request)
      .then((response) => {
        navigation.navigate("home");
      })
      .catch((error) => {
        setErro(error.response.data);
        setTimeout(() => {
          setErro("");
        }, 3000);
      });
  };
  const criarConta = () => {
    const request = {
      usuario: email,
      senha: senha,
    };
    api
      .post("/criar-conta", request)
      .then((response) => {
        setErro("Conta criada com sucesso!");
        setTimeout(() => {
          setErro("");
        }, 3000);
      })
      .catch((error) => {
        setErro(error.response.data);
        setTimeout(() => {
          setErro("");
        }, 3000);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fazer login</Text>
      <TextInput
        value={email}
        onChangeText={(valor) => {
          setEmail(valor);
        }}
        placeholder="E-mail"
        style={styles.input}
      />
      <TextInput
        value={senha}
        onChangeText={(valor) => {
          setSenha(valor);
        }}
        placeholder="Senha"
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity onPress={conectar} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={criarConta} style={styles.button}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
      <Text style={styles.errorText}>
        {erro}
      </Text>
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
  input: {
    backgroundColor: "white",
    height: 50,
    width: "80%",
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#dcdcdc", // Cinza claro
    height: 50,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#008080", // Azul turquesa
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginTop: 10,
  },
});
