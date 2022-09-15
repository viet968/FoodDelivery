import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableWithoutFeedback,ImageBackground,Dimensions,ImageBackgroundComponent} from 'react-native';
import SearchComponent from '../components/SearchComponent';
import { filterData,searchSuggestionsData } from '../global/Data';
import {colors,parameters} from '../global/styles'

const SCREEN_WIDTH = Dimensions.get('window').width;

{/**Footer */}
const Footer = ({navigation})=>{
    return(
        <View style ={{marginTop:20,marginBottom:30 }}>

                <View style ={{}}>
                <FlatList 
                    style ={{marginBottom:10}}
                    data = {searchSuggestionsData}
                    keyExtractor ={item=>item.id}
                    renderItem = {({item,index})=>(
                        <TouchableWithoutFeedback
                                onPress ={()=>{
                                    navigation.navigate("SearchResultScreen",{item:item.name});
                                }}
                                >
                            <View style = {styles.imageView}>
                              <ImageBackground
                                    style ={styles.image}
                                    source = {{uri:item.image}}
                                >
                                    
                                    <View style ={styles.textView}>
                                        <Text style ={{color:colors.cardbackground}}>{item.name}</Text>
                                    </View>
                                </ImageBackground>  
                            </View>
                        </TouchableWithoutFeedback>
                    )}

                    horizontal ={false}
                    showsVerticalScrollIndicator = {false}
                    numColumns ={2}
                    ListHeaderComponent = { <Text style = {styles.listHeader}>More categories</Text>}
                  
                />
                </View>


            </View>

    )
}

export default function SearchScreen({navigation}) {
    return(
        <View style = {{flex:1}}>
         {/* Search bar */}
            <SearchComponent/>
            
            {/* list search */}
            <View>
                <FlatList
                    style = {{marginTop:10}}
                    data = {searchSuggestionsData}
                    keyExtractor = {item => item.id}
                    showsVerticalScrollIndicator = {false}
                    horizontal = {false}
                    numColumns={2}
                    ListHeaderComponent = {<Text style = {styles.listHeader}>Top Categories</Text>}
                    ListFooterComponent = {<Footer navigation = {navigation}/>}
                    renderItem = {({item})=>(
                        <TouchableWithoutFeedback
                            onPress = {()=>{  navigation.navigate("SearchResultScreen",{item:item.name});}}
                        >
                            <View style = {styles.imageView}>
                            <ImageBackground
                                    style ={styles.image}
                                    source = {{uri:item.image}}
                                    resizeMode = "cover"
                                >
                                    {/* name categories */}
                                    <View style ={styles.textView}>
                                        <Text style ={{color:colors.cardbackground}}>{item.name}</Text>
                                    </View>
                                </ImageBackground>  
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    imageView : {  
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        width:SCREEN_WIDTH*0.4475,
        height:SCREEN_WIDTH*0.4475,
        marginLeft:SCREEN_WIDTH*0.035,
        marginBottom:SCREEN_WIDTH*0.035
    },

    image :  {     
        height:SCREEN_WIDTH*0.4475,
        width:SCREEN_WIDTH*0.4475,
        borderRadius:10, 
    },

    listHeader : {  
        fontSize:16,
        color:colors.grey2,
        paddingBottom:10,
        marginLeft:12
            
            },

    textView : {  
        height:SCREEN_WIDTH*0.4475,
        width:SCREEN_WIDTH*0.4475,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'rgba(52, 52, 52,0.3)'
        },
});