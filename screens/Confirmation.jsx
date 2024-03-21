import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Confirmation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/congratulations.gif")} />
      <Text style={{ fontWeight: "bold", fontSize: 30, textAlign: "center" }}>
        Congratulations
      </Text>
      <Text style={{ fontSize: 16, textAlign: "center", marginVertical: 10 }}>
        You have successfully registered and your Registration Number is
      </Text>
      <Text
        style={{
          fontWeight: "900",
          fontSize: 18,
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        MZ202122002440129
      </Text>
      <Text style={{ fontSize: 14, textAlign: "center", marginBottom: 10 }}>
        The password has been sent to your mobile number
      </Text>
      <TouchableOpacity
        style={[styles.button, { marginVertical: 30 }]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 4,
    backgroundColor: "#575757",
    paddingHorizontal: 25,
    paddingVertical: 8,
    marginBottom: 10,
  },
  buttontext: {
    color: "#fff",
    fontSize: 20,
  },
});
