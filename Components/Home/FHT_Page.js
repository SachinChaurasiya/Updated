import React,{useState} from 'react';
import {StyleSheet, Text, View,TextInput,Button, ScrollView} from 'react-native';
import{FontAwesome5} from 'react-native-vector-icons';
import {Entypo} from 'react-native-vector-icons';
import { StatusBar } from 'expo-status-bar';

const FTH_Page = (props) => {

    const Separator = () => (
        <View style ={styles.separator}></View>
      )
    return (
          <View style={styles.container}>
            <View style={{marginHorizontal:12,marginVertical:10}}>
            <View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={{flexDirection: 'column',paddingHorizontal:20,}}>
                  <View style={{justifyContent: 'center',alignItems: 'center',paddingVertical:10}}>
                  <Entypo name="aircraft-take-off" size={24} color="#F15b2F"/></View>
                  <Text style={{fontSize:15 ,fontWeight: 'bold',color:"#F15b2F"}}> Flight</Text>
                </View>
                <View style={{flexDirection: 'column',paddingHorizontal:20, }}>
                  <View style={{justifyContent: 'center',alignItems: 'center',paddingVertical:10}}>
                  <FontAwesome5 name="hotel" size={24}/></View>
                  <Text style={{fontSize:15 ,fontWeight: 'bold'}}> Hotel</Text>
                </View>
                <View style={{flexDirection: 'column',paddingHorizontal:20}}>
                  <View style={{justifyContent: 'center',alignItems: 'center',paddingVertical:10}}>
                  <FontAwesome5 name="exchange-alt" size={24}/></View>
                  <Text style={{fontSize:15 ,fontWeight: 'bold'}}> Transfer</Text>
                </View>
              </View>
            </View>
            <Separator/>
              
            <StatusBar style="auto" />
            </View>
          </View>
    );
}

const styles = StyleSheet.create({  
    container: {
        // flex:1,
        backgroundColor: '#fff',
      },
      separator: {
        marginVertical:10,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
})

export default FTH_Page;
