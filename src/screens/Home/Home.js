import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Image,
  ActivityIndicator,
  Modal
} from "react-native";
import CustomHeader from "../../components/commons/Header";
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "../../components/commons/TouchableOpacity";
import { fsr } from "../../components/commons/metrics";
import { Feather } from "@expo/vector-icons";
import BuyYourAirtime from "../../components/HomeComponents/BuyYourAirtime";
import PayYourBills from "../../components/HomeComponents/PayYourBills";
import { Header, Left, Body, Title, Right, Content } from "native-base";
import Form from "../../components/HomeComponents/Form";

class Home extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      modalVisible: false
    };
  }

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const url = "https://randomuser.me/api/?page=3&results=10&seed=abc";
    const apiResults = await (await fetch(url)).json();
    // const a = await fetch(url)
    // const b = await a.json()

    // console.log(apiResults)
    this.setState({ users: apiResults.results, isLoading: false });
  }

  renderSenderList() {
    const { users } = this.state;
    return users.map(user => {
      return (
        <View key={user.login.uuid} style={styles.imageContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: `${user.picture.large}` }}
                style={styles.avatar}
              />
            </View>
            <Text style={styles.avatarName}>{user.name.first}</Text>
          </View>
        </View>
      );
    });
  }

  render() {
    const { navigation } = this.props;

    const { isLoading } = this.state;
    if (!isLoading) {
      return (
        <View style={styles.container}>
          <SafeAreaView />
          <CustomHeader />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Request_Money")}
                style={[styles.rowContainer, { backgroundColor: "#fff" }]}
              >
                <Text
                  style={{
                    color: "black",
                    fontWeight: "600",
                    fontSize: fsr(4),
                    paddingHorizontal: 15,
                    paddingTop: 10
                  }}
                >
                  Request Money
                </Text>
                <Text
                  style={{
                    color: "black",
                    paddingTop: 20,
                    paddingHorizontal: 15
                  }}
                >
                  Ask for money from your friends, family and customers.
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Send_Money")}
                style={[styles.rowContainer, { backgroundColor: "tomato" }]}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: fsr(4),
                    paddingHorizontal: 15,
                    paddingTop: 10
                  }}
                >
                  Transfer Money
                </Text>
                <Text
                  style={{
                    color: "white",
                    paddingTop: 20,
                    paddingHorizontal: 15
                  }}
                >
                  Send money to your friends, family and customers.
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginBottom: 10 }}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 25
                }}
              >
                <Text style={{ fontWeight: "700" }}>SEND MONEY TO</Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.addButton}>
                    <TouchableOpacity
                      style={{
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: "black",
                        padding: 4
                      }}
                    >
                      <Feather name="plus" size={24} />
                    </TouchableOpacity>
                  </View>
                  {this.renderSenderList()}
                </View>
              </ScrollView>
              <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  console.log("Modal has been closed.");
                }}
              >
                <View style={styles.modal}>
                  <Header>
                    <Left>
                      <TouchableOpacity
                        onPress={() => {
                          this.toggleModal(!this.state.modalVisible);
                        }}
                      >
                        <Text style={styles.text}>Cancel</Text>
                      </TouchableOpacity>
                    </Left>
                    <Body>
                      <Title>MTN VTU</Title>
                    </Body>
                    <Right>
                      <TouchableOpacity
                        onPress={() => {
                          this.toggleModal(!this.state.modalVisible);
                        }}
                      >
                        <Text style={styles.text}>Done</Text>
                      </TouchableOpacity>
                    </Right>
                  </Header>
                  <Content>
                    <Form />
                  </Content>
                </View>
              </Modal>
              <BuyYourAirtime onPress={() => this.toggleModal(true)} />
              <BuyYourAirtime onPress={() => this.toggleModal(true)} />
              <PayYourBills />
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <ActivityIndicator />
          <Text> LOADING...</Text>
        </View>
      );
    }
  }
}
export default Home;

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    paddingHorizontal: 15
  },
  rowContainer: {
    // backgroundColor: 'orange',
    width: width / 2 - 20,
    // height: height/4,
    borderRadius: 7,
    // alignItems: 'center',
    paddingBottom: 20
  },
  addButton: {
    height: 110,
    width: 80,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainer: {
    height: 110,
    width: 95,
    backgroundColor: "white",
    borderRadius: 10,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  avatarContainer: {
    height: 40,
    width: 40,
    borderRadius: 5
  },
  avatar: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "contain",
    borderRadius: 10
  },
  avatarName: {
    fontWeight: "500",
    paddingVertical: 8
  },
  modal: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: "white"
    // padding: 100,
  },
  text: {
    color: Colors.PRIMARY,
    fontSize: fsr(2.4),
    fontWeight: "600"
  }
});
