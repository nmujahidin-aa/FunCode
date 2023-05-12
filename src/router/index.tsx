import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Splash, Login, Register, Learn, Welcome, Quiz, Achivement, Account} from '../pages';


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
            <Tab.Screen name="Account" component={Account} options={{
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
        </Stack.Navigator>
    );
};

export default Router;
