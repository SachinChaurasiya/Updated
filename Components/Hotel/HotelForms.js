import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput,Button, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import{FontAwesome5} from 'react-native-vector-icons';
    const HotelForms = () => {

      const Separator = () => (
        <View style ={styles.separator}></View>
      )

      const [text, setChangeText] = useState("Distnation");
      const [CheckIn, setCheckIn] = useState('Check IN');
      const [CheckOut, setCheckOut] = useState('Check Out');
      const [Night, setNight] = useState('Nights');
      const [Room, setRoom] = useState('Room / Guest');

        return (
          <View style={styles.container}>
            <View style={{marginHorizontal:12}}>
            {/* Hotels room book  form  */}

          <View style={{marginBottom:30}}>
            <View>
            <TextInput
        style={styles.input}
        onChangeText={setChangeText}
        value={text}
      />
      <View style={{flexDirection:'row', width: '100%'}}>
      <TextInput
        style={{width:'40%', height: 40, margin: 12, borderWidth: 1,
        padding: 10,}}
        onChangeText={setCheckIn}
        value={CheckIn}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <TextInput
        style={{width:'40%', height: 40, margin: 12, borderWidth: 1,
        padding: 10,}}
        onChangeText={setCheckOut}
        value={CheckOut}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <TextInput
        style={{width:'20%', height: 40, margin: 12, borderWidth: 1,
        padding: 10,}}
        onChangeText={setNight}
        value={Night}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      </View>
      <View>
      <TextInput
        style={styles.input}
        onChangeText={setRoom}
        value={Room}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      </View>
      <View style={{marginHorizontal: 12,borderRadius:'30%'}}>
        <Button style={{borderRadius:'30%'}} color="#F15b2F" title="Search"/>
      </View>
            </View>
          </View>
            </View>
          </View>
        );
      }

      
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
    },
    separator: {
      marginVertical: 20,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });


export default  HotelForms;