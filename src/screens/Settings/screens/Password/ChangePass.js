import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { TouchableOpacity } from "../../../../components/commons/TouchableOpacity";
import Colors from "../../../../constants/Colors";
import { fsr } from "../../../../components/commons/metrics";

class ChangePass extends Component {
  static navigationOptions = { title: "Change Password" };

  state = {
    currPassword: "",
    newPass: "",
    confirmPass: ""
  };

  handleChangePass = () => {
    const { newPass, confirmPass } = this.state;
    if (newPass !== confirmPass) {
      alert("Confirmed password mismatch!");
    } else {
      alert("Password successfully updated");
      this.props.navigation.goBack();
    }
    return;
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={currPassword => this.setState({ currPassword })}
              secureTextEntry
              placeholder="Current Password"
              ref={ref => {
                this._currentPass = ref;
              }}
              onSubmitEditing={() => this._newPass && this._newPass.focus()}
              returnKeyType="next"
              enablesReturnKeyAutomatically
              autoFocus
            />
            <TextInput
              style={styles.textInput}
              onChangeText={newPass => this.setState({ newPass })}
              secureTextEntry
              placeholder="New Password"
              ref={ref => {
                this._newPass = ref;
              }}
              onSubmitEditing={() =>
                this._confirmPass && this._confirmPass.focus()
              }
              returnKeyType="next"
              enablesReturnKeyAutomatically
            />
            <TextInput
              style={styles.textInput}
              onChangeText={confirmPass => this.setState({ confirmPass })}
              secureTextEntry
              placeholder="Confirm new password"
              ref={ref => {
                this._confirmPass = ref;
              }}
              onSubmitEditing={this.handleChangePass}
              returnKeyType="go"
              enablesReturnKeyAutomatically
            />
          </View>
          <TouchableOpacity
            onPress={this.handleChangePass}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
export default ChangePass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 20
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: "80%",
    paddingVertical: 12
  },
  buttonText: {
    fontSize: fsr(2.3),
    fontWeight: "600"
  },
  inputContainer: {
    // backgroundColor: "orange",
    width: "100%"
  },
  textInput: {
    fontSize: fsr(2.6),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e8e8e8",
    paddingBottom: 10,
    marginVertical: 17
  }
});
