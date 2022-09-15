import {StyleSheet, Text, View,ScrollView,TextInput,Alert} from 'react-native';
import React ,{useState}from 'react';
import {colors} from '../../global/styles'
import {Icon,Button} from 'react-native-elements'
import Header from '../../components/Header'
import { Formik } from 'formik';
import * as Animatable from 'react-native-animatable';
import auth from '@react-native-firebase/auth';

const initialValues = {phoneNumber:'', name:'', email:'', password:'',username:''}

export default function SignUpScreen({navigation}) {

    const[passwordFocussed, setPassordFocussed] = useState(false)
    const[passwordBlured,setPasswordBlured] = useState(false)

    async function signUp(data) {
        console.log(data);
        const {username, email, password} = data;
            
        try{
            await auth().createUserWithEmailAndPassword(email,password)
            console.log("USER ACCOUNT CREATED");
        }catch(error){
             if(error.code === 'auth/email-already-in-use'){
                Alert.alert(
                    'That email address is already inuse'
                )
            }
            if(error.code === 'auth/invalid-email'){
                Alert.alert(
                    'That email address is invalid'
                    )
            }
            else{
                Alert.alert(error.code)
            }
        }
    }

  return (
    <View style = {styles.container}>
        {/* header */}
        <Header title = "My Account" type = 'arrow-back' navigation={navigation}/>
        <ScrollView keyboardShouldPersistTaps = 'always'>
            <View style = {styles.view1}>
                <Text style = {styles.text1}>Sign-Up</Text>
                <Text style = {styles.text2}>Create an account</Text>
            </View>

            {/* fomik */}
            <Formik 
                initialValues = {initialValues} 
                onSubmit = {(values)=>{signUp(values)}}
                    >
                {(props)=>(
                    <View style = {styles.view2}>
                        {/* phone number input */}
                           <View style = {styles.view6}>
                                <TextInput 
                                    placeholder = "Mobile Number"
                                    style = {styles.input1}
                                    keyboardType = 'number-pad'
                                    autoFocus = {false}
                                    onChangeText = {props.handleChange('phoneNumber')}
                                    value = {props.values.phoneNumber}
                                    placeholderTextColor="#86939e"
                                />
                           </View>

                        {/* name input */}
                            <View style = {{...styles.view6,marginTop:20}}>
                                <TextInput 
                                    placeholder = "Name"
                                    style = {styles.input1}
                                    autoFocus = {false}
                                    onChangeText = {props.handleChange('name')}
                                    value = {props.values.name}
                                    placeholderTextColor="#86939e"
                                />
                           </View>

                           {/* username input */}
                           <View style = {{...styles.view6,marginTop:20}}>
                                <TextInput 
                                    placeholder = "User name"
                                    style = {styles.input1}
                                    autoFocus = {false}
                                    onChangeText = {props.handleChange('username')}
                                    value = {props.values.username}
                                    placeholderTextColor="#86939e"
                                />
                           </View>

                        {/* email view */}
                       <View style = {styles.view10}>
                            {/* email icon */}
                            <View>
                                    <Icon 
                                            name ='email'
                                            style ={styles.email}
                                            color ={colors.grey3}
                                            type ="material"
                                        />
                            </View>
                            
                            <View style = {styles.view11}>
                                {/* email input */}
                                    <TextInput 
                                        placeholder = "Email"
                                        style = {styles.input1}
                                        autoFocus = {false}
                                        onChangeText = {props.handleChange('email')}
                                        value = {props.values.email}
                                        placeholderTextColor="#86939e"
                                    />
                            </View>

                       </View>

                       {/* password view */}
                       <View style = {styles.view14}>
                            <Animatable.View animation = {passwordFocussed? "fadeInRight":"fadeInLeft"} duration = {400}>
                                       <Icon name ="lock" color ={colors.grey3}  type = "material" />
                            </Animatable.View>
                            <TextInput 
                                placeholder = "Password"
                                style = {{flex:1,color:colors.grey1,marginLeft:10,fontSize:16}}
                                autoFocus = {false}
                                onChangeText = {props.handleChange('password')}
                                value = {props.values.password}
                                onFocus = {()=>{setPassordFocussed(true)}}
                                onBlur = {()=>{setPasswordBlured(true)}}
                                placeholderTextColor="#86939e"
                                secureTextEntry={true}
                            />
                            <Animatable.View  animation = {passwordBlured?"fadeInLeft":"fadeInRight"} duration ={400}>
                                <Icon name ="visibility-off" color ={colors.grey3}  type = "material" style ={{marginRight:10}}/>
                            </Animatable.View>      
                        </View>
                        
                        {/*  */}
                        <View style = {styles.view15}>
                            <Text style  = {styles.text3}>By create or logging into an account you are</Text>
                            <View style = {styles.view16}>
                                <Text style  = {styles.text3}>agreeing with our</Text>
                                <Text style  = {styles.text4}> Terms & Conditions</Text>
                                <Text style  = {styles.text3}>  and </Text>
                            </View>
                            <Text style  = {styles.text4}> Privacy Statement</Text>
                        </View>

                        {/* button create account */}
                        <View style = {styles.view17}>
                            <Button 
                                title = 'Create my account'
                                buttonStyle = {styles.button1}
                                titleStyle = {styles.title1}
                                onPress = {props.handleSubmit}
                            />
                        </View>
                       
                    </View>
                )}

            </Formik>

            {/*  */}
            <View style = {styles.view18}>
                <Text style = {styles.text5}>OR</Text>
            </View>
            
            {/*  */}
            <View style = {styles.view19}>
                <View style = {styles.view20}>
                    <Text style = {{color:colors.grey1,marginLeft:4}}>Already have an account!</Text>
                </View>  
                {/*  */}
                <View style = {styles.view21}>
                    <Button 
                            title = "Sign-In"
                            buttonStyle ={styles.button2}
                            titleStyle = {styles.title2}
                            onPress ={()=>{navigation.navigate('SignInScreen')}}
                        />
                </View>
            </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},

  view1: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
  },

  text1: {fontSize: 22, color: colors.buttons, fontWeight: 'bold'},

  view2: {
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },

  view3: {marginTop: 5, marginBottom: 10},

  text2: {fontSize: 15, color: colors.grey2, marginTop:15},

  view4: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.grey4,
    borderRadius: 12,
    paddingLeft: 5,
  },

  view5: {marginLeft: 30,},

  input1: {fontSize: 16,color:colors.grey1,flex:1},

  view6: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.grey4,
    borderRadius: 12,
    paddingLeft: 5,
    height: 48,
  },

  view7: {marginLeft: 0, maxWidth: '65%'},

  input2: {fontSize: 16, marginLeft: 0, marginBottom: 0},

  view8: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.grey4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 20,
    height: 48,
  },

  view9: {marginLeft: 0, maxWidth: '65%'},

  input3: {fontSize: 16, marginLeft: 0, marginBottom: 0},

  view10: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.grey4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 20,
    height: 48,
  },

  email: {
    fontSize: 24,
    padding: 0,
    marginBottom: 0,
    marginTop: 11,
    marginLeft: 2,
  },

  view11: {marginLeft: 10, maxWidth: '65%',flex:1},

  input4: {fontSize: 16, marginLeft: -20, marginBottom: -10},

  view13: {flexDirection: 'row', height: 40},

  view14: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.grey4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    marginTop: 20,
  },

  view15: {alignItems: 'center', justifyContent: 'center', marginTop: 10},

  text3: {fontSize: 13,color:colors.grey1 },

  view16: {flexDirection: 'row'},

  text4: {textDecorationLine: 'underline', color: 'green', fontSize: 13},

  button1: {
    backgroundColor: colors.buttons,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.buttons,
    height: 50,
    paddingHorizontal: 20,
    width: '100%',
  },

  title1: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },

  view17: {marginVertical: 10, marginTop: 30},

  view18: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 15,
  },

  text5: {fontSize: 15, fontWeight: 'bold',color:colors.grey1},

  view19: {backgroundColor: 'white', paddingHorizontal: 15},

  view20: {marginTop: 5},

  view21: {marginTop: 5, alignItems: 'flex-end'},

  button2: {
    backgroundColor: colors.background3,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.buttons,
    height: 40,
    paddingHorizontal: 20,
    // width:'100%'
  },

  title2: {
    color: colors.buttons,
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
