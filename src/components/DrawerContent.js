import React, {useState,useContext,useEffect} from 'react';
import {View,Text,StyleSheet,Linking,Pressable,Alert,Switch,TouchableOpacity} from 'react-native';
import {DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import {Button} from 'react-native-elements';
import { Icon } from "@rneui/themed";
import { Avatar } from "@rneui/themed";
import {colors,parameters} from '../global/styles'
import auth from '@react-native-firebase/auth';
import {SignInContext} from '../context/authContext';


export default function DrawerContent(props){

    const {dispatchSignedIn} = useContext(SignInContext)

    //sign out function
    async function signOut(){
        try{
            auth().signOut().then(
                ()=>{
                   dispatchSignedIn({type:'UPDATE_SIGN_IN', payload:{userToken:null}})
                }
            )
        }catch(error){
            Alert.alert(error.code);
        }
    }

    return(
        <View style = {styles.container}>
            {/* DrawerContentScrollView */}
            <DrawerContentScrollView {...props} >
                
            <View style = {{ backgroundColor: colors.buttons}}>
                {/* Avatar */}
                <View style = {styles.avatarView}>
                    <Avatar 
                        rounded
                        size = {75}
                        containerStyle = {styles.avatar}
                        source = {{uri:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-3416_12-df98710.jpg"}}
                    />
                    {/*  info */}
                    <View style = {{marginLeft:10}}>
                        <Text style = {styles.infoText}>Name</Text>
                        <Text style = {styles.infoText}>Email</Text>
                    </View>

                </View>

               <View style = {{flexDirection: 'row',paddingBottom:10,justifyContent: 'space-evenly'}}>
                {/* Favorites info */}
                <View >
                        <View style = {{marginLeft:10,alignItems: 'center',justifyContent: 'center',justifyContent: 'center',flexDirection:'column'}}>
                            <Text style = {styles.infoText}>1</Text>
                            <Text style = {styles.favCartText}>My Favorites</Text>
                        </View>
                </View>

                {/* cart info */}
                <View >
                        <View style = {{marginLeft:10,alignItems: 'center',justifyContent: 'center',justifyContent: 'center',flexDirection:'column'}}>
                            <Text style = {styles.infoText}>0</Text>
                            <Text style = {styles.favCartText}>Cart</Text>
                        </View>
                </View>
               </View>

            </View>

            <DrawerItemList {...props} />

            {/* payment  drawer item */}
            <DrawerItem 
                label = 'Payment'
                icon = {({color,size}) => (
                    <Icon type ='material'
                        name = "credit-card"
                        color = {color}
                         size = {size}
                        />
                )}
            />

             {/* promotions  drawer item */}
             <DrawerItem 
                label = 'Promotions'
                icon = {({color,size}) => (
                    <Icon type ='material'
                        name = "tag"
                        color = {color}
                         size = {size}
                        />
                )}
            />

             {/* setting  drawer item */}
             <DrawerItem 
                label = 'Settings'
                icon = {({color,size}) => (
                    <Icon type ='material'
                        name = "settings"
                        color = {color}
                         size = {size}
                        />
                )}
            />

             {/* help  drawer item */}
             <DrawerItem 
                label = 'Help'
                icon = {({color,size}) => (
                    <Icon type ='material'
                        name = "help"
                        color = {color}
                         size = {size}
                        />
                )}
            />

            {/* Preferences */}
            <View style = {{borderTopWidth:1, borderTopColor:colors.grey5}}>
                    <Text style = {styles.preferences}>Preferences</Text>
                    {/* enable dark theme */}
                    <View style = {styles.switchText}>
                        <Text style = {styles.darkThemeText}>Dark theme</Text>
                        {/* switch */}
                        <View style = {{paddingRight:10}}>  
                            <Switch 
                                trackColor = {{false: '#767577',true:'#81b0ff'}}
                                thumbColor = '#f4f3f4'

                            />
                        </View>
                    </View>
            </View>

        </DrawerContentScrollView>

                {/* sign out  drawer item */}
                <DrawerItem 
                    label = 'Sign Out'
                        
                    icon = {({color,size}) => (
                        <Icon type ='material'
                            name = "logout"
                            color = {color}
                            size = {size}
                            onPress = {() =>{signOut()}}
                        />
                    )}
                />
                
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    avatar:{
        borderWidth:2,
        borderColor:colors.pagebackground,
       
    },
    avatarView:{
        alignItems: 'center',
        flexDirection:'row',
        paddingLeft:10,
        paddingBottom:7,
        paddingBottom:7,
        paddingTop:7
    },
    infoText:{
        color: 'white',
        fontWeight:'bold',
        fontSize:18,
    },
    favCartText:{
        color: 'white',
        fontWeight:'bold',
        fontSize:14,
    },
    preferences:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:20,
    },
    switchText:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },
    darkThemeText:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:10,
        fontWeight:'bold',
    }
});