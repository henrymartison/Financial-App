import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput
} from "react-native";
import { TouchableOpacity } from "../../../components/commons/TouchableOpacity";
import { Ionicons, Feather } from "@expo/vector-icons";
import { fsr } from "../../../components/commons/metrics";
import Colors from "../../../constants/Colors";
import { Form, Item, Picker, Icon } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class MoMoUser extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Transfer Money To MoMo',
        headerLeft: (
          <TouchableOpacity style={{paddingLeft: 15}} onPress={() => navigation.goBack()}>
            <Ionicons name='md-arrow-back' size={26} />
          </TouchableOpacity>
        )
      })

      constructor(props) {
        super(props);
        this.state = {
          selected2: undefined,
          branchSelected: undefined,

        };
      }
      onValueChange2(value = string) {
        this.setState({
          selected2: value
        });
      }

      onSelectBranch(value = string) {
        this.setState({
          branchSelected: value
        });
      }

    render() {
        return (
            <KeyboardAwareScrollView>
                <ScrollView style={styles.container}>
                    <Text style={{fontWeight: '600', fontSize: 17, paddingVertical: 16}}>How much would you like to send?</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder='Amount'
                                keyboardType='numeric'
                                style={styles.input}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.currencyPicker}
                            activeOpacity={.8}
                            onPress={() => alert('Drop Down Menu')}
                        >
                            <Text style={{fontSize: fsr(2.7), fontWeight: '600', color: 'white', paddingRight: 6}}>
                                GH₵
                            </Text>
                            <Feather name='chevron-down' size={18} color='white' />
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingRight: 20}}>
                        <Item picker style={{paddingTop: 20}}>
                            <Picker
                                mode="dropdown"
                                // iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Select Network"
                                placeholderStyle={{ color: "#ccc" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}
                            >
                                <Picker.Item label="MTN" value="key0" />
                                <Picker.Item label="Airtel" value="key1" />
                                <Picker.Item label="Vodafone" value="key2" />
                                <Picker.Item label="Tigo" value="key3" />
                                <Picker.Item label="Glo" value="key4" />
                            </Picker>
                        </Item>
                        <Item>
                            <TextInput
                                placeholder='Mobile Number'
                                keyboardType='number-pad'
                                style={{paddingTop: 30, paddingBottom: 10, fontSize: 18}}
                            />
                        </Item>
                        <Item>
                            <TextInput
                                placeholder="Receipient's Fullname"
                                style={{paddingTop: 30, paddingBottom: 10, fontSize: 18}}
                            />
                        </Item>
                        <Item>
                            <TextInput
                                placeholder='Purpose'
                                style={{paddingTop: 30, paddingBottom: 10, fontSize: 18}}
                            />
                        </Item>
                    </View>
                    <TouchableOpacity onPress={() => alert('Money Transferred')} style={styles.button}>
                        <Text style={styles.buttonText}>Send Money</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAwareScrollView>
        );
    }
}
export default MoMoUser;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.bgColor
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#e8e8e8',
        paddingVertical: 18,
        paddingHorizontal: 13,
        flex: 2,
        backgroundColor: 'white'
    },
    input: {
        fontSize: fsr(2.5)
    },
    currencyPicker: {
        backgroundColor: Colors.PRIMARY,
        // height: 60,
        flex: 1,
        paddingHorizontal: 15,
        // paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        paddingVertical: 15,
        flex: 1,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    buttonText: {
        fontWeight: '600',
        fontSize: fsr(2.4),
        color: 'white'
    }
});