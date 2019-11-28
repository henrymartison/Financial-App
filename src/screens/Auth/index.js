import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class MainAuth extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Vitz Pay</Text>
        <View style={styles.bottomView}>
          <View style={styles.textContainer}>
            <Text>Welcome to Vitz Pay</Text>
            <Text>Login or register to get started</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Login"
              onPress={() => this.props.navigation.navigate("SignIn")}
            />
            <Button
              title="Sign Up"
              onPress={() => this.props.navigation.navigate("SignUp")}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default MainAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  bottomView: {
    marginBottom: 30
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20
  },
  buttonContainer: {}
});
