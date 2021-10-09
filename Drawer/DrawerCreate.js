import React from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import{FontAwesome5} from 'react-native-vector-icons';
import {
  createDrawerNavigator
} from '@react-navigation/drawer';
//flags 
import Flag from 'react-native-flags';
// components 
import FlightScreen from '../Screens/FlightScreen';
import HotelsScreen from '../Screens/hotelsScreen';
import SignInScreen from '../Screens/SignInScreen';
import Transferscreen from '../Screens/TransferScreen';
import MyBookingScreen from '../Screens/MyBookingScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import SupportScreen from '../Screens/SupportScreen';
import DrawerContent from './DrawerContent';

// image
import Logo from '../assets/Travomint.png';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function LogoTitle() {
  return (
    <Image source={Logo} style={{width:150 , height:30,zIndex:999}} />
  );
}

function RightSideTitle() {
  return (
    <View style={{flexDirection: 'row' , marginTop:7 ,alignItems:'center',justifyContent: 'center', marginRight:10}}>
                    <TouchableOpacity>
                        <View style={{flexDirection: 'row', marginRight:10,}}>
                          <Text style={{border:'1px solid #000',paddingVertical:5,paddingHorizontal:5,borderBottomLeftRadius:50,borderTopLeftRadius:50}}>
                          <Flag
                          style={{marginTop:4}}
                             code="IN"
                             size={16}
                           />
                          </Text>
                          <Text style={{border:'1px solid #000',paddingVertical:5,paddingHorizontal:5,fontWeight:'bold'}}>
                            ₹IND
                            <FontAwesome5 name="chevron-down" size={15}/>
                          </Text>
                          <Text style={{border:'1px solid #000',paddingVertical:5,paddingHorizontal:5,borderBottomRightRadius:50,borderTopRightRadius:50}}>En</Text>
                        </View>
                        </TouchableOpacity>
                        {/* <View>
                          <TouchableOpacity>
                        <FontAwesome5
                          name='ellipsis-v' 
                          size={25} 
                          color='#000'/>
                          </TouchableOpacity>
                         </View> */}
                      </View>
  );
}

const Drawercreate = (props) => {
    return (
   
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Flights" 
        style={{position:'fixed'}}
              options={{
                headerTitle: (props) => <LogoTitle {...props}  /> ,
                headerRight: (props) => (<RightSideTitle {...props}/>
                )
                 }}
        component={FlightScreen} />



        <Drawer.Screen name="SignIns"
        style={{position:'fixed'}}
           options={{
            headerTitle: (props) => <LogoTitle {...props}  /> ,
            headerRight: (props) => (<RightSideTitle {...props}/>
            )
             }}
        component={SignInScreen} />


        
        <Drawer.Screen name="Hotels" 
        style={{position:'fixed'}}
          options={{
            headerTitle: (props) => <LogoTitle {...props}  /> ,
            headerRight: (props) => (<RightSideTitle {...props}/>
            )
             }}
        component={HotelsScreen} />
        <Drawer.Screen name="Transfers" 
          options={{
            headerTitle: (props) => <LogoTitle {...props}  /> ,
            headerRight: (props) => (<RightSideTitle {...props}/>
            )
             }}
        component={Transferscreen}/>
        <Drawer.Screen name="Registers"  
          options={{
            headerTitle: (props) => <LogoTitle {...props} /> ,
            headerRight: (props) => (<RightSideTitle {...props}/>
            )
             }}
        component={RegisterScreen} />
        <Drawer.Screen name="MyBookings" 
            options={{
              headerTitle: (props) => <LogoTitle {...props} /> ,
              headerRight: (props) => (<RightSideTitle {...props}/>
              )
               }}
        component={MyBookingScreen} />
        <Drawer.Screen name="Supports"  
          options={{
            headerTitle: (props) => <LogoTitle {...props} /> ,
            headerRight: (props) => (<RightSideTitle {...props}/>
            )
             }}
        component={SupportScreen}/>
      </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Drawercreate;
