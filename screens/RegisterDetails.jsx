import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Avatar, Box, TextArea, useToast } from "native-base";

const RegisterDetails = ({ navigation }) => {
  const toast = useToast();
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          rowGap: 5,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Avatar
            size="2xl"
            bg="green.500"
            source={require("../assets/images/user.jpg")}
          >
            AJ
          </Avatar>
        </View>
        <Text>Appliaction Name</Text>
        <TextInput
          value="Niyampal Singh"
          editable={false}
          selectTextOnFocus={false}
          style={styles.inputStyle}
        />
        <Text>Aadhaar No</Text>
        <TextInput
          value="XXXX-XXXX-2132"
          editable={false}
          selectTextOnFocus={false}
          style={styles.inputStyle}
        />
        <Text>Gender</Text>
        <TextInput
          value="Male"
          editable={false}
          selectTextOnFocus={false}
          style={styles.inputStyle}
        />
        <Text>Date of Birth</Text>
        <TextInput
          value="02-08-1988"
          editable={false}
          selectTextOnFocus={false}
          style={styles.inputStyle}
        />
        <Text>Mother Name</Text>
        <TextInput placeholder="Mother Name" style={styles.inputStyle} />
        <Text>Father Name</Text>
        <TextInput placeholder="Father Name" style={styles.inputStyle} />
        <Text>Email id</Text>
        <TextInput placeholder="Email id" style={styles.inputStyle} />
        <Text>Address</Text>
        <TextArea
          editable={false}
          selectTextOnFocus={false}
          value="125, Sastha Nagar, Patturaikkal, Thrissur, 680022, Kerala, India"
          style={styles.inputStyle}
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
            onPress={() => {
              navigation.navigate("Confirmation");

              toast.show({
                render: () => {
                  return (
                    <Box
                      style={{ backgroundColor: "#f7768d" }}
                      px="4"
                      py="2"
                      rounded="sm"
                      mb={1}
                    >
                      <Text style={{ color: "white" }}>
                        You have successfully registered
                      </Text>
                    </Box>
                  );
                },
              });
            }}
          >
            <Text style={styles.buttontext}>Verify</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 5,
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
    marginBottom: 10,
  },
  buttontext: {
    color: "#fff",
    fontSize: 20,
  },
});
