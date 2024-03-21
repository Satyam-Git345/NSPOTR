import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

const MobileRegister = ({ navigation }) => {
  const [current, setCurrent] = useState("radio1");
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.label}>Mobile Number</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            keyboardType="phone-pad"
            style={[styles.inputStyle, { width: "55%" }]}
            placeholder="Enter Mobile Number"
          />
          <TouchableOpacity
            style={styles.button}
            //onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttontext}>Get OTP</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.helptext}>Enter 10 Digit Mobile No.</Text>

        <Text style={styles.label}>Enter OTP</Text>
        <TextInput
          keyboardType="phone-pad"
          style={styles.inputStyle}
          placeholder="Enter OTP"
          secureTextEntry
        />
        <RadioButtonGroup
          containerStyle={{ marginTop: 15 }}
          size={24}
          radioStyle={{ backgroundColor: "#f3f3f3" }}
          selected={current}
          onSelected={(value) => setCurrent(value)}
          radioBackground="#ff43a1"
        >
          <RadioButtonItem
            value="radio1"
            label={
              <Text
                style={{ fontSize: 14, marginBottom: 20, fontWeight: "400" }}
              >
                Image Captcha
              </Text>
            }
            style={{ marginBottom: 20 }}
          />
          <RadioButtonItem
            value="radio2"
            label={
              <Text style={{ fontSize: 14, fontWeight: "400" }}>
                Audio Captcha
              </Text>
            }
          />
        </RadioButtonGroup>

        <Image
          source={require("../assets/images/CaptchaImg.jpg")}
          style={{
            width: "100%",
            height: 40,
            resizeMode: "stretch",
            marginTop: 15,
          }}
        />
        <Text style={styles.label}>Enter Captcha Code </Text>
        <TextInput style={styles.inputStyle} placeholder="Enter Captcha Code" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 20,
            marginTop: 15,
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("IHaveAadhaar")}
          >
            <Text style={styles.buttontext}>Verify</Text>
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
    </ScrollView>
  );
};

export default MobileRegister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },

  loginText: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 4,
  },
  loginsubText: {
    fontSize: 16,
    fontWeight: "600",
  },

  label: {
    fontSize: 13,
    fontWeight: "400",
    marginBottom: 5,
    marginTop: 15,
  },
  helptext: {
    fontSize: 12,
    color: "#a5a5a5",
    marginTop: 5,
    fontWeight: "400",
  },
  inputStyle: {
    width: "100%",
    backgroundColor: "#f3f3f3",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#000",
    fontSize: 13,
    borderRadius: 10,
    fontWeight: "bold",
  },
  button: {
    borderRadius: 4,
    backgroundColor: "#575757",
    paddingHorizontal: 25,
    paddingVertical: 8,
  },
  buttontext: {
    color: "#fff",
    fontSize: 20,
  },
});
