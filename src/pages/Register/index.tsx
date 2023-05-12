import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: '#212529'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 40,
        }}>
        <Image
          source={require('../../Assets/Images/logo.png')}
          style={{
            width: 150,
            height: 150,
          }}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 10,
            color: '#FFFFFF',
          }}>
          Fun
          <Text style={{color: '#2396f2'}}>Code</Text>
        </Text>
        <Text
          style={{
            marginTop: 35,
            fontWeight: 'bold',
            color: '#FFFFFF',
          }}>
          Silahkan daftar di sini
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
          <Icon name="envelope" size={20} color="#bdbdbd" />
        </View>
        <TextInput
          value={email}
          style={{
            backgroundColor: '#FFFFFF',
            flex: 1,
            borderBottomRightRadius: 100,
            borderTopRightRadius: 100,
          }}
          placeholder="Masukkan nama kamu di sini"
          onChangeText={text => setName(text)}
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
          <Icon name="envelope" size={20} color="#bdbdbd" />
        </View>
        <TextInput
          value={email}
          style={{
            backgroundColor: '#FFFFFF',
            flex: 1,
            borderBottomRightRadius: 100,
            borderTopRightRadius: 100,
          }}
          placeholder="Masukkan email di sini"
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
          <Icon name="lock" size={20} color="#bdbdbd" />
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
          <Icon name="lock" size={20} color="#bdbdbd" />
        </View>
        <TextInput
          value={password}
          style={{
            backgroundColor: '#FFFFFF',
            flex: 1,
            borderBottomRightRadius: 100,
            borderTopRightRadius: 100,
          }}
          placeholder="Konfirmasi Password"
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
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Daftar
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
              color: '#FFFFFF',
            }}>
            Sudah punya akun?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#2396f2',
                marginLeft: 5,
              }}>
                Masuk
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
            color: '#FFFFFF',
          }}>
          Build With <Icon name="heart" size={14} color="red" />
        </Text>
      </View>
    </View>
  );
};

export default Register;
