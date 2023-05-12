import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {FlatGrid} from 'react-native-super-grid';

class Learn extends Component {
  constructor(props){
    super(props);
    this.state = {
        activeMenu:'in Progress',

        paradigmaList: [
          {
            paradigmaName: 'Procedural Programming',
            category: 'Programming',
            backgroundColor: '#60a5f0',
            progress: '80',
            progressColor: '#0a7ff1',
          },
          {
            paradigmaName: 'Functional Programming',
            category: 'Programming',
            backgroundColor: '#f8b159',
            progress: '10',
            progressColor: '#fca345',
          },
          {
            paradigmaName: 'Object Oriented Programming',
            category: 'Programming',
            backgroundColor: '#7670c8',
            progress: '40',
            progressColor: '#605ab0',
          },
        ]
    };
  }
  render() {
    return (
      <View 
        style={{
          flex: 1,
          backgroundColor: '#469EDE',
        }}> 
        <View style={{margin:20}}>
          <Text style={{
            color: '#fff',
            fontSize: 28,
            fontWeight: 'bold',
          }}>Hai, Aliyah</Text>
          <View style={{flexDirection: 'row', marginTop: 10,}}>
            <TouchableOpacity 
              style={
                this.state.activeMenu == 'All'
                ? styles.headerButtonActive 
                : styles.headerButtonNotActive
                }
                onPress={() => this.setState({activeMenu: 'All'})}>
              
              <Text style={
                this.state.activeMenu == 'All' 
                ? styles.headerButtonTextActive 
                : styles.headerButtonTextNotActive
              }>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.activeMenu == 'in Progress' 
                ? styles.headerButtonActive 
                : styles.headerButtonNotActive
                }
                onPress={() => this.setState({activeMenu: 'in Progress'})}>
              <Text style={
                this.state.activeMenu == 'in Progress' 
                ? styles.headerButtonTextActive 
                : styles.headerButtonTextNotActive
              }>In Progress</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.activeMenu == 'Completed' 
                ? styles.headerButtonActive 
                : styles.headerButtonNotActive
                }
                onPress={() => this.setState({activeMenu: 'Completed'})}>
              <Text style={
                this.state.activeMenu == 'Completed' 
                ? styles.headerButtonTextActive 
                : styles.headerButtonTextNotActive
              }>Completed</Text>
            </TouchableOpacity>
          </View>
        </View>
        <LinearGradient 
          colors={['#c9e9f4', '#e1f6ed', '#f2dfe3']} 
          style={{ flex: 1, borderTopRightRadius: 40,}}>
            <View style={{flex: 1}}>
              <FlatGrid
                style={{flex:1}}
                itemDimension={250}
                data={this.state.paradigmaList}
                renderItem={({item}) => (
                  <TouchableOpacity 
                    style={{
                      backgroundColor: item.backgroundColor,
                      borderTopRightRadius: 40,
                      borderBottomLeftRadius: 20,
                      borderTopLeftRadius: 5,
                      borderBottomRightRadius: 5,
                      elevation: 3,
                      padding: 20,}}>
                    <View 
                      style={{
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        borderRadius: 50,
                        paddingHorizontal: 10,
                        width: 130,
                        paddingVertical: 5, 
                        marginBottom: 20,}}>
                      <Text
                        style={{
                          color: '#fff',
                          textAlign: 'center',
                        }}>{item.category}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}>{item.paradigmaName}
                    </Text>
                    <Text 
                      style={{
                        color: '#fff',
                        marginTop: 30,
                      }}>Progress</Text>
                    <View style={{flexDirection: 'row',}}>
                      <View
                        style={{
                          backgroundColor: item.progressColor,
                          paddingVertical: 3,
                          marginTop: 5,
                          width: item.progress + '%',
                          borderTopLeftRadius: 50,
                          borderBottomLeftRadius: 50,
                        }}>
                      </View>
                      <View
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.3)',
                          paddingVertical: 3,
                          marginTop: 5,
                          borderTopRightRadius: 50,
                          borderBottomRightRadius: 50,
                          width: 100 - parseInt(item.progress) + '%',
                        }}>
                      </View>
                    </View>
                    
                    
                  </TouchableOpacity>
                )}/>
            </View>
        </LinearGradient>
        
      </View>
    ) 
  }  
}

const styles = StyleSheet.create({
  headerButtonActive:{
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    borderRadius: 100,
    marginRight: 10,
    paddingVertical: 8,
  },
  headerButtonNotActive:{
    paddingHorizontal: 30,
    backgroundColor: '#469EDE',
    borderRadius: 100,
    marginRight: 10,
    paddingVertical: 8,
  },

  headerButtonTextActive:{
    color: '#469EDE',
  },
  headerButtonTextNotActive:{
    color: '#fff',
  }
})

export default Learn;