import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Switch } from "native-base";
import { TouchableOpacity } from "../../../../components/commons/TouchableOpacity";
import { fsr } from "../../../../components/commons/metrics";
import { Separator } from "../../../../components/commons/Separator";

class Payments extends Component {
  static navigationOptions = {
    title: "Payments",
    headerStyle: {
      backgroundColor: "#f2f2f2",
      borderBottomColor: "transparent"
    }
  };

  state = {
    switchValue: false
  };

  toggleSwitch = value => {
    this.setState({ switchValue: value });
  };

  render() {
    const { switchValue } = this.state;

    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // backgroundColor: "red",
            paddingRight: 15
          }}
        >
          <TouchableOpacity
            onPress={null}
            style={{
              paddingLeft: 20,
              //   paddingRight: 10,
              paddingVertical: 18,
              //   backgroundColor: "orange",
              width: "80%"
            }}
          >
            <Text style={{ fontSize: fsr(2.6), fontWeight: "500" }}>
              Charge my saved credit cards
            </Text>
            <Text style={{ color: "grey", fontSize: fsr(1.7), paddingTop: 5 }}>
              Directly charge your saved cards or bank accounts when you have
              insufficient funds in your Vitz balance to complete a transaction
            </Text>
          </TouchableOpacity>
          <Switch value={switchValue} onValueChange={this.toggleSwitch} />
        </View>
        <Separator left={null} />
      </View>
    );
  }
}
export default Payments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingTop: 25
  }
});
