import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import api from "../../services/api";

export default function App() {

  const navigation= useNavigation();

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

        setErro(error.response.data)
        setInterval(()=>{
          setErro("")
        },3000)

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

        setErro("conta criada")
        setInterval(()=>{
          setErro("")
        },3000)

      })
      .catch((error) => {

        setErro(error.response.data)
        setInterval(()=>{
          setErro("")
        },3000)
        
      });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Text>Fazer login</Text>
      <TextInput
        value={email}
        onChangeText={(valor) => {
          setEmail(valor);
        }}
        placeholder="email"
        style={{
          backgroundColor: "white",
          height: "10%",
          width: "80%",
          borderRadius: 15,
        }}
      />
      <TextInput
        value={senha}
        onChangeText={(valor) => {
          setSenha(valor);
        }}
        placeholder="senha"
        style={{
          backgroundColor: "white",
          height: "10%",
          width: "80%",
          borderRadius: 15,
        }}
      />
      <TouchableOpacity
        onPress={conectar}
        style={{
          backgroundColor: "whitesmoke",
          height: "10%",
          width: "10%",
          borderRadius: 10,
        }}
      >
        <Text>enter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={criarConta}
        style={{
          backgroundColor: "whitesmoke",
          height: "10%",
          width: "10%",
          borderRadius: 10,
        }}
      >
        <Text>Criar Conta</Text>
      </TouchableOpacity>
      <Text>
        {erro}
      </Text>
    </View>
  );
}
