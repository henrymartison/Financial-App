import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView
} from "react-native";
import { Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { TouchableOpacity } from "../../components/commons/TouchableOpacity";
import Colors from "../../constants/Colors";

class SignUp extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Create your account",
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ paddingLeft: 15 }}
      >
        <Icon name="arrow-back" color="grey" />
      </TouchableOpacity>
    )
  });

  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      userPhone: "",
      userPassword: "",
      showPassword: true,
      onPressEye: false
    };
  }

  _showPassword() {
    const { onPressEye } = this.state;

    if (onPressEye == false) {
      this.setState({ showPassword: false, onPressEye: true });
    } else {
      this.setState({ showPassword: true, onPressEye: false });
    }
  }

  userRegisterFunction = () => {
    this.props.navigation.navigate("Main");
  };

  render() {
    const { showPassword, onPressEye } = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          justifyContent: "center"
        }}
      >
        <KeyboardAwareScrollView>
          <ScrollView keyboardShouldPersistTaps="handled">
            <View style={{ marginTop: 30 }}>
              <View style={styles.sectionStyle}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={userName => this.setState({ userName })}
                  underlineColorAndroid="#413E4F"
                  placeholder="First Name"
                  placeholderTextColor="#413E4F"
                  autoCapitalize="sentences"
                  ref={ref => {
                    this._firstNameinput = ref;
                  }}
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    this._lastNameinput && this._lastNameinput.focus()
                  }
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.sectionStyle}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={UserName => this.setState({ UserName })}
                  underlineColorAndroid="#413E4F"
                  placeholder="Last Name"
                  placeholderTextColor="#413E4F"
                  autoCapitalize="sentences"
                  ref={ref => {
                    this._lastNameinput = ref;
                  }}
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    this._emailinput && this._emailinput.focus()
                  }
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.sectionStyle}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={userEmail => this.setState({ userEmail })}
                  underlineColorAndroid="#413E4F"
                  placeholder="Email"
                  placeholderTextColor="#413E4F"
                  autoCapitalize="sentences"
                  keyboardType="email-address"
                  ref={ref => {
                    this._emailinput = ref;
                  }}
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    this._phoneinput && this._phoneinput.focus()
                  }
                  blurOnSubmit={false}
                />
              </View>

              <View style={styles.sectionStyle}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={userPassword => this.setState({ userPassword })}
                  underlineColorAndroid="#413E4F"
                  placeholder="Password"
                  secureTextEntry={showPassword}
                  placeholderTextColor="#413E4F"
                  autoCapitalize="sentences"
                  ref={ref => {
                    this._passwordinput = ref;
                  }}
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    this._phoneinput && this._phoneinput.focus()
                  }
                  blurOnSubmit={false}
                />
                <TouchableOpacity
                  onPress={this._showPassword.bind(this)}
                  style={{ justifyContent: "center" }}
                >
                  <Ionicons
                    name={onPressEye ? "md-eye" : "md-eye-off"}
                    color="#413E4F"
                    size={25}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.sectionStyle}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={userPhone => this.setState({ userPhone })}
                  underlineColorAndroid="#413E4F"
                  placeholder="Phone Number"
                  placeholderTextColor="#413E4F"
                  autoCapitalize="sentences"
                  keyboardType="numeric"
                  returnKeyType="done"
                  ref={ref => {
                    this._phoneinput = ref;
                  }}
                  onSubmitEditing={Keyboard.dismiss}
                  blurOnSubmit={false}
                />
              </View>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={this.userRegisterFunction}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    paddingVertical: 10,
                    fontSize: 16
                  }}
                >
                  REGISTER
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
export default SignUp;

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginHorizontal: 20,
    margin: 10,
    justifyContent: "space-between"
  },

  buttonStyle: {
    backgroundColor: Colors.PRIMARY,
    borderWidth: 0,
    color: "#FFFFFF",
    // borderColor: "#51D8C7",
    height: 40,
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 30
  },
  textInput: {
    flex: 1,
    color: "#413E4F",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e2e2e2",
    fontSize: 18
  }
});
