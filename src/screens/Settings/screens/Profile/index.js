import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { TouchableOpacity } from "../../../../components/commons/TouchableOpacity";
import { fsr } from "../../../../components/commons/metrics";
import Colors from "../../../../constants/Colors";
import ListItem from "../../../../components/SettingsComponents/ListItem";
import { Feather } from "@expo/vector-icons";

class Profile extends Component {
  static navigationOptions = { title: "Profile" };

  //   state = { isVisible: false };

  render() {
    const { navigate } = this.props.navigation;
    // const { isVisible } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.thumbnailContainer}>
            <TouchableOpacity
              onPress={() => navigate("EditProfile")}
              style={styles.editButton}
            >
              <View style={styles.editButtonContainer}>
                <Feather name="edit" size={25} />
              </View>
            </TouchableOpacity>
            <View style={styles.thumbnail}>
              <Text style={styles.thumbnailText}>HM</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.headerText}>Personal info</Text>
            <ListItem
              attribute="Henry Martison"
              iconLeft="user"
              iconRight={null}
              ph={0}
              ml={0}
              disabled
            />
            <ListItem
              attribute="22nd February, 1994"
              iconLeft="calendar"
              iconRight={null}
              ph={0}
              ml={0}
              disabled
            />
            <ListItem
              attribute="martison@example.com"
              iconLeft="mail"
              iconRight={null}
              ph={0}
              ml={0}
              disabled
            />
            <ListItem
              attribute="00233445500"
              iconLeft="phone"
              iconRight={null}
              ph={0}
              ml={0}
              disabled
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  thumbnailContainer: {
    height: Dimensions.get("window").height / 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  infoContainer: {
    flex: 1,
    paddingVertical: 27,
    paddingHorizontal: 20
    // backgroundColor: "white"
  },
  thumbnail: {
    backgroundColor: "#85a6d3",
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  editButton: {
    width: "100%",
    alignItems: "flex-end",
    paddingRight: 30
  },
  editButtonContainer: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    // backgroundColor: "rgba(0,0,0,.2)",
    alignItems: "center",
    justifyContent: "center"
  },
  editButtonText: {
    fontSize: fsr(2.4),
    color: Colors.PRIMARY,
    fontWeight: "600"
  },
  thumbnailText: {
    color: "white",
    fontSize: fsr(5),
    fontWeight: "500"
  },
  headerText: {
    fontSize: fsr(2.5),
    fontWeight: "500",
    paddingBottom: 15
  }
});
