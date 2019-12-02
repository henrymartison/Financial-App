import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Modal } from "./Modal";
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Right,
  Content
} from "native-base";
import { TouchableOpacity } from "../commons/TouchableOpacity";
import { Ionicons } from "@expo/vector-icons";
import { fsr } from "../commons/metrics";
import { Separator } from "../commons/Separator";

class AddMoneyModal extends Component {
  state = {
    filter: this.props.filterType,
    name: this.props.filterName,
    actionFilter: this.props.actionFilter,
    actionSwitchMovie: this.props.actionSwitchMovie
  };

  render() {
    const { filter, name, actionFilter, actionSwitchMovie } = this.state;
    const { isVisible, style } = this.props;

    return (
      <Modal
        isVisible={isVisible}
        actionOpenClose={actionFilter}
        bgColor="#fef6e9"
        style={style}
      >
        <View style={styles.container}>
          <Header transparent>
            <Left />
            <Body>
              <Title>Add Money</Title>
            </Body>
            <Right>
              <TouchableOpacity onPress={actionFilter}>
                <Ionicons name="md-close-circle" size={28} />
              </TouchableOpacity>
            </Right>
          </Header>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <Text style={styles.titleText}>
              How much do you want to add to your Vitz account?
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Amount"
                style={styles.input}
                keyboardType="numeric"
                autoFocus
              />
              <Text style={styles.currencyText}>GHS</Text>
            </View>
            <TouchableOpacity onPress={null} style={styles.button}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}
export default AddMoneyModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fef6e9",
    flex: 1
  },
  content: {
    height: "75%",
    alignItems: "center",
    paddingHorizontal: 20
  },
  titleText: {
    fontSize: fsr(4),
    textAlign: "center",
    color: "grey"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    width: "100%"
  },
  input: {
    fontSize: fsr(2.8),
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#a8a8a8",
    paddingBottom: 10
  },
  currencyText: {
    fontSize: fsr(2.8)
  },
  button: {
    backgroundColor: "orange",
    marginTop: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 5
  },
  buttonText: {
    color: "white",
    fontSize: fsr(2.6),
    fontWeight: "600"
  }
});
