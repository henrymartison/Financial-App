import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { TouchableOpacity } from '../TouchableOpacity'

import styles from './styles';
import Colors from '../../../constants/Colors';

export default class Search extends Component {
  state = {
    value: ''
  };

  actionClearSearch = () => {
    this.setState({ value: '' });
  };

  actionSubmit = () => {
    // const { value } = this.state;
    const { navigate, typeRequest } = this.props;

    // if (value) {
    //   navigate('SearchResults', {
    //     typeRequest,
    //     name: value,
    //     id: null
    //   });
    // }
  };

  render() {
    const { value } = this.state;

    return (
      <View style={styles.container}>
        {
          this.props.arrowCheck ? 
          <TouchableOpacity onPress={this.props.onPress}>
            <Feather name='arrow-left' size={28} style={{paddingRight: 10}} />
          </TouchableOpacity>
        : null
        }
        <View style={styles.containerInput}>
          <View style={styles.inputDirection}>
            <Feather
              style={styles.icon}
              name="search"
              size={20}
              color={Colors.darkBlue}
            />
            <TextInput
              style={styles.textInput}
              onSubmitEditing={this.actionSubmit}
              onChangeText={this.props.onChangeText}
              value={value}
              returnKeyType="search"
              keyboardType="default"
              blurOnSubmit
              multiline={false}
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholderTextColor={Colors.darkBlue}
              placeholder="Search Contacts..."
            />
            {value.length > 0 && (
              <TouchableOpacity onPress={this.actionClearSearch}>
                <Feather
                  style={styles.icon}
                  name="x"
                  size={20}
                  color={Colors.darkBlue}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}