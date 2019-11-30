import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ListItem from "../../../../components/SettingsComponents/ListItem";
import { fsr } from "../../../../components/commons/metrics";

class Support extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{}}>
            <Text style={styles.headerText}>Frequently Asked Questions</Text>
            <ListItem
              attribute="How do I fund my Vitz balance?"
              ml={null}
              ph={null}
            />
            <ListItem attribute="Fund transfer via bank" ml={null} ph={null} />
            <ListItem
              attribute="I added money but haven't seen it yet"
              ml={null}
              ph={null}
            />
          </View>
          <View style={{}}>
            <Text style={[styles.headerText, { marginTop: 25 }]}>
              All Topics
            </Text>
            <ListItem attribute="Account" ml={null} ph={null} />
            <ListItem attribute="Transactions" ml={null} ph={null} />
            <ListItem
              attribute="Sending & Receiving money"
              ml={null}
              ph={null}
            />
            <ListItem attribute="Safety and Security" ml={null} ph={null} />
            <ListItem attribute="Vitz Premium" ml={null} ph={null} />
            <ListItem attribute="Vitz Classic" ml={null} ph={null} />
            <ListItem attribute="Cards" ml={null} ph={null} />
            <ListItem attribute="Funding and Fees" ml={null} ph={null} />
            <ListItem attribute="Loans" ml={null} ph={null} />
            <ListItem attribute="Other Information" ml={null} ph={null} />
            <ListItem attribute="Bill Payments" ml={null} ph={null} />
            <ListItem attribute="Pay with QR" ml={null} ph={null} />
            <ListItem
              attribute="Verification, OPT & Phone Numbers"
              ml={null}
              ph={null}
            />
            <ListItem attribute="Help & Support" ml={null} ph={null} />
          </View>
          <View style={{}}>
            <Text style={[styles.headerText, { marginTop: 25 }]}>
              Get in touch with us
            </Text>
            <ListItem
              attribute="Twitter"
              ml={null}
              ph={null}
              subText="@VitzHelp"
              subTextReq={true}
            />
            <ListItem attribute="Chat with us" ml={null} ph={null} />
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default Support;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  headerText: {
    paddingLeft: 10,
    fontSize: fsr(2.7),
    fontWeight: "500",
    marginBottom: 15
  }
});
