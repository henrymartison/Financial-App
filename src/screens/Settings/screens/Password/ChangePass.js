import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "../../../../components/commons/TouchableOpacity";
import Colors from "../../../../constants/Colors";
import { fsr } from "../../../../components/commons/metrics";

class ChangePass extends Component {
  static navigationOptions = { title: "Change Password" };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
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
            secureTextEntry
            placeholder="New Password"
            ref={ref => {
              this._newPass = ref;
            }}
            onSubmitEditing={() => alert("Password Successfully changed")}
            returnKeyType="go"
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
      </View>
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
