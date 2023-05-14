import React, { useState, Component } from 'react';
import { SafeAreaView, TouchableOpacity, ScrollView, View, Text, TouchableWithoutFeedback, LayoutAnimation, UIManager, Platform, Animated } from 'react-native';
import data from '../../../data/FunctionalProgramming/Component';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import {COLORS, SIZES} from '../../../constants';

import {FlatGrid} from 'react-native-super-grid';

const FunctionalProgramming = ({item}) => {

  const [expanded, setExpanded] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const toggleAccordion = () => {
    setExpanded(!expanded);
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const rotateIcon = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const renderItem = ({ item }) => (
    <View style={{backgroundColor: '#fff', borderRadius: 5,}}>
        <View style={{
            flexDirection: 'row',
        }}>
            <FontAwesomeIcon 
                icon={faPrint}
                size={30} 
                color= '#66b4f1'
                style={{
                    paddingVertical: 30,
                    marginLeft: 20,
                }} 
            />
            <View>
                <Text style={{
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                    marginHorizontal: 10, 
                    marginTop: 10, }}>Lesson
                </Text>
                <Text style={{
                    paddingHorizontal: 10, 
                    fontWeight: 'bold', 
                    fontSize: 20,}}>{item.materi}
                </Text>
            </View>
        </View>
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.blue,
                marginHorizontal: 10,
                borderRadius: 5,
                marginVertical: 10,
            }}>
            <Text style={{textAlign: 'center', color: '#fff', paddingVertical: 10,}}>Learn</Text>
        </TouchableOpacity>
    </View>
  );

  const renderGroup = ({ item }) => (
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <TouchableWithoutFeedback onPress={toggleAccordion}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, paddingVertical: 10 }}>{item.title}</Text>
          <Animated.View style={{ transform: [{ rotate: rotateIcon }] }}>
            <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} size={20} color={expanded ? 'red' : 'green'} />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      {expanded && (
        <Animated.View style={{ opacity: animation }}>
          <FlatGrid data={item.items} renderItem={renderItem} itemDimension={250} />
        </Animated.View>
      )}
    </View>
  );

  return (
    <View style={{backgroundColor: '#efeef3', flex:1,}}>
        <View style={{backgroundColor: '#f8b159'}}>
            <Text style={{
                textAlign:'center', 
                fontSize: 20,
                paddingVertical: 20,
                color: COLORS.white,
                fontWeight: 'bold',
                }}>Functional Programming
            </Text>
        </View>
        
        {/* Component */}
        <FlatGrid
            data={data}
            renderItem={renderGroup}
            itemDimension={250}
        />
    </View>
  );
};

export default FunctionalProgramming;