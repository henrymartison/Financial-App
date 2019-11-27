import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from "react-native";

const PayYourBills = (props) => (
    <View style={styles.container}>
        <Text style={styles.header}>BUY YOUR AIRTIME</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.productContainer}>
                    <Image
                        style={styles.image}
                         source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/23/DStv_Logo_2012.png'}} 
                    />
                </View>
                <View style={styles.productContainer}>
                    <Image
                        style={styles.image}
                         source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9D1tP2HRDQKZ5UayhXgzuYC-DRQ6LEodR3MmEpJA7eHrwawRv&s'}} 
                    />
                </View>
            </View>
        </ScrollView>
    </View>
    )
export default PayYourBills;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // height: 200,
        marginTop: 18,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    header: {
        fontWeight: '600',
        fontSize: 20,
        paddingBottom: 18,
        paddingHorizontal: 10
    },
    productContainer: {
        height: 90,
        width: 90,
        borderRadius: 10,
        backgroundColor: 'white',
        marginLeft: 10,
    },
    image: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'contain',
        borderRadius: 10
    }
});