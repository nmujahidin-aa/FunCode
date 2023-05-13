import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {FlatGrid} from 'react-native-super-grid';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = {

        QuizList: [
          {
            QuizName:'Quiz 1',
            category: 'Procedural',
            backgroundColor: '#60a5f0',
            route: 'Quiz_1',
            materi: 'Easy'
          },
          {
            QuizName:'Quiz 2',
            category: 'Procedural',
            backgroundColor: '#60a5f0',
            route: 'Quiz_2',
            materi: 'Medium'
          },
          {
            QuizName:'Quiz 3',
            category: 'Procedural',
            backgroundColor: '#60a5f0',
            route: 'Quiz_3',
            materi: 'Hard'
          },
          {
            QuizName:'Quiz 4',
            category: 'Functional',
            backgroundColor: '#fca345',
            route: 'Quiz_4',
            materi: 'Easy'
          },
          {
            QuizName:'Quiz 5',
            category: 'Functional',
            backgroundColor: '#fca345',
            route: 'Quiz_5',
            materi: 'Medium'
          },
          {
            QuizName:'Quiz 6',
            category: 'Functional',
            backgroundColor: '#fca345',
            route: 'Quiz_6',
            materi: 'Hard'
          },
          {
            QuizName:'Quiz 7',
            category: 'OOP',
            backgroundColor: '#605ab0',
            route: 'Quiz_7',
            materi: 'Easy'
          },
          {
            QuizName:'Quiz 8',
            category: 'OOP',
            backgroundColor: '#605ab0',
            route: 'Quiz_8',
            materi: 'Medium'
          },
          {
            QuizName:'Quiz 9',
            category: 'OOP',
            backgroundColor: '#605ab0',
            route: 'Quiz_9',
            materi: 'Hard'
          },
          
        ]
    };
  }
  render() {
    const { navigation } = this.props;
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

          <View
            style={{
              flex: 1,
            }}>
            <FlatGrid
              style={{flex:1}}
              itemDimension={100}
              data={this.state.QuizList}
              renderItem={({item}) => (

                <View
                  style={{
                    backgroundColor: item.backgroundColor,
                    borderRadius: 8,
                  }}>
                    <Text
                      style={{
                        paddingTop: 10,
                        paddingLeft: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#fff'
                      }}>{item.QuizName}
                    </Text>
                    <Text
                      style={{
                        fontSize: 8,
                        paddingVertical: 4,
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        width: 70,
                        height: 20,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        textAlign: 'center',
                        marginTop: 1,
                        marginHorizontal: 10,
                        color: '#fff'
                      }}>
                      {item.category}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        marginHorizontal: 10,
                        color: '#fff',
                        fontWeight: 'bold',
                        marginTop: 15,
                        marginBottom: 5,
                      }}>
                      {item.materi}
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate(item.route)}
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        padding: 10,
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>Mulai
                        <FontAwesomeIcon 
                          icon={faChevronRight} 
                          size={10} 
                          style={{
                            marginHorizontal: 30,
                          }} />
                      </Text>
                    </TouchableOpacity>
                </View>

            )}/>
          </View>

      </LinearGradient>
    ) 
  }  
}

const styles = StyleSheet.create({
 
})

export default Quiz;