import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import Lottie from 'lottie-react-native';


const Welcome = ({navigation}) => {
  const animationRef = useRef()
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Lottie
            ref={animationRef}
            source={require('../../Assets/Lottie/rocket-launch.json')}
            loop={true}
            autoPlay={true}
            style={styles.lottie}
          />
          <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 380,
            backgroundColor: '#214a80',
            bottom: -30,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            paddingBottom: 20,
          }}>
          <Text
            style={{
              paddingTop: 20,
              fontSize: 40,
              fontWeight: 'bold',
              color: '#fff',
              fontFamily: 'poppins',
            }}>
            Fun
            <Text style={{color: '#2396f2'}}>Code</Text>
          </Text >
          <Text 
          style={{
            color: '#fff',
            fontWeight: 'bold',
            width: 245,
            textAlign: 'center',
            fontFamily: 'helvetica',
          }}>"Pemrograman tidak harus sulit - 
          <Text
          style={{
            color: '#00dbde',
          }}> mulai dari dasar </Text>
           dengan pembelajaran berparadigma"</Text>

           <Text
           style={{
            paddingTop: 70,
            color: '#fff',
            fontWeight: 'bold',
           }}>Let's go</Text>
           
           <View>
            <TouchableOpacity
              style={{
                backgroundColor: '#2396F2',
                paddingVertical: 14,
                marginTop: 20,
                marginHorizontal: 20,
                borderRadius: 100,
              }}
              onPress={() => navigation.navigate('Register')}>
              <Text
                style={{
                  color: '#FFFFFF',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  paddingHorizontal: 150,
                }}>
                Daftar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                paddingVertical: 14,
                marginTop: 5,
                marginHorizontal: 20,
                borderRadius: 100,
              }}
              onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: '#2396F2',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  paddingHorizontal: 150,
                }}>
                Masuk
              </Text>
            </TouchableOpacity>
           </View>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lottie: {
    top: -150,
  },
});

export default Welcome;