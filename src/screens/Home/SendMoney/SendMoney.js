import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView
} from "react-native";
import { TouchableOpacity } from "../../../components/commons/TouchableOpacity";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import { fsr } from "../../../components/commons/metrics";


const {width, height} = Dimensions.get('window')

const transferMtds = [
    {to: 'App User',},
    {to: 'Bank Account', href: '_toBank'},
    {to: 'MoMo User', href: '_toMoMoUser'},
    {to: ' Scan QR Code'},
]

class SendMoney extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Transfer Money',
        headerLeft: (
          <TouchableOpacity style={{paddingLeft: 15}} onPress={() => navigation.goBack()}>
            <Ionicons name='md-arrow-back' size={26} />
          </TouchableOpacity>
        )
      })

      renderItems() {
          return transferMtds.map((item, i) => {
              return(
                <View key={i} style={{width: width/2, alignItems: 'center', justifyContent: 'center', paddingTop: 20}}>
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate(`${item.href}`)}
                        style={styles.roundContainer}
                    >
                        <Text style={{
                            color: 'black', fontWeight: '600', fontSize: fsr(3), paddingHorizontal: 15, paddingTop: 10
                        }}>{item.to}</Text>
                    </TouchableOpacity>
                </View>
              )
          })
      }

    render() {
        return (
            <ScrollView 
                style={styles.container}
                contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}    
            >
                <View style={styles.rowContainer}>
                    {this.renderItems()}
                </View>
            </ScrollView>
        );
    }
}
export default SendMoney;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
    },
    rowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    roundContainer: {
        backgroundColor: 'white',
        width: width/2 - 20,
        height: height/4,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20
    },
    text: {
        textAlign: 'center',
        fontSize: fsr(2.4)
    }
});