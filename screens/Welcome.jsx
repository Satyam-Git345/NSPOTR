import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";

const Welcome = ({navigation}) => {
  return (
    
    <SafeAreaView style={[styles.container, Platform.OS === "android" && styles.androidcontainer]}>
      <View style={styles.welcomesection}>
        <Image
          source={require("../assets/images/nsplogo.png")}
          style={{ width: "70%", resizeMode: "contain" }}
        />
        <Text style={ styles.textprimary }>National Scholarship Portal</Text>
        <Text style={styles.textsecondary}>(Academic Year 2024-25)</Text>
        <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttontext}>LOGIN</Text>
            </TouchableOpacity>
            <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "center",
          }}
        >
          <Text style={{fontSize:16,}}>New user?</Text>
          <TouchableOpacity
            style={{ marginLeft: 5 }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={{ color: "#106BD8", fontSize:16, }}>Register yourself</Text>
          </TouchableOpacity>
        </View>
        </View>
        
    </SafeAreaView>
    
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },  
  androidcontainer: {    
    flex: 1, 
  },
  welcomesection:{
    backgroundColor: "#fff",
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'center',
  },
  textprimary:{
    color:'#000',
    fontSize:20,
    fontWeight:'600',
    marginTop:20
  },
  textsecondary:{
    color:'red',
    fontSize:16,
    fontWeight:'600',
    marginBottom:30
  },
  button:{
    borderRadius:4,
    backgroundColor:'#575757',
    paddingHorizontal:25,
    paddingVertical:8,
  },  
  buttontext:{    
    color:'#fff',
    fontSize:20
  }
});
