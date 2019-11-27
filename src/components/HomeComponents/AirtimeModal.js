import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Modal
} from "react-native";
import Colors from "../../constants/Colors";
import { Header, Left, Body, Title, Right } from "native-base";
import { TouchableOpacity } from "../commons/TouchableOpacity";

class AirtimeModal extends Component {
    state = {
        modalVisible: false
    }

    toggleModal(visible) {
        this.setState({ modalVisible: visible });
     }

    render() {
        return (
            <View style={styles.container}>
                <Modal animationType = {"slide"} transparent = {false}
                    visible = {this.state.modalVisible}
                    onRequestClose = {() => { console.log("Modal has been closed.") } }>
                    
                    <View style = {styles.modal}>
                        <Header>
                            <Left>
                                <TouchableOpacity onPress={() => {this.toggleModal(!this.state.modalVisible)}}>
                                    <Text style={styles.text}>Cancel</Text>
                                </TouchableOpacity>
                            </Left>
                            <Body>
                                <Title>MTN VTU</Title>
                            </Body>
                            <Right>
                                <TouchableOpacity onPress={() => {this.toggleModal(!this.state.modalVisible)}}>
                                    <Text style={styles.text}>Done</Text>
                                </TouchableOpacity>
                            </Right>
                        </Header>
                    </View>
                </Modal>
            </View>
        );
    }
}
export default AirtimeModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modal: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: 'white',
        // padding: 100
     },
     text: {
        color: Colors.PRIMARY,
        fontSize: fsr(2.4),
        fontWeight: '600'
     }
});