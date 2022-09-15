import { StyleSheet, Text, View,ImageBackground,Animated } from 'react-native'
import React,{useState,useEffect} from 'react'
import {colors,parameters} from '../global/styles'
import { restaurantData } from '../global/Data';
import {Icon} from 'react-native-elements'



export default function RestaurantHeader({navigation,id}) {

    const [favorited,setFavorited] = useState(false);
    const [counter,setCounter] = useState(-2);
    const [visible,setVisible] = useState(false);
    const index2 = 10;
    const currentValue = new Animated.Value(1);

    const favoriteHandel = () =>{
        if(favorited == false)
            setVisible(true);
        
        setFavorited(!favorited);
        setCounter(index2);
    }
    
    useEffect(() =>{
        if(favorited == true){
            Animated.spring(currentValue,{
                toValue : 3,
                friction:2,
                useNativeDriver:true
            }).start(()=>{
                Animated.spring(currentValue,{
                    toValue:1,
                    useNativeDriver:true,
                    friction:2
                }).start(()=>{
                    setVisible(false)
                })
            })
        }
    },[favorited])

  return (
    <View style={styles.container}>
        <ImageBackground 
            style = {styles.container}
            source = {{uri:restaurantData[id].images}}
        >

        <View style = {styles.view1}>   
            {/* back button */}
            <View style = {styles.view2}>
                <Icon 
                    name = 'arrow-back'
                    type = 'material'
                    size = {25} 
                    color = 'black'
                    onPress = {()=>{navigation.goBack();}}
                />
            </View>

            {/* favorite button */}
            <View style = {styles.view2}>
                <Icon 
                    name = {favorited && (index2 == counter) ? 'favorite' : 'favorite-border'}
                    type = 'material'
                    size = {30} 
                    color = 'red'
                    onPress = {favoriteHandel}
                />
            </View>
            
        </View>

        {/* animation for favorite when  favorite button clicked*/}
        <View style = {styles.view4}>
            {visible && (index2 == counter) && 
                <Animated.View style = 
                    {{transform:[{scale:currentValue}]}}>
                <Icon 
                    name = {favorited && (index2 == counter) ? 'favorite' : 'favorite-border'}
                    type = 'material'
                    size = {40} 
                    color = 'red'
                />
                </Animated.View>

            }
        </View>

        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{height:150,
    },

view1: {flexDirection:"row",
        alignItems:"baseline",
       justifyContent:"space-between"
      },

view2:{margin:10,
       width:40,
       height:40,
       backgroundColor:colors.cardbackground,
       alignItems:"center",
       justifyContent:"center",
       borderRadius:20,
      },

view3:{marginTop:0,
       margin:10,
       width:40,
       height:40,
       backgroundColor:colors.cardbackground,
       alignItems:"center",
       justifyContent:"center",
       borderRadius:20,
       },
       
view4:{ marginTop:0,
        alignItems:"center",
        justifyContent:"center" 
      },

})