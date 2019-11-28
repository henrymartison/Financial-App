import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from "native-base";

import Colors from "../../constants/Colors";
import { TouchableOpacity } from "../../components/commons/TouchableOpacity";

class SignIn extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Login to your account",
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ paddingLeft: 15 }}
      >
        <Icon name="arrow-back" color="grey" />
      </TouchableOpacity>
    )
  });

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Ionicons name="logo-slack" size={40} color={Colors.PRIMARY} />
            <Text style={styles.headerText}>Welcome to</Text>
            <Text style={[styles.headerText, { color: Colors.PRIMARY }]}>
              mLinks
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Please enter your phone number</Text>
            <TextInput
              placeholder="Phone number"
              style={styles.input}
              keyboardType="phone-pad"
              returnKeyType="done"
            />
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => this.props.navigation.navigate("Main")}
              style={styles.loginButton}
            >
              <Ionicons name="ios-arrow-forward" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text style={styles.regText}>
              By entering your phone number you agree to our
              <Text style={{ color: Colors.PRIMARY, fontWeight: "600" }}>
                {" "}
                Terms and Conditions
              </Text>
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  header: {
    // marginTop: 100
  },
  headerText: {
    fontWeight: "800",
    fontSize: 40,
    paddingTop: 10
  },
  inputContainer: {
    paddingBottom: 100
    // backgroundColor: 'red'
  },
  input: {
    paddingTop: 20,
    fontSize: 18,
    // flex: 1,
    color: "black"
  },
  inputText: {
    fontSize: 17
  },
  footer: {
    paddingRight: Dimensions.get("window").width / 3 + 40
  },
  loginButton: {
    backgroundColor: Colors.PRIMARY,
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    position: "absolute",
    right: 50,
    bottom: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});
