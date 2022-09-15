import React from 'react';
import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/authScreens/WelcomeScreen'
import SignInScreen from '../screens/authScreens/SignInScreen'
import HomeScreen from '../screens/HomeScreen'
import RootClientTabs from './ClientTabs';
import RestaurantMapScreen from '../screens/RestaurantsMapScreen';
import DrawerNavigator from './DrawerNavigator';
import SignUpScreen from '../screens/authScreens/SignUpScreen';

const AuthStack = createNativeStackNavigator();

export default function AuthStackNavigator(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name = "WelcomeScreen"
                component = {WelcomeScreen}
                options = {{
                    headerShown: false
                    // ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

             <AuthStack.Screen 
                name = "SignInScreen"
                component = {SignInScreen}
                options = {{
                    headerShown: false
                    
                }}
            />

           

            <AuthStack.Screen 
                name = "SignUpScreen"
                component = {SignUpScreen}
                options = {{
                    headerShown: false
                    
                }}
            />


        </AuthStack.Navigator>
    )
}