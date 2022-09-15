import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,
    FlatList,Pressable,Image} from  'react-native';
import {Icon} from 'react-native-elements';
import {colors,parameters} from '../global/styles';


export default function FoodCard({
    OnPressFoodCard, restaurantName, deliveryAvailable,
    discountPercent,
    discountAvailable, numberOfReview, businessAddress,
    farAway, averageReview, images, screenWidth
}){
    return (
        <View>
            <TouchableOpacity>
            {/* restaurant image */}
                <View style = {{...styles.cardView,width:screenWidth}}>
                    <Image style = {{...styles.image,width:screenWidth}}
                        source = {{uri:images}}
                    />
                    
                    {/* restaurant name */}
                <View>
                {/* name */}
                    <View>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                    </View>
                {/* address */}
                    <View style ={{flex:1, flexDirection:'row'}}>
                        <View style = {styles.distance}>
                         {/* location icon */}
                            <Icon
                                name = "place"
                                type ='material'
                                color = {colors.grey2}
                                size = {18}
                                iconStyle = {{marginTop:3}}
                            />
                           
                            {/*  distance */}
                            <Text style = {styles.min}>{farAway} Min</Text>
                        </View>
                        
                        {/* address */}
                        <View style = {{flex:9,flexDirection: 'row'}}>
                            <Text style = {styles.address}>{businessAddress}</Text>
                        </View>

                    </View>
                </View>
                </View>

            
        {/* Review view */}
            <View style = {styles.review}>
                <Text style = {styles.average}>{averageReview}</Text>
                <Text>{numberOfReview} reviews</Text>
            </View>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView:{
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor:colors.grey4,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
    },
    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:150,
    },
    restaurantName:{
        fontSize:17,
        fontWeight:"bold",
        color : 'black',
        marginTop:5,
        marginLeft:10
    },
    distance:{
        flex:4, 
        flexDirection:'row',
        borderRightColor: colors.grey4,
        paddingHorizontal: 5,
        borderRightWidth: 1,
    },
    min:{
        fontSize:12,
        fontWeight:"bold",
        paddingTop:5,
        color: colors.grey3
    },
    address:{
        fontSize:12,
        paddingTop:5,
        color: colors.grey2,
        paddingHorizontal: 10,
    },
    review:{
        position:'absolute',
        top:0,
        right:9,
        backgroundColor:'rgba(52,52,52,0.3)',
        padding:2,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius:5,
        borderBottomLeftRadius:12,
       
    },
    average:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        marginTop:-3
    }
});