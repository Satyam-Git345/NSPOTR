import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import React, { useState } from "react";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { useNavigation } from "@react-navigation/native";

const GuardianAadhaarNumber = () => {
  const navigation = useNavigation();
  const [current, setCurrent] = useState("radio1");
  const [radio, setRadio] = useState("radioOtp");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
   
      <View>
        <Text style={styles.label}>Parent/legal Guardian Aadhaar Number</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            keyboardType="phone-pad"
            style={[styles.inputStyle, { width: "55%" }]}
            placeholder="Enter Mobile Number"
          />
          <TouchableOpacity style={styles.button} onPress={() => openModal()}>
            <Text style={styles.buttontext}>Get OTP</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.helptext}>Enter 12 Digit Aadhaar No.</Text>

        <RadioButtonGroup
          containerStyle={{ marginTop: 15 }}
          size={24}
          radioStyle={{ backgroundColor: "#f3f3f3" }}
          selected={radio}
          onSelected={(value) => setRadio(value)}
          radioBackground="#ff43a1"
        >
          <RadioButtonItem
            value="radioOtp"
            label={
              <Text
                style={{ fontSize: 14, marginBottom: 20, fontWeight: "400" }}
              >
                OTP
              </Text>
            }
            style={{ marginBottom: 20 }}
          />
          <RadioButtonItem
            value="radioFaceAuth"
            label={
              <Text style={{ fontSize: 14, fontWeight: "400" }}>Face Auth</Text>
            }
          />
        </RadioButtonGroup>

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
            onPress={() => navigation.navigate("RegisterDetails")}
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
        <Modal
          animationType="slide"
          transparent={false}
          visible={isModalVisible}
          onRequestClose={closeModal}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
              paddingHorizontal: 10,
              paddingVertical: 15,
            }}
          >
            <ScrollView
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
                width: "100%",
              }}
            >
              <Text
                style={[
                  styles.text,
                  {
                    borderBottomWidth: 1,
                    marginBottom: 10,
                    paddingBottom: 5,
                    fontWeight: "bold",
                    fontSize: 15,
                  },
                ]}
              >
                Consent for providing Aadhaar
              </Text>
              <Text style={styles.text}>
                1- I hereby declare that my child/ward does not have Aadhaar. I
                have voluntarily submitted my Aadhaar and I am aware that it
                will be used to authenticate my child/my ward & my identity (as
                per Aadhaar records) before disbursement of scholarship.
              </Text>
              <Text style={styles.text}>
                2- I am aware that my Aadhaar will be used for de-duplication
                across government portals before scholarship disbursal.
              </Text>
              <Text style={styles.text}>
                3- I am aware that my Aadhaar will be used for receiving my
                child’s/ward’s scholarship through Aadhaar Payment Bridge System
                (APBS)
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  columnGap: 10,
                  marginVertical: 20,
                }}
              >
                <Pressable
                  style={[styles.button, { marginVertical: 10 }]}
                  onPress={closeModal}
                >
                  <Text style={styles.buttontext}>Cancel</Text>
                </Pressable>
                <Pressable style={[styles.button, { marginVertical: 10 }]}>
                  <Text style={styles.buttontext}>I Agree</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
        </Modal>
      </View>
  );
};

export default GuardianAadhaarNumber;

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
