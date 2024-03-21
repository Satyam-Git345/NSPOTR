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
import React, { useEffect, useState } from "react";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import AadhaarNotAssigned from "./AadhaarNotAssigned";
import GuardianAadhaarNumber from "./GuardianAadhaarNumber";

const IHaveAadhaar = ({ navigation }) => {
  const [current, setCurrent] = useState("radio1");
  const [radioOption, setRadioOption] = useState("radioAadhaar");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  
  return (
    <ScrollView style={styles.container}>
      <RadioButtonGroup
        containerStyle={{ marginTop: 15 }}
        size={24}
        radioStyle={{ backgroundColor: "#f3f3f3" }}
        selected={radioOption}
        onSelected={(value) => setRadioOption(value)}
        radioBackground="#ff43a1"
      >
        <RadioButtonItem
          value="radioAadhaar"
          label={
            <Text style={{ fontSize: 14, marginBottom: 20, fontWeight: "400" }}>
              I have Aadhaar
            </Text>
          }
          style={{ marginBottom: 20 }}
        />
        <RadioButtonItem
          value="radioAadhaarNotAssigned"
          label={
            <Text style={{ fontSize: 14, fontWeight: "400" }}>
              Aadhaar not assigned (I have EID)
            </Text>
          }
        />
        <RadioButtonItem
          style={{ marginTop: 20 }}
          value="radiodontAadhaar"
          label={
            <Text style={{ fontSize: 14, marginTop: 20, fontWeight: "400" }}>
              I don't have Aadhaar/EID
            </Text>
          }
        />
      </RadioButtonGroup>
      {radioOption === "radioAadhaar" && (
        <View>
          <Text style={styles.label}>Aadhaar Number</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter Captcha Code"
          />
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
                <Text
                  style={[
                    styles.text,
                    { fontWeight: "bold", marginBottom: 10 },
                  ]}
                >
                  Major Applicant(Age greater than equal to 18)
                </Text>
                <Text style={styles.text}>
                  1- I have voluntarily submitted my Aadhaar number, and I am
                  aware that it will be used to establish my identity before
                  disbursement of scholarship.
                </Text>
                <Text style={styles.text}>
                  2- I am aware that my Aadhaar will be used for de-duplication
                  of scholarship applications received on National Scholarship
                  Portal and State Scholarship Portals.
                </Text>
                <Text style={styles.text}>
                  3- I am aware that my adhaar number will be used to establish
                  my identity by matching my personal identification details
                  available in Aadhaar records of UIDAI.
                </Text>
                <Text
                  style={[
                    styles.text,
                    { fontWeight: "bold", marginVertical: 10 },
                  ]}
                >
                  Major Applicant(Age greater than equal to 18)
                </Text>
                <Text style={styles.text}>
                  1- I have voluntarily submitted my child's/my ward's Aadhaar
                  number, and I am aware that it will be used to establish my
                  child's/my ward's identity before disbursement of scholarship.
                </Text>
                <Text style={styles.text}>
                  2- I am aware that my child's/ward's Aadhaar number will be
                  used to establish his/her identity by matching his/her by
                  marching his/her personal identification details available in
                  Aadhaar records of UIDAI.
                </Text>
                <Text style={styles.text}>
                  3- I am aware that my child's/ward's Aadhaar will be used for
                  de-duplication of scholarship applications received on
                  National Scholarship Portal and State Scholarship Portals.
                </Text>
                <Text style={styles.text}>
                  4- I am aware that the Aadhaar number of my child (if found
                  correct) will also be used for making scholarship payments in
                  the bank account seeded to the Aadhaar number of the child.
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
      )}
      {radioOption === "radioAadhaarNotAssigned" && (
        <View>
          <AadhaarNotAssigned />
        </View>
      )}
      {radioOption === "radiodontAadhaar" && (
        <View>
          <GuardianAadhaarNumber />
        </View>
      )}
    </ScrollView>
  );
};

export default IHaveAadhaar;

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
  text: {
    fontSize: 13,
    color: "#000",
    fontWeight: "400",
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
