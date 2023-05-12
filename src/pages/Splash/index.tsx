import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(()=> {
            navigation.replace('Welcome')
        }, 2000);
    });
  return (
    <View style={{flex: 1, backgroundColor: '#212529'}}>
        <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 350,
        }}>
          <Image
          source={require('../../Assets/Images/icon.png')}
          style={{
            height: 40,
            width: 40,
          }} />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#FFFFFF',
            fontFamily: 'poppins',
          }}>
          Fun
          <Text style={{color: '#2396f2'}}>Code</Text>
        </Text>
        </View>
    </View>
  );
};

export default Splash;