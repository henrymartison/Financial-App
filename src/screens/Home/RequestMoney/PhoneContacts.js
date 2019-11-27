import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from "react-native";

import * as Contacts from "expo-contacts";
import * as Permissions from "expo-permissions";

import Search from "../../../components/commons/Search";
import { Separator } from "../../../components/commons/Separator";
import { TouchableOpacity } from "../../../components/commons/TouchableOpacity";
import { Thumbnail } from "native-base";
import { fsr } from "../../../components/commons/metrics";

class PhoneContacts extends Component {
  static navigationOptions = {
    title: "Phone Contacts"
  };

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

    // console.log(data);
    this.setState({ contacts: data, inMemoryContacts: data, isLoading: false });
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.loadContacts();
  }

  renderItem = ({ item }) => (
    <TouchableOpacity style={styles.infoContainer}>
      <Thumbnail
        small
        source={require("../../../../assets/images/marvalinks.png")}
      />
      {/* <View
        style={{
          height: 50,
          width: 50,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "lightseagreen"
        }}
      >
        <Text style={{ fontSize: fsr(2.4) }}>
          {item.firstName[0]}
          {item.lastName[0]}
        </Text>
      </View> */}
      <View style={{ paddingLeft: 13 }}>
        <Text style={{ color: "#000", fontWeight: "600", fontSize: 18 }}>
          {item.firstName + " "}
          {item.lastName}
        </Text>
        <Text style={{ color: "grey", fontWeight: "500", paddingTop: 5 }}>
          {item.phoneNumbers[0].number}
        </Text>
      </View>
    </TouchableOpacity>
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

  render() {
    return (
      <View style={styles.container}>
        <Search onChangeText={value => this.searchContacts(value)} />

        <View style={{ flex: 1 }}>
          {this.state.isLoading ? (
            <View
              style={{
                ...StyleSheet.absoluteFill,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row"
              }}
            >
              <ActivityIndicator animating color='#a8a8a8' />
              <Text style={{ color: "#000", fontSize: 17, paddingLeft: 8 }}>
                Loading Contacts...
              </Text>
            </View>
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
      </View>
    );
  }
}
export default PhoneContacts;

const styles = StyleSheet.create({
  container: {
    flex: 1
    // paddingHorizontal: 10
  },
  infoContainer: {
    minHeight: 70,
    padding: 5,
    paddingLeft: 20,
    alignItems: "center",
    flexDirection: "row"
  }
});
