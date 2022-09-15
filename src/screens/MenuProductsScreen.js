import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React,{useState} from 'react'
import Beef from './MenuTabScreens/Beef'
import {restaurantData,menu} from '../global/Data';
import {TabView,TabBar,SceneMap } from 'react-native-tab-view';
import {Icon} from 'react-native-elements'
import {colors,fonts} from '../global/styles'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function MenuProductsScreen({navigation,route}) {

  const[routes] = useState(menu);
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

  
  const renderScene = ({route}) => {
    switch (route.key) {
      case 1:
        return <Beef navigation = {navigation}/>

      default:
        return null;
    }
  }

  return (
    
    <View style = {styles.container}>
      {/* Menu details screen */}
      <View style = {styles.view1}>
       <Icon name = 'arrow-back' 
           type = 'material' 
           size ={25} color = {colors.pagebackground}
           onPress =  {()=>navigation.goBack()}
           />
           <Text style = {styles.text1}>Menu</Text>
     </View>

      {/* Menu details tab view */}
     <TabView 
             navigationState = {{index,routes}}
             renderScene  = {renderScene}
             onIndexChange = {setIndex}  
             initialLayout  = {{width: SCREEN_WIDTH}}
             renderTabBar = {renderTabBar}
             tabPosition = 'top'
             navigation = {navigation}
             route = {route}
           />
    </View>
  )
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },

  container:{flex:1,
             top:0,
             left:0,
             right:0
     },

view1:{flexDirection:"row",
      alignItems:"center",
      padding:10,
      backgroundColor:colors.buttons,
      top:0,
      left:0,
      right:0,
},

text1:{fontWeight:"bold",
      marginLeft:20,
      color:colors.headerText,
      fontSize:18
    },

view2:{marginTop:5,
      paddingBottom:20
    },

tab:{ 
      backgroundColor:colors.buttons,
      justifyContent:"space-between",
     // alignItems:"center"
      },

tabContainer:{ alignItems:'center',
      alignContent:'center',
      justifyContent:'center',
      },

tabLabel:{fontWeight:'bold',
      color: colors.cardbackground
      },
  
tabStyle:{width:SCREEN_WIDTH/4,
          maxHeight:45,
        },
scene2: { backgroundColor: '#673ab7' } 
})