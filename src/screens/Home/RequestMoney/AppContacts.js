import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class AppContacts extends Component {
    static navigationOptions = {
        title: 'App Contacts'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>AppContacts</Text>
            </View>
        );
    }
}
export default AppContacts;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});