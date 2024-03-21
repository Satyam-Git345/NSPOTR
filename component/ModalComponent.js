import React from "react";
import {
  Modal,
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";

const ModalComponent = ({ isVisible, closeModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
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
          <Text style={styles.text}>
            1 - Candidates must read the instruction carefully before
            registration.
          </Text>
          <Text style={styles.text}>
            2- Candidates are advised to fill all the requisite details
            carefully and check properly before submission. As no
            correction/editing is allowed after submission.
          </Text>
          <Text style={styles.text}>
            3- Any wrong/ false information may lead to rejection.
          </Text>
          <Text style={styles.text}>
            4- Candidates are advised to fill their correct and active mobile
            number and e-mail address in the online application. All
            Correspondence/ communication will be made through mobile/
            e-mailonly.
          </Text>
          <Text style={styles.text}>
            5- Candidates are also advised to refer to National Scholarship
            Portal for regular updates.
          </Text>
          <Text style={styles.text}>
            6 - Aadhaar will be mandatory for registration on NSP
          </Text>
          <Text style={styles.text}>
            ➤ Major applicants - If Aadhaar not assigned, candidate will be
            required to enroll for Aadhaar and register using Aadhaar Enrolment
            Identification (EID)
          </Text>
          <Text style={styles.text}>
            ➤ Minor applicants - If Aadhaar assigned, candidate is advised to
            enroll using Aadhaar. Where Aadhaar/EID of the minor applicant is
            not assigned, Aadhaar of parent/legal guardian will be mandatorily
            required.
          </Text>
          <Text style={styles.text}>
            7- For applications with EID, Scholarship to be disbursed only on
            furnishing of Aadhaar.
          </Text>
          <Text style={styles.text}>
            8- Aadhaar based eKYC will be performed to verify credential of
            candidates.
          </Text>
          <Text style={styles.text}>
            9- All scholarship payments will be made using Aadhaar Payment
            Bridge (APB) only.
          </Text>
          <Text style={styles.text}>
            10- Candidates requested to ensure that demographic details in
            Aadhaar shall be same as in school/ institute records. If any
            difference found, same should be corrected in Aadhaar.
          </Text>
          <Text style={styles.text}>
            11- Registration made through parents’ Aadhaar will be valid only
            till student is minor, once candidate turns to major it will be
            his/her responsibility to update Aadhaar on NSP.
          </Text>
          <Text style={styles.text}>
            12- Candidates are advised to ensure that his/her mobile number is
            linked to Aadhaar for receiving OTP from UIDAI. To check the mobile
            linking status please visit
            https://myaadhaar.uidai.gov.in/verify-email-mobile .
          </Text>

          <Pressable style={[styles.button,{ marginVertical: 10 }]} onPress={closeModal}>
            <Text style={styles.buttontext}>Close Modal</Text>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ModalComponent;
const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    color:'#000',
    fontWeight:'400'
  },
  button:{
    borderRadius:4,
    backgroundColor:'#575757',
    paddingHorizontal:25,
    paddingVertical:8,
  },  
  buttontext:{    
    color:'#fff',
    fontSize:20,
    textAlign:'center'
  }
});
