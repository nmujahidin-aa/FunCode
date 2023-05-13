import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil';

const Profile = () => {
  return (
    <LinearGradient 
        colors={['#c9e9f4', '#e1f6ed', '#f2dfe3']} 
        style={{ flex: 1 }}>

          <View
            style={{
              backgroundColor: '#60a5f0',
              height: 200,alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Image
                source={require('../../Assets/Images/logo.png')}
                style={{
                  width: 150,
                  height: 150,
                  backgroundColor: '#dfdfdf',
                  padding: 20,
                  borderRadius: 100,
                }}/>
          </View>
          
          {/* My Profile */}
          <View
            style={{
              backgroundColor: '#fff',
              margin: 10,
              borderRadius: 5,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                backgroundColor: '#fca345',
                paddingVertical: 5,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                color: '#fff',
              }}>My Profile
            </Text>

            <View
              style={{
                backgroundColor: '#fff',
                paddingVertical: 10,
              }}>
              <Text 
              style={{
                paddingLeft: 10,
                fontWeight: 'bold',
                fontSize: 11,
              }}>
                Nama
              </Text>
              <Text 
              style={{
                paddingLeft: 10,
                fontSize: 15,
              }}>
                Nur Aliyah Rohma
              </Text>
            </View>

            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.05)',
                paddingVertical: 10,
              }}>
              <Text 
              style={{
                paddingLeft: 10,
                fontWeight: 'bold',
                fontSize: 11,
              }}>
                Email
              </Text>
              <Text 
              style={{
                paddingLeft: 10,
                fontSize: 15,
              }}>
                nur.aliyah.2105336@students.um.ac.id
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#fff',
                paddingVertical: 10,
              }}>
              <Text 
              style={{
                paddingLeft: 10,
                fontWeight: 'bold',
                fontSize: 11,
              }}>
                Password
              </Text>
              <Text 
              style={{
                paddingLeft: 10,
                fontSize: 15,
              }}>
                ••••••••••
              </Text>
            </View>

            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.05)',
                paddingVertical: 10,
              }}>
              <Text 
              style={{
                paddingLeft: 10,
                fontWeight: 'bold',
                fontSize: 11,
              }}>
                Lokasi
              </Text>
              <Text 
              style={{
                paddingLeft: 10,
                fontSize: 15,
              }}>
                Indonesia
              </Text>
            </View>

            <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: '#60a5f0',
                paddingHorizontal: 135,
                paddingVertical: 10,
                borderRadius: 5,
              }}>
            <FontAwesomeIcon icon={faPencil} size={12} color="#fff"
              style={{
                paddingTop: 22,
              }}/>
            <Text
              style={{
                color: '#fff',
              }}>Edit Profile
            </Text>
            </TouchableOpacity>
          </View>

            

          </View>

          <View>
            
          </View>
    </LinearGradient>
  )
}

export default Profile;