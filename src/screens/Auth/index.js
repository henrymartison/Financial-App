import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Swiper from "../../components/onboarding-components/swiper";
import { LinearGradient } from "expo-linear-gradient";

class MainAuth extends Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <Swiper>
        {/* First screen */}
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.slide}
        >
          <Ionicons name="ios-card" {...iconStyles} />
          <Text style={styles.header}>Borderless Payment Experience</Text>
          <Text style={styles.text}>
            Create custom virtual USD cards at affordable exchange rates for
            your payments and subscriptions.
          </Text>
        </LinearGradient>
        {/* Second screen */}
        <LinearGradient colors={["#f4c4f3", "#fc67fa"]} style={styles.slide}>
          <Ionicons name="ios-cash" {...iconStyles} />
          <Text style={styles.header}>Total control over your money</Text>
          <Text style={styles.text}>
            Always know what's going on with your money. Thanks to instant
            notifications
          </Text>
        </LinearGradient>
        {/* Third screen */}
        <LinearGradient colors={["#ff7e5f", "#feb47b"]} style={styles.slide}>
          <Ionicons name="ios-pie" {...iconStyles} />
          <Text style={styles.header}>Your better Financial half</Text>
          <Text style={styles.text}>
            Managing your funds should be the easiest task on your todo list, so
            we created Vitz
          </Text>
          <Text style={styles.text}>just for you</Text>
        </LinearGradient>
        <LinearGradient colors={["#334d50", "#cbcaa5"]} style={styles.slide}>
          <Ionicons name="md-unlock" {...iconStyles} />
          <Text style={styles.header}>Account Protection</Text>
          <Text style={styles.text}>
            Vitz is secure by Flutterwave. Your money is always safe with us
          </Text>
        </LinearGradient>
      </Swiper>
    );
  }
}
export default MainAuth;

const iconStyles = {
  size: 100,
  color: "#FFFFFF"
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: "40%"
  },
  header: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 23,
    fontWeight: "700",
    marginVertical: 15
    // marginHorizontal: 20
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 18,
    // marginHorizontal: 40,
    textAlign: "center"
  }
});
