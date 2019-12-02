import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
  TextInput
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { TouchableOpacity } from "../../../../components/commons/TouchableOpacity";
import { fsr } from "../../../../components/commons/metrics";
import Colors from "../../../../constants/Colors";
import { Separator } from "../../../../components/commons/Separator";

class EditProfile extends Component {
  static navigationOptions = {
    title: "Edit Profile",
    headerStyle: {
      backgroundColor: Colors.tabColor,
      borderBottomColor: "transparent"
    },
    headerTitleStyle: { color: "white", fontSize: 16 }
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <KeyboardAwareScrollView>
          <ScrollView>
            <View style={styles.profileContainer}>
              <View style={styles.thumbnail}>
                <Text style={styles.thumbnailText}>HM</Text>
              </View>
              <TouchableOpacity
                onPress={() => alert("Open gallery")}
                style={styles.editButton}
              >
                <Feather name="camera" size={20} />
              </TouchableOpacity>
            </View>
            <Separator left={null} />
            <View style={styles.infoContainer}>
              <View>
                <View style={styles.inputContainerOne}>
                  <Feather name="align-left" size={18} color="grey" />
                  <View style={styles.inputContainerTwo}>
                    <Text style={styles.attributeText}>Email</Text>
                    <TextInput
                      style={styles.textInput}
                      defaultValue="martison@example.com"
                      placeholderTextColor="black"
                      onSubmitEditing={() => null}
                    />
                  </View>
                </View>
                <View style={styles.inputContainerOne}>
                  <Feather name="align-left" size={18} color="grey" />
                  <View style={styles.inputContainerTwo}>
                    <Text style={styles.attributeText}>Name</Text>
                    <TextInput
                      style={styles.textInput}
                      defaultValue="Henry Martison"
                      placeholderTextColor="black"
                      onSubmitEditing={() => null}
                    />
                  </View>
                </View>
                <View style={styles.inputContainerOne}>
                  <Feather name="align-left" size={18} color="grey" />
                  <View style={styles.inputContainerTwo}>
                    <Text style={styles.attributeText}>Date of Birth</Text>
                    <TextInput
                      style={styles.textInput}
                      defaultValue="22nd February, 1994"
                      placeholderTextColor="black"
                      onSubmitEditing={() => null}
                    />
                  </View>
                </View>
                <View style={styles.inputContainerOne}>
                  <Feather name="align-left" size={18} color="grey" />
                  <View style={styles.inputContainerTwo}>
                    <Text style={styles.attributeText}>Phone</Text>
                    <TextInput
                      style={styles.textInput}
                      defaultValue="0023445500"
                      placeholderTextColor="black"
                      onSubmitEditing={() => null}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileContainer: {
    height: Dimensions.get("window").height / 3,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  thumbnail: {
    backgroundColor: "#85a6d3",
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  thumbnailText: {
    color: "white",
    fontSize: fsr(5),
    fontWeight: "500"
  },
  infoContainer: {
    flex: 1,
    paddingVertical: 27,
    paddingHorizontal: 20
    // backgroundColor: "white"
  },
  editButton: {
    width: "100%",
    alignItems: "flex-end",
    paddingRight: 50
  },
  editButtonContainer: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainerOne: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  inputContainerTwo: {
    paddingLeft: 15,
    flex: 1
  },
  textInput: {
    fontSize: fsr(2),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e8e8e8",
    paddingBottom: 10,
    flex: 1
  },
  attributeText: {
    fontSize: fsr(1.8),
    color: "grey",
    paddingBottom: 5
  }
});
