import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import "react-native-gesture-handler";
import ChangePassword from "../screens/ChangePassword";
import UpdateKYC from "../screens/UpdateKYC";

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({navigation}) => {
  const CustomDrawer = (props) => {
    return (
      <View style={{marginTop:30}}>
        <DrawerItemList {...props} />
        <Pressable onPress={() => navigation.navigate("Login")} style={{marginHorizontal:20, marginVertical:15}}>
          <Text style={{ color: "#f7768d", fontWeight:'600' }}>Logout</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: "#f9f9f9" },
        headerTintColor: "#f7768d", 
        drawerActiveTintColor:"#f7768d",
        drawerInactiveTintColor:"#f7768d",
        //drawerActiveBackgroundColor:"#575757"
      }}
    >
      <Drawer.Screen name="Student Profile" component={Profile} />
      <Drawer.Screen name="Change Password" component={ChangePassword} />
      <Drawer.Screen name="Update eKYC" component={UpdateKYC} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
