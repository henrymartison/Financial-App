import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  ScrollView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { EvilIcons } from "@expo/vector-icons";
import * as Contacts from "expo-contacts";
import * as Permissions from "expo-permissions";

import { fsr } from "../../../../components/commons/metrics";
import { TouchableOpacity } from "../../../../components/commons/TouchableOpacity";
import { Share } from "../../../../components/commons/Share";
import Search from "../../../../components/commons/Search";
import { Thumbnail } from "native-base";
import { Separator } from "../../../../components/commons/Separator";

class Invite extends Component {
  static navigationOptions = { title: "Invite a Friend" };

  constructor() {
    super();
    this.state = {
      isLoading: false,
      contacts: []
    };
  }

  loadContacts = async () => {
    const permission = await Permissions.askAsync(Permissions.CONTACTS);

    if (permission.status !== "granted") {
      return;
    }

    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails]
    });

    console.log(data);
    this.setState({ contacts: data, inMemoryContacts: data, isLoading: false });
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.loadContacts();
  }

  renderItem = ({ item }) => (
    <View style={styles.infoContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Thumbnail
          small
          source={require("../../../../../assets/images/marvalinks.png")}
        />
        <View style={{ paddingLeft: 13 }}>
          <Text style={{ color: "#000", fontWeight: "600", fontSize: 18 }}>
            {item.firstName + " "}
            {item.lastName}
          </Text>
          <Text style={{ color: "grey", fontWeight: "500", paddingTop: 5 }}>
            {/* {item.phoneNumbers[0].digits} */}
            0248160008
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.inviteButton}>
        <Text style={styles.buttonText}>Invite</Text>
      </TouchableOpacity>
    </View>
  );

  itemSeparator = () => {
    return <Separator left={20} />;
  };

  searchContacts = value => {
    const filteredContacts = this.state.inMemoryContacts.filter(contact => {
      let contactLowercase = (
        contact.firstName +
        " " +
        contact.lastName
      ).toLowerCase();

      let searchTermLowercase = value.toLowerCase();

      return contactLowercase.indexOf(searchTermLowercase) > -1;
    });
    this.setState({ contacts: filteredContacts });
  };

  actionShare = () => {
    Share({
      message: "Sign up to Vitz using this referral code",
      url: "https://www.google.com/",
      //   title: "AmoCinema",
      dialogTitle: "Sign up to Vitz using this referral code"
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={["#f8b42d", "#c99c43"]} style={styles.topView}>
          <View
            style={{
              alignItems: "center"
            }}
          >
            <Text style={styles.topViewHeaderText}>Get cash gifts</Text>
            <Text style={styles.topViewSubText}>
              Get GH₵0.39 when your friend signs up on Vitz
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.input}>233549695108</Text>
            <TouchableOpacity onPress={this.actionShare}>
              <EvilIcons name="share-apple" size={28} color="white" />
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <View style={styles.bottomView}>
          <ScrollView>
            <Text style={styles.bottomViewHeaderText}>
              INVITE FRIENDS FROM YOUR CONTACTS
            </Text>
            <Search onChangeText={value => this.searchContacts(value)} />

            <View style={{ flex: 1 }}>
              {this.state.isLoading ? (
                <ActivityIndicator animating color="#a8a8a8" />
              ) : null}
              <FlatList
                data={this.state.contacts}
                renderItem={this.renderItem}
                ItemSeparatorComponent={this.itemSeparator}
                keyExtractor={(item, index) => index.toString()}
                // ListEmptyComponent={() => (
                // <View
                //     style={{
                //     flex: 1,
                //     alignItems: 'center',
                //     justifyContent: 'center',
                //     marginTop: 50
                //     }}
                // >
                //     <Text style={{ color: '#000', fontSize: 18 }}>No Contacts Found</Text>
                // </View>
                // )}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default Invite;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 30
  },
  bottomView: {
    flex: 1,
    paddingHorizontal: 10
  },
  inputContainer: {
    backgroundColor: "rgba(0,0,0,.15)",
    width: "80%",
    paddingVertical: 13,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderRadius: 5
  },
  input: {
    fontSize: fsr(2.4),
    color: "white"
  },
  topViewHeaderText: {
    fontSize: fsr(3.4),
    color: "white",
    fontWeight: "600",
    paddingVertical: 20
  },
  topViewSubText: {
    textAlign: "center",
    color: "white",
    paddingBottom: 15
  },
  bottomViewHeaderText: {
    fontSize: fsr(2.4),
    fontWeight: "500",
    color: "grey",
    marginVertical: 16,
    paddingLeft: 10
  },
  infoContainer: {
    minHeight: 70,
    padding: 5,
    paddingLeft: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inviteButton: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
    paddingVertical: 10,
    borderRadius: 6
  },
  buttonText: {
    fontSize: fsr(2.3),
    fontWeight: "500"
  }
});
