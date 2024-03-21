import React from "react";
import { Button, LogBox, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Register from "../screens/Register";
import MobileRegister from "../screens/MobileRegister";
import IHaveAadhaar from "../screens/IHaveAadhaar";
import AadhaarNotAssigned from "../screens/AadhaarNotAssigned";
import GuardianAadhaarNumber from "../screens/GuardianAadhaarNumber";
import RegisterDetails from "../screens/RegisterDetails";
import Confirmation from "../screens/Confirmation";
import Profile from "../screens/Profile";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#f9f9f9" },
          headerTintColor: "#f7768d",
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: true,
            headerTitle: "Student Login", }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: true,
            headerTitle: "Student Registration",
          }}
        />
        <Stack.Screen
          name="MobileRegister"
          component={MobileRegister}
          options={{ headerShown: true,
            headerTitle: "Student Registration", }}
        />
        <Stack.Screen
          name="IHaveAadhaar"
          component={IHaveAadhaar}
          options={{ headerShown: true,
            headerTitle: "Student Registration", }}
        />
        <Stack.Screen
          name="AadhaarNotAssigned"
          component={AadhaarNotAssigned}
          options={{ headerShown: true,
            headerTitle: "Student Registration", }}
        />
        <Stack.Screen
          name="GuardianAadhaarNumber"
          component={GuardianAadhaarNumber}
          options={{ headerShown: true,
            headerTitle: "Student Registration", }}
        />
        <Stack.Screen
          name="RegisterDetails"
          component={RegisterDetails}
          options={{ headerShown: true,
            headerTitle: "Student Registration", }}
        />
        <Stack.Screen
          name="Confirmation"
          component={Confirmation}
          options={{ headerShown: true,
            headerTitle: "Student Registration", }}
        />
        <Stack.Screen
          name="Profile"
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
