import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import React from "react";

const PasswordScreen = () => {

const [password, setPassword] = useState('')

  return (
    <View style={styles.main}>
      <Text>Sifrenizi giriniz:</Text>


      <TextInput
        style={styles.input}
        placeholder="Sifre"
        secureTextEntry={false}
        autoCapitalize="none"
		autoCorrect={false}
		value={password}
		onChangeText={(newValue) => setPassword(newValue)}
      />
		{
		password.length < 6 ? (
			<Text style={styles.error}>Sifre en az 6 karakter olmalidir.</Text>
		) : null
		}

    </View>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({
  main: {
    margin: 10,
	alignItems:'center',

  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
	paddingLeft:5,
	borderColor: "#ccc",
  },
});
