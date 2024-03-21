import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import ModalComponent from "../component/ModalComponent";

const Register = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [flag, setFlag] = useState(false);
  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "center",
          }}
        >
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#4630EB" : undefined}
          />
          <Text style={{ marginLeft: 10 }}>
            I have read and understood the{" "}
          </Text>
          <TouchableOpacity style={{ marginLeft: 5 }} onPress={openModal}>
            <Text style={{ color: "#106BD8" }}>
              guidelines for registration
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "center",
            width: "90%",
            marginLeft: 20,
          }}
        >
          <Checkbox
            style={styles.checkbox}
            value={isChecked2}
            onValueChange={setChecked2}
            color={isChecked2 ? "#4630EB" : undefined}
          />
          <Text style={{ marginLeft: 10 }}>
            I am aware that if more than one application is found to be filled
            (fresh or renewal), all applications are liable to be rejected.
          </Text>
        </View>
        <ModalComponent isVisible={isModalVisible} closeModal={closeModal} />
        <View style={styles.buttonsection}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttontext}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("MobileRegister")}
          >
            <Text style={styles.buttontext}>NEXT</Text>
          </TouchableOpacity>
        </View>
        <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 30,
            }}
          >
            <Text style={{fontSize:16,}}>Already have an account?</Text>
            <TouchableOpacity
              style={{ marginLeft: 5 }}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={{ color: "#106BD8", fontSize:16, }}>Login</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonsection: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  button: {
    borderRadius: 4,
    backgroundColor: "#575757",
    paddingHorizontal: 25,
    paddingVertical: 8,
    marginHorizontal: 10,
  },
  buttontext: {
    color: "#fff",
    fontSize: 20,
  },
});
