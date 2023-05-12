import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Splash, Login, Register, Learn, Welcome, Code, Bookmark, Achivement, Account} from '../pages';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) =>(
    <TouchableOpacity
        style ={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...style.shadow,
        }} 
            onPress = {onPress}
        >
        <View 
            style={{
                width: 70,
                height: 70,
                borderRadius: 100,
                backgroundColor: 'red',
            }}
                {...children}
            ></View>
        
    </TouchableOpacity>
);

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
            
            <Tab.Screen name="Code" component={Code} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center',}}>
                        <Image 
                            source = {require('../Assets/Images/code.png')}
                            resizeMode='contain'
                            style={{
                                width : 20,
                                height: 20,
                                tintColor: focused ? '#ffffff' : '#dfdfdf',
                        }}/>
                        <Text
                        style={{
                            color: focused ? '#ffffff' : '#dfdfdf', fontSize: 12,
                        }}>Code</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Bookmark" component={Bookmark} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center',}}>
                        <Image 
                            source = {require('../Assets/Images/bookmark.png')}
                            resizeMode='contain'
                            style={{
                                width : 20,
                                height: 20,
                                tintColor: focused ? '#ffffff' : '#dfdfdf',
                        }}/>
                        <Text
                        style={{
                            color: focused ? '#ffffff' : '#dfdfdf', fontSize: 12,
                        }}>Bookmark</Text>
                    </View>
                )
            }} />

            <Tab.Screen name="Learn" component={Learn} options={{
                tabBarIcon: ({focused})=>(
                    <Image
                        source = {require('../Assets/Images/home.png')}
                        resizeMode='contain'
                        style={{
                            width : 20,
                            height: 20,
                            tintColor: '#fff'
                    }}/>
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props}/>
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
                                tintColor: focused ? '#ffffff' : '#dfdfdf',
                        }}/>
                        <Text
                        style={{
                            color: focused ? '#ffffff' : '#dfdfdf', fontSize: 12,
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
                                tintColor: focused ? '#ffffff' : '#dfdfdf',
                        }}/>
                        <Text
                        style={{
                            color: focused ? '#ffffff' : '#dfdfdf', fontSize: 12,
                        }}>Account</Text>
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
