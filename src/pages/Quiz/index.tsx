import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {FlatGrid} from 'react-native-super-grid';

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = {

        QuizList: [
          {
            QuizName: 'Procedural Programming',
            materi: 'Programming',
            backgroundColor: '#60a5f0',
          },
          {
            QuizName: 'Procedural Programming',
            materi: 'Programming',
            backgroundColor: '#60a5f0',
          },
          {
            QuizName: 'Procedural Programming',
            materi: 'Programming',
            backgroundColor: '#60a5f0',
          },
          {
            QuizName: 'Procedural Programming',
            materi: 'Programming',
            backgroundColor: '#60a5f0',
          },
          
        ]
    };
  }
  render() {
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
              }}>Quiz</Text>
          </View>

          <TouchableOpacity>
            
          </TouchableOpacity>

      </LinearGradient>
    ) 
  }  
}

const styles = StyleSheet.create({
 
})

export default Quiz;