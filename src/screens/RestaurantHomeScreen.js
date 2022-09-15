import { Text, StyleSheet, View,Dimensions,ScrollView,TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import RestaurantHeader from '../components/RestaurantHeader';
import {colors,fonts} from '../global/styles'
import {restaurantData,menu} from '../global/Data';
import {Icon} from 'react-native-elements'
import {TabView,TabBar,SceneMap } from 'react-native-tab-view';
import MenuScreen from '../screens/RestaurantTabs/MenuScreen'



const SCREEN_WIDTH = Dimensions.get('window').width;


export default function RestaurantHomeScreen({navigation,route}) {
    
    const {id,restaurant} = route.params;

    const[modalVisible,setModalVisible] = useState(false);

    const [routes] = useState([
      {key:'first',title:"MENU"},
      {key:'second',title:"INFO"},
      {key:'third',title:"REVIEWS"},
      {key:'fourth',title:"GALLERY"}
    ])

    const[index,setIndex] = useState(0);

    const renderTabBar = props =>(
      <TabBar 
          {...props}
          indicatorStyle  = {{backgroundColor: colors.cardbackground}}
          tabStyle = {styles.tabStyle}
          scrollEnabled = {true}
          style = {styles.tab}
          labelStyle = {styles.tabLabel}
          contentContainerStyle  = {styles.tabContentContainer}
      />
    )

  
    const UpdateRoute1 = () =>{
      return(
        <View>

        </View>
      )
    }

    const menuPressed = () =>{
      navigation.navigate("MenuProductsScreen");
    }

    

    return (
      <View style = {styles.container}>
      <ScrollView>
        
          {/* header */}
          <RestaurantHeader id = {id} navigation = {navigation}/>
          
          {/* Discount*/}
          {restaurantData[id].discount && 
          <View style = {styles.view1}>
            <Text style = {styles.text1}>GET {restaurantData[id].discount}% OFF ON FOOD TOTAL</Text>
          </View>
          }
          
          {/* info restaurant */}
          <View style = {styles.view2}>
            {/* info */}
            <View style = {styles.view3}>
              <Text style = {styles.text2}>{restaurant}</Text>
              <Text style = {styles.text3}>{restaurantData[id].foodType}</Text>
              <View style = {styles.view4}>
                {/* star icon */}
                <Icon name = 'star' type = 'material' size ={15} color = {colors.grey3}/>
                <Text style = {styles.text4}>{restaurantData[id].averageReview}</Text>
                <Text style = {styles.text5}>{restaurantData[id].numberOfReview}</Text>
                {/* location icon */} 
                <Icon name = 'place' type = 'material' size ={15} color = {colors.grey3}/>
                <Text style = {styles.text6}>{restaurantData[id].farAway} min away</Text>
              </View>
            </View>

            {/* collect  */}
            <View style = {styles.view5}>
              {/* collect text */}
              <Text style = {{fontWeight: 'bold', fontSize:15,color:'black'}}>Collect</Text>
              <View style = {styles.view7}>
                <Text style = {{...styles.text7,color:'black'}}>{restaurantData[id].collectTime}</Text>
                <Text style = {{...styles.text8,color:colors.black}}>min</Text>
              </View>
            </View>
            
             {/* delivery */}
            <View style = {styles.view8}>
                {/* text */}
                <Text style = {{fontWeight: 'bold', fontSize:15,color:'black'}}>Delivery</Text>
                {/* time */}
                <View style = {styles.view9}>
                  <Text style = {styles.text7}>{restaurantData[id].deliverTime}</Text>
                  <Text style = {{...styles.text8}}>min</Text>
                </View>
            </View>

          </View>

          {/* Tab view */}
          <View style = {styles.view10}>
              <TabView 
                navigationState = {{index,routes}}
                renderScene  = {UpdateRoute1}
                onIndexChange = {setIndex}  
                initialLayout  = {{width: SCREEN_WIDTH}}
                renderTabBar = {renderTabBar}
                tabPosition = 'top'
              />
          </View>
          
        {index == 0 &&
          <MenuScreen onPress = {menuPressed}/>
          }

      </ScrollView>
          {/* add cart */}
      <TouchableOpacity >
          <View style = {styles.view11}>
              <View style = {styles.view12}>
                <Text style = {styles.text13}>View Cart</Text>
                {/* amount product */}
                <View style  = {styles.view13}>
                    <Text style = {styles.text13}>0</Text>
                </View>
              </View>
          </View>
      </TouchableOpacity>
      
      </View>
    )
 
}

const styles = StyleSheet.create({
    container:{flex:1,
     
    },

    view1:{
      padding:3,
      alignItems:"center",
      justifyContent:"center"
    },

    text1:{color:"green",
    fontSize:14,
    fontWeight:"bold"
    },

    view2:{ flexDirection:"row",
      flex:1,
      marginBottom:5,
      marginHorizontal:10,
      justifyContent:"space-between",
      },

    view3:{flex:8,
        },

    text2:{fontSize:20,
      fontWeight:"bold",  
      color:colors.grey1
    },

    text3:{fontSize:15,
      color:colors.grey3
    },

    view4:{flexDirection:'row',
      alignItems:"center",
      marginTop:5
      },

    text4:{fontFamily :fonts.android.bold,
      fontSize:13,
      color:colors.grey3,
      marginLeft:2,
      },

    text5:{fontFamily :fonts.android.bold,
      fontSize:13,
      color:colors.grey3,
      marginLeft:2,
      marginRight:5
      },
    text6:{fontFamily :fonts.android.bold,
        fontSize:13,
        color:colors.grey3,
        marginLeft:0,
        },

    view5:{ flex:3,
          alignItems:"center",
        },


    view7:{
        width:45,
        height:45,
        alignItems:"center",
        justifyContent:"space-around",
        },

    text7:{fontSize:16,
        fontWeight:"bold",
        marginTop:5
        },

    text8:{fontSize:13,
        marginTop:5,
        fontWeight:"bold",
      },

    view8:{flex:3,
        alignItems:"center",
        
      },

    text9:{fontSize:15,
      fontWeight:"bold",
    },

    view9:{
      width:45,
      height:45,
      backgroundColor:colors.buttons,
      alignItems:"center",
      borderRadius:35,
      justifyContent:"space-around",
      
    },

    text10:{fontSize:16,
      fontWeight:"bold",
      color:colors.cardbackground,
      marginTop:5
      },

    text11:{fontSize:13,
        color:colors.cardbackground,
        marginBottom:5,
        fontWeight:"bold",
      },

    view10:{elevation:10,
      backgroundColor:colors.pagebackground
      },

    view11:{backgroundColor:colors.buttons,
        height:50,
        alignContent:"center",
        marginBottom:0,
        justifyContent:"center",
        paddingHorizontal:10
      
    },

    view12:{flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
        },

    text12:{padding:10,
        fontWeight:"bold",
        fontSize:18,
        color:colors.cardbackground
      },

    view13:{ borderWidth:1,
        marginRight:10,
        borderColor:colors.cardbackground,
        borderRadius:6,
        paddingBottom:2
      },

    text13:{paddingHorizontal:3,
        fontWeight:"bold",
        fontSize:18,
        color:colors.cardbackground,
      },

    tab:{ paddingTop :0,
      backgroundColor:colors.buttons,
      justifyContent:"space-between",
      alignItems:"center"
      },

    tabContentContainer:{ alignItems:'center',
      alignContent:'center',
      justifyContent:'center',
      },

    tabLabel:{fontWeight:'bold',
      color: colors.cardbackground
      },

    tabStyle:{width:SCREEN_WIDTH/4,
          maxHeight:45,
        },

    view14:{
      flexDirection:"row",
      alignItems:"center",
      padding:10,
      backgroundColor:colors.buttons,
      top:0,
      left:0,
      right:0,
    },

    text14:{fontWeight:"bold",
        marginLeft:20,
        color:colors.pagebackground,
        fontSize:18
    },

    view15:{marginTop:5,
        paddingBottom:20
    },
})