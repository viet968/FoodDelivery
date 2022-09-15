import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import HomeHeader from '../components/HomeHeader'

export default function BusinessConsoleScreen() {
    return(
        
        <View style = {styles.container}>
            <Text style =  {{color:'black'}}>Business console</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});