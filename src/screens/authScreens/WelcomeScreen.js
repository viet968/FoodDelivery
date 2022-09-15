import React,{useState,useRef,useEffect,useContext} from 'react';
import {View,Text,StyleSheet,StatusBar,TextInput,SafeArea,Image} from 'react-native'
import Header from '../../components/Header'
import {colors,parameters,title} from '../../global/styles'
import {Icon,Button,SocialIcon} from 'react-native-elements'
import Swiper from 'react-native-swiper'
import {SignInContext} from '../../context/authContext';
import auth from '@react-native-firebase/auth';


export default function WelcomeScreen ({navigation}){

    const {dispatchSignedIn} = useContext(SignInContext)

    useEffect(()=>{
        auth().onAuthStateChanged((user)=>{
           if(user){
            dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
           }else{
            dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
           } 
        })
        
    },[])

    return(
        <View style={{flex:1}}>
        {/* welcome */}
            <View style={{flex:3,justifyContent: 'flex-start',alignItems:'center',paddingTop:20}}> 
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:'bold'}}>DISCOVER RESTAURANT</Text>
                <Text style={{fontSize: 26,color:colors.buttons,fontWeight:'bold'}}>IN YOUR AREA</Text>
            </View>
        
            {/* swiper */}
        <View style={{flex:4,justifyContent:'center'}}>
            <Swiper autoplay={true}>
            {/* image 1 */}
                <View style={styles.slide1}>
                    <Image source={{uri:"https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg"}} 
                        style = {{height:"100%",width:"100%"}}
                    />
                </View>
                {/* image 2 */}
                <View style={styles.slide2}>
                    <Image source={{uri:"https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg"}} 
                        style = {{height:"100%",width:"100%"}}
                    />
                </View>
                {/* image 3 */}
                <View style={styles.slide3}>
                    <Image source={{uri:"https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg"}} 
                        style = {{height:"100%",width:"100%"}}
                    />
                </View>

            </Swiper>
        </View> 


        <View style={{flex:4, justifyContent:"flex-end"}}>
        {/* button sign in */}
            <View style={{marginTop:30,  marginHorizontal:20}}>
                <Button buttonStyle = {parameters.styleButton}
                    title = "SIGN IN"
                    titleStyle = {parameters.buttonTitle}
                    onPress = {() =>{
                        navigation.navigate("SignInScreen")
                    }}
                />
            </View>
        {/* button create account */}
            <View style={{marginTop:20,marginBottom:20,marginHorizontal:20}}>
                <Button 
                    title="Create your account"
                    buttonStyle={styles.styleButton}
                    titleStyle={styles.buttonTitle}
                    onPress = {() =>{navigation.navigate("SignUpScreen")}}
                />
            </View>
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    slide1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9DD6eB',
    },
    slide2:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#97CAE5',
    },
    slide3:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#92BB09',
    },
    styleButton:{
        backgroundColor:"white",
        alignContent:"center",
        alignItems:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"grey",
        height:50,
        width:'100%',
    },
    buttonTitle:{
        color:"black",
        fontWeight:"bold",
        fontSize:20,
        alignItems:"center",
        justifyContent:"center",
    }
})