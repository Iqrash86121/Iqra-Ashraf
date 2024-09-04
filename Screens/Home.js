import { Image } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProfileScreen from './UserProfileScreen'
import MessageScreen from './MessageScreen'
import JobListingScreen from './JobListingScreen'
import NotificationScreen from './NotificationScreen'
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

 const Home=() =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name="Jobs"
                component={JobListingScreen}
                options={{ headerShown: false ,
                    tabBarIcon:({color, size})=>(
                        <Ionicons name="briefcase" size={24} color="#333" /> 
                    )
                }} />
            <Tab.Screen name="Profile"
                component={UserProfileScreen}
                options={{ headerShown: false ,
                    tabBarIcon:({color, size})=>(
                        <Ionicons name="person" size={24} color="#333" /> 
                    )
                }} />
            <Tab.Screen name="Message"
                component={MessageScreen}
                options={{ headerShown: false ,
                    tabBarIcon:({color, size})=>(
                        <Ionicons name="chatbubble" size={24} color="#333" />
                    )
                }} />
            
                  <Tab.Screen name="Notifications"
                component={NotificationScreen}
                options={{ headerShown: false ,
                    tabBarIcon:({color, size})=>(
                        <Ionicons name="notifications" size={24} color="#333" /> 
                    )
                }} />
        </Tab.Navigator>
    );
}
export default Home