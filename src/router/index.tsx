import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Splash, Login, Register, 
    Learn, Welcome, Quiz, Achivement, 
    Profile, BasicQuestion, ProceduralProgramming, 
    FunctionalProgramming, ObjectOrientedProgramming, 
    Quiz_1, Quiz_2, Quiz_3, Quiz_4, Quiz_5, Quiz_6, Quiz_7, Quiz_8, Quiz_9,
    Lesson1_1, Lesson1_2, Lesson1_3, Lesson1_4, Lesson1_5,Lesson1_6,
    Lesson2_1, Lesson2_2, Lesson2_3, Lesson2_4, Lesson2_5,
    Lesson3_1, Lesson3_2, Lesson3_3, Lesson3_4, Lesson3_5,
    Lesson10_1, Lesson10_2, Lesson10_3, Lesson10_4, Lesson10_5,Lesson10_6,
    Lesson20_1, Lesson20_2, Lesson20_3, Lesson20_4, Lesson20_5,
    Lesson100_1, Lesson100_2, Lesson100_3, Lesson100_4, Lesson100_5,Lesson100_6,
    Lesson200_1, Lesson200_2, Lesson200_3, Lesson200_4, Lesson200_5,Lesson200_6,
    Lesson300_1, Lesson300_2, Lesson300_3, Lesson300_4,
    Lesson400_1, Lesson400_2, Lesson400_3,} from '../pages';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return(
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                // Floating Tab Bar
                tabBarStyle:{
                    backgroundColor: '#469EDE',
                    position: 'absolute',
                    bottom: -15,
                    // Max Height
                    height: 80,
                    borderRadius: 20,
                    ...style.shadow
                }
            }}>

            <Tab.Screen name="Learn" component={Learn} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center',}}>
                        <Image 
                            source = {require('../Assets/Images/learn.png')}
                            resizeMode='contain'
                            style={{
                                width : 20,
                                height: 20,
                                tintColor: focused ? '#fff' : '#bdbfc0',
                        }}/>
                        <Text
                        style={{
                            color: focused ? '#ffffff' : '#bdbfc0', fontSize: 12,
                        }}>Learn</Text>
                    </View>
                )
            }} />

            <Tab.Screen name="Quiz" component={Quiz} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center',}}>
                        <Image 
                            source = {require('../Assets/Images/quiz.png')}
                            resizeMode='contain'
                            style={{
                                width : 20,
                                height: 20,
                                tintColor: focused ? '#fff' : '#bdbfc0',
                        }}/>
                        <Text
                        style={{
                            color: focused ? '#ffffff' : '#bdbfc0', fontSize: 12,
                        }}>Quiz</Text>
                    </View>
                )
            }} />
            
            <Tab.Screen name="Achivement" component={Achivement} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center',}}>
                        <Image 
                            source = {require('../Assets/Images/achivement.png')}
                            resizeMode='contain'
                            style={{
                                width : 20,
                                height: 20,
                                tintColor: focused ? '#ffffff' : '#bdbfc0',
                        }}/>
                        <Text
                        style={{
                            color: focused ? '#ffffff' : '#bdbfc0', fontSize: 12,
                        }}>Achivement</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center',}}>
                        <Image 
                            source = {require('../Assets/Images/account.png')}
                            resizeMode='contain'
                            style={{
                                width : 20,
                                height: 20,
                                tintColor: focused ? '#ffffff' : '#bdbfc0',
                        }}/>
                        <Text
                        style={{
                            color: focused ? '#ffffff' : '#bdbfc0', fontSize: 12,
                        }}>Profile</Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    );
};

const style = StyleSheet.create({
    shadow:{
        // Shadow
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 3.5,
        eleation: 5,
        shadowOffset:{
            width: 10,
            height: 10,
        }
    }
});

const Router = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="MainApp" component={MainApp} />
            <Stack.Screen name="BasicQuestion" component={BasicQuestion} />
            <Stack.Screen name="ProceduralProgramming" component={ProceduralProgramming} />
            <Stack.Screen name="FunctionalProgramming" component={FunctionalProgramming} />
            <Stack.Screen name="ObjectOrientedProgramming" component={ObjectOrientedProgramming} />
            <Stack.Screen name="Quiz_1" component={Quiz_1} />
            <Stack.Screen name="Quiz_2" component={Quiz_2} />
            <Stack.Screen name="Quiz_3" component={Quiz_3} />
            <Stack.Screen name="Quiz_4" component={Quiz_4} />
            <Stack.Screen name="Quiz_5" component={Quiz_5} />
            <Stack.Screen name="Quiz_6" component={Quiz_6} />
            <Stack.Screen name="Quiz_7" component={Quiz_7} />
            <Stack.Screen name="Quiz_8" component={Quiz_8} />
            <Stack.Screen name="Quiz_9" component={Quiz_9} />

            <Stack.Screen name="Lesson1_1" component={Lesson1_1} />
            <Stack.Screen name="Lesson1_2" component={Lesson1_2} />
            <Stack.Screen name="Lesson1_3" component={Lesson1_3} />
            <Stack.Screen name="Lesson1_4" component={Lesson1_4} />
            <Stack.Screen name="Lesson1_5" component={Lesson1_5} />
            <Stack.Screen name="Lesson1_6" component={Lesson1_6} />
            
            <Stack.Screen name="Lesson2_1" component={Lesson2_1} />
            <Stack.Screen name="Lesson2_2" component={Lesson2_2} />
            <Stack.Screen name="Lesson2_3" component={Lesson2_3} />
            <Stack.Screen name="Lesson2_4" component={Lesson2_4} />
            <Stack.Screen name="Lesson2_5" component={Lesson2_5} />

            <Stack.Screen name="Lesson3_1" component={Lesson3_1} />
            <Stack.Screen name="Lesson3_2" component={Lesson3_2} />
            <Stack.Screen name="Lesson3_3" component={Lesson3_3} />
            <Stack.Screen name="Lesson3_4" component={Lesson3_4} />
            <Stack.Screen name="Lesson3_5" component={Lesson3_5} />

            <Stack.Screen name="Lesson10_1" component={Lesson10_1} />
            <Stack.Screen name="Lesson10_2" component={Lesson10_2} />
            <Stack.Screen name="Lesson10_3" component={Lesson10_3} />
            <Stack.Screen name="Lesson10_4" component={Lesson10_4} />
            <Stack.Screen name="Lesson10_5" component={Lesson10_5} />
            <Stack.Screen name="Lesson10_6" component={Lesson10_6} />

            <Stack.Screen name="Lesson20_1" component={Lesson20_1} />
            <Stack.Screen name="Lesson20_2" component={Lesson20_2} />
            <Stack.Screen name="Lesson20_3" component={Lesson20_3} />
            <Stack.Screen name="Lesson20_4" component={Lesson20_4} />

            <Stack.Screen name="Lesson100_1" component={Lesson100_1} />
            <Stack.Screen name="Lesson100_2" component={Lesson100_2} />
            <Stack.Screen name="Lesson100_3" component={Lesson100_3} />
            <Stack.Screen name="Lesson100_4" component={Lesson100_4} />
            <Stack.Screen name="Lesson100_5" component={Lesson100_5} />
            <Stack.Screen name="Lesson100_6" component={Lesson100_6} />

            <Stack.Screen name="Lesson200_1" component={Lesson200_1} />
            <Stack.Screen name="Lesson200_2" component={Lesson200_2} />
            <Stack.Screen name="Lesson200_3" component={Lesson200_3} />
            <Stack.Screen name="Lesson200_4" component={Lesson200_4} />
            <Stack.Screen name="Lesson200_5" component={Lesson200_5} />
            <Stack.Screen name="Lesson200_6" component={Lesson200_6} />

            <Stack.Screen name="Lesson300_1" component={Lesson300_1} />
            <Stack.Screen name="Lesson300_2" component={Lesson300_2} />
            <Stack.Screen name="Lesson300_3" component={Lesson300_3} />
            <Stack.Screen name="Lesson300_4" component={Lesson300_4} />

            <Stack.Screen name="Lesson400_1" component={Lesson400_1} />
            <Stack.Screen name="Lesson400_2" component={Lesson400_2} />
            <Stack.Screen name="Lesson400_3" component={Lesson400_3} />

        </Stack.Navigator>
    );
};

export default Router;
