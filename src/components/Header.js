import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {colors,parameters} from '../global/styles'
import {Icon} from 'react-native-elements'


export default function Header({title,type,navigation}) {
    return(
        <View style = {styles.header}>
            <View style = {{flexDirection:"row",paddingLeft:20,paddingTop:7}}>
                {/* Icon */}
                <Icon type = 'ion'
                    name = {type}
                    color = {colors.headerText}
                    size = {25}
                    onPress = {() => {navigation.goBack()}} />
            </View>

            {/* Title */}
            <View>
                <Text style = {styles.title}>{title}</Text>
               </View>

        </View>
    )
} 

const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        backgroundColor: colors.buttons,
        height:parameters.headerHeight,
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
        marginLeft:30
    },
})