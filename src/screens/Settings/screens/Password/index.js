import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ListItem from "../../../../components/SettingsComponents/ListItem";

class Password extends Component {
  static navigationOptions = { title: "Password & PIN" };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ListItem
          iconLeft={null}
          attribute="Change your password"
          ml={20}
          onPress={() => navigate("ChPasswd")}
        />
        <ListItem
          iconLeft={null}
          attribute="Set your transaction PIN"
          ml={20}
        />
        <ListItem
          iconLeft={null}
          attribute="Reset your transaction PIN"
          ml={20}
        />
      </View>
    );
  }
}
export default Password;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  }
});
