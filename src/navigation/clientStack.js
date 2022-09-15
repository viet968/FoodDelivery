import React,{useLayoutEffect} from 'react';
import { Text, StyleSheet, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import MenuProductsScreen from '../screens/MenuProductsScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import PreferenceScreen from '../screens/PreferenceScreen';


const ClientSearch = createStackNavigator();

export default function ClientStack ({navigation,route}) {
    
    useLayoutEffect(()=>{
        const routeName = getFocusedRouteNameFromRoute(route);  
        console.log(routeName)
        if(routeName?.includes('RestaurantHomeScreen') || routeName?.includes('MenuProductsScreen') || routeName?.includes('PreferenceScreen')){
            navigation.setOptions({tabBarStyle:{display:'none'}})
        }else{
            navigation.setOptions({tabBarStyle:{display:'flex'}})
        }
    },[navigation,route])

    return (
        <ClientSearch.Navigator>
            <ClientSearch.Screen 
                name = "SearchScreenClient"
                component = {SearchScreen}
                options = {
                    () => ({
                        headerShown:false
                    })
                }
            />
                {/* Search result screen */}
            <ClientSearch.Screen 
                name = "SearchResultScreen"
                component = {SearchResultScreen}
                options = {
                    () => ({
                        headerShown:false
                    })
                }
            />

            {/* RestaurantHomeScreen */}
            <ClientSearch.Screen 
                name = "RestaurantHomeScreen"
                component = {RestaurantHomeScreen}
                options = {
                    () => ({
                        headerShown:false
                    })
                }
            />

             {/* MenuProductsScreen */}
             <ClientSearch.Screen 
                name = "MenuProductsScreen"
                component = {MenuProductsScreen}
                options = {
                    () => ({
                        headerShown:false
                    })
                }
            />

             {/* PreferenceScreen */}
             <ClientSearch.Screen 
                name = "PreferenceScreen"
                component = {PreferenceScreen}
                options = {
                    () => ({
                        headerShown:false
                    })
                }
            />

           
      </ClientSearch.Navigator>
    )
  
}

