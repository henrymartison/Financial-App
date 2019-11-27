import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

export const Separator = ({left=43}) => (
    <View style={[styles.separator, {marginLeft: left}]} />
    )


const styles = StyleSheet.create({
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#e2e2e2',
    }
});