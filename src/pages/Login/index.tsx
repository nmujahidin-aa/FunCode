import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
      <View style={{flex: 1,}}>
       <LinearGradient 
        colors={['#c9e9f4', '#e1f6ed', '#f2dfe3']} 
        style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 70,
        }}>
        <Image
          source={require('../../Assets/Images/icon.png')}
          style={{
            width: 200,
            height: 200,
          }}
        />
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            marginTop: 10,
            color: '#000',
          }}>
          Fun
          <Text style={{color: '#2396f2'}}>Code</Text>
        </Text>
        <Text
          style={{
            marginTop: 35,
            fontWeight: 'bold',
            color: '#000',
          }}>
          Silahkan masuk di sini
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 10}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            width: 50,
            borderBottomLeftRadius: 100,
            borderTopLeftRadius: 100,
          }}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color="#d9dfdf" />
        </View>
        <TextInput
          value={email}
          style={{
            backgroundColor: '#FFFFFF',
            flex: 1,
            borderBottomRightRadius: 100,
            borderTopRightRadius: 100,
          }}
          placeholder="Masukkan Email"
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 10}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            width: 50,
            borderBottomLeftRadius: 100,
            borderTopLeftRadius: 100,
          }}>
          <FontAwesomeIcon icon={faLock} size={20} color="#d9dfdf" />
        </View>
        <TextInput
          value={password}
          style={{
            backgroundColor: '#FFFFFF',
            flex: 1,
            borderBottomRightRadius: 100,
            borderTopRightRadius: 100,
          }}
          placeholder="Masukkan Password"
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#2396F2',
          paddingVertical: 14,
          marginTop: 20,
          marginHorizontal: 20,
          borderRadius: 100,
        }}
        onPress={() => navigation.navigate('MainApp')}>
        <Text
          style={{
            color: '#FFFFFF',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Masuk
        </Text>
      </TouchableOpacity>

      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          marginTop: 10,
        }}>
        
          <Text
            style={{
              color: '#000',
            }}>
            Belum punya akun?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#2396f2',
                marginLeft: 5,
              }}>
                Daftar
            </Text>
          </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#000',
            }}>
            Lupa Password
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 130,
        }}>
        <Text
          style={{
            color: '#13487e',
          }}>
          Build With <FontAwesomeIcon icon={faHeart} size={10} color="red"/>
        </Text>
      </View>
      </LinearGradient>
    </View>
  );
};

export default Login;
