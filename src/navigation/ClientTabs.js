import React from 'react';
import {} from 'react-native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import AccountScreen from '../screens/AccountScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import ClientStack from './clientStack';
import {colors} from '../global/styles'


const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){
    return(
        <ClientTabs.Navigator 
            screenOptions={{
        tabBarActiveTintColor: colors.buttons,
      }}
        >
            <ClientTabs.Screen
                name  = "HomeScreen"
                component = {HomeScreen}
                options = {
                    {
                        tabBarLabel: "Home",
                        headerShown: false,
                        tabBarIcon:({color,size}) =>(
                            <Icon type ='material'
                            name = 'home'
                            color = {color}
                            size = {size}
                        />
                        )
                    }
                }
            />

        <ClientTabs.Screen
                name  = "SearchScreen"
                component = {ClientStack}
                options = {
                    {
                        tabBarLabel: "Search",
                        headerShown: false,
                        tabBarIcon:({color,size}) =>(
                            <Icon type ='material'
                            name = 'search'
                            color = {color}
                            size = {size}
                        />
                        )
                    }
                }
            />

        <ClientTabs.Screen
                name  = "MyOrdersScreen"
                component = {MyOrdersScreen}
                options = {
                    {
                        tabBarLabel: "Orders",
                        headerShown: false,
                        tabBarIcon:({color,size}) =>(
                            <Icon type ='material'
                            name = 'view-list'
                            color = {color}
                            size = {size}
                        />
                        )
                    }
                }
            />

        <ClientTabs.Screen
                name  = "AccountScreen"
                component = {AccountScreen}
                options = {
                    {
                        tabBarLabel: "Account",
                        headerShown: false,
                        tabBarIcon:({color,size}) =>(
                            <Icon type ='material'
                            name = 'person'
                            color = {color}
                            size = {size}
                        />
                        )
                    }
                }
            />

       
        </ClientTabs.Navigator>
    )
}