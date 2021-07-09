import react from 'react';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-easy-icon';
class WhatsApp extends react.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
        }}>
        <View
          style={{
            flex: 0.8,
            backgroundColor: '#075E54',
            paddingHorizontal: 15,
            paddingVertical: 10,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1.5}}>
            <Text style={{color: 'white', fontSize: 25, fontWeight: '600'}}>
              {' '}
              WhatsApp
            </Text>
          </View>
          <View style={{flex: 0.5}}></View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              paddingTop: 8,
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity style={{paddingHorizontal: 25}}>
              <Icon
                type="fontisto"
                name="search"
                color="white"
                size={22.5}></Icon>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                type="simple-line-icon"
                name="options-vertical"
                color="white"
                size={22.5}></Icon>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 4,
            backgroundColor: 'white',
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}></View>
      </View>
    );
  }
}
export default WhatsApp;
