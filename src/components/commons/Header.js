import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "./TouchableOpacity";
import { Feather } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const CustomHeader = props => (
  <View style={styles.container}>
    <View style={{}}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: "600" }}>GH₵</Text>
          <Text style={{ fontWeight: "600", fontSize: 24 }}>
            0.
            <Text stlye={{ fontSize: 14 }}>00</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", fontWeight: "600" }}>Add Money</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 13,
          color: "grey",
          paddingVertical: 5
        }}
      >
        WALLET BALANCE
      </Text>
    </View>
    <TouchableOpacity>
      <Feather name='bell' color='grey' size={24} />
    </TouchableOpacity>
  </View>
);
export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'red',
    paddingVertical: 20,
    // paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    backgroundColor: Colors.darkCyan,
    marginLeft: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4
  }
});
