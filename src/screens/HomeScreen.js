import React, { useState } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,
    FlatList,Pressable,Image,Dimensions,FloatAct,StatusBar} from  'react-native';
import {Icon} from 'react-native-elements'
import HomeHeader from '../components/HomeHeader'
import {colors,parameters} from '../global/styles'
import {filterData,restaurantData} from '../global/Data'
import FoodCard from '../components/FoodCard'
import CountDown from 'react-native-countdown-component';


const SCREEN_WIDTH = Dimensions.get('window').width

export default function HomeScreen ({navigation}){

    const [delivery,setDelivery] = useState(true); 
    const[indexCheck,setIndexCheck] = useState("0");

    return (
        <View style={styles.container}>
        {/* header */}
           <HomeHeader navigation = {navigation}/>

           {/* tab */}
           <ScrollView stickyHeaderIndices={[0]}
           showsVerticalScrollIndicator={true}>
             {/* Tab */}
           <View style = {{backgroundColor: colors.cardbackground,paddingBottom:10}}>
           <View style = {{marginTop:10,flexDirection:"row",justifyContent:"space-evenly"}}>
                {/* Deliver button */}
                <TouchableOpacity onPress = {()=>{setDelivery(true)}}>
                    <View style = {{...styles.deliveryButton,backgroundColor:delivery? colors.buttons : colors.grey5}}>
                        <Text style={styles.deliveryText}>Delivery</Text>
                    </View>
                </TouchableOpacity>
                {/* Pickup button */}
                <TouchableOpacity onPress = {()=>{setDelivery(false)
                                            navigation.navigate('RestaurantMapScreen')}}>
                    <View style = {{...styles.deliveryButton,backgroundColor:delivery? colors.grey5 : colors.buttons}}>
                        <Text style={styles.deliveryText}>Pickup</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>

          
            <View style={{flexDirection:'row',justifyContent: 'space-between',alignItems:'center'}}>
              {/* time and address*/}
                <View style={{flexDirection:"row",justifyContent:"center",marginTop:15,backgroundColor:colors.grey5,borderRadius:20,marginLeft:20,paddingTop:3,paddingBottom:3,width:"80%"}}>
                
                    <View style = {{flexDirection:'row',alignItems:"center",borderRadius:10,padding:5,marginLeft:5,marginLeft:20}}>     
                    {/* map icon */}
                        <Icon type ='material'
                            name = 'place'
                            color = {colors.grey1}
                            size = {26}
                        />
                        <Text style = {{color:"black",marginLeft:5}}>22 Beesie street</Text>
                    </View>

                    <View style = {{flexDirection:'row',alignItems:"center",backgroundColor:"white",borderRadius:20,marginLeft:20,padding:5,marginRight:20}}> 
                    {/* clock icon */}
                        <Icon type ='material'
                            name = "schedule"
                            color = {colors.grey1}
                            size = {26}
                        />
                        <Text style = {{color:"black",marginLeft:5}}>NOW</Text>
                    </View>

                </View>
                {/* setting icon */}
                <View style={{marginTop:16,marginRight:20}}>
                    <Icon type ='material'
                        name = "tune"
                        color = {colors.grey1}
                         size = {30}
                        />
                </View>

            </View>
        {/* categoriesTitle */}
            <View style={styles.categoryView}>
                <Text style = {styles.categoriesTitle}>Categories</Text>
            </View>
            
            {/* Categories Menu */}
            <View>
                <FlatList
                data = {filterData}
                horizontal = {true}
                showsVerticalScrollIndicator = {false}
                keyExtractor = {(item) => item.id}
                extraData = {indexCheck}
                renderItem = {({item,index}) =>(
                    <Pressable
                    onPress={() => {
                        setIndexCheck(item.id); 
                        }}
                    >   
                        <View style = {indexCheck == item.id ? 
                        {...styles.categoryItemSelected} : {...styles.categoryItem}}>
                            <Image style = {{height:60,width:60,borderRadius:30,marginTop:15}}
                                source = {item.image}
                            />
                            <Text style = {indexCheck == item.id ? 
                        {...styles.categoriesNameSelected} : {...styles.categoriesName}}>{item.name}</Text>
                        </View>
                        
                    </Pressable>
                )}
                 />
            </View>

            {/* free deliver now title */}
            <View style={styles.categoryView}>
                <Text style = {styles.categoriesTitle}>Free delivery now</Text>
            </View>
        {/* restaurant list */}
            <View>
                {/* count down view */}
                <View style = {{flexDirection:'row',alignItems: 'center'}}>
                    <Text style = {{fontSize:16,marginLeft:13,
                    marginTop:10,marginRight:5,color:'black'}}
                    >Options changing in</Text>

                <CountDown
                    style = {{marginTop:10}}
                    until={60 * 10 + 30}
                    size={20}
                    digitStyle={{backgroundColor: '#1CC625'}}
                    digitTxtStyle={{color: 'white'}}
                    timeToShow={['M', 'S']}
                    timeLabels={{m: null, s: null}}

                />

                </View>
                
                <FlatList
                    style = {{marginTop:10, marginBottom:10}}
                    horizontal = {true}
                    data = {restaurantData}
                    keyExtractor = {(item,index) => index.toString()}
                    renderItem = {({item})=>(
                        <View>
                            <FoodCard
                                images = {item.images}
                                restaurantName = {item.restaurantName}
                                averageReview = {item.averageReview}
                                businessAddress = {item.businessAddress}
                                farAway = {item.farAway}
                                numberOfReview = {item.numberOfReview}
                                screenWidth = {SCREEN_WIDTH * 0.8}
                            />
                        </View>
                    )}
                />
            </View>

            {/* promotions title */}
            <View style={styles.categoryView}>
                <Text style = {styles.categoriesTitle}>Promotions available</Text>
            </View>
        {/* restaurant list */}
            <View>
                <FlatList
                    style = {{marginTop:10, marginBottom:10}}
                    horizontal = {true}
                    data = {restaurantData}
                    keyExtractor = {(item,index) => index.toString()}
                    renderItem = {({item})=>(
                        <View>
                            <FoodCard
                                images = {item.images}
                                restaurantName = {item.restaurantName}
                                averageReview = {item.averageReview}
                                businessAddress = {item.businessAddress}
                                farAway = {item.farAway}
                                numberOfReview = {item.numberOfReview}
                                screenWidth = {SCREEN_WIDTH * 0.8}
                            />
                        </View>
                    )}
                />
            </View>


            {/* Restaurant in your area title */}
            <View style={styles.categoryView}>
                <Text style = {styles.categoriesTitle}>Restaurant in your area</Text>
            </View>

        <View style = {{width:SCREEN_WIDTH, paddingTop:10}}>
           {
            restaurantData.map(item => (
                <View key = {item.id} style = {{paddingBottom:20}}>
                    <FoodCard
                                images = {item.images}
                                restaurantName = {item.restaurantName}
                                averageReview = {item.averageReview}
                                businessAddress = {item.businessAddress}
                                farAway = {item.farAway}
                                numberOfReview = {item.numberOfReview}
                                screenWidth = {SCREEN_WIDTH * 0.95}
                            />
                </View>
            ))
           }
        </View>

           </ScrollView>

           {/*  map float action button*/}
      { delivery && 
        <View style = {styles.floatButton}>
            <TouchableOpacity
                onPress = {()=>{navigation.navigate('RestaurantMapScreen')}}
                >
                <Icon type ='material'
                    name = "place"
                    color = {colors.buttons}
                    size = {32}
                            />
            <Text style = {{color:'black'}}>Map</Text>
            </TouchableOpacity>
        </View>
      }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    deliveryButton:{
        paddingHorizontal:20,
        borderRadius:15,
        paddingVertical:5,
    },
    deliveryText:{
        marginLeft:5,
        fontSize:16,
        color:"black",
    },
    categoriesTitle:{
        color:"black",
        fontSize:20,
        fontWeight: 'bold',
    },
    categoryView:{
        marginTop:20,
        marginLeft:10,
        flexDirection:'row',
        backgroundColor:"#E9E8E8",
        borderRadius:10,
       paddingVertical:5,
    },
    categoryItem:{
        borderRadius:20,
        backgroundColor: colors.grey5,
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        width:"85%",
        margin:10,
        height:100,
    },
    categoryItemSelected:{
        borderRadius:20,
        backgroundColor: colors.buttons,
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        width:"85%",
        margin:10,
        height:100,
    },
    categoriesName:{
        marginBottom:5,
        fontWeight:"bold",
        fontSize:15,
        color:"black",
    },
    categoriesNameSelected:{
        marginBottom:5,
        fontWeight:"bold",
        fontSize:15,
        color:"white",
    },
    floatButton:{
        position:"absolute",
        bottom:10,
        right:15,
        backgroundColor:'white',
        elevation:10,
        width:60,
        height:60,
        borderRadius:30,
        alignItems:"center",
    }
})