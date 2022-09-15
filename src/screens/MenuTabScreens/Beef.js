import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import {menuData,menuDetailedData} from '../../global/Data'
import MenuCard from '../../components/MenuCard';


const Beef = ({navigation}) => {
  return (
    <View style ={{flex:1}}>
        <View style ={styles.view2}>
            <FlatList 
                style ={{backgroundColor:'white'}}
                data = {menuDetailedData}
                keyExtractor = {(item,index)=>index.toString()}
                renderItem = {({item,index})=>(
                    <TouchableOpacity onPress ={()=>{navigation.navigate("PreferenceScreen",{index})}}>
                        <MenuCard 
                            productName ={item.meal}
                            image ={item.image}
                            price ={item.price}
                            productDetails = {item.details}
                        />
                    </TouchableOpacity>
                )}

            showsVerticalScrollIndicator = {false}
            />
        </View>
    </View>
  )
}

export default Beef

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        backgroundColor: '#673ab7'
      },
    
    view2:{
        marginTop:5,
          paddingBottom:20
        },
    
    scene2: { 
        backgroundColor: '#673ab7' }  
})