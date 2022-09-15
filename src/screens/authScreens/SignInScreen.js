import React,{useState,useRef,useContext} from 'react';
import {View,Text,StyleSheet,StatusBar,TextInput,Alert,ScrollView} from 'react-native'
import Header from '../../components/Header'
import {colors,parameters,title} from '../../global/styles'
import {Icon,Button,SocialIcon} from 'react-native-elements'
import * as Animatable from 'react-native-animatable'
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import {SignInContext} from '../../context/authContext';

// fomik dùng để lấy dữ liệu của text input

export default function SignInScreen ({navigation}) {

    const {dispatchSignedIn} = useContext(SignInContext)

    const[textInput2Fossued, setTextInput2Fossued] =useState(false)
  
    
    async function signIn(data) {
        try{
            const {password,email} = data
            const user = await auth().signInWithEmailAndPassword(email,password)
          
            if(user){
                dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
            }
        }catch(error){
            Alert.alert(error.name, error.message);
        }

        // dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
        
    }

    return(
        <View style={styles.container}>
        <ScrollView>

        
            {/* header */}
            <Header title = "My Account" type = 'arrow-back' navigation={navigation}/>

            {/* body */}
            <View style={styles.body,{alignItems:"center",marginTop:5}}>
                <Text style={styles.title}>Sign-In</Text>
            </View>

            {/* text note */}
            <View style={styles.body,{flexDirection:'column',alignItems: 'center',marginTop:10,}}>
                <Text style={styles.textNoteBody}>Please enter the email and password</Text>
                <Text style={styles.textNoteBody}>Registered with your account</Text>
            </View>
            
            {/* formik */}
            <Formik 
                initialValues = {{email: '', password:''}}
                onSubmit = {(values) => {
                    signIn(values);
                     }}
                >
                {(props)=>
                <View>
                {/* input */}
                <View style={styles.body,{flexDirection:'column',marginTop:20}}>
                
                    <View>
                        {/* email */}
                        <TextInput style = {styles.input1} 
                            placeholder = "Email"
                            placeholderTextColor="#86939e" 
                            
                            onChangeText = {props.handleChange('email')}
                            value = {props.values.email}
                            />
                    </View>
            
                    {/* passowrd View */}
                    <Animatable.View style = {styles.input2} >
                    {/* icon */}
                        <Icon name = "lock" size={20} iconStyle={{color:colors.grey3}} type = "material"/>
                        {/* password */}
                        <TextInput style = {{flex:1}}
                            placeholder = "Password"
                            placeholderTextColor="#86939e" 
                            secureTextEntry={true}
                            color = "black"
                           
                            onChangeText = {props.handleChange('password')}
                            value = {props.values.password}
                            />

                    </Animatable.View>
                
                </View> 
        
                {/* button sign in */}
                <View style={styles.buttonSection,{marginTop:30,  marginHorizontal:20}}>
                    <Button buttonStyle = {parameters.styleButton}
                        title = "SIGN IN"
                        titleStyle = {parameters.buttonTitle}
                        onPress = {props.handleSubmit}
                    />
                </View>
                </View>
                }    
            </Formik>

            

            {/* forgot pass */}
            <View style={{alignItems:"center",marginTop:15,flexDirection:"column"}}>
                <Text style = {{color:"grey",fontSize:15,textDecorationLine: 'underline'}}
                     onPress = {() =>{}}>Forgot Password ?</Text>
                <Text style = {{fontSize:20,color:"black",fontWeight:"bold",marginTop:25}}>OR</Text>
            </View>

            {/* button login by fb */}
            <View style={styles.buttonSection,{marginTop:30,  marginHorizontal:20,flexDirection:"column"}}>
                <SocialIcon title="Sign in with Facebook"
                    iconType = 'material'
                    button
                    type = "facebook"
                    style={styles.socialIcon}
                    onPress = {()=>{}}
                />
            </View>

            {/* button login by gg */}
            <View style={styles.buttonSection,{marginTop:10,  marginHorizontal:20,flexDirection:"column"}}>
                <SocialIcon title="Sign in with Google"
                    iconType = 'material-community'
                    button
                    type = 'google'
                    style={styles.socialIcon}
                    onPress = {()=>{}}
                />
            </View>

            {/* new on xpressfood */}
            <View style={{marginLeft:30,marginTop:10}}> 
                <Text style = {{color:"black",fontSize:15}}
                     onPress = {() =>{}}>New on XpressFood ?</Text>
            </View>

        {/* button create new account */}
            <View style={{alignItems:"flex-end",marginRight:20,marginTop:20}}>
                <Button 
                    title="Create an account"
                    buttonStyle={styles.createButton}
                    titleStyle={styles.createButtonTitle}
                    onPress = {() =>{navigation.navigate("SignUpScreen")}}
                />
            </View>
        </ScrollView>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        paddingLeft:5,
        paddingRight:5,
    },
    textNoteBody:{
        fontSize:15,
        color:'gray',
    },
    title:{
        fontSize: 24,
        color:colors.buttons,
        fontWeight: 'bold',
    },
    input1:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        color:colors.buttons,
        fontWeight: 'bold',
        paddingLeft:15,
    },
    input2:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius:12,
        flexDirection:"row",
        alignContent:"center",
        alignItems:"center",
       
        fontWeight: 'bold',
        paddingLeft:15,
    },
    buttonSection:{
        flex: 1,
        borderRadius:12,
      
    },
    socialIcon:{
        borderRadius:12,
        height:50
    },
    createButtonTitle:{
        color:colors.buttons,
        fontSize:16,
        fontWeight: 'bold',
        alignItems:'center',
        justifyContent:"center",
    },
    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.buttons,
        height:40,
        paddingHorizontal:20,
    
    }
})