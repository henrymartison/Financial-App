import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Separator } from "../commons/Separator";
import { TouchableOpacity } from "../commons/TouchableOpacity";
import { fsr } from "../commons/metrics";
import Colors from "../../constants/Colors";

const ListItem = ({
  iconLeft,
  iconRight = "ios-arrow-forward",
  attribute,
  disabled = false,
  subText,
  subTextReq = false,
  onPress,
  color = Colors.darkBlue,
  ml = 43,
  ph = 20
}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={disabled ? 10 : 0.65}
        onPress={onPress}
        style={{
          paddingHorizontal: ph,
          paddingVertical: 18,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Feather name={iconLeft} size={18} color={color} />
          <View>
            <Text style={{ paddingLeft: 10, fontSize: fsr(2.4), color: color }}>
              {attribute}
            </Text>
            {subTextReq ? (
              <Text
                style={{
                  paddingLeft: 10,
                  paddingTop: 5,
                  fontSize: fsr(1.8),
                  color: "#1da3f6"
                }}
              >
                {subText}
              </Text>
            ) : null}
          </View>
        </View>
        <Ionicons name={iconRight} size={18} color={Colors.darkBlue} />
      </TouchableOpacity>
      <Separator left={ml} />
    </View>
  );
};

export default ListItem;
