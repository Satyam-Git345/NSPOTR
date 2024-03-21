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
import { Box, useToast } from "native-base";


const Login = ({ navigation }) => {
  const toast = useToast();
  const [current, setCurrent] = useState("radio1");

  const handleLogin=()=>{
    navigation.navigate("Profile")
     
    toast.show({
      render: () => {
        return <Box style={{backgroundColor:'#f7768d'}} px="4" py="2" rounded="sm" mb={1}>
          <Text style={{color:'white'}}>Login successfully</Text>
              </Box>;
      }
    });
    
  }
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.label}>Enter OTR (One Time Registration) No.</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter OTR (One Time Registration) No."
        />
        <Pressable onPress={()=>alert('Forgot ID Clicked')}>
        <Text style={styles.link}>Forgot ID?</Text>
        </Pressable>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Password"
          secureTextEntry
        />
        <Pressable onPress={()=>alert('Forgot Password Clicked')}>
        <Text style={styles.link}>Forgot Password?</Text>
        </Pressable>
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
          <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}
          >
            <Text style={styles.buttontext}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "center",
          }}
        >
          <Text>New user?</Text>
          <TouchableOpacity
            style={{ marginLeft: 5 }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={{ color: "#106BD8" }}>Register yourself</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

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
  link: {
    fontSize: 13,
    textAlign: "right",
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
