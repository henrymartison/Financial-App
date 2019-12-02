import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView
} from "react-native";
import { fsr } from "../../components/commons/metrics";
import { TouchableOpacity } from "../../components/commons/TouchableOpacity";
import ListItem from "../../components/SettingsComponents/ListItem";

class Settings extends Component {
  static navigationOptions = { header: null };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <SafeAreaView />
        <TouchableOpacity
          onPress={() => navigate("Profile")}
          activeOpacity={0.88}
          style={styles.headerContainer}
        >
          <View style={styles.headerRow}>
            <View style={{}}>
              <Text style={{ fontWeight: "700", fontSize: fsr(3.5) }}>
                Henry Martison
              </Text>
              <Text style={{ fontSize: fsr(1.6), paddingVertical: 10 }}>
                View and edit your profile
              </Text>
            </View>

            {/* thumbnail */}
            <View style={styles.thumbnailContainer}>
              <Text style={{ color: "white", fontSize: fsr(2.5) }}>HM</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ marginTop: 20 }}>
          <ListItem iconLeft="shield" attribute="Verify your identity" />
          <ListItem
            iconLeft="lock"
            attribute="Password and PIN"
            onPress={() => navigate("Passwd")}
          />
          <ListItem
            iconLeft="eye-off"
            attribute="Show my account balance"
            // iconRight='ios-switch'
          />
          <ListItem
            iconLeft="help-circle"
            attribute="Help & Support"
            onPress={() => navigate("Support")}
          />
          <ListItem
            iconLeft="mail"
            attribute="Invite your friends"
            onPress={() => navigate("Invite")}
          />
          <ListItem iconLeft="shield-off" attribute="Privacy" />
          <ListItem
            iconLeft="credit-card"
            attribute="Payments"
            onPress={() => navigate("Payments")}
          />
          <ListItem
            iconLeft="award"
            attribute="Switch To Premium"
            color="#f5b54d"
          />
          <ListItem iconLeft="info" attribute="Terms and Conditions" />
          <ListItem
            iconLeft="log-out"
            attribute="Sign out"
            color="tomato"
            iconRight={null}
          />
        </View>
      </ScrollView>
    );
  }
}
export default Settings;

const styles = StyleSheet.create({
  thumbnailContainer: {
    backgroundColor: "#85a6d3",
    height: 55,
    width: 55,
    borderRadius: 55 / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  headerRow: {
    flexDirection: "row",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10
  }
});
