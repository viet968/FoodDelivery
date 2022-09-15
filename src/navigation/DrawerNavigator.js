import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';
import DrawerContent from '../components/DrawerContent';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator 
            drawerContent = {props => <DrawerContent {...props} />}
        >
        {/* Home screen */}
            <Drawer.Screen 
                name = "RootClientTabs"
                component = {RootClientTabs}
                options={{ 
                    title: 'Home' ,
                    headerShown: false,
                    drawerIcon: ({focussed,size}) => (
                        <Icon type ='material'
                            name = 'home'
                            color = {focussed ? '#7cc' : colors.grey2}
                            size = {size}
                        />
                        
                    )
                    }}
               
            />

            {/* Business screen*/}
            <Drawer.Screen 
                name = "Business console"
                component = {BusinessConsoleScreen}
                options={{ 
                    title: 'Business console' ,
                    headerShown: false,
                    drawerIcon: ({focussed,size}) => (
                        <Icon type ='material'
                        name = "domain"
                        color = {focussed ? '#7cc' : colors.grey2}
                         size = {size}
                        />
                    )
                    }}
               
            />
        </Drawer.Navigator>
    )
}