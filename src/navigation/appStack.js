
import React from 'react';
import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/authScreens/WelcomeScreen'
import SignInScreen from '../screens/authScreens/SignInScreen'
import HomeScreen from '../screens/HomeScreen'
import RootClientTabs from './ClientTabs';
import RestaurantMapScreen from '../screens/RestaurantsMapScreen';
import DrawerNavigator from './DrawerNavigator';
import SignUpScreen from '../screens/authScreens/SignUpScreen';

const AppStack = createNativeStackNavigator();

export default function AppStackNavigator(){
    return(
        <AppStack.Navigator>
            <AppStack.Screen 
                name = "App"
                component = {DrawerNavigator}
                options = {{
                    headerShown: false
                    
                }}
            />

            <AppStack.Screen  
                name = "RestaurantMapScreen"
                component = {RestaurantMapScreen}
                options = {{
                    headerShown: false
                    
                }}
            />
        </AppStack.Navigator>
    )}
