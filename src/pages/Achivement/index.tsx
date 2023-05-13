import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';

const Achivement = () => {
  return (
    <LinearGradient 
        colors={['#c9e9f4', '#e1f6ed', '#f2dfe3']} 
        style={{ flex: 1 }}>

          <View 
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#fff',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              padding: 7,
              elevation: 5
            }}>
            <Image 
              source={require('../../Assets/Images/icon.png')}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: '#000',
              }}>Achivement</Text>
          </View>
              
          <View
            style={{
              backgroundColor: '#fff',
              margin: 10,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 5,
            }}
          >
            <Image 
              source={require('../../Assets/Images/certificate.png')}
              style={{
                width: 350,
                height: 262.5,
                margin: 10,

              }}
            />
            <TouchableOpacity
            style={{
              backgroundColor: '#60a5f0',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 50,
              marginBottom: 10,
              flexDirection: 'row',
            }}>
              
            <Text
              style={{
                color: '#fff',
                padding: 2,
              }}
              >
              Unduh Sertifikat
            </Text>
            <Text
              style={{
                padding: 5,
              }}>
              <FontAwesomeIcon 
                icon={faDownload} 
                size={14} 
                color="#fff" />
            </Text>

            </TouchableOpacity>
          </View>
    </LinearGradient>

  )
}

export default Achivement;