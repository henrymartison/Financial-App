import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  Image,
  Picker
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Dropdown } from 'react-native-material-dropdown';

import { TouchableOpacity } from '../commons/TouchableOpacity';
import Colors from '../../constants/Colors';
import { fsr } from '../commons/metrics';

class Form extends Component {
  state = {
    chosenLabel: ''
  };

  renderPicker() {
    return (
      <Picker
        style={styles.pickerContainer}
        onValueChange={itemValue => this.setState({ chosenLabel: itemValue })}
      >
        <Picker.Item style={styles.pickerItem} label='One-time' value='key1' />
        <Picker.Item style={styles.pickerItem} label='Daily' value='key2' />
        <Picker.Item style={styles.pickerItem} label='Monthly' value='key3' />
      </Picker>
    );
  }

  render() {
    let data = [
      { value: 'One time' },
      { value: 'Hourly' },
      { value: 'Daily' },
      { value: 'Weekly' },
      { value: 'Monthly' },
      { value: 'Yearly' }
    ];

    return (
      <View style={styles.container}>
        <BlurView tint='light' intensity={50} style={styles.imageView}>
          <Image
            source={{
              uri:
                'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png'
            }}
            style={styles.image}
          />
        </BlurView>

        <View style={styles.formContainer}>
          <View style={{}}>
            <Text style={styles.titleText}>Mobile Number</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.textInput} keyboardType='number-pad' />
            </View>
          </View>
          <View style={{}}>
            <Text style={styles.titleText}>Enter Amount</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder='0'
                placeholderTextColor='black'
                keyboardType='decimal-pad'
              />
            </View>
          </View>
          <View style={{}}>
            {/* <Text style={styles.titleText}>Mobile Number</Text> */}
            <Dropdown
              label='Auto Renewal ?'
              data={data}
              fontSize={18}
              // containerStyle={{ backgroundColor: '#e8e8e8', marginTop: 10 }}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={() => null}>
            <Text style={styles.buttonText}>GET MTN VTU</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Form;

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageView: {
    height: height / 3
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover'
  },
  formContainer: {
    marginTop: 28,
    marginHorizontal: 20
  },
  inputContainer: {
    backgroundColor: '#e8e8e8',
    height: 45,
    borderRadius: 6
  },
  textInput: {
    flex: 1,
    color: 'black',
    paddingHorizontal: 14
  },
  titleText: {
    fontWeight: '600',
    fontSize: 17,
    paddingVertical: 13,
    paddingLeft: 8
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 5,
    marginTop: 17,
    marginBottom: 10
  },
  buttonText: {
    fontWeight: '600',
    fontSize: fsr(2.5),
    color: 'white'
  },
  pickerContainer: {
    justifyContent: 'center',
    flexDirection: 'column'
  }
});
