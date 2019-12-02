import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { TabBar } from "react-native-animated-nav-tab-bar";

import Colors from "../constants/Colors";
import { TouchableOpacity } from "../components/commons/TouchableOpacity";

import TabBarIcon from "../components/commons/TabBarIcon";
import Home from "../screens/Home/Home";
import Cards from "../screens/Cards/Cards";
import Transactions from "../screens/Transactions/Transactions";
import Settings from "../screens/Settings/Settings";
import PhoneContacts from "../screens/Home/RequestMoney/PhoneContacts";
import AppContacts from "../screens/Home/RequestMoney/AppContacts";
import SendMoney from "../screens/Home/SendMoney/SendMoney";
import Bank from "../screens/Home/SendMoney/_toBank";
import MoMoUser from "../screens/Home/SendMoney/_toMoMoUser";
import Support from "../screens/Settings/screens/Help&Support";
import Payments from "../screens/Settings/screens/Payments";
import ChangePass from "../screens/Settings/screens/Password/ChangePass";
import Password from "../screens/Settings/screens/Password";
import Invite from "../screens/Settings/screens/Invite";
import Profile from "../screens/Settings/screens/Profile";
import EditProfile from "../screens/Settings/screens/Profile/EditProfile";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const Request_Money = createMaterialTopTabNavigator(
  {
    PhoneContacts: { screen: PhoneContacts },
    AppContacts: { screen: AppContacts }
  },
  {
    tabBarPosition: "top",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "#FFFFFF",
      inactiveTintColor: "#F8F8F8",
      style: {
        backgroundColor: "#fff"
      },
      labelStyle: {
        textAlign: "center",
        color: Colors.darkBlue
      },
      indicatorStyle: {
        borderBottomColor: "#87B56A",
        borderBottomWidth: 2
      }
    }
  }
);

const HomeStack = createStackNavigator(
  {
    Home: Home,
    Request_Money: {
      screen: Request_Money,
      navigationOptions: ({ navigation }) => ({
        title: "Request Money",
        headerLeft: (
          <TouchableOpacity
            style={{ paddingLeft: 15 }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="md-arrow-back" size={26} />
          </TouchableOpacity>
        )
      })
    },
    Send_Money: SendMoney,
    _toBank: Bank,
    _toMoMoUser: MoMoUser
  },
  config
);

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,

    tabBarLabel: "Overview",
    tabBarIcon: ({ tintColor, focused }) => (
      <FontAwesome5 name="igloo" size={18} color={tintColor} />
    )
  };
};

HomeStack.path = "";

const NotificationStack = createStackNavigator(
  {
    Cards: Cards
  },
  config
);

NotificationStack.navigationOptions = {
  tabBarLabel: "Notifications",
  tabBarIcon: ({ focused, tintColor }) => {
    if (focused) {
      return <FontAwesome name="bell" size={18} color={tintColor} />;
    } else {
      return (
        <TabBarIcon focused={focused} tintColor={tintColor} name={"bell"} />
      );
    }
  }
};

NotificationStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: Settings,
    Passwd: Password,
    ChPasswd: ChangePass,
    Payments: Payments,
    Support: Support,
    Invite: Invite,
    Profile: Profile,
    EditProfile: EditProfile
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ paddingLeft: 15 }}
        >
          <Ionicons name="md-arrow-back" size={27} color="grey" />
        </TouchableOpacity>
      ),
      headerStyle: { borderBottomColor: "transparent" },
      headerTitleStyle: { color: "grey", fontSize: 16 }
    })
  },
  config
);

SettingsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    tabBarLabel: "Settings",
    tabBarIcon: ({ focused, tintColor }) => (
      <TabBarIcon focused={focused} tintColor={tintColor} name={"settings"} />
    )
  };
};

SettingsStack.path = "";

const TransactionsStack = createStackNavigator({
  Trans: Transactions
});

TransactionsStack.navigationOptions = {
  tabBarLabel: "Activiy",
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon focused={focused} tintColor={tintColor} name="activity" />
  )
};

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    TransactionsStack,
    NotificationStack,
    SettingsStack
  },
  {
    tabBarOptions: {
      tabStyle: { backgroundColor: Colors.tabColor },
      labelStyle: { fontSize: 12 },
      activeTintColor: "white",
      inactiveTintColor: "#525964"
    }
    // tabBarComponent: props => (
    //   <TabBar
    //     activeColors={["#e6b580", "#8e87d6", "#c095c9", "tomato"]} // or activeColors={'#e6b580'}
    //     activeTabBackgrounds={["#ede7e6", "#eae3f6", "#eae4f6"]} // or activeTabBackgrounds={'#ede7e6'}
    //     {...props}
    //   />
    // )
  }
);

tabNavigator.path = "";

export default tabNavigator;
