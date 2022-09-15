import React, { useState } from 'react';
import {View,Text,StyleSheet} from  'react-native';
import {Icon,withBadge} from 'react-native-elements'
import {colors,parameters} from '../global/styles'


export default function HomeHeader({navigation}){

    const BadgeIcon = withBadge(3)(Icon)


    return(
        <View style ={styles.header}>
        {/* menu */}
           <View style={{marginLeft:15,marginTop:5}}>
            <Icon name = "menu"
                type = "material"
                color = {colors.cardbackground}
                size = {32}
                onPress={() => {navigation.toggleDrawer();}}
            />
           </View>

        {/* title */}
        <View style={{alignItems: "center",justifyContent: "center"}}>
            <Text style={{color:"white", fontSize:25,fontWeight:"bold"}}>XpressFood</Text>
        </View>

        {/* cart */}
        <View style={{alignItems: "center",justifyContent: "center",marginRight:20}}>
            <BadgeIcon type = 'material'
                name = 'local-grocery-store' size ={35} 
                color = {colors.cardbackground}
            />
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        backgroundColor:colors.buttons,
        heighth:parameters.headerHeight,
        justifyContent: 'space-between',
    }
})