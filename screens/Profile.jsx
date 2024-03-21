import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Avatar, FlatList, TextArea } from "native-base";

const Profile = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginVertical: 10, alignItems: "center" }}>
        <Avatar
          size="2xl"
          bg="green.500"
          source={require("../assets/images/user.jpg")}
        >
          NS
          <Avatar.Badge bg="green.500" />
        </Avatar>
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Niyampal Singh
        </Text>
      </View>
      
        <View style={styles.card}>
          <Text style={styles.label}>Digilocker Link Status</Text>
          <Text style={styles.fontStyle}>
            Not Linked | <Text style={{ color: "blue" }}>Link now</Text>
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Mobile Number</Text>
          <Text style={styles.fontStyle}>7896541236</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Email id</Text>
          <Text style={styles.fontStyle}>satyam@yopmail.com</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Father Name</Text>
          <Text style={styles.fontStyle}>Madanpal Singh</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Mother Name</Text>
          <Text style={styles.fontStyle}>Neerja kumari</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Gender</Text>
          <Text style={styles.fontStyle}>Male</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Aadhaar No</Text>
          <Text style={styles.fontStyle}>XXXX-XXXX-2132</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>eKYC-Face Auth</Text>
          <Text style={styles.fontStyle}>
            Not Done | <Text style={{ color: "blue" }}>Do it now</Text>
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Date of Birth</Text>
          <Text style={styles.fontStyle}>01/01/2020</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>eKYC-Face Auth</Text>
          <Text style={styles.fontStyle}>
            Not Done | <Text style={{ color: "blue" }}>Do it now</Text>
          </Text>
        </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
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
  label: {
    color: "#676767",
    fontSize: 14,
  },
  fontStyle: {
    fontSize: 14,
    color: "#000",
  },
  card: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 6,
    marginBottom:10
  },
});
