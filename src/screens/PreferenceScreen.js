import { Text, StyleSheet, View,ScrollView, Image, Platform,ImageBackground,TouchableOpacity,TouchableWithoutFeedback} from 'react-native'
import React, { Component,useState } from 'react'
import {colors} from '../global/styles';
import {Icon,CheckBox} from 'react-native-elements'
import {menuData,menuDetailedData} from '../global/Data'
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default class PreferenceScreen extends Component {

  constructor(props){
    super(props);

    this.state ={
      preference:menuDetailedData[this.props.route.params.index].preferenceData,
      required:menuDetailedData[this.props.route.params.index].required,
      minimum_quantity :menuDetailedData[this.props.route.params.index].minimum_quatity,
      counter:menuDetailedData[this.props.route.params.index].counter,
      amount:1
    }
    
  }


  render() {

      const index  = this.props.route.params.index
      const {meal,details,price,image} = menuDetailedData[index];
     

    return (
      <View style = {styles.container}>
        {/* Select product */}
        <ScrollView>    
            {/* image header */}
            <View style = {styles.header}>
                <ImageBackground style = {styles.backgroundImage}
                    source = {{uri:image}}>
                    {/* text header */}
                    <View style = {styles.bar}>
                        <Text style = {styles.title}>Choose a preference</Text>
                    </View>
                </ImageBackground>
            </View>

        {/* back button */}
        <View style = {styles.view12}>
            <Icon 
                  name ="west"
                  type = "material"
                  color ={colors.cardbackground}
                  size ={25}
                  onPress ={()=>{this.props.navigation.goBack()}}
                />
        </View>

        {/* info */}
        <View style = {styles.view1}>
          {/*  meal title*/}
          <Text style = {styles.text1}>{meal}</Text>
          {/* meal details */}
          <Text style = {styles.text2}>{details}</Text>
        </View>

        {/*  */}
        <View style = {styles.view2}>
          <Text style = {styles.text3}>Choose a meal type</Text>
          {/*  */}
          <View style = {styles.view3}>
            <Text style = {styles.text4}>REQUIRED</Text>
          </View>
        </View>

        {/*  */}
        <View style = {styles.view4}>
          <View style = {styles.view5}>
            {/* check box view*/}
              <View style = {styles.view6}>
                {/* check box */}
                <BouncyCheckbox
                    size={25}
                    fillColor={colors.buttons}
                    unfillColor="#FFFFFF"
                    iconStyle={{ borderColor: "red" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    onPress={() => {}}
                  />
                <Text style = {styles.text5}>- - - - -</Text>
              </View>
              {/*  */}
              <Text style = {styles.text6}>{price.toFixed(2)}$</Text>
          </View>
        </View>
        {/*  */}
        <View>
          {
            this.state.preference.map(item =>
            <View key = {item.id}>
              
              <View style = {styles.view7}>
                <Text style ={styles.text8}>{menuDetailedData[index].preferenceTitle[this.state.preference.indexOf(item)]}</Text>
              </View>

              {/* list required */}
              <View key = {item.id} style = {styles.view10}>
                  {
                    item.map(items => 
                      <View key = {items.id}>
                        <View style ={styles.view19} >
                            <View style ={styles.view6} >
                              <BouncyCheckbox
                                size={25}
                                fillColor={colors.buttons}
                                unfillColor="#FFFFFF"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                checked = {items.checked}
                                onPress={() => {}}
                              />
                                <Text style ={{color:colors.grey2,marginLeft:-10}}>{items.name}</Text>
                            </View>
                              <Text style ={styles.text6}>{items.price.toFixed(2)}$</Text>
                          </View>
                      </View>
                   
                    )
                  }
              </View>
            </View>
            )

          }
        </View>
        </ScrollView>
        {/*choose amount view*/}
        <View style  = {styles.view13}>
            <Text style = {styles.text8}>Quantity</Text>
        </View>
        {/* add - minus amount view */}
        <View style = {styles.view14}>
          {/* minus */}
            <View style = {styles.view15}>
               {/* icon */}
               <Icon 
                  name ="remove"
                  type = "material"
                  color ={colors.black}
                  size ={25}
                  onPress ={()=>{
                    if(this.state.amount > 0){
                      this.setState({amount:this.state.amount - 1})
                    }
                  }}
                />
            </View>
            {/* text */}
            <View style = {{justifyContent: "center"}}>
              <Text style ={styles.text9}>{this.state.amount}</Text>
            </View>
            {/* add */}
            <View style = {styles.view15}>
               {/* icon */}
               <Icon 
                  name ="add"
                  type = "material"
                  color ={colors.black}
                  size ={25}
                  onPress ={()=>this.setState({amount:this.state.amount + 1})}
                />
            </View>
        </View>
        {/*  */}
        <View style = {styles.view17}>
          {/* button add to cart */}
          <TouchableOpacity>
            <View style = {styles.view18}>
              <Text style = {styles.text10}>Add {this.state.amount} to Cart</Text>
            </View>
          </TouchableOpacity>
          
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{flex:1
    },
    fill: {
        flex: 1,
      },
      content: {
        flex: 1,
      },
      header: {
        width:"100%",
        overflow: 'hidden',
        height: 180//HEADER_MAX_HEIGHT,
      },
      backgroundImage: {
        width: "100%", //null,
        height: 180, //HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
      },
      bar: {
        backgroundColor: 'rgba(52, 52, 52,0.5)',
        height: 180,
        alignItems: 'center',
        
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width:"100%"
      },
      title: {
        color: 'white',
        fontSize: 28,
        fontWeight:"bold",
        marginTop:30
      },
      scrollViewContent: {
        // iOS uses content inset, which acts like padding.
        //paddingTop: Platform.OS !== 'ios' ?
        //HEADER_MAX_HEIGHT : 0,
      },
      row: {
        height: 40,
        margin: 16,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
      },

      view1:{backgroundColor:"white",
      padding:10,
      marginBottom:10
    },

    text1:{fontSize:15,
      color:colors.grey1,
      fontWeight:"bold"
      },

     text2: { fontSize:14,
             color:colors.grey2,
             marginTop:5
            },
     view2:{flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between" ,
            },

     text3: {fontSize:16,
       fontWeight:"bold",
       color:colors.grey1,
       marginLeft:10
      },
    
    view3:{borderWidth:3,
      borderColor:colors.grey5,
      borderRadius:5,
      marginRight:10
    },

    text4:  {fontWeight:"bold",
            color:colors.grey3 ,
            padding:5
          },

     view4:  {backgroundColor:"white",
              marginBottom:10,
              borderRadius:10,
              marginLeft:5,marginRight:5,borderWidth:1,
              borderColor:colors.grey5,
              height:50,
              justifyContent: "center",
              paddingLeft:5
              },
    view5: {flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            paddingRight:10
            },
    view6:{flexDirection:"row", 
          alignItems:"center"
        },
     text5: {fontWeight:"bold",marginLeft:-10,color:'black'},
     text6:  {fontSize:16,fontWeight:"bold",color:'black'} , 
     
     view7:{flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between" ,
          },
     
     text8: {fontSize:16,
             fontWeight:"bold",
             color:colors.grey1,
             marginLeft:10
            },
            
    view9:{borderWidth:3,
           borderColor:colors.grey5,
           borderRadius:5,
           marginRight:10
          },

     text7: {fontWeight:"bold",
             color:colors.grey3 ,
             padding:5
            },

    view10: {backgroundColor:"white",
             marginBottom:10,marginLeft:5,marginRight:5
            },

    view11:  { flexDirection:"row" ,
               alignItems:"center",
              },

     view12:{position:"absolute",
             top:15,
              left:15
            },
    
      view13:{paddingBottom:0,
              marginTop:5,
            },

            text11:{paddingLeft:10,
              fontWeight:"bold",
              fontSize:18,
              color:colors.grey3
             },

      view14:{flexDirection:"row",
              backgroundColor:colors.cardbackground,
              paddingVertical:5,marginBottom:0, 
              justifyContent:"space-between",
              paddingHorizontal:15,
              paddingVertical:10,
              marginBottom:5
            },

      view15:{width:30,
              height:30,
              borderRadius:15,
              backgroundColor:'#20E877',
              alignItems:"center",
              justifyContent:"center"
            },

      text9:{fontWeight:"bold",
              fontSize:18,color:'black'
            },
      view16:{width:30,
              height:30,
              borderRadius:15,
              backgroundColor:colors.lightgreen, 
              alignItems:"center",
              justifyContent:"center"
            },

      view17:{alignItems:"center",
              paddingBottom:10,
              backgroundColor:colors.cardbackground,
              marginTop:-5
            },

      view18:{backgroundColor:colors.buttons,
              alignItems:"center",
              paddingVertical:5,
              width:320,
              borderRadius:12
            },

      text10:{padding:10,
              fontWeight:"bold",
              fontSize:18,
              },

      view19:{
        flexDirection:"row",
       alignItems:"center",
       justifyContent:"space-between",
       height:50,
       
       borderRadius:10,
     borderWidth:1,
      borderColor:colors.grey5,
      paddingRight:10,paddingLeft:5
      }
})