import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { TouchableOpacity } from '../commons/TouchableOpacity';

const BuyYourAirtime = ({ onPress }) => (
  <View style={styles.container}>
    <Text style={styles.header}>BUY YOUR AIRTIME</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={onPress} style={styles.productContainer}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png'
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={styles.productContainer}>
          <Image
            style={styles.image}
            source={{
              uri:
                'http://1.bp.blogspot.com/-P9Vsi5epKC8/VDnBvvu0ucI/AAAAAAAAFfo/XxdsXy50hgg/s1600/Logo%2BVodafone.png'
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.productContainer}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0011/7077/brand.gif?itok=XnjPRi2N'
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.productContainer}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://logoeps.com/wp-content/uploads/2012/10/airtel-logo-vector.png'
            }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
);
export default BuyYourAirtime;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // height: 200,
    marginTop: 25,
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
    backgroundColor: '#e9e9e9',
    marginLeft: 10
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'contain',
    borderRadius: 10
  }
});
