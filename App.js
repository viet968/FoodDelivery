import React from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native'

import {SignInContextProvider} from './src/context/authContext'
// import SignInScreen from './src/screens/authScreens/SignInScreen'
// import WelcomeScreen from './src/screens/authScreens/WelcomeScreen'
import RootNavigator from './src/navigation/RootNavigator'

export default function App() {
    return (
    <SignInContextProvider>
        <View style={styles.container}>
            <StatusBar barStyle="light-content" 
                backgroundColor = "#ff8c52"
            />
            
            {/* <SignInScreen /> */}
            {/* <WelcomeScreen/> */}
            <RootNavigator/>
        </View>
    </SignInContextProvider>
)};  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
})